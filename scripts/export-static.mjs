// Exportuje web do čistého statického HTML/CSS/JS pro GitHub Pages.
// Použití: bun run scripts/export-static.mjs   (dev server musí běžet na :8080)
import { mkdir, writeFile, rm, cp } from "node:fs/promises";
import { existsSync } from "node:fs";
import { execSync } from "node:child_process";
import path from "node:path";

const ORIGIN = process.env.EXPORT_ORIGIN ?? "http://localhost:8080";
const OUT = path.resolve("docs");

await rm(OUT, { recursive: true, force: true });
await mkdir(path.join(OUT, "images"), { recursive: true });
await mkdir(path.join(OUT, "videos"), { recursive: true });
await mkdir(path.join(OUT, "assets"), { recursive: true });

// 1) Tailwind CSS build (produkční, bez node.js na hostingu)
execSync(
  `bunx @tailwindcss/cli -i src/styles.css -o ${path.join(OUT, "assets/styles.css")} --minify`,
  { stdio: "inherit" },
);

const pages = [
  { route: "/", file: "index.html", depth: 0, lang: "cs", isFallback: true },
  { route: "/ukrajina", file: "ukrajina/index.html", depth: 1, lang: "cs", isFallback: false },
  { route: "/en", file: "en/index.html", depth: 1, lang: "en", isFallback: false },
  { route: "/en/ukrajina", file: "en/ukrajina/index.html", depth: 2, lang: "en", isFallback: false },
];

// Absolutní cesty rout -> relativní cíle ve statickém výstupu
const routeTargets = {
  "/": "",
  "/ukrajina": "ukrajina/",
  "/en": "en/",
  "/en/ukrajina": "en/ukrajina/",
};

const relPrefix = (depth) => (depth === 0 ? "" : "../".repeat(depth));
const stripLeadingSlash = (url) => url.replace(/^\//, "");

const copiedAssets = new Set();

async function copyAsset(url) {
  if (copiedAssets.has(url)) return;
  copiedAssets.add(url);
  const name = url.split("/").pop();
  const local = path.join("public", url);
  const target = path.join(OUT, stripLeadingSlash(url));
  await mkdir(path.dirname(target), { recursive: true });
  if (existsSync(local)) {
    await cp(local, target);
  } else {
    const res = await fetch(ORIGIN + url);
    const buf = Buffer.from(await res.arrayBuffer());
    if (!res.ok || buf.length < 1024) {
      throw new Error(
        `Asset ${name} se nepodařilo získat (přidej ho do public/images/ nebo public/videos/).`,
      );
    }
    await writeFile(target, buf);
  }
}

async function exportPage({ route, file, depth, lang, isFallback }) {
  let html = await fetch(`${ORIGIN}${route}`).then((r) => r.text());

  // 2) Lokální assety – obrázky a videa primárně z repozitáře (public/), jinak z dev serveru
  const assetUrls = [
    ...new Set(
      [...html.matchAll(/\/(?:__l5e\/[^"'\s)\\]+|images\/[^"'\s)\\]+|videos\/[^"'\s)\\]+)/g)].map(
        (m) => m[0],
      ),
    ),
  ];
  for (const url of assetUrls) {
    await copyAsset(url);
  }

  // 3) Odstranit dev/SSR runtime a nahradit styly
  html = html
    .replace(/<script\b(?![^>]*application\/ld\+json)[\s\S]*?<\/script>/g, "")
    .replace(/<link[^>]*(?:\/src\/styles\.css|@tanstack-start\/styles\.css|modulepreload)[^>]*>/g, "")
    .replace(/ data-precedence="[^"]*"/g, "")
    .replace(/<!--\$?-->|<!--\/\$-->|<!--\$!-->/g, "")
    .replace(/<html lang="[a-z-]+"/, `<html lang="${lang}"`)
    .replace(/href="\/favicon\.svg"/g, `href="${relPrefix(depth)}favicon.svg"`);

  // Odkazy na interní routy -> relativní cesty (delší cesty první)
  for (const [routePath, target] of Object.entries(routeTargets).sort(
    (a, b) => b[0].length - a[0].length,
  )) {
    const rel = relPrefix(depth) + target;
    html = html.replaceAll(`href="${routePath}"`, `href="${rel || "./"}"`);
  }

  for (const url of assetUrls) {
    html = html.replaceAll(url, relPrefix(depth) + stripLeadingSlash(url));
  }

  html = html.replace(
    "</head>",
    `<link rel="stylesheet" href="${relPrefix(depth)}assets/styles.css"/>\n</head>`,
  );

  if (html.includes("data-lightbox")) {
    html = html.replace(
      "</body>",
      `<script src="${relPrefix(depth)}assets/gallery.js" defer></script>\n</body>`,
    );
  }

  const outPath = path.join(OUT, file);
  await mkdir(path.dirname(outPath), { recursive: true });
  await writeFile(outPath, html);

  if (isFallback) {
    await writeFile(path.join(OUT, ".nojekyll"), "");
    await writeFile(path.join(OUT, "404.html"), html);
    if (existsSync("public/robots.txt")) await cp("public/robots.txt", path.join(OUT, "robots.txt"));
    if (existsSync("public/favicon.svg")) {
      await cp("public/favicon.svg", path.join(OUT, "favicon.svg"));
    }
  }

  return assetUrls.length;
}

// 4) Lightbox v čistém JS (nahrazuje React chování galerie)
const gallery = `document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector("[data-lightbox]");
  if (!grid) return;
  const buttons = [...grid.querySelectorAll("button")];
  const photos = buttons.map((b) => {
    const img = b.querySelector("img");
    return { src: img.getAttribute("src"), alt: img.getAttribute("alt") || "" };
  });
  if (!photos.length) return;
  let index = null;
  const overlay = document.createElement("div");
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-label", grid.dataset.dialogLabel || "Fotogalerie");
  overlay.hidden = true;
  overlay.className = "fixed inset-0 z-100 flex items-center justify-center bg-forest/95 p-4 backdrop-blur-sm";
  overlay.innerHTML = \`<figure class="max-h-full max-w-5xl"><img alt="" class="max-h-[80vh] w-auto rounded-xl object-contain"/><figcaption class="mt-4 flex items-center justify-between text-sm text-oat/70"><span data-caption></span><span data-count class="tabular-nums"></span></figcaption></figure><button type="button" data-close class="absolute top-6 right-6 rounded-full bg-oat/10 px-4 py-2 text-sm text-oat ring-1 ring-oat/20 transition-colors hover:bg-oat/20">${closeLabel}</button>\`;
  document.body.appendChild(overlay);
  const img = overlay.querySelector("img");
  const caption = overlay.querySelector("[data-caption]");
  const count = overlay.querySelector("[data-count]");
  const show = (i) => {
    index = (i + photos.length) % photos.length;
    img.src = photos[index].src;
    img.alt = photos[index].alt;
    caption.textContent = photos[index].alt;
    count.textContent = index + 1 + " / " + photos.length;
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    index = null;
    overlay.hidden = true;
    document.body.style.overflow = "";
  };
  buttons.forEach((b, i) => b.addEventListener("click", () => show(i)));
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay || e.target.closest("[data-close]")) close();
  });
  document.addEventListener("keydown", (e) => {
    if (index === null) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight") show(index + 1);
    if (e.key === "ArrowLeft") show(index - 1);
  });
});
`;

let totalAssets = 0;
for (const page of pages) {
  totalAssets += await exportPage(page);
}

await writeFile(path.join(OUT, "assets/gallery.js"), gallery);

console.log(`Hotovo: ${OUT} (${totalAssets} assetů)`);
