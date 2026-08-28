import type { ReactNode } from "react";

export type Lang = "cs" | "en";

export const BOOKING_URL = "https://www.booking.com/hotel/cz/dvur-u-spranku.html";
export const HOSTINEC_URL = "https://maps.app.goo.gl/vWJCwptwfHzEFSRy8";
export const SITE_ORIGIN = "https://ubytovanivojtechov.cz";

export type AmenityId =
  | "apartment"
  | "fireplace"
  | "kitchen"
  | "grill"
  | "family"
  | "wifi"
  | "sauna"
  | "pub";

export type NearbyPlace = {
  name: string;
  note: string;
  dist: string;
  url: string;
  mode: "walking" | "driving";
};

export type SiteContent = {
  htmlLang: string;
  otherLang: { code: Lang; label: string; to: "/" | "/en" };
  homePath: "/" | "/en";
  ukrajinaPath: "/ukrajina" | "/en/ukrajina";
  meta: {
    title: string;
    description: string;
    ogDescription: string;
  };
  nav: { href: string; label: string }[];
  book: string;
  bookStay: string;
  bookBooking: string;
  hero: { eyebrow: string; title: string; text: string; alt: string };
  apartment: {
    eyebrow: string;
    title: string;
    text: string;
    features: string[];
    galleryLink: string;
    photoAlt: string;
  };
  sleep: { eyebrow: string; title: string; paragraphs: string[] };
  sleepHighlights: { title: string; text: string }[];
  second: { title: string; text: string; badge: string };
  gallery: { title: string; text: string; zoom: string; close: string; dialog: string };
  amenities: { title: string; text: string; items: Record<AmenityId, { title: string; text: ReactNode }>; note: string };
  nearbyIntro: { title: string; text: string; photoAlt: string; routeTitle: string };
  nearby: NearbyPlace[];
  contact: {
    title: string;
    addressLabel: string;
    address: ReactNode;
    gps: string;
    phoneLabel: string;
    emailLabel: string;
    infoTitle: string;
    rows: { label: string; value: string }[];
  };
  ukraineFooter: string;
  donations: { url: string; label: string; short: string; desc: string }[];
  ukrainePage: {
    metaTitle: string;
    metaDescription: string;
    back: string;
    title: string;
    paragraphs: string[];
    helpTitle: string;
    thanks: string;
    backFooter: string;
  };
};

const DONATIONS_CS = [
  {
    url: "https://eshop.proukrajinu.org/",
    label: "Dárek pro Putina",
    short: "Dárek pro Putina",
    desc: "Nákup potřebného materiálního vybavení pro ukrajinskou armádu a civilní sektor.",
  },
  {
    url: "https://donio.cz/spolecne-za-svobodnou-ukrajinou",
    label: "Donio — Společně za svobodnou Ukrajinu",
    short: "Svobodná Ukrajina",
    desc: "Finanční sbírka podporující obranu a obnovu postižených oblastí.",
  },
  {
    url: "https://www.darujme.cz/projekt/1205934",
    label: "Projekty Paměti národa",
    short: "Projekty Paměti národa",
    desc: "Cílená finanční pomoc konkrétnímu projektu na podporu Ukrajiny.",
  },
];

const DONATIONS_EN = [
  {
    url: "https://eshop.proukrajinu.org/",
    label: "A Gift for Putin",
    short: "A Gift for Putin",
    desc: "Buys essential material equipment for the Ukrainian army and the civilian sector.",
  },
  {
    url: "https://donio.cz/spolecne-za-svobodnou-ukrajinou",
    label: "Donio — Together for a Free Ukraine",
    short: "Free Ukraine",
    desc: "A fundraiser supporting the defence and reconstruction of affected regions.",
  },
  {
    url: "https://www.darujme.cz/projekt/1205934",
    label: "Memory of Nations projects",
    short: "Memory of Nations",
    desc: "Targeted financial help for a specific project supporting Ukraine.",
  },
];

