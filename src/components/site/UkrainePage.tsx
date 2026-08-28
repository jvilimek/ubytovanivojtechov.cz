import { Link } from "@tanstack/react-router";

import { content, type Lang } from "@/content/site";

export function UkrainePage({ lang }: { lang: Lang }) {
  const t = content[lang];
  const p = t.ukrainePage;

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
            to={t.homePath}
            className="flex items-center gap-3 text-sm font-semibold tracking-[0.18em] uppercase whitespace-nowrap"
          >
            <img src="/images/logo.png" alt="Logo Dvůr u Špraňku" className="h-9 w-auto shrink-0" />
            Dvůr u Špraňku
          </Link>
          <Link
            to={lang === "cs" ? "/en/ukrajina" : "/ukrajina"}
            hrefLang={t.otherLang.code}
            className="text-xs font-semibold tracking-[0.14em] text-forest/60 uppercase transition-colors hover:text-forest"
          >
            {t.otherLang.code === "en" ? "EN" : "CZ"}
          </Link>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-screen-xl px-6 py-16 md:py-24">
        <Link
          to={t.homePath}
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-forest/70 transition-colors hover:text-forest"
        >
          {p.back}
        </Link>

        <h1 className="mb-8 text-3xl font-medium tracking-tight text-balance md:text-5xl">
          {p.title}
        </h1>

        <div className="max-w-[66ch] space-y-6 text-base text-pretty text-forest/80">
          {p.paragraphs.map((text, i) => (
            <p key={text.slice(0, 24)} className={i === 0 ? "text-lg" : undefined}>
              {text}
            </p>
          ))}
        </div>

        <h2 className="mt-14 mb-6 text-2xl font-medium tracking-tight">{p.helpTitle}</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {t.donations.map((link) => (
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

        <p className="mt-12 max-w-[66ch] text-sm text-forest/60">{p.thanks}</p>
      </main>

      <footer className="relative z-10 bg-forest py-12 text-oat/90">
        <div className="mx-auto max-w-screen-xl px-6">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
            <p className="text-sm">© {new Date().getFullYear()} Dvůr u Špraňku</p>
            <Link to={t.homePath} className="text-sm text-oat/70 transition-colors hover:text-oat">
              {p.backFooter}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
