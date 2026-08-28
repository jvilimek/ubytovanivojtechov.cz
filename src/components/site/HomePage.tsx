import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { Gallery } from "@/components/site/Gallery";
import { BOOKING_URL, content, type AmenityId, type Lang } from "@/content/site";
import { localizedGalleryPhotos, photoByRole } from "@/lib/photos";

const heroPhoto = photoByRole("hero");
const livingPhoto = photoByRole("living");
const surroundingsPhoto = photoByRole("surroundings");

const AMENITY_ICONS: Record<AmenityId, ReactNode> = {
  apartment: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75"
    />
  ),
  fireplace: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
    />
  ),
  kitchen: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 7h14v10H5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 7v10M14 7v10M5 11h14" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 9h2M15.5 11h2M15.5 13h2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 14h4" />
    </>
  ),
  grill: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21a9 9 0 006.72-15A8.25 8.25 0 0112 21zm0 0a9 9 0 01-6.72-15A8.25 8.25 0 0012 21z"
    />
  ),
  family: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75h.008v.008H9.75V9.75zm4.5 0h.008v.008h-.008V9.75z"
    />
  ),
  wifi: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
    />
  ),
  sauna: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
    />
  ),
  pub: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    </>
  ),
};

const AMENITY_ORDER: AmenityId[] = [
  "apartment",
  "fireplace",
  "kitchen",
  "grill",
  "family",
  "wifi",
  "sauna",
  "pub",
];