const cs: SiteContent = {
  htmlLang: "cs",
  otherLang: { code: "en", label: "English", to: "/en" },
  homePath: "/",
  ukrajinaPath: "/ukrajina",
  meta: {
    title: "Dvůr u Špraňku, obec Vojtěchov 7, Hvozd",
    description:
      "Apartmány v bývalém statku ve Vojtěchově. Krb, vybavená kuchyň, terasa a zahrada, klid Zábřežské vrchoviny na Hané. Rezervujte pobyt.",
    ogDescription:
      "Autentické ubytování v citlivě zrekonstruovaném statku na pomezí přírodního parku Kladecko, v blízkosti naučné stezky Špraněk a přírodní památky Taramka. Oblast spadá pod Zábřežskou vrchovinu.",
  },
  nav: [
    { href: "#apartman", label: "Apartmán" },
    { href: "#spanek", label: "Sleep retreat" },
    { href: "#galerie", label: "Fotogalerie" },
    { href: "#vybaveni", label: "Vybavení" },
    { href: "#okoli", label: "Okolí" },
    { href: "#kontakt", label: "Kontakt" },
  ],
  book: "Rezervovat",
  bookStay: "Rezervovat pobyt",
  bookBooking: "Rezervovat přes Booking.com",
  hero: {
    eyebrow: "Vojtěchov u Hvozdu · Haná",
    title: "Klid a pohoda na bývalém statku.",
    text: "Autentické ubytování v citlivě zrekonstruovaném statku, kde se čas zastavil mezi vůní dřeva a šuměním potoka Špraněk.",
    alt: "Statek Dvůr u Špraňku ve Vojtěchově",
  },
  apartment: {
    eyebrow: "Hlavní apartmán",
    title: "Prostor pro společné chvíle",
    text: "Velkorysý apartmán o rozloze cca 50 m² nabízí zázemí pro rodinu i přátele. Dvě ložnice s manželskou postelí, obývací pokoj s krbem a koženou pohovkou s integrovanou postelí. Ložní prádlo i úklid jsou v ceně.",
    features: [
      "6 lůžek, 2 ložnice",
      "Krb na dřevo",
      "Vybavená kuchyň a jídelna",
      "Terasa a zahrada",
      "Uzavřený dvůr, parkování",
      "Hrací koutek pro děti",
    ],
    galleryLink: "Prohlédnout fotogalerii",
    photoAlt: "Obývací pokoj apartmánu s krbem a jídelním stolem",
  },
  sleep: {
    eyebrow: "Sleep retreat",
    title: "Zažijte dokonalý sleep retreat: místo, kde se konečně hluboce vyspíte",
    paragraphs: [
      "Trpíte spánkovým dluhem z rychlého městského života? Náš penzion jsme proměnili v oázu pro všechny, kdo hledají stoprocentní klid a nepřerušovaný spánek až do pozdního rána.",
      "Unikátní atmosféra starého domu s tlustými kamennými zdmi funguje jako přirozený štít proti hluku moderní doby – zažijete u nás absolutní ticho, které jinde nenajdete. V pokojích na vás čekají pečlivě vybrané, zdravě tvrdé a přitom maximálně pohodlné matrace, které unavenému tělu poskytnou dokonalou oporu.",
      "Naši hosté se shodují v jednom: takhle fantasticky a hluboce se už dlouho nikde nevyspali. Přijeďte si k nám pro ten nejlepší spánek svého života.",
    ],
  },
  sleepHighlights: [
    { title: "Absolutní ticho", text: "Tlusté kamenné zdi a klidná náves bez dopravy." },
    {
      title: "Zdravě tvrdé matrace",
      text: "Pečlivě vybrané matrace s dokonalou oporou pro unavené tělo.",
    },
    {
      title: "Spánek do pozdního rána",
      text: "Žádné budíčky ani spěch — vstáváte, až se sami probudíte.",
    },
    { title: "Temno a čerstvý vzduch", text: "Zatemnění v ložnicích a vzduch z okolních lesů." },
  ],
  second: {
    title: "Připravujeme druhý apartmán",
    text: "V další části statku právě dokončujeme druhý apartmán ve stejném duchu. Brzy tak budeme moci přivítat i větší společnosti a dvě rodiny současně.",
    badge: "Brzy",
  },
  gallery: {
    title: "Fotogalerie",
    text: "Podívejte se dovnitř — obývací pokoj s krbem, ložnice, kuchyň i koupelna.",
    zoom: "Zvětšit fotografii",
    close: "Zavřít",
    dialog: "Fotogalerie",
  },
  amenities: {
    title: "Vše, co potřebujete",
    text: "Vytvořili jsme zázemí, kde se snoubí historie venkova s moderním komfortem.",
    items: {
      apartment: {
        title: "Celý apartmán jen pro vás",
        text: "Dvě ložnice, obývací pokoj a koupelna, cca 50 m².",
      },
      fireplace: {
        title: "Krb na dřevo",
        text: "Vnitřní krb pro dlouhé podzimní a zimní večery.",
      },
      kitchen: {
        title: "Vybavená kuchyň",
        text: "Indukce, mikrovlná trouba, myčka, lednice s mrazákem i kávovar.",
      },
      grill: { title: "Grilování", text: "Možnost grilování a opékání přímo ve dvoře." },
      family: {
        title: "Vhodné pro rodiny",
        text: "Hrací koutek pro děti, dětská postýlka na vyžádání.",
      },
      wifi: { title: "Wi-Fi zdarma", text: "Bezdrátové připojení v celém objektu." },
      sauna: { title: "Sauna", text: "Po domluvě možný pronájem sudové sauny." },
      pub: {
        title: "Hostinec na dosah ruky",
        text: (
          <>
            Vyhlášený{" "}
            <a
              href={HOSTINEC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage underline hover:text-forest"
            >
              Hostinec u Posledního Mohykána
            </a>{" "}
            jen pár kroků přes potok.
          </>
        ),
      },
    },
    note: "Nekuřácký objekt · bez domácích mazlíčků · majitel v objektu",
  },
  nearbyIntro: {
    title: "Kam vyrazit za dobrodružstvím",
    text: "Vojtěchov leží v severní části Hané, v oblasti Zábřežské Vrchoviny. Okolí nabízí krasové jeskyně, pohádkové hrady, houbařské lesy i nekonečné trasy pro pěší a cyklisty — les začíná 180 metrů od dvora.",
    photoAlt: "Krajina v okolí Vojtěchova",
    routeTitle: "Zobrazit trasu v Mapách Google",
  },
  nearby: [
    {
      name: "Javoříčské jeskyně",
      note: "Krápníkové chodby v srdci krasu",
      dist: "2,7 km",
      url: "https://caves.cz/cs/jeskyne/javoricske-jeskyne",
      mode: "walking",
    },
    {
      name: "Hrad Bouzov",
      note: "Nejpohádkovější hrad na Moravě",
      dist: "7,5 km",
      url: "https://www.hrad-bouzov.cz/",
      mode: "walking",
    },
    {
      name: "Lyžařský areál Kladky",
      note: "Sjezdovka pro zimní pobyty",
      dist: "9 km",
      url: "https://www.kladky.cz/",
      mode: "driving",
    },
    {
      name: "Zámek Bílá Lhota",
      note: "Barokní zámek s botanickou zahradou",
      dist: "14 km",
      url: "https://www.zamek-bilalhota.cz/",
      mode: "driving",
    },
    {
      name: "Přírodní biotop Laškov",
      note: "Přírodní koupání v letních dnech",
      dist: "14 km",
      url: "https://maps.app.goo.gl/BNcgvzFGJvdjF1VG6",
      mode: "driving",
    },
    {
      name: "Muzeum olomouckých tvarůžků",
      note: "Chuť Hané v Lošticích",
      dist: "20 km",
      url: "https://www.tvaruzkovemuzeum.cz/",
      mode: "driving",
    },
  ],
  contact: {
    title: "Těšíme se na vaši návštěvu.",
    addressLabel: "Adresa",
    address: (
      <>
        Vojtěchov 7<br />
        798 55 Hvozd u Prostějova
      </>
    ),
    gps: "GPS 49.65151N, 16.90737E",
    phoneLabel: "Telefon",
    emailLabel: "E-mail",
    infoTitle: "Důležité informace",
    rows: [
      { label: "Check-in", value: "15:00 - 20:00" },
      { label: "Check-out", value: "do 11:00" },
      { label: "Kapacita", value: "2x dvoulůžko (160x200) 1x rozkládací gauč (150x200)" },
      { label: "Doprava", value: "Autem, autobus 50 m, vlak Konice 9 km" },
    ],
  },
  ukraineFooter: "Podporujeme Ukrajinu v jejím boji za svobodu:",
  donations: DONATIONS_CS,
  ukrainePage: {
    metaTitle: "Podporujeme Ukrajinu v jejím boji za svobodu — Dvůr u Špraňku",
    metaDescription:
      "Dvůr u Špraňku odsuzuje ruskou agresi na Ukrajině. Přispějte na její obranu a obnovu prostřednictvím ověřených sbírek.",
    back: "← Zpět na hlavní stránku",
    title: "Podporujeme Ukrajinu v jejím boji za svobodu",
    paragraphs: [
      "Jako provozovatelé ubytování Dvůr u Špraňku jednoznačně odsuzujeme ruskou vojenskou agresi na Ukrajině, která přináší utrpení ukrajinskému národu. Na straně pravdy a lidské důstojnosti stojí ukrajinský lid, který brání svou vlast, svobodu a mírovou budoucnost.",
      "Věříme, že každá pomoc má smysl — ať už finanční, materiální nebo morální. Proto podporujeme ověřené organizace a sbírky, které pomáhají přímo na místě. Pokud můžete, přispějte na obranu Ukrajiny, na pomoc jejím občanům a na obnovu zničených oblastí.",
    ],
    helpTitle: "Kde můžete pomoci",
    thanks: "Děkujeme, že stojíte na straně svobody. Слава Україні! Героям слава!",
    backFooter: "Zpět na hlavní stránku",
  },
};

const en: SiteContent = {
  htmlLang: "en",
  otherLang: { code: "cs", label: "Čeština", to: "/" },
  homePath: "/en",
  ukrajinaPath: "/en/ukrajina",
  meta: {
    title: "Dvůr u Špraňku — countryside apartment in Vojtěchov, Moravia",
    description:
      "Apartment in a restored Moravian farmstead in Vojtěchov. Fireplace, fully equipped kitchen, terrace and garden, deep quiet near Bouzov Castle. Book your stay.",
    ogDescription:
      "Authentic stay in a carefully restored farmstead on the edge of the Kladecko nature park, close to the Špraněk trail and the Javoříčko caves in Moravia.",
  },
  nav: [
    { href: "#apartman", label: "Apartment" },
    { href: "#spanek", label: "Sleep retreat" },
    { href: "#galerie", label: "Gallery" },
    { href: "#vybaveni", label: "Amenities" },
    { href: "#okoli", label: "Around" },
    { href: "#kontakt", label: "Contact" },
  ],
  book: "Book now",
  bookStay: "Book your stay",
  bookBooking: "Book on Booking.com",
  hero: {
    eyebrow: "Vojtěchov · Moravia, Czechia",
    title: "Quiet and ease on an old farmstead.",
    text: "An authentic stay in a carefully restored farmstead, where time slows down between the scent of firewood and the murmur of the Špraněk brook.",
    alt: "Dvůr u Špraňku farmstead in Vojtěchov",
  },
  apartment: {
    eyebrow: "Main apartment",
    title: "Room for time together",
    text: "A generous apartment of roughly 50 m² with space for a family or a group of friends. Two bedrooms with double beds, a living room with a fireplace and a leather sofa bed. Bed linen and cleaning are included.",
    features: [
      "6 beds, 2 bedrooms",
      "Wood-burning fireplace",
      "Equipped kitchen and dining area",
      "Terrace and garden",
      "Enclosed courtyard, parking",
      "Play corner for children",
    ],
    galleryLink: "See the photo gallery",
    photoAlt: "Apartment living room with fireplace and dining table",
  },
  sleep: {
    eyebrow: "Sleep retreat",
    title: "A true sleep retreat: the place where you finally sleep deeply",
    paragraphs: [
      "Carrying a sleep debt from fast city life? We turned our guesthouse into an oasis for everyone looking for complete calm and uninterrupted sleep well into the morning.",
      "The old house with its thick stone walls works as a natural shield against modern noise — you will experience absolute silence you will not find elsewhere. The rooms have carefully chosen, healthily firm yet very comfortable mattresses that give a tired body perfect support.",
      "Our guests agree on one thing: they have not slept this deeply anywhere for a long time. Come for the best sleep of your life.",
    ],
  },
  sleepHighlights: [
    { title: "Absolute silence", text: "Thick stone walls and a quiet village square without traffic." },
    {
      title: "Healthily firm mattresses",
      text: "Carefully chosen mattresses with perfect support for a tired body.",
    },
    {
      title: "Sleep in late",
      text: "No alarms, no rush — you get up when you wake up on your own.",
    },
    { title: "Darkness and fresh air", text: "Blackout blinds in the bedrooms and air from the surrounding forests." },
  ],
  second: {
    title: "A second apartment is coming",
    text: "We are finishing a second apartment in the same spirit in another wing of the farmstead. Soon we will be able to host larger groups and two families at once.",
    badge: "Soon",
  },
  gallery: {
    title: "Photo gallery",
    text: "Take a look inside — the living room with the fireplace, bedrooms, kitchen and bathroom.",
    zoom: "Enlarge photo",
    close: "Close",
    dialog: "Photo gallery",
  },
  amenities: {
    title: "Everything you need",
    text: "We built a place where rural history meets modern comfort.",
    items: {
      apartment: {
        title: "The whole apartment to yourself",
        text: "Two bedrooms, a living room and a bathroom, around 50 m².",
      },
      fireplace: {
        title: "Wood-burning fireplace",
        text: "An indoor fireplace for long autumn and winter evenings.",
      },
      kitchen: {
        title: "Equipped kitchen",
        text: "Induction hob, microwave, dishwasher, fridge-freezer and a coffee machine.",
      },
      grill: { title: "Barbecue", text: "Grilling and open-fire cooking right in the courtyard." },
      family: {
        title: "Family friendly",
        text: "Play corner for children, cot available on request.",
      },
      wifi: { title: "Free Wi-Fi", text: "Wireless connection throughout the building." },
      sauna: { title: "Sauna", text: "A barrel sauna can be rented by arrangement." },
      pub: {
        title: "A pub within reach",
        text: (
          <>
            The well-known{" "}
            <a
              href={HOSTINEC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage underline hover:text-forest"
            >
              Hostinec u Posledního Mohykána
            </a>{" "}
            is a few steps across the brook.
          </>
        ),
      },
    },
    note: "Non-smoking property · no pets · owner lives on site",
  },
  nearbyIntro: {
    title: "Where to head for adventure",
    text: "Vojtěchov lies in northern Moravia, in the Zábřeh Highlands. The area offers karst caves, fairy-tale castles, mushroom forests and endless hiking and cycling routes — the forest starts 180 metres from the courtyard.",
    photoAlt: "Landscape around Vojtěchov",
    routeTitle: "Show the route in Google Maps",
  },
  nearby: [
    {
      name: "Javoříčko Caves",
      note: "Stalactite passages in the heart of the karst",
      dist: "2.7 km",
      url: "https://caves.cz/en/jeskyne/javoricske-jeskyne",
      mode: "walking",
    },
    {
      name: "Bouzov Castle",
      note: "The most fairy-tale castle in Moravia",
      dist: "7.5 km",
      url: "https://www.hrad-bouzov.cz/en",
      mode: "walking",
    },
    {
      name: "Kladky ski area",
      note: "A slope for winter stays",
      dist: "9 km",
      url: "https://www.kladky.cz/",
      mode: "driving",
    },
    {
      name: "Bílá Lhota Chateau",
      note: "Baroque chateau with a botanical garden",
      dist: "14 km",
      url: "https://www.zamek-bilalhota.cz/",
      mode: "driving",
    },
    {
      name: "Laškov natural swimming biotope",
      note: "Natural swimming on summer days",
      dist: "14 km",
      url: "https://maps.app.goo.gl/BNcgvzFGJvdjF1VG6",
      mode: "driving",
    },
    {
      name: "Olomouc Cheese Museum",
      note: "The taste of Haná in Loštice",
      dist: "20 km",
      url: "https://www.tvaruzkovemuzeum.cz/",
      mode: "driving",
    },
  ],
  contact: {
    title: "We look forward to your visit.",
    addressLabel: "Address",
    address: (
      <>
        Vojtěchov 7<br />
        798 55 Hvozd, Czechia
      </>
    ),
    gps: "GPS 49.65151N, 16.90737E",
    phoneLabel: "Phone",
    emailLabel: "E-mail",
    infoTitle: "Good to know",
    rows: [
      { label: "Check-in", value: "3 p.m. - 8 p.m." },
      { label: "Check-out", value: "by 11 a.m." },
      { label: "Capacity", value: "2x double bed (160x200), 1x sofa bed (150x200)" },
      { label: "Getting here", value: "By car, bus stop 50 m, train Konice 9 km" },
    ],
  },
  ukraineFooter: "We support Ukraine in its fight for freedom:",
  donations: DONATIONS_EN,
  ukrainePage: {
    metaTitle: "We support Ukraine in its fight for freedom — Dvůr u Špraňku",
    metaDescription:
      "Dvůr u Špraňku condemns the Russian aggression against Ukraine. Donate to its defence and reconstruction through verified fundraisers.",
    back: "← Back to the homepage",
    title: "We support Ukraine in its fight for freedom",
    paragraphs: [
      "As the hosts of Dvůr u Špraňku we unequivocally condemn the Russian military aggression against Ukraine and the suffering it brings to the Ukrainian people. Truth and human dignity are on the side of Ukrainians defending their homeland, their freedom and a peaceful future.",
      "We believe every kind of help matters — financial, material, or moral. That is why we support verified organisations and fundraisers that provide direct assistance on the ground. If you can, contribute to Ukraine's defence, support its people, and help rebuild destroyed regions.",
    ],
    helpTitle: "Where you can help",
    thanks: "Thank you for standing on the side of freedom. Слава Україні! Героям слава!",
    backFooter: "Back to the homepage",
  },
};

export const content: Record<Lang, SiteContent> = { cs, en };
