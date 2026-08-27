import { createFileRoute, Link } from "@tanstack/react-router";

const DONATION_LINKS = [
  {
    url: "https://eshop.proukrajinu.org/",
    label: "Dárek pro Putina",
    desc: "Nákup potřebného materiálního vybavení pro ukrajinskou armádu a civilní sektor.",
  },
  {
    url: "https://donio.cz/spolecne-za-svobodnou-ukrajinou",
    label: "Donio — Společně za svobodnou Ukrajinu",
    desc: "Finanční sbírka podporující obranu a obnovu postižených oblastí.",
  },
  {
    url: "https://www.darujme.cz/projekt/1205934",
    label: "Projekty Paměti národa",
    desc: "Cílená finanční pomoc konkrétnímu projektu na podporu Ukrajiny.",
  },
];

export const Route = createFileRoute("/ukrajina")({
  component: UkrajinaPage,
  head: () => ({
    meta: [
      { title: "Podporujeme Ukrajinu v jejím boji za svobodu — Dvůr u Špraňku" },
      {
        name: "description",
        content:
          "Dvůr u Špraňku odsuzuje ruskou agresi na Ukrajině. Přispějte na její obranu a obnovu prostřednictvím ověřených sbírek.",
      },
      {
        property: "og:title",
        content: "Podporujeme Ukrajinu v jejím boji za svobodu — Dvůr u Špraňku",
      },
      {
        property: "og:description",
        content: "Odsuzujeme ruskou agresi na Ukrajině. Přispějte na obranu a obnovu.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/ukrajina" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/ukrajina" }],
  }),
});

function UkrajinaPage() {
  return (
    <div className="relative min-h-screen text-forest">
      <div className="pointer-events-none fixed inset-0 bg-oat" aria-hidden="true" />
      <div
        className="pointer-events-none fixed inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: "url(/images/ukrajina-bg.jpg)" }}
        aria-hidden="true"
      />
      <div className="pointer-events-none fixed inset-0 bg-oat/35" aria-hidden="true" />
      <header className="relative z-10 border-b border-border bg-oat/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-6">
          <Link
            to="/"
            className="flex items-center gap-3 text-sm font-semibold tracking-[0.18em] uppercase whitespace-nowrap"
          >
            <img
              src="/images/logo.png"
              alt="Logo Dvůr u Špraňku"
              className="h-9 w-auto shrink-0"
            />
            Dvůr u Špraňku
          </Link>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-screen-xl px-6 py-16 md:py-24">



        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-forest/70 transition-colors hover:text-forest"
        >
          ← Zpět na hlavní stránku
        </Link>

        <h1 className="mb-8 text-3xl font-medium tracking-tight text-balance md:text-5xl">
          Podporujeme Ukrajinu v jejím boji za svobodu
        </h1>

        <div className="max-w-[66ch] space-y-6 text-base text-pretty text-forest/80">
          <p className="text-lg">
            Jako provozovatelé ubytování Dvůr u Špraňku jednoznačně odsuzujeme ruskou vojenskou
            agresi na Ukrajině, která přináší utrpení ukrajinskému národu. Na straně
            pravdy a lidské důstojnosti stojí ukrajinský lid, který brání svou vlast, svobodu a
            mírovou budoucnost.
          </p>
          <p>
            Věříme, že každá pomoc má smysl — ať už finanční, materiální nebo morální. Proto
            podporujeme ověřené organizace a sbírky, které pomáhají přímo na místě. Pokud můžete,
            přispějte na obranu Ukrajiny, na pomoc jejím občanům a na obnovu zničených oblastí.
          </p>
        </div>

        <h2 className="mb-6 mt-14 text-2xl font-medium tracking-tight">Kde můžete pomoci</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {DONATION_LINKS.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer noopener"
              className="group rounded-2xl bg-paper p-6 ring-1 ring-border transition-shadow hover:shadow-md"
            >
              <h3 className="mb-3 text-lg font-medium transition-colors group-hover:text-clay">
                {link.label}
              </h3>
              <p className="text-sm text-forest/70">{link.desc}</p>
            </a>
          ))}
        </div>

        <p className="mt-12 max-w-[66ch] text-sm text-forest/60">
          Děkujeme, že stojíte na straně svobody. Слава Україні! Героям слава!
        </p>
      </main>

      <footer className="relative z-10 bg-forest py-12 text-oat/90">
        <div className="mx-auto max-w-screen-xl px-6">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
            <p className="text-sm">© {new Date().getFullYear()} Dvůr u Špraňku</p>
            <Link
              to="/"
              className="text-sm text-oat/70 transition-colors hover:text-oat"
            >
              Zpět na hlavní stránku
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
