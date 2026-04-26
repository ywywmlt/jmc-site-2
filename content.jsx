/* JMC — Content & data
   Single source of truth. EN canonical; JA mirror for nav, banners, CTAs.
   Locale state: window.JMC_LOCALE ("en" | "ja"), persisted in localStorage.
   Components access window.JMC_COPY (always returns active-locale data).
*/

const EN = {
  brand: {
    name: "JMC",
    nameLong: "Japan Mastery Collective",
    tagline: "Japan, mastered.",
    taglineJp: "日本、極まる。",
    est: "Est. 2025 — Tokyo",
    description: "JMC is a house of Japan's master makers. We bring together the finest practitioners of ceramic, lacquer, blade, textile, wood, paper, tea, glass, metal, and garment — across centuries-old workshops and singular contemporary studios — under one roof.",
  },

  nav: [
    { label: "Shop",    href: "shop.html" },
    { label: "Art",     href: "art.html" },
    { label: "Trade",   href: "b2b.html" },
    { label: "Journal", href: "journal.html" },
    { label: "About",   href: "about.html" },
  ],

  notice: "Complimentary delivery on orders over ¥50,000",

  categories: [
    { id: "ceramics",    label: "Ceramics",            labelJp: "焼き物",   count: 24, accent: "#a08566" },
    { id: "lacquerware", label: "Lacquerware",         labelJp: "漆器",     count: 18, accent: "#7a2e2a" },
    { id: "blades",      label: "Knives & Blades",     labelJp: "刃物",     count: 22, accent: "#3a3a3a" },
    { id: "textiles",    label: "Textiles & Denim",    labelJp: "織物",     count: 31, accent: "#23354d" },
    { id: "wood",        label: "Wood & Joinery",      labelJp: "木工",     count: 16, accent: "#8a6a4b" },
    { id: "paper",       label: "Stationery & Paper",  labelJp: "和紙",     count: 14, accent: "#d8c8a8" },
    { id: "tea",         label: "Tea & Tea Ware",      labelJp: "茶道具",   count: 19, accent: "#4a5a3a" },
    { id: "metal",       label: "Jewelry & Metalwork", labelJp: "金工",     count: 12, accent: "#9a8050" },
    { id: "glass",       label: "Glassware",           labelJp: "硝子",     count: 11, accent: "#7a8a90" },
    { id: "garments",    label: "Garments",            labelJp: "衣服",     count: 21, accent: "#5a4a3a" },
  ],

  products: [
    { id: "p01", name: "Hagi Tea Bowl, Plum",       cat: "ceramics",    maker: "Sakata Kiln, Yamaguchi",   price: 38500,  swatch: "#c8a896" },
    { id: "p02", name: "Negoro Soup Bowl",          cat: "lacquerware", maker: "Tsutsumi Urushi, Wajima",  price: 24800,  swatch: "#8b3a30" },
    { id: "p03", name: "Aogami No. 2 Petty Knife",  cat: "blades",      maker: "Nakaya Forge, Sakai",      price: 46000,  swatch: "#2c2c2c" },
    { id: "p04", name: "Sashiko Selvedge Jacket",   cat: "textiles",    maker: "Kojima Mills, Okayama",    price: 89000,  swatch: "#1c2a3e" },
    { id: "p05", name: "Hinoki Cutting Board",      cat: "wood",        maker: "Yoshino Joinery, Nara",    price: 14200,  swatch: "#d8c8a4" },
    { id: "p06", name: "Echizen Letter Set",        cat: "paper",       maker: "Iwano Heizaburō, Fukui",   price: 9800,   swatch: "#f0e8d4" },
    { id: "p07", name: "Tetsubin Iron Kettle",      cat: "tea",         maker: "Suzuki Morihisa, Morioka", price: 78000,  swatch: "#3a3a36" },
    { id: "p08", name: "Tsuiki Copper Cup",         cat: "metal",       maker: "Gyokusendō, Tsubame",      price: 32000,  swatch: "#a86a48" },
    { id: "p09", name: "Edo Kiriko Tumbler, Indigo",cat: "glass",       maker: "Hanashō, Tokyo",           price: 28000,  swatch: "#1c3550" },
    { id: "p10", name: "Indigo Noragi Coat",        cat: "garments",    maker: "Watanabe Atelier, Kyoto",  price: 64000,  swatch: "#1a2a3a" },
    { id: "p11", name: "Karatsu Sake Cup, Pair",    cat: "ceramics",    maker: "Nakazato Tarōemon, Saga",  price: 18400,  swatch: "#a89888" },
    { id: "p12", name: "Honyaki Gyuto, 240mm",      cat: "blades",      maker: "Konosuke, Sanjō",          price: 128000, swatch: "#1c1c1c" },
  ],

  trendingIds: ["p07", "p03"],

  featured: {
    eyebrow: "New Arrival",
    title: "The Spring Collection",
    desc: "Twelve makers, one season. From Hagi clay to Edo glass, our spring edit honors the makers who turn Japanese tradition forward.",
    cta: "Discover",
    ctaHref: "shop.html",
  },

  journal: [
    { id: "j01", kind: "Story",      date: "Apr 18, 2026", title: "The 14th-generation potter who refuses to repeat himself", maker: "Sakata Kiln" },
    { id: "j02", kind: "Collection", date: "Apr 09, 2026", title: "Spring 2026: Twelve makers, one season",                  maker: "JMC Editorial" },
    { id: "j03", kind: "Process",    date: "Mar 28, 2026", title: "How a Sakai blade is forged across three workshops",       maker: "Nakaya Forge" },
    { id: "j04", kind: "Travel",     date: "Mar 14, 2026", title: "A studio visit in Wajima, six months after the quake",    maker: "Tsutsumi Urushi" },
    { id: "j05", kind: "Maker",      date: "Feb 26, 2026", title: "On indigo, patience, and the color of midnight",          maker: "Watanabe Atelier" },
    { id: "j06", kind: "Process",    date: "Feb 12, 2026", title: "Why Hinoki cutting boards heal themselves",               maker: "Yoshino Joinery" },
  ],

  pillars: [
    { icon: "shipping",  title: "Worldwide Delivery", desc: "DHL Express to 80+ countries" },
    { icon: "returns",   title: "30-day Returns",     desc: "Free return on full-price orders" },
    { icon: "service",   title: "Concierge Support",  desc: "Available daily via WhatsApp & email" },
    { icon: "authentic", title: "Authenticity Card",  desc: "Each piece signed by its maker" },
  ],

  story: {
    eyebrow: "Made in Japan, by hand",
    title: "Each piece signed by its maker.",
    body: "We work directly with the workshops — no resellers, no middlemen. Every object that carries the JMC mark has been selected by our editor, photographed by our atelier, and signed by the master who made it.",
    cta: "Read our story",
    ctaHref: "about.html",
  },

  footer: {
    newsletter: {
      title: "Newsletter",
      desc: "New arrivals, studio visits, and quiet drops — once a fortnight.",
      placeholder: "E-mail",
      cta: "Subscribe",
    },
    columns: [
      { title: "Shop",        links: [
        { label: "Ceramics",     href: "shop-category.html?c=ceramics" },
        { label: "Blades",       href: "shop-category.html?c=blades" },
        { label: "Lacquerware",  href: "shop-category.html?c=lacquerware" },
        { label: "Textiles",     href: "shop-category.html?c=textiles" },
        { label: "All",          href: "shop.html" },
      ]},
      { title: "Information", links: [
        { label: "About",    href: "about.html" },
        { label: "Journal",  href: "journal.html" },
        { label: "Contact",  href: "contact.html" },
        { label: "Shipping", href: "contact.html#shipping" },
        { label: "Returns",  href: "contact.html#returns" },
      ]},
    ],
    about: {
      title: "About JMC",
      body: "Japan Mastery Collective is a house of master makers — connecting Japan's most exacting workshops, ceramicists, blacksmiths, weavers, and lacquer artists with the world.",
    },
    locale: "Japan (JPY ¥)",
    copyright: "© 2026 — Japan Mastery Collective",
  },

  hero: {
    eyebrow: "JAPAN MASTERY COLLECTIVE",
    est: "Est. 2025 — Tokyo",
    scroll: "Scroll",
  },

  // UI labels used throughout pages
  ui: {
    discover: "Discover",
    shop: "Shop",
    read: "Read",
    explore: "Explore Our",
    disciplines: "Disciplines",
    trending: "Trending",
    magazine: "Magazine",
    allArticles: "All Articles",
    sortBy: "Sort by",
    filter: "Filter",
    pieces: "pieces",
    addToCart: "Add to bag",
    color: "Color",
    size: "Size",
    youMayAlsoLike: "You may also like",
    handmade: "Handmade by",
    signedBy: "Signed by the maker",
    sectionStory: "Our Story",
    aboutH1: "About",
    contactEyebrow: "Get in Touch",
    contactH1: "Contact",
    sendMessage: "Send a Message",
    namePlaceholder: "Name",
    emailPlaceholder: "Email",
    subjectPlaceholder: "Subject",
    messagePlaceholder: "Your message",
    sendCta: "Send Message",
    atelier: "Atelier",
    journalEyebrow: "The Magazine",
    journalH1: "Journal",
    journalSub: "Studio visits, process essays, and the makers behind the marks. Published fortnightly.",
    contactSub: "For concierge support, press, partnerships, or studio visits — we respond within one business day.",
    aboutSub: "JMC is a house of Japan's master makers. We bring together the finest practitioners of ceramic, lacquer, blade, textile, wood, paper, tea, glass, metal, and garment — across centuries-old workshops and singular contemporary studios — under one roof.",
    aboutDesignEyebrow: "The Design",
    aboutDesignTitle: "Each piece signed by its maker.",
    aboutDesignBody1: "JMC is a house of master makers. We work directly with the workshops — no resellers, no middlemen. Every object that carries the JMC mark has been selected by our editor, photographed by our atelier, and signed by the master who made it.",
    aboutDesignBody2: "Our mission is to protect, celebrate, and connect Japan's living craft traditions with the world.",
    visitWorkshop: "Visit a workshop",
    studioVisit: "Studio visits",
    pressInquiries: "Press",
    partnerships: "Partnerships",
    storyTitle: "Each piece signed by its maker.",
    storyBody: "Handmade with passion and expertise.",
    artBannerEyebrow: "The Makers",
    artBannerH1: "Art",
    artBannerSub: "Six masters, six disciplines. The hands behind every JMC mark — selected, photographed, and signed by the maker.",
    artFeatureEyebrow: "Artist in residence — Spring 2026",
    artFeatureBody1: "The 14th-generation Hagi potter who refuses to repeat himself. Sakata-san fires each kiln-load only twice a year, and rejects more than half of what comes out. The pieces that survive carry his red mark and the date of the firing.",
    artFeatureBody2: "I am not making the same bowl my grandfather made. I am making the bowl my grandfather would have made if he were alive today.",
    artFeatureFullVisit: "Read the full studio visit",
    artFeatureShop: "Shop",
    artRosterEyebrow: "The Roster",
    artRosterTitle: "Spring 2026",
    artRosterIntro: "Six artists currently in residence at JMC. Studio visits, process essays, and signed works available through Shop.",
    artPledgeEyebrow: "The Pledge",
    artPledgeTitle: "Each piece, signed.",
    artPledgeBody: "JMC works directly with master ateliers — no resellers, no middlemen. Every object that carries the red 朱 mark has been selected by our editor, photographed by our atelier in Tokyo, and signed by the maker themselves.",
    artStat1: "Disciplines in residence",
    artStat2: "Pieces per season",
    artStat3: "Made by hand in Japan",
    artistGeneration: "generation",
    artistSince: "Since",
    b2bBannerEyebrow: "Trade Program",
    b2bBannerH1: "Wholesale & Trade",
    b2bBannerSub: "JMC partners with hospitality, retail, and gifting programs worldwide. Discover access, terms, and the application process.",
    b2bIntroH2: "A house program for trade.",
    b2bIntroBody: "JMC's trade program brings the work of Japan's master makers to design-led hotels, restaurants, retailers, and corporate gift programs. Wholesale terms, made-to-order capacity, and dedicated logistics.",
    b2bWhoEyebrow: "Who we work with",
    b2bWhoTitle: "Selected partners",
    b2bSegmentRetail: "Retail",
    b2bSegmentRetailDesc: "Concept stores, museum shops, and design retailers carrying JMC's seasonal edits.",
    b2bSegmentHospitality: "Hospitality",
    b2bSegmentHospitalityDesc: "Hotels, ryokan, and restaurants commissioning bespoke tableware and amenities.",
    b2bSegmentGift: "Corporate Gifting",
    b2bSegmentGiftDesc: "Made-to-order gifting programs for milestone moments and executive partnerships.",
    b2bSegmentInterior: "Interior & A&D",
    b2bSegmentInteriorDesc: "Architects and designers specifying handcraft for residential and commercial projects.",
    b2bTermsEyebrow: "Trade Terms",
    b2bTermsTitle: "How it works",
    b2bTerm1Title: "Wholesale pricing",
    b2bTerm1Desc: "Tiered margins from MOQ ¥250,000. Volume-based discount past ¥1m / season.",
    b2bTerm2Title: "Made to order",
    b2bTerm2Desc: "Custom firings, signatures, glazes, and embroidery, with 8–14 week lead times.",
    b2bTerm3Title: "Dedicated logistics",
    b2bTerm3Desc: "DHL Express to 80+ countries. Custom-clearance handled by our Tokyo atelier.",
    b2bTerm4Title: "Editorial support",
    b2bTerm4Desc: "Maker bios, hi-res photography, and product copy provided to partners.",
    b2bApplyEyebrow: "Apply",
    b2bApplyTitle: "Become a partner",
    b2bApplyBody: "Tell us about your project. Our trade team responds within two business days.",
    b2bField1: "Company name",
    b2bField2: "Contact name",
    b2bField3: "Email",
    b2bField4: "Country",
    b2bField5: "Tell us about your project, sector, and intended scale",
    b2bSubmit: "Submit application",
    b2bDeck: "Download trade deck (PDF)",
    b2bClients: "Currently working with",
    b2bClientList: "Aman · Six Senses · MoMA Design Store · Hermès Maisons · Heath Ceramics · The Conran Shop · Ace Hotel · Tatler",
  },
};

