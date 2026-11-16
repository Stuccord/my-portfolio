/**
 * Templates for the "See your business online" demo.
 * Each category has its own colours, layout and sample content.
 * Edit the text freely; add a category by copying one block.
 */

export type DemoCategoryId =
  | "restaurant"
  | "hotel"
  | "salon"
  | "clinic"
  | "school"
  | "realestate"
  | "shop";

export type DemoItem = { title: string; meta: string; price?: string };

export type DemoCategory = {
  id: DemoCategoryId;
  /** Photo used in the preview and in the "Who I build for" strip. Files live in /public/images. */
  photo: string;
  photoSmall: string;
  photoAlt: string;
  /** Shown on the picker button. */
  label: string;
  /** Used in the WhatsApp message: "a website for my <noun>". */
  noun: string;
  theme: {
    bg: string;
    surface: string;
    text: string;
    muted: string;
    accent: string;
    accentText: string;
    /** Two colours for the illustration panel gradient. */
    art: [string, string];
    /** Heading font inside the mock site. */
    heading: "serif" | "sans";
  };
  /** "split" = text beside a picture. "cover" = text over a full-width picture. */
  hero: "split" | "cover";
  /** "list" = price list rows. "cards" = picture cards. */
  itemsLayout: "list" | "cards";
  nav: string[];
  eyebrow: string;
  headline: string;
  sub: string;
  cta: string;
  itemsTitle: string;
  items: DemoItem[];
  highlights: string[];
};

