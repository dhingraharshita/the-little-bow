/**
 * Category list for Home, Shop filters, and the Categories page.
 *
 * image: path under /public
 * featured: shown in the Home "Featured Categories" row
 */
export const categories = [
  {
    slug: "chocolate-bouquets",
    name: "Chocolate Bouquets",
    shortName: "Chocolate Bouquets",
    description: "Edible arrangements that feel like flowers and dessert in one.",
    image: "/images/categories/choco-moco.png",
    featured: true,
  },
  {
    slug: "polaroid-bouquets",
    name: "Polaroid Bouquets",
    shortName: "Polariod Bouquets",
    description: "arrangements that feel like flowers and dessert in one.",
    image: "/images/categories/polo-molo.png",
    featured: true,
  },
  {
    slug: "pipe-cleaner-flowers",
    name: "Pipe Cleaner Bouquets",
    shortName: "Pipe Cleaner Flowers",
    description: "Playful stems with a handmade finish — no wilting, all charm.",
    image: "/images/categories/pipe.png",
    featured: true,
  },
  {
    slug: "gift-hampers-girls",
    name: "Gift Hampers for Girls",
    shortName: "Gift Hampers",
    description: "Curated boxes with pretty details, treats, and a personal note.",
    image: "/images/categories/pinko.png",
    featured: true,
  },
  {
    slug: "customized-gifts",
    name: "Customized Gifts",
    shortName: "Personalized Gifts",
    description: "Names, colours, and little extras chosen just for them.",
    image: "/images/categories/tray.png",
    featured: true,
  },
  {
    slug: "gift-cards-magazines",
    name: "Gift Cards & Magazines",
    shortName: "Cards & Magazines",
    description: "Small notes that make the gift feel finished.",
    image: "/images/categories/card.png",
    featured: true,
  },
  {
    slug: "gift-hampers-boys",
    name: "Gift Hampers for Boys",
    shortName: "Hampers for Boys",
    description: "Thoughtful boxes that still feel special — not generic.",
    image: "/images/categories/shirt.png",
    featured: false,
  },
 
  
];

export function getCategory(slug) {
  return categories.find((category) => category.slug === slug);
}

export function getFeaturedCategories() {
  return categories.filter((category) => category.featured);
}
