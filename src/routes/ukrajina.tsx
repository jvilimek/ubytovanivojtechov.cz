import { createFileRoute } from "@tanstack/react-router";

import { UkrainePage } from "@/components/site/UkrainePage";
import { SITE_ORIGIN, content } from "@/content/site";

const p = content.cs.ukrainePage;

export const Route = createFileRoute("/ukrajina")({
  component: () => <UkrainePage lang="cs" />,
  head: () => ({
    meta: [
      { title: p.metaTitle },
      { name: "description", content: p.metaDescription },
      { property: "og:title", content: p.metaTitle },
      { property: "og:description", content: p.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_ORIGIN}/ukrajina` },
      { property: "og:locale", content: "cs_CZ" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "canonical", href: `${SITE_ORIGIN}/ukrajina` },
      { rel: "alternate", hrefLang: "cs", href: `${SITE_ORIGIN}/ukrajina` },
      { rel: "alternate", hrefLang: "en", href: `${SITE_ORIGIN}/en/ukrajina` },
    ],
  }),
});
