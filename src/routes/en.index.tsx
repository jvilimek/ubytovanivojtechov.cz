import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "@/components/site/HomePage";
import { SITE_ORIGIN, content } from "@/content/site";

const t = content.en;

export const Route = createFileRoute("/en/")({
  component: () => <HomePage lang="en" />,
  head: () => ({
    meta: [
      { title: t.meta.title },
      { name: "description", content: t.meta.description },
      { property: "og:title", content: t.meta.title },
      { property: "og:description", content: t.meta.ogDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_ORIGIN}/en` },
      { property: "og:locale", content: "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: `${SITE_ORIGIN}/en` },
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
            "Apartment for 6 guests in a carefully restored farmstead in Vojtěchov, Moravia.",
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
