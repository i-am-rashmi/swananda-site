// ─────────────────────────────────────────────
//  SWANANDA — Site Content
//  Edit this file to update any text or image.
//  Push to GitHub → site updates automatically.
// ─────────────────────────────────────────────

const SITE = {

  // ── BRAND ──────────────────────────────────
  brand: "Swananda",

  // ── NAV ────────────────────────────────────
  nav: {
    links: [
      { label: "About", href: "#about" },
      { label: "Offerings", href: "#offerings" },
      { label: "How it Works", href: "#how" },
      { label: "Our Journey", href: "#journey" },
    ],
    cta: { label: "Request Sample", href: "#sample" }
  },

  // ── HERO CAROUSEL ──────────────────────────
  hero: {
    badge: "Premix Powders · B2B",
    headline: "Craft Mocktails,<br><em>Instantly.</em>",
    subtext: "Spray-dried functional premix powders that transform any venue into a craft mocktail experience — zero-alcohol, zero-sugar, zero cold chain.",
    cta_primary: { label: "Request Samples", href: "#sample" },
    cta_secondary: { label: "See Flavours", href: "#offerings" },
    slides: [
      { image: "assets/images/drinks/strawberry-mint.jpg", label: "Strawberry Mint" },
      { image: "assets/images/drinks/blueberry-lychee.jpg", label: "Blueberry Lychee" },
      { image: "assets/images/drinks/pineapple-mango.jpg", label: "Pineapple Mango" },
      { image: "assets/images/drinks/tamarind-spice.jpg", label: "Tamarind Spice" }
    ]
  },

  // ── MARQUEE ────────────────────────────────
  marquee: [
    "Tamarind Spice", "Strawberry Mint", "Pineapple Mango",
    "Blueberry Lychee", "Spray-Dried Technology", "CFTRI Incubated",
    "Zero Alcohol · Zero Sugar", "HoReCa Ready"
  ],

  // ── ABOUT / PRODUCT INTRO ──────────────────
  about: {
    label: "What We Make",
    headline: "Functional Mocktail Premixes<br>for the Modern Menu",
    body: [
      "Swananda produces functional mocktail premix powders purpose-built for food service. Each sachet delivers a café-quality drink in under 60 seconds — no blenders, no fresh fruit prep, no skilled bartenders, no cold chain.",
      "Our proprietary fast-dispersing formulation locks in natural fruit flavours, producing a powder that dissolves instantly in still water or soda. No clumping, no effort — just a consistent, beautiful drink every single time. Zero added sugar. Zero artificial colours. Zero artificial flavours. Ambient storage with a 12-month shelf life.",
      "From a boutique café serving 50 covers to a hotel running 500 — Swananda fits any operation, any volume, any menu. One sachet. One minute. One consistently perfect drink."
    ],
    stats: [
      { value: "12+", label: "Flavour SKUs" },
      { value: "0g", label: "Added Sugar" },
      { value: "60s", label: "Prep Time" },
      { value: "12mo", label: "Shelf Life" }
    ],
    drinkImage: "assets/images/drinks/tamarind-spice.jpg",
    sachetImage: "assets/images/sachets/tamarind-spice.jpg"
  },

  // ── FLAVOUR CATALOGUE ──────────────────────
  flavours: [
    {
      id: "tamarind-spice",
      name: "Tamarind Spice",
      badge: "Bestseller",
      badgeColor: "amber",           // amber | green
      type: "standard",        // standard | prebiotic
      description: "A bold, tangy classic inspired by the chaats and street drinks of India. Tamarind, cumin, black salt, and a whisper of chilli.",
      tags: ["Zero Sugar", "Zero Alcohol", "Indic Profile"],
      drinkImage: "assets/images/drinks/tamarind-spice.jpg",
      sachetImage: "assets/images/sachets/tamarind-spice.jpg"
    },
    {
      id: "mango-jalapeno",
      name: "Mango Jalapeño",
      badge: "Bestseller",
      badgeColor: "amber",
      type: "standard",
      description: "Bold ripe mango with a slow jalapeño kick — a sweet-heat combination that surprises and delights. A standout on any menu.",
      tags: ["Sweet Heat", "Zero Sugar", "Spicy"],
      drinkImage: "assets/images/drinks/mango-jalapeno.jpg",
      sachetImage: "assets/images/sachets/mango-jalapeno.jpg"
    },
    {
      id: "strawberry-mint",
      name: "Strawberry Mint",
      badge: null,
      type: "standard",
      description: "Bright, effervescent, and refreshing. Real strawberry flavour with a cool mint finish — perfect for all-day service.",
      tags: ["Effervescent", "Zero Sugar", "Fresh Profile"],
      drinkImage: "assets/images/drinks/strawberry-mint.jpg",
      sachetImage: "assets/images/sachets/strawberry-mint.jpg"
    },
    {
      id: "pineapple-mango",
      name: "Pineapple Mango",
      badge: null,
      type: "standard",
      description: "A sunshine-in-a-glass tropical fusion of ripe Alphonso mango and juicy pineapple — crowd-pleasing and vibrant.",
      tags: ["Tropical", "Zero Sugar", "Family Friendly"],
      drinkImage: "assets/images/drinks/pineapple-mango.jpg",
      sachetImage: "assets/images/sachets/pineapple-mango.jpg"
    },
    {
      id: "blueberry-lychee",
      name: "Blueberry Lychee",
      badge: null,
      type: "standard",
      description: "Antioxidant-rich blueberry meets floral lychee for a deeply coloured, sophisticated mocktail with premium appeal.",
      tags: ["Antioxidant", "Zero Sugar", "Premium"],
      drinkImage: "assets/images/drinks/blueberry-lychee.jpg",
      sachetImage: "assets/images/sachets/blueberry-lychee.jpg"
    },
    {
      id: "tamarind-fibre-plus",
      name: "Tamarind Fibre+",
      badge: "Functional",
      badgeColor: "green",
      type: "prebiotic",
      description: "Our signature tamarind enhanced with Sunfiber® AG prebiotic fibre. FODMAP-friendly, gut-supportive, and completely transparent in solution.",
      tags: ["Sunfiber® AG", "Prebiotic", "FODMAP Friendly", "Zero Sugar"],
      drinkImage: "assets/images/drinks/tamarind-spice.jpg",
      sachetImage: "assets/images/sachets/tamarind-fibre-plus.jpg"
    },
    {
      id: "blueberry-fibre-plus",
      name: "Blueberry Fibre+",
      badge: "Functional",
      badgeColor: "green",
      type: "prebiotic",
      description: "Antioxidant-rich blueberry lychee with added prebiotic fibre. A beautiful, wellness-first mocktail for health-conscious guests.",
      tags: ["Sunfiber® AG", "Prebiotic", "Antioxidant", "Zero Sugar"],
      drinkImage: "assets/images/drinks/blueberry-lychee.jpg",
      sachetImage: "assets/images/sachets/blueberry-fibre-plus.jpg"
    },
    {
      id: "pineapple-mango-fibre-plus",
      name: "Pineapple Mango Fibre+",
      badge: "Functional",
      badgeColor: "green",
      type: "prebiotic",
      description: "The tropical brightness of pineapple and mango, enhanced with Sunfiber® AG prebiotic fibre. Gut-supportive, FODMAP-friendly, and vibrant.",
      tags: ["Sunfiber® AG", "Prebiotic", "Tropical", "Zero Sugar"],
      drinkImage: "assets/images/drinks/pineapple-mango.jpg",
      sachetImage: "assets/images/sachets/pineapple-mango-fibre-plus.jpg"
    }
  ],

  // ── CUSTOM FORMULATIONS ────────────────────
  custom: {
    headline: "Your Flavour. Your Brand. Exclusively Yours.",
    body: "Have a signature drink your guests already love? We can convert any flavour into a fast-dispersing premix powder — built to your spec, tested in our lab, and produced at scale. No one else on your menu will serve it.",
    cta: { label: "Get in Touch to Discuss", href: "#sample" }
  },

  // ── HOW IT WORKS ───────────────────────────
  howItWorks: {
    label: "How to Make",
    headline: "Sachet to <em>Stunning Glass</em><br>in 60 Seconds",
    image: "assets/images/drinks/pineapple-mango.jpg",
    steps: [
      {
        num: "01",
        title: "Measure the Premix",
        body: "Open one sachet (15g) into a glass filled with ice. Precisely formulated — no measuring, no guesswork."
      },
      {
        num: "02",
        title: "Add Carbonated Mixer",
        body: "Pour 200–250ml of chilled carbonated mixer of choice. The effervescent system activates instantly."
      },
      {
        num: "03",
        title: "Stir & Garnish",
        body: "Quick stir to fully dissolve. Add mint, citrus slice, or fresh fruit to complete the presentation."
      },
      {
        num: "04",
        title: "Serve & Delight",
        body: "A craft-quality mocktail in under 60 seconds. Consistent, beautiful, and zero compromise — every time."
      }
    ]
  },

  // ── REQUEST SAMPLE FORM ────────────────────
  sample: {
    label: "Partner With Us",
    headline: "Let's Bring Swananda<br>to Your Venue",
    body: "Whether you're a hotel F&B director, restaurant owner, or café manager — fill in the form and we'll put a sample kit in your hands.",
    contact: {
      email: "swanandafoodsandbeverages@gmail.com",
      location: "Bengaluru, Karnataka · Shipping Pan-India",
      incubator: "BioNest Incubator - CFTRI, Mysuru"
    },
    establishmentTypes: [
      "Standalone Restaurant",
      "Hotel / Resort",
      "Café / Coffee Shop",
      "Cloud Kitchen",
      "Bar (Zero-Alcohol Menu)",
      "Catering / Events Company",
      "QSR Chain",
      "Distributor / Reseller",
      "Other"
    ],
    volumeOptions: [
      "Under 5 kg / month",
      "5–20 kg / month",
      "20–50 kg / month",
      "50–100 kg / month",
      "100+ kg / month",
      "Not sure yet"
    ]
  },

  // ── OUR JOURNEY ────────────────────────────
  journey: {
    label: "Our Journey",
    headline: "Built with Science,<br>Validated by the <em>Best in the Field</em>",
    body: "Swananda started with a patent idea and a conviction that functional beverages were broken for food service. From CFTRI labs to TiE podiums to defence demonstrations — every milestone has sharpened our product and our resolve.",
    credentials: [
      {
        color: "amber",
        label: "Our Incubator",
        title: "BioNest Incubator - CFTRI, Mysuru",
        body: "Formulated under the rigour of the Central Food Technological Research Institute — India's foremost food science institution. Full HACCP compliance and validated SOPs."
      }
    ],
    milestones: [
      {
        year: "2026",
        tag: "Competition · Recognition",
        title: "TiECon Mysuru — 2nd Runner Up",
        body: "Placed 2nd runner up at TiECon Mysuru's Ideathon — pitching the gap in functional beverage access across India's 7.5M+ food service establishments.",
        image: "assets/images/events/tiecon-mysuru.jpg"
      },
      {
        year: "2025",
        tag: "CFTRI · Government",
        title: "Ministerial Visit at CFTRI",
        body: "Swananda's mocktail premixes showcased to government dignitaries during an official visit to CFTRI — validated at India's foremost food science institution.",
        image: "assets/images/events/cftri-visit.jpg"
      },
      {
        year: "2026",
        tag: "Defence · Institutional",
        title: "Defence Forces Demonstration",
        body: "Swananda's functional beverage systems demonstrated to Indian defence personnel, exploring institutional and field deployment opportunities.",
        image: "assets/images/events/defence-demo.jpg"
      }
    ]
  },

  // ── FOOTER ─────────────────────────────────
  footer: {
    tagline: "© 2025 Swananda Food & Beverages, Bengaluru",
    sub: "CFTRI Incubated "
  }

};
