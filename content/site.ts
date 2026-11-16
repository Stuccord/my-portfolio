/**
 * ─────────────────────────────────────────────────────────────
 *  ALL SITE CONTENT LIVES HERE.
 *  Edit this file to change text, projects, prices, testimonials,
 *  FAQ and contact details. You never need to touch a component.
 *  Anything marked "TODO" is a placeholder waiting for your real info.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Stuccord Web",
  /** TODO: replace with your real domain once you have it (no trailing slash). */
  url: "https://stuccordweb.com",
  location: { town: "Koforidua", country: "Ghana" },

  seo: {
    title: "Stuccord Web — Web developer in Ghana | Websites that bring customers",
    description:
      "Websites, online stores and booking sites for businesses in Ghana. Mobile-first, fast on any network, with Mobile Money payments. Based in Koforidua, serving Accra and all of Ghana.",
    keywords: [
      "web developer in Ghana",
      "website design Koforidua",
      "website design Accra",
      "website designer Ghana",
      "e-commerce website Ghana",
      "online store Ghana Mobile Money",
      "restaurant website Ghana",
      "hotel website Ghana",
      "Stuccord Web",
    ],
  },

  contact: {
    /** Digits only, with country code, no "+" — used in wa.me links. */
    whatsappNumber: "233545306677",
    phoneDisplay: "+233 54 530 6677",
    phoneHref: "tel:+233545306677",
    email: "unipast100@gmail.com",
    whatsappDefaultMessage:
      "Hi Stuccord Web! I'd like a website for my business. Can we talk?",
  },

  nav: [
    { label: "Work", href: "#work" },
    { label: "Try the demo", href: "#demo" },
    { label: "Packages", href: "#services" },
    { label: "FAQ", href: "#faq" },
  ],

  hero: {
    eyebrow: "Web developer · Koforidua, Ghana",
    /** The word in `highlight` is shown in the accent colour. */
    headline: "I build websites that bring your business",
    highlight: "customers.",
    sub: "More bookings, more orders, and a business people can find on Google. Built for phones, fast on any network, ready for Mobile Money.",
    primaryCta: "Chat on WhatsApp",
    secondaryCta: "See my work",
  },

  trust: [
    { big: "5+", label: "Projects shipped", note: "Live and in use today" },
    { big: "Mobile-first", label: "Built for phones", note: "Where your customers are" },
    { big: "Fast", label: "On any network", note: "Loads quickly on mobile data" },
    { big: "MoMo", label: "Pay with Mobile Money", note: "MTN, Telecel, AirtelTigo" },
  ],

  /** The photo strip. The cards themselves come from the business types in /content/demo.ts. */
  industries: {
    eyebrow: "Who I build for",
    heading: "Built for businesses like yours.",
    sub: "Tap your kind of business to see a sample website for it.",
  },

  work: {
    eyebrow: "Selected work",
    heading: "Real sites. Real businesses. Live right now.",
    sub: "Hover or tap a screen to scroll through the site.",
    /**
     * Screenshots live in /public/projects/.
     * If you remove `desktop` or `mobile`, a marked placeholder is shown instead.
     * `w` and `h` are the image's pixel size. `small` is an optional half-size copy
     * that phones download instead, to save mobile data (leave it out if you don't have one).
     * TODO: the problem → result lines were drafted from the live sites. Correct anything that's off.
     */
    projects: [
      {
        name: "BearGuard",
        kind: "Business website",
        url: "https://bearguard-project-new.vercel.app/",
        problem: "Accident victims didn't know who to call or what the service did.",
        result: "A clear site that explains everything and gets a free consultation booked in one tap.",
        built: ["Business website", "Consultation booking", "WhatsApp contact"],
        desktop: { src: "/projects/bearguard-desktop.webp", small: "/projects/bearguard-desktop-sm.webp", w: 1100, h: 3208 },
        mobile: { src: "/projects/bearguard-mobile.webp", small: "/projects/bearguard-mobile-sm.webp", w: 440, h: 4062 },
      },
      {
        name: "Jesusity Tee",
        kind: "Online store",
        url: "https://www.jesusity.store/",
        problem: "A streetwear brand with a product to sell and nowhere to sell it properly.",
        result: "Its own store: customers pick a tee, add to cart and pay by MoMo or card.",
        built: ["Online store", "Cart and checkout", "MoMo and card payments"],
        desktop: { src: "/projects/jesusity-desktop.webp", small: "/projects/jesusity-desktop-sm.webp", w: 1100, h: 1418 },
        mobile: { src: "/projects/jesusity-mobile.webp", small: "/projects/jesusity-mobile-sm.webp", w: 440, h: 2649 },
      },
      {
        name: "Patrick's Info Tech",
        kind: "Selling platform",
        url: "https://patrick-hub-three.vercel.app/",
        problem: "Selling data bundles by hand, one customer at a time.",
        result: "An automatic platform: agents get their own branded store, instant delivery and MoMo payouts.",
        built: ["Reseller platform", "Agent stores", "Mobile Money payouts"],
        desktop: { src: "/projects/patrick-desktop.webp", small: "/projects/patrick-desktop-sm.webp", w: 1100, h: 3208 },
        mobile: { src: "/projects/patrick-mobile.webp", small: "/projects/patrick-mobile-sm.webp", w: 440, h: 4062 },
      },
      {
        name: "Unipast",
        kind: "Web app",
        url: "https://unipast.com/",
        problem: "University students hunting for past questions across WhatsApp groups.",
        result: "One place to practise real past questions by course and level, with instant scores.",
        built: ["Web app", "Student accounts", "Timed quizzes"],
        desktop: { src: "/projects/unipast-desktop.webp", small: "/projects/unipast-desktop-sm.webp", w: 1100, h: 823 },
        mobile: { src: "/projects/unipast-mobile.webp", small: "/projects/unipast-mobile-sm.webp", w: 440, h: 1767 },
      },
      {
        name: "Eboclean",
        kind: "Web app",
        url: "https://www.eboclean.com/",
        problem: "People who feel overwhelmed by cleaning and never know where to start.",
        result: "A friendly app that breaks cleaning into tiny two-minute steps, right on the phone.",
        built: ["Web app", "User accounts", "Phone-first design"],
        desktop: { src: "/projects/eboclean-desktop.webp", small: "/projects/eboclean-desktop-sm.webp", w: 1100, h: 688 },
        mobile: { src: "/projects/eboclean-mobile.webp", small: "/projects/eboclean-mobile-sm.webp", w: 440, h: 952 },
      },
    ] as Project[],
  },

  demo: {
    eyebrow: "Try it — it's free",
    heading: "See your business online. Right now.",
    sub: "Type your business name, pick what you do, and watch your website appear.",
    nameLabel: "Your business name",
    namePlaceholder: "e.g. Linda Dor",
    categoryLabel: "What kind of business?",
    cta: "Want this for real? Let's talk",
    note: "This is a quick preview. Your real site is designed around your business, your photos and your customers.",
  },

  services: {
    eyebrow: "Packages",
    heading: "Pick a starting point. I'll shape it to fit.",
    sub: "Clear prices, agreed before any work begins. No surprises.",
    currency: "GH₵",
    /** Photo beside the heading, with a small "new order" pop-up on top. */
    photo: { src: "/images/owner.webp", small: "/images/owner-sm.webp", alt: "A food business owner smiling at an order on her phone" },
    photoNote: { title: "New order received", text: "Paid with Mobile Money" },
    /**
     * TODO: fill in your prices. `price: null` shows "Ask for a quote" instead of a number.
     * `per` is optional text after the price, e.g. "/ month".
     */
    packages: [
      {
        name: "Starter Website",
        price: 2500,
        per: "",
        bestFor: "For businesses that need to be found and contacted",
        summary: "A clean, professional site that tells customers who you are, where you are and how to reach you.",
        includes: ["Your business info and photos", "WhatsApp chat button", "Google Maps location", "Looks great on every phone"],
      },
      {
        name: "Booking / Ordering Website",
        price: null,
        per: "",
        bestFor: "For restaurants, hotels, salons and clinics",
        summary: "Customers book a table, a room or an appointment, or place an order, without calling you.",
        includes: ["Appointments, reservations or online orders", "Mobile Money payments", "Instant alerts on your phone", "Everything in Starter"],
      },
      {
        name: "Online Store",
        price: null,
        per: "",
        bestFor: "For boutiques and shops",
        summary: "Sell your products day and night. Customers browse, add to cart and pay online.",
        includes: ["Product pages with photos and prices", "Shopping cart and checkout", "MoMo and card payments", "Delivery information"],
      },
      {
        name: "Monthly Care Plan",
        price: null,
        per: "/ month",
        bestFor: "For peace of mind after launch",
        summary: "I keep your site online, safe and up to date, so you can focus on your business.",
        includes: ["Hosting included", "Updates and security", "Small changes when you need them", "WhatsApp support"],
      },
    ] as Package[],
  },

  process: {
    eyebrow: "How it works",
    heading: "From first chat to live site in four steps.",
    steps: [
      { title: "Chat", text: "Message me on WhatsApp. Tell me about your business and what you want customers to do." },
      { title: "Design preview", text: "I show you how your site will look before I build it. You tell me what to change." },
      { title: "Build", text: "I build your site, add your content and test it on real phones and slow networks." },
      { title: "Launch and support", text: "Your site goes live. I show you how it works and stay around when you need help." },
    ],
  },

  testimonials: {
    eyebrow: "What clients say",
    heading: "Business owners, in their own words.",
    /**
     * TODO: replace with real quotes, then set `placeholder: false` on each.
     * While `placeholder` is true the card shows a small "Sample" tag so no
     * visitor mistakes it for a real review.
     * Set `show: false` to hide this whole section until you have real ones.
     */
    show: true,
    items: [
      { quote: "Replace this with a real client quote. One or two sentences about the result works best.", name: "Client name", role: "Owner, Business name", placeholder: true },
      { quote: "Ask your client: what changed after the website went live? More calls, more orders, more bookings?", name: "Client name", role: "Manager, Business name", placeholder: true },
      { quote: "A short, specific quote beats a long, general one. Numbers are even better.", name: "Client name", role: "Founder, Business name", placeholder: true },
    ],
  },

  about: {
    eyebrow: "About",
    heading: "Local, reliable, and quick to reply.",
    paragraphs: [
      "I'm the developer behind Stuccord Web, based in Koforidua. I build websites, online stores and web apps for businesses across Ghana.",
      "I know how customers here actually find a business: on their phone, on mobile data, often from a WhatsApp link. So every site I build is made for that first.",
      "You deal with me directly, from the first chat to launch day. No agency, no middlemen, no waiting a week for a reply.",
    ],
    points: ["Based in Koforidua, working across Ghana", "You talk to the person building your site", "Fast turnaround, honest timelines"],
    /** TODO: put your photo in /public (e.g. /me.webp) and set the path here. Leave "" for the placeholder. */
    photo: "",
    photoAlt: "Portrait of the developer behind Stuccord Web",
    /** Shown until you add your own photo above. */
    fallbackPhoto: { src: "/images/workspace.webp", small: "/images/workspace-sm.webp", alt: "Hands typing on a laptop at a desk lit by a warm lamp" },
  },

  faq: {
    eyebrow: "Questions",
    heading: "Things business owners ask me.",
    /** TODO: check these answers match how you actually work (timelines, payment terms). */
    items: [
      {
        q: "How much does a website cost?",
        a: "A Starter Website starts from GH₵2,500. Booking sites and online stores cost more because they do more. Tell me what you need and I'll give you one fixed price before any work begins.",
      },
      {
        q: "How long does it take?",
        a: "A Starter Website is usually ready in one to two weeks. Booking sites and online stores usually take two to four weeks. It goes fastest when your photos and information are ready.",
      },
      {
        q: "Do I need to buy a domain name?",
        a: "You don't need one before we start. I'll help you choose a good name (like yourbusiness.com) and register it for you. It stays yours, in your name.",
      },
      {
        q: "Can I change things on the site myself?",
        a: "Yes. For things you change often, like prices, menus or products, I set up a simple page where you update them yourself. Or send me a WhatsApp message and I'll do it for you under the Monthly Care Plan.",
      },
      {
        q: "Do you accept Mobile Money?",
        a: "Yes. You can pay me by MTN MoMo, Telecel Cash, AirtelTigo Money or bank transfer. You pay a deposit to start and the balance when your site goes live.",
      },
    ],
  },

  finalCta: {
    heading: "Let's get your business online.",
    sub: "Send me a message. I'll reply with ideas and a clear price, usually the same day.",
    button: "Chat on WhatsApp",
    /** Background photo, shown dimmed behind the text. */
    photo: { src: "/images/street.webp", small: "/images/street-sm.webp" },
  },

  footer: {
    line: "Websites, online stores and web apps for businesses in Ghana.",
  },
};

/* ───────────── Types (no need to edit) ───────────── */

export type Shot = { src: string; small?: string; w: number; h: number };

export type Project = {
  name: string;
  kind: string;
  url: string;
  problem: string;
  result: string;
  built: string[];
  desktop?: Shot;
  mobile?: Shot;
};

export type Package = {
  name: string;
  price: number | null;
  per: string;
  bestFor: string;
  summary: string;
  includes: string[];
};