// ─────────────── Japanese translation ──────────────────────────
// Only the user-facing strings are translated. Product/maker names,
// SKUs, dates, and prices are kept canonical (Japanese style on prices
// is added by the formatter). For anything missing, EN string is used.
const JA = {
  brand: {
    name: "JMC",
    nameLong: "ジャパン・マスタリー・コレクティブ",
    tagline: "日本、極まる。",
    taglineJp: "Japan, mastered.",
    est: "2025年創業 — 東京",
    description: "JMCは日本の名匠たちが集う場所。陶磁、漆、刃物、織物、木工、和紙、茶、硝子、金工、衣服。何百年と続く工房から、現代の独創的なアトリエまで、最も厳しい目を持つ作り手たちを一堂に。",
  },

  nav: [
    { label: "ショップ", href: "shop.html" },
    { label: "アート",   href: "art.html" },
    { label: "卸売",     href: "b2b.html" },
    { label: "ジャーナル", href: "journal.html" },
    { label: "ブランド", href: "about.html" },
  ],

  notice: "50,000円以上のご注文で配送無料",

  categories: [
    { id: "ceramics",    label: "焼き物",            labelJp: "Ceramics",            count: 24, accent: "#a08566" },
    { id: "lacquerware", label: "漆器",              labelJp: "Lacquerware",         count: 18, accent: "#7a2e2a" },
    { id: "blades",      label: "刃物",              labelJp: "Knives & Blades",     count: 22, accent: "#3a3a3a" },
    { id: "textiles",    label: "織物・デニム",      labelJp: "Textiles & Denim",    count: 31, accent: "#23354d" },
    { id: "wood",        label: "木工・指物",        labelJp: "Wood & Joinery",      count: 16, accent: "#8a6a4b" },
    { id: "paper",       label: "和紙・文具",        labelJp: "Stationery & Paper",  count: 14, accent: "#d8c8a8" },
    { id: "tea",         label: "茶道具",            labelJp: "Tea & Tea Ware",      count: 19, accent: "#4a5a3a" },
    { id: "metal",       label: "金工・装身具",      labelJp: "Jewelry & Metalwork", count: 12, accent: "#9a8050" },
    { id: "glass",       label: "硝子",              labelJp: "Glassware",           count: 11, accent: "#7a8a90" },
    { id: "garments",    label: "衣服",              labelJp: "Garments",            count: 21, accent: "#5a4a3a" },
  ],

  // Products: keep maker/name in English (proper nouns); prices same
  // Use EN.products as the base.

  featured: {
    eyebrow: "新着",
    title: "春のコレクション",
    desc: "12人の作り手、ひとつの季節。萩の土から江戸切子まで、日本の伝統を前へと進める作り手たちを讃えて。",
    cta: "見る",
    ctaHref: "shop.html",
  },

  journal: [
    { id: "j01", kind: "ストーリー", date: "2026年4月18日", title: "繰り返さない14代目、その作陶哲学",                maker: "Sakata Kiln" },
    { id: "j02", kind: "コレクション", date: "2026年4月9日",  title: "Spring 2026 — 12人の作り手、ひとつの季節",         maker: "JMC編集部" },
    { id: "j03", kind: "プロセス",  date: "2026年3月28日", title: "三つの工房をまたぐ、堺の刃の鍛造",                maker: "Nakaya Forge" },
    { id: "j04", kind: "旅",        date: "2026年3月14日", title: "震災から半年、輪島の工房を訪ねて",                maker: "Tsutsumi Urushi" },
    { id: "j05", kind: "作り手",    date: "2026年2月26日", title: "藍、忍耐、そして真夜中の色",                       maker: "Watanabe Atelier" },
    { id: "j06", kind: "プロセス",  date: "2026年2月12日", title: "なぜ檜のまな板は自ら癒えるのか",                  maker: "Yoshino Joinery" },
  ],

  pillars: [
    { icon: "shipping",  title: "世界配送",       desc: "DHLにて80か国以上へ" },
    { icon: "returns",   title: "30日間返品可",   desc: "正規価格商品は無料返品" },
    { icon: "service",   title: "コンシェルジュ", desc: "WhatsApp・メールにて毎日ご対応" },
    { icon: "authentic", title: "鑑定書付き",     desc: "全ての作品に作り手の署名" },
  ],

  story: {
    eyebrow: "日本製、手仕事",
    title: "全ての作品に、作り手の署名を。",
    body: "再販業者を介さず、工房と直接お取引します。JMCの印を冠する全ての品は、編集部が選び、アトリエが撮影し、作った名匠が署名しています。",
    cta: "私たちの物語",
    ctaHref: "about.html",
  },

  footer: {
    newsletter: {
      title: "ニュースレター",
      desc: "新着、工房訪問、ひそやかな入荷を、隔週で。",
      placeholder: "メールアドレス",
      cta: "登録",
    },
    columns: [
      { title: "ショップ", links: [
        { label: "焼き物",   href: "shop-category.html?c=ceramics" },
        { label: "刃物",     href: "shop-category.html?c=blades" },
        { label: "漆器",     href: "shop-category.html?c=lacquerware" },
        { label: "織物",     href: "shop-category.html?c=textiles" },
        { label: "全て",     href: "shop.html" },
      ]},
      { title: "ご案内", links: [
        { label: "ブランド",   href: "about.html" },
        { label: "ジャーナル", href: "journal.html" },
        { label: "お問合せ",   href: "contact.html" },
        { label: "配送について", href: "contact.html#shipping" },
        { label: "返品について", href: "contact.html#returns" },
      ]},
    ],
    about: {
      title: "JMCについて",
      body: "ジャパン・マスタリー・コレクティブは、日本の名匠たちが集う場所。最も厳しい工房、陶芸家、鍛冶、織り手、漆芸家を世界へ。",
    },
    locale: "日本 (JPY ¥)",
    copyright: "© 2026 — Japan Mastery Collective",
  },

  hero: {
    eyebrow: "JAPAN MASTERY COLLECTIVE",
    est: "2025年創業 — 東京",
    scroll: "スクロール",
  },

  ui: {
    discover: "見る",
    shop: "購入",
    read: "読む",
    explore: "見つける",
    disciplines: "分野",
    trending: "注目",
    magazine: "マガジン",
    allArticles: "全ての記事",
    sortBy: "並び替え",
    filter: "絞り込み",
    pieces: "点",
    addToCart: "カートに入れる",
    color: "色",
    size: "サイズ",
    youMayAlsoLike: "あわせて",
    handmade: "作り手",
    signedBy: "作り手の署名入り",
    sectionStory: "私たちの物語",
    aboutH1: "ブランド",
    contactEyebrow: "お問合せ",
    contactH1: "お問合せ",
    sendMessage: "メッセージを送る",
    namePlaceholder: "お名前",
    emailPlaceholder: "メールアドレス",
    subjectPlaceholder: "件名",
    messagePlaceholder: "メッセージ",
    sendCta: "送信",
    atelier: "アトリエ",
    journalEyebrow: "マガジン",
    journalH1: "ジャーナル",
    journalSub: "工房訪問、プロセスの随筆、印の背後にある作り手たち。隔週で公開。",
    contactSub: "コンシェルジュ、報道、提携、工房訪問のご相談まで — 1営業日以内にご返信いたします。",
    aboutSub: "JMCは日本の名匠たちが集う場所。陶磁、漆、刃物、織物、木工、和紙、茶、硝子、金工、衣服。何百年と続く工房から、現代の独創的なアトリエまで、最も厳しい目を持つ作り手たちを一堂に。",
    aboutDesignEyebrow: "ものづくり",
    aboutDesignTitle: "全ての作品に、作り手の署名を。",
    aboutDesignBody1: "JMCは名匠たちの集う家。再販業者を介さず、工房と直接お取引します。JMCの印を冠する全ての品は、編集部が選び、アトリエが撮影し、作った名匠が署名しています。",
    aboutDesignBody2: "私たちの使命は、日本の生きた工芸を守り、讃え、世界とつなぐこと。",
    visitWorkshop: "工房を訪ねる",
    studioVisit: "工房訪問",
    pressInquiries: "報道",
    partnerships: "提携",
    storyTitle: "全ての作品に、作り手の署名を。",
    storyBody: "情熱と熟練の手仕事。",
    artBannerEyebrow: "作り手たち",
    artBannerH1: "アート",
    artBannerSub: "六人の名匠、六つの分野。JMCの印を支える手 — 編集部が選び、アトリエが撮影し、作り手が署名しています。",
    artFeatureEyebrow: "Spring 2026 — 滞在作家",
    artFeatureBody1: "繰り返さない14代目の萩焼作家。坂田氏は年に二度しか窯を焚かず、そのうちの半分以上を破棄します。残った作品にのみ、赤い印と窯出しの日付が刻まれます。",
    artFeatureBody2: "祖父と同じ茶碗を作っているのではない。祖父が今を生きていたら作るであろう茶碗を作っているのだ。",
    artFeatureFullVisit: "工房訪問の全文を読む",
    artFeatureShop: "購入",
    artRosterEyebrow: "現在の作家",
    artRosterTitle: "Spring 2026",
    artRosterIntro: "現在JMCに滞在する六人の作家。工房訪問、プロセスの随筆、署名入り作品はショップにて。",
    artPledgeEyebrow: "私たちの誓い",
    artPledgeTitle: "全ての作品に、署名を。",
    artPledgeBody: "JMCは名匠のアトリエと直接お取引します — 再販業者なし、中間業者なし。赤い朱印を冠する全ての品は、編集部が選び、東京のアトリエが撮影し、作り手自身が署名しています。",
    artStat1: "滞在中の分野",
    artStat2: "1シーズンの作品数",
    artStat3: "全て日本の手仕事",
    artistGeneration: "代目",
    artistSince: "創業",
    b2bBannerEyebrow: "業務提携",
    b2bBannerH1: "卸売・業務提携",
    b2bBannerSub: "JMCはホテル、リテール、ギフトプログラムと世界中で提携しています。アクセス、条件、申込手順をご紹介。",
    b2bIntroH2: "業務提携プログラム。",
    b2bIntroBody: "JMCの業務提携プログラムは、デザイン主導のホテル、レストラン、リテーラー、法人ギフトに、日本の名匠の作品をお届けします。卸売条件、受注生産、専属物流を完備。",
    b2bWhoEyebrow: "提携先",
    b2bWhoTitle: "厳選パートナー",
    b2bSegmentRetail: "リテール",
    b2bSegmentRetailDesc: "コンセプトストア、ミュージアムショップ、デザインリテーラーへ季節編集を。",
    b2bSegmentHospitality: "ホスピタリティ",
    b2bSegmentHospitalityDesc: "ホテル、旅館、レストランへ別注のテーブルウェアとアメニティを。",
    b2bSegmentGift: "法人ギフト",
    b2bSegmentGiftDesc: "節目の瞬間や役員提携のための受注生産ギフトプログラム。",
    b2bSegmentInterior: "インテリア・建築",
    b2bSegmentInteriorDesc: "住宅・商業空間に手仕事を仕様する建築家・デザイナーへ。",
    b2bTermsEyebrow: "取引条件",
    b2bTermsTitle: "ご利用方法",
    b2bTerm1Title: "卸売価格",
    b2bTerm1Desc: "MOQ 250,000円より段階的マージン。1シーズン100万円以上で更なる割引。",
    b2bTerm2Title: "受注生産",
    b2bTerm2Desc: "別注の窯、署名、釉薬、刺繍を承ります。納期8〜14週間。",
    b2bTerm3Title: "専属物流",
    b2bTerm3Desc: "DHLにて80か国以上へ配送。通関は東京のアトリエが対応。",
    b2bTerm4Title: "編集サポート",
    b2bTerm4Desc: "作り手の経歴、高解像度写真、商品コピーをパートナーへ提供。",
    b2bApplyEyebrow: "お申込み",
    b2bApplyTitle: "パートナーになる",
    b2bApplyBody: "ご計画についてお聞かせください。業務提携チームが2営業日以内にご返信します。",
    b2bField1: "会社名",
    b2bField2: "ご担当者名",
    b2bField3: "メールアドレス",
    b2bField4: "国・地域",
    b2bField5: "ご計画、業種、規模をお書きください",
    b2bSubmit: "申込みを送信",
    b2bDeck: "業務提携資料 (PDF)",
    b2bClients: "現在ご利用中",
    b2bClientList: "Aman · Six Senses · MoMA Design Store · Hermès Maisons · Heath Ceramics · The Conran Shop · Ace Hotel · Tatler",
  },
};