export const demoCategories: DemoCategory[] = [
  {
    id: "restaurant",
    photo: "/images/restaurant.webp",
    photoSmall: "/images/restaurant-sm.webp",
    photoAlt: "A plate of jollof rice with grilled chicken and fried plantain",
    label: "Restaurant",
    noun: "restaurant",
    theme: { bg: "#FBF3E4", surface: "#FFFFFF", text: "#1E2A1F", muted: "#6B6F5E", accent: "#D9481C", accentText: "#FFFFFF", art: ["#F6A23C", "#D9481C"], heading: "serif" },
    hero: "split",
    itemsLayout: "list",
    nav: ["Menu", "Reserve", "Find us"],
    eyebrow: "Open daily · Dine in or delivery",
    headline: "Good food, made fresh, served with love.",
    sub: "Order online or book a table in seconds.",
    cta: "Order now",
    itemsTitle: "Today's favourites",
    items: [
      { title: "Jollof rice with grilled chicken", meta: "Smoky, spicy, served with shito", price: "GH₵ 55" },
      { title: "Banku with grilled tilapia", meta: "Fresh pepper and onions", price: "GH₵ 80" },
      { title: "Waakye special", meta: "Egg, wele, gari and spaghetti", price: "GH₵ 45" },
      { title: "Kelewele and groundnuts", meta: "Sweet, spicy fried plantain", price: "GH₵ 25" },
    ],
    highlights: ["Book a table online", "Delivery around town", "Pay with Mobile Money"],
  },
  {
    id: "hotel",
    photo: "/images/hotel.webp",
    photoSmall: "/images/hotel-sm.webp",
    photoAlt: "A guest house bedroom with a neatly made bed",
    label: "Hotel",
    noun: "hotel / guest house",
    theme: { bg: "#F4F1EA", surface: "#FFFFFF", text: "#14213D", muted: "#5F6777", accent: "#B8862B", accentText: "#FFFFFF", art: ["#14213D", "#3C5A8A"], heading: "serif" },
    hero: "cover",
    itemsLayout: "cards",
    nav: ["Rooms", "Facilities", "Location"],
    eyebrow: "Comfortable stays · 24-hour reception",
    headline: "Rest well. Wake up refreshed.",
    sub: "Clean, quiet rooms with everything you need. Book your stay online.",
    cta: "Check availability",
    itemsTitle: "Our rooms",
    items: [
      { title: "Standard Room", meta: "Double bed · AC · Wi-Fi", price: "GH₵ 350 / night" },
      { title: "Deluxe Room", meta: "Queen bed · AC · Breakfast", price: "GH₵ 520 / night" },
      { title: "Executive Suite", meta: "King bed · Lounge · Breakfast", price: "GH₵ 800 / night" },
    ],
    highlights: ["Book a room online", "Free Wi-Fi and parking", "Pay with Mobile Money"],
  },
  {
    id: "salon",
    photo: "/images/salon.webp",
    photoSmall: "/images/salon-sm.webp",
    photoAlt: "A stylist braiding a client's hair in a salon",
    label: "Salon",
    noun: "salon",
    theme: { bg: "#FBEFF0", surface: "#FFFFFF", text: "#3A1722", muted: "#84606A", accent: "#B4235A", accentText: "#FFFFFF", art: ["#F19CB4", "#B4235A"], heading: "serif" },
    hero: "split",
    itemsLayout: "list",
    nav: ["Services", "Gallery", "Book"],
    eyebrow: "Hair · Nails · Make-up",
    headline: "Walk in. Walk out glowing.",
    sub: "Choose your style and book your slot. No waiting around.",
    cta: "Book an appointment",
    itemsTitle: "Popular services",
    items: [
      { title: "Knotless braids", meta: "Medium length · about 4 hours", price: "from GH₵ 250" },
      { title: "Wig install and styling", meta: "Lace melt and custom styling", price: "from GH₵ 180" },
      { title: "Gel manicure", meta: "With nail art of your choice", price: "from GH₵ 90" },
      { title: "Bridal make-up", meta: "Trial session included", price: "from GH₵ 600" },
    ],
    highlights: ["Book your slot online", "See our latest styles", "Pay with Mobile Money"],
  },
  {
    id: "clinic",
    photo: "/images/clinic.webp",
    photoSmall: "/images/clinic-sm.webp",
    photoAlt: "A doctor talking with a mother and her child",
    label: "Clinic",
    noun: "clinic",
    theme: { bg: "#EEF6F6", surface: "#FFFFFF", text: "#0F2E3A", muted: "#587480", accent: "#0E8A82", accentText: "#FFFFFF", art: ["#7FD6CC", "#0E8A82"], heading: "sans" },
    hero: "split",
    itemsLayout: "cards",
    nav: ["Services", "Doctors", "Contact"],
    eyebrow: "Caring for families · Open 7 days",
    headline: "Good care, close to home.",
    sub: "See a doctor without the long wait. Book your visit online.",
    cta: "Book an appointment",
    itemsTitle: "How we can help",
    items: [
      { title: "General consultation", meta: "See a doctor the same day" },
      { title: "Laboratory tests", meta: "Fast, accurate results" },
      { title: "Maternal and child care", meta: "Antenatal and child welfare" },
    ],
    highlights: ["Book a visit online", "NHIS accepted", "Open 7 days a week"],
  },
  {
    id: "school",
    photo: "/images/school.webp",
    photoSmall: "/images/school-sm.webp",
    photoAlt: "Pupils raising their hands in a classroom",
    label: "School",
    noun: "school",
    theme: { bg: "#F1F4FB", surface: "#FFFFFF", text: "#152250", muted: "#5B6589", accent: "#2747C7", accentText: "#FFFFFF", art: ["#F2B632", "#2747C7"], heading: "sans" },
    hero: "cover",
    itemsLayout: "cards",
    nav: ["About", "Admissions", "News"],
    eyebrow: "Admissions open · Crèche to JHS",
    headline: "Where every child learns to shine.",
    sub: "Strong teaching, caring staff and a safe place to grow.",
    cta: "Apply for admission",
    itemsTitle: "Our school",
    items: [
      { title: "Pre-school", meta: "Crèche, nursery and KG" },
      { title: "Primary", meta: "Basic 1 to Basic 6" },
      { title: "Junior High", meta: "Full BECE preparation" },
    ],
    highlights: ["Apply online", "Term dates and news", "Pay fees with Mobile Money"],
  },
  {
    id: "realestate",
    photo: "/images/realestate.webp",
    photoSmall: "/images/realestate-sm.webp",
    photoAlt: "A modern family house with a paved driveway",
    label: "Real Estate",
    noun: "real estate business",
    theme: { bg: "#F2F3EE", surface: "#FFFFFF", text: "#1C241D", muted: "#636B62", accent: "#2E6B3E", accentText: "#FFFFFF", art: ["#1C241D", "#2E6B3E"], heading: "sans" },
    hero: "cover",
    itemsLayout: "cards",
    nav: ["Buy", "Rent", "Land"],
    eyebrow: "Homes · Land · Rentals",
    headline: "Find a place you'll be proud to call home.",
    sub: "Verified properties with clear prices. Book a viewing today.",
    cta: "View properties",
    itemsTitle: "Featured properties",
    items: [
      { title: "3-bedroom house", meta: "Gated community · 2 baths", price: "GH₵ 950,000" },
      { title: "2-bedroom apartment", meta: "Furnished · Parking", price: "GH₵ 3,500 / month" },
      { title: "Registered plot of land", meta: "70 × 100 ft · Documents ready", price: "GH₵ 120,000" },
    ],
    highlights: ["Book a viewing online", "Verified documents", "Chat with an agent"],
  },
  {
    id: "shop",
    photo: "/images/shop.webp",
    photoSmall: "/images/shop-sm.webp",
    photoAlt: "A boutique owner arranging handbags and sandals",
    label: "Shop",
    noun: "shop",
    theme: { bg: "#F7F3EC", surface: "#FFFFFF", text: "#201A14", muted: "#746A5E", accent: "#111111", accentText: "#FFFFFF", art: ["#E9C46A", "#E76F51"], heading: "sans" },
    hero: "split",
    itemsLayout: "cards",
    nav: ["New in", "Shop", "Delivery"],
    eyebrow: "New arrivals every week",
    headline: "Styles you'll love, delivered to your door.",
    sub: "Shop from your phone and pay the way you like.",
    cta: "Shop now",
    itemsTitle: "New in",
    items: [
      { title: "Ankara wrap dress", meta: "Sizes S to XXL", price: "GH₵ 280" },
      { title: "Leather sandals", meta: "Handmade", price: "GH₵ 190" },
      { title: "Beaded handbag", meta: "Limited pieces", price: "GH₵ 240" },
    ],
    highlights: ["Order online, any time", "Delivery nationwide", "Pay with Mobile Money"],
  },
];

export const defaultCategory: DemoCategoryId = "restaurant";

export function getCategory(id: string | null | undefined): DemoCategory {
  return demoCategories.find((c) => c.id === id) ?? demoCategories[0];
}
