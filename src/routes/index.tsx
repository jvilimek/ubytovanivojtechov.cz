import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "@/components/site/HomePage";
import { SITE_ORIGIN, content } from "@/content/site";

const t = content.cs;

export const Route = createFileRoute("/")({
  component: () => <HomePage lang="cs" />,
  head: () => ({
    meta: [
      { title: t.meta.title },
      { name: "description", content: t.meta.description },
      { property: "og:title", content: t.meta.title },
      { property: "og:description", content: t.meta.ogDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_ORIGIN}/` },
      { property: "og:locale", content: "cs_CZ" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: `${SITE_ORIGIN}/` },
      { rel: "alternate", hrefLang: "cs", href: `${SITE_ORIGIN}/` },
      { rel: "alternate", hrefLang: "en", href: `${SITE_ORIGIN}/en` },
      { rel: "alternate", hrefLang: "x-default", href: `${SITE_ORIGIN}/` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Apartment",
          name: "Dvůr u Špraňku",
          description:
            "Apartmán pro 6 osob v citlivě zrekonstruovaném statku ve Vojtěchově u Hvozdu.",
          numberOfBedrooms: 2,
          occupancy: { "@type": "QuantitativeValue", maxValue: 6 },
          floorSize: { "@type": "QuantitativeValue", value: 50, unitCode: "MTK" },
          telephone: "+420728844123",
          email: "rezervace@ubytovanivojtechov.cz",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Vojtěchov 7",
            postalCode: "798 55",
            addressLocality: "Hvozd",
            addressCountry: "CZ",
          },
          geo: { "@type": "GeoCoordinates", latitude: 49.65151, longitude: 16.90737 },
        }),
      },
    ],
  }),
});