// ─────────────── i18n plumbing ──────────────────────────
// Deep-merge: locale overlay on top of EN base, so any missing keys
// fall back to English without throwing.
function deepMerge(base, overlay) {
  if (Array.isArray(base) || Array.isArray(overlay)) return overlay ?? base;
  if (typeof base !== "object" || base === null) return overlay ?? base;
  if (typeof overlay !== "object" || overlay === null) return base;
  const out = { ...base };
  for (const k of Object.keys(overlay)) out[k] = deepMerge(base[k], overlay[k]);
  return out;
}

const LOCALES = { en: EN, ja: deepMerge(EN, JA) };

// Read persisted locale (default "en")
let _locale = "en";
try {
  const stored = localStorage.getItem("jmc_locale");
  if (stored === "en" || stored === "ja") _locale = stored;
} catch (e) {}

window.JMC_LOCALE = _locale;
window.JMC_COPY = LOCALES[_locale];
window.JMC_PRODUCTS = LOCALES[_locale].products;
window.JMC_CATEGORIES = LOCALES[_locale].categories;

window.JMC_GET_PRODUCT  = (id) => window.JMC_COPY.products.find(p => p.id === id);
window.JMC_BY_CATEGORY  = (catId) => window.JMC_COPY.products.filter(p => p.cat === catId);
window.JMC_GET_CATEGORY = (id) => window.JMC_COPY.categories.find(c => c.id === id);

// JPY price formatter — same in both locales
window.JMC_PRICE = (n) => "¥" + n.toLocaleString("en-US");

// Setter — swaps active locale, persists, and dispatches an event so
// every mounted React root can re-render.
window.JMC_SET_LOCALE = (loc) => {
  if (loc !== "en" && loc !== "ja") return;
  if (loc === window.JMC_LOCALE) return;
  window.JMC_LOCALE = loc;
  window.JMC_COPY = LOCALES[loc];
  window.JMC_PRODUCTS = LOCALES[loc].products;
  window.JMC_CATEGORIES = LOCALES[loc].categories;
  try { localStorage.setItem("jmc_locale", loc); } catch (e) {}
  document.documentElement.setAttribute("lang", loc);
  window.dispatchEvent(new CustomEvent("jmc:locale", { detail: loc }));
};

// Apply lang attribute on initial load too
document.documentElement.setAttribute("lang", _locale);
