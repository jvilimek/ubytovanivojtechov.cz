import { createFileRoute } from "@tanstack/react-router";

import { UkrainePage } from "@/components/site/UkrainePage";
import { SITE_ORIGIN, content } from "@/content/site";

const p = content.en.ukrainePage;

export const Route = createFileRoute("/en/ukrajina")({
  component: () => <UkrainePage lang="en" />,
  head: () => ({
    meta: [
      { title: p.metaTitle },
      { name: "description", content: p.metaDescription },
      { property: "og:title", content: p.metaTitle },
      { property: "og:description", content: p.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_ORIGIN}/en/ukrajina` },
      { property: "og:locale", content: "en_GB" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "canonical", href: `${SITE_ORIGIN}/en/ukrajina` },
      { rel: "alternate", hrefLang: "cs", href: `${SITE_ORIGIN}/ukrajina` },
      { rel: "alternate", hrefLang: "en", href: `${SITE_ORIGIN}/en/ukrajina` },
    ],
  }),
});