export function HomePage({ lang }: { lang: Lang }) {
  const t = content[lang];
  const galleryItems = localizedGalleryPhotos(lang);

  return (
    <div className="min-h-screen bg-oat text-forest">
      <nav className="fixed top-0 z-50 w-full border-b border-border bg-oat/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-6">
          <a
            href="#top"
            className="flex items-center gap-3 text-sm font-semibold tracking-[0.18em] uppercase whitespace-nowrap"
          >
            <img
              src="/images/logo.png"
              alt="Logo Dvůr u Špraňku"
              className="h-9 w-auto shrink-0"
            />
            Dvůr u Špraňku
          </a>
          <div className="hidden gap-8 text-sm font-medium text-forest/70 lg:flex">
            {t.nav.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-forest">
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Link
              to={t.otherLang.to}
              className="text-xs font-semibold tracking-[0.14em] text-forest/60 uppercase transition-colors hover:text-forest"
              hrefLang={t.otherLang.code}
            >
              {t.otherLang.code === "en" ? "EN" : "CZ"}
              <span className="sr-only"> — {t.otherLang.label}</span>
            </Link>
          </div>
        </div>
      </nav>

      <header id="top" className="relative flex h-[90vh] items-end overflow-hidden pb-24">
        <div className="absolute inset-0 z-0">
          <video
            className="hero-video h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={heroPhoto.url}
            aria-label={t.hero.alt}
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          <img
            src={heroPhoto.url}
            alt={t.hero.alt}
            className="hero-poster slow-zoom h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/30 to-forest/10" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-screen-xl px-6">
          <div className="reveal max-w-[32ch]">
            <p className="mb-6 text-xs font-medium tracking-[0.22em] text-oat/80 uppercase">
              {t.hero.eyebrow}
            </p>
            <h1 className="mb-8 text-4xl leading-tight font-medium tracking-tight text-balance text-oat md:text-6xl">
              {t.hero.title}
            </h1>
            <p className="mb-10 max-w-[42ch] text-lg text-pretty text-oat/90">{t.hero.text}</p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-full bg-clay px-8 py-4 text-sm font-medium text-forest transition-transform hover:brightness-105 active:scale-95"
            >
              {t.bookStay}
            </a>
          </div>
        </div>
      </header>

      <section id="apartman" className="bg-oat py-24">
        <div className="mx-auto max-w-screen-xl px-6">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <img
                src={livingPhoto.url}
                alt={t.apartment.photoAlt}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-xl object-cover ring-1 ring-border"
              />
            </div>
            <div className="pt-4 lg:col-span-5">
              <span className="mb-4 block text-sm font-medium tracking-[0.18em] text-clay uppercase">
                {t.apartment.eyebrow}
              </span>
              <h2 className="mb-6 text-3xl font-medium tracking-tight text-balance">
                {t.apartment.title}
              </h2>
              <p className="mb-8 max-w-[48ch] text-base text-pretty text-forest/80">
                {t.apartment.text}
              </p>
              <ul className="mb-10 grid grid-cols-2 gap-x-8 gap-y-4">
                {t.apartment.features.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-sage" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#galerie"
                className="inline-flex items-center gap-2 border-b border-forest/20 py-2 text-sm font-medium transition-colors hover:border-forest"
              >
                {t.apartment.galleryLink}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="spanek" className="bg-forest py-24 text-oat">
        <div className="mx-auto max-w-screen-xl px-6">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="mb-4 block text-sm font-medium tracking-[0.18em] text-clay uppercase">
                {t.sleep.eyebrow}
              </span>
              <h2 className="mb-6 text-3xl font-medium tracking-tight text-balance md:text-4xl">
                {t.sleep.title}
              </h2>
              <div className="space-y-5 text-base text-pretty text-oat/80">
                {t.sleep.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center lg:col-span-5">
              <ul className="divide-y divide-oat/15">
                {t.sleepHighlights.map((item) => (
                  <li key={item.title} className="py-6">
                    <h3 className="mb-1 text-base font-medium">{item.title}</h3>
                    <p className="text-sm text-oat/60">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-12">
        <div className="mx-auto max-w-screen-xl px-6">
          <div className="flex flex-col items-center justify-between gap-8 rounded-3xl bg-oat/60 p-8 ring-1 ring-border md:flex-row md:p-12">
            <div className="max-w-[46ch]">
              <h3 className="mb-2 text-xl font-medium tracking-tight">{t.second.title}</h3>
              <p className="text-sm text-pretty text-forest/60">{t.second.text}</p>
            </div>
            <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-2xl bg-sage/10">
              <span className="text-xs font-semibold tracking-[0.18em] text-sage uppercase">
                {t.second.badge}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="galerie" className="bg-oat py-24">
        <div className="mx-auto max-w-screen-xl px-6">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-medium tracking-tight">{t.gallery.title}</h2>
            <p className="max-w-[56ch] text-pretty text-forest/60">{t.gallery.text}</p>
          </div>
          <Gallery photos={galleryItems} labels={t.gallery} />
        </div>
      </section>

      <section id="vybaveni" className="bg-oat pb-24">
        <div className="mx-auto max-w-screen-xl px-6">
          <div className="mb-16">
            <h2 className="mb-4 text-3xl font-medium tracking-tight">{t.amenities.title}</h2>
            <p className="max-w-[56ch] text-pretty text-forest/60">{t.amenities.text}</p>
          </div>
          <div className="grid grid-cols-2 gap-px bg-forest/5 md:grid-cols-4">
            {AMENITY_ORDER.map((id) => (
              <div key={id} className="bg-oat p-8">
                <div className="mb-6 flex h-8 w-8 items-center justify-center rounded-lg bg-sage/10">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="h-4 w-4 shrink-0 text-sage"
                    aria-hidden="true"
                  >
                    {AMENITY_ICONS[id]}
                  </svg>
                </div>
                <h3 className="mb-2 text-sm font-medium">{t.amenities.items[id].title}</h3>
                <p className="text-xs text-forest/60">{t.amenities.items[id].text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-forest/50">{t.amenities.note}</p>
        </div>
      </section>

      <section id="okoli" className="bg-oat py-24">
        <div className="mx-auto max-w-screen-xl px-6">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <h2 className="mb-8 text-3xl font-medium tracking-tight text-balance">
                {t.nearbyIntro.title}
              </h2>
              <p className="mb-12 max-w-[48ch] text-base text-pretty text-forest/70">
                {t.nearbyIntro.text}
              </p>
              <img
                src={surroundingsPhoto.url}
                alt={t.nearbyIntro.photoAlt}
                loading="lazy"
                className="aspect-video w-full rounded-xl object-cover ring-1 ring-border"
              />
            </div>
            <div className="flex flex-col justify-center">
              <ul className="divide-y divide-border">
                {t.nearby.map((place) => (
                  <li key={place.name} className="group flex items-baseline justify-between py-6">
                    <div>
                      <a
                        href={place.url}
                        target="_blank"
                        rel="noreferrer"
                        className="block font-medium underline-offset-4 transition-colors group-hover:text-clay hover:underline"
                      >
                        {place.name}
                      </a>
                      <span className="text-xs text-forest/50">{place.note}</span>
                    </div>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&origin=49.65151,16.90737&destination=${encodeURIComponent(place.name)}&travelmode=${place.mode}`}
                      target="_blank"
                      rel="noreferrer"
                      title={t.nearbyIntro.routeTitle}
                      className="ml-4 flex shrink-0 items-center gap-1.5 text-sm text-forest/40 tabular-nums transition-colors hover:text-clay"
                    >
                      {place.dist}
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.8}
                        stroke="currentColor"
                        className="h-3.5 w-3.5"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer id="kontakt" className="bg-forest py-24 text-oat/90">
        <div className="mx-auto max-w-screen-xl px-6">
          <div className="grid items-start gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <h2 className="mb-12 text-4xl font-medium tracking-tight text-oat">
                {t.contact.title}
              </h2>
              <div className="space-y-8">
                <div>
                  <span className="mb-2 block text-xs tracking-[0.18em] text-sage uppercase">
                    {t.contact.addressLabel}
                  </span>
                  <address className="text-lg not-italic">{t.contact.address}</address>
                  <a
                    href="https://mapy.cz/zakladni?q=49.65151N%2C16.90737E"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-sm text-oat/60 underline underline-offset-4 transition-colors hover:text-oat"
                  >
                    {t.contact.gps}
                  </a>
                </div>
                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <span className="mb-2 block text-xs tracking-[0.18em] text-sage uppercase">
                      {t.contact.phoneLabel}
                    </span>
                    <a href="tel:+420728844123" className="transition-colors hover:text-oat">
                      +420 728 844 123
                    </a>
                  </div>
                  <div>
                    <span className="mb-2 block text-xs tracking-[0.18em] text-sage uppercase">
                      {t.contact.emailLabel}
                    </span>
                    <a
                      href="mailto:rezervace@ubytovanivojtechov.cz"
                      className="break-all transition-colors hover:text-oat"
                    >
                      rezervace@ubytovanivojtechov.cz
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 md:p-12">
              <h3 className="mb-8 text-xl font-medium text-oat">{t.contact.infoTitle}</h3>
              <dl className="space-y-6 text-sm">
                {t.contact.rows.map((row) => (
                  <div
                    key={row.label}
                    className="flex justify-between gap-6 border-b border-white/10 pb-4"
                  >
                    <dt className="text-sage">{row.label}</dt>
                    <dd className="text-right">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-12 block w-full rounded-xl bg-clay py-4 text-center font-medium text-forest shadow-lg shadow-black/20 transition-colors hover:brightness-105"
              >
                {t.bookBooking}
              </a>
            </div>
          </div>
          <div className="mt-24 border-t border-white/10 pt-8">
            <div className="flex flex-col flex-wrap items-start justify-between gap-4 md:flex-row md:items-center">
              <p className="max-w-[52ch] text-xs leading-relaxed text-oat/60">
                <Link to={t.ukrajinaPath} className="transition-colors hover:text-oat">
                  {t.ukraineFooter}
                </Link>
              </p>
              <div className="hidden flex-wrap gap-6 text-xs text-oat/60 md:flex">
                {t.donations.map((d) => (
                  <a
                    key={d.url}
                    href={d.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="transition-colors hover:text-oat"
                  >
                    {d.short}
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-8 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-xs text-oat/40 md:flex-row">
              <p>© {new Date().getFullYear()} Dvůr u Špraňku · Ubytování Vojtěchov</p>
              <div className="flex gap-8">
                <a
                  href="https://www.facebook.com/ubytovanivojtechov"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-oat"
                >
                  Facebook
                </a>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-oat"
                >
                  Booking.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
