/**
 * All shop products live here so you can edit them in one place.
 *
 * How to add a product:
 * 1. Copy one object in the products array
 * 2. Give it a unique slug (used in the URL)
 * 3. Set category to a slug from data/categories.js
 * 4. Put a photo in public/images/products and update `image`
 *
 * How to change a price:
 * Replace the `price` string. Example: "₹899" or "₹1,250"
 * Until real prices are ready, keep "₹XXX".
 */
export const products = [
  {
    slug: "lily-bouquet",
    name: "Lily Bouquet",
    category: "pipe-cleaner-flowers",
    price: "₹119",
    bestSeller: true,
    image: "/images/products/lily-bou.png",
    shortDescription: "A soft blush wrap of handmade stems for birthdays and just-because days.",
    description:
      "A boutique-style bouquet with layered handmade blooms, wrapped in warm paper and finished with a little bow. Made to last longer than fresh flowers, without losing the romance of receiving a bunch.",
  },
  {
    slug: "rose-bouquet",
    name: "Rose Bouquet",
    category: "pipe-cleaner-flowers",
    price: "₹99",
    bestSeller: true,
    image: "/images/products/rose-bou.png",
    shortDescription: "Deep wine tones for anniversaries and quieter, grown-up gifting.",
    description:
      "Rich burgundy and cream stems, gathered tightly like a florist bouquet. For the person who loves classic roses, with a handmade twist.",
  },
  {
    slug: "best-seller-bouquet",
    name: "Best Seller Bouquet",
    category: "pipe-cleaner-flowers",
    price: "₹420",
    bestSeller: true,
    image: "/images/products/best-seller.png",
    shortDescription: "A mixed handful of textures — more garden than shop-window.",
    description:
      "An informal mix of handmade flowers in cream, blush, and wine. Wrapped loosely so it still feels picked, not packaged.",
  },
  {
    slug: "hibiscus-bouquet",
    name: "Hibiscus Bouquet",
    category: "pipe-cleaner-flowers",
    price: "₹279",
    bestSeller: true,
    image: "/images/products/hibiscus-bouquet.png",
    shortDescription: "Yarn petals you can keep on a shelf long after the occasion.",
    description:
      "Crochet blooms with a gentle, tactile finish. A keepsake bouquet for people who like gifts that stay.",
  },
  
  {
    slug: "polaroid-bouquets",
    name: "Polaroid Bouquet",
    category:"polaroid-bouquets",
    price: "₹249",
    bestSeller: true,
    image: "/images/products/po-bou.png",
    shortDescription: "A soft blush wrap of handmade stems for birthdays and just-because days.",
    description:
      "A boutique-style bouquet with layered handmade blooms, wrapped in warm paper and finished with a little bow. Made to last longer than fresh flowers, without losing the romance of receiving a bunch.",
  },
  {
    slug: "mini-polaroid-bouquets",
    name: "Mini Polaroid Bouquet",
    category:"polaroid-bouquets",
    price: "₹149",
    bestSeller: true,
    image: "/images/products/mini-po.png",
    shortDescription: "A soft blush wrap of handmade stems for birthdays and just-because days.",
    description:
      "A boutique-style bouquet with layered handmade blooms, wrapped in warm paper and finished with a little bow. Made to last longer than fresh flowers, without losing the romance of receiving a bunch.",
  },
  
  
  {
    slug: "mini-chocolate-bouquet",
    name: "Mini Chocolate Bouquet",
    category: "chocolate-bouquets",
    price: "₹220",
    bestSeller: true,
    image: "/images/products/choco-bouquet.png",
    shortDescription: "Chocolate stems arranged like flowers — sweet, and still elegant.",
    description:
      "A chocolate bouquet wrapped with the same care as our floral pieces. For birthdays, thank-yous, and last-minute love.",
  },
  {
    slug: "chocolate-with-claw-clip-bouquet",
    name: "Chocolate with Claw clip Bouquet",
    category: "chocolate-bouquets",
    price: "₹220",
    bestSeller: true,
    image: "/images/products/choco-claw.png",
    shortDescription: "Chocolate stems arranged like flowers — sweet, and still elegant.",
    description:
      "A chocolate bouquet wrapped with the same care as our floral pieces. For birthdays, thank-yous, and last-minute love.",
  },
  {
    slug: "chocolate-with-pictures-bouquet",
    name: "Chocolate with pictures Bouquet",
    category: "chocolate-bouquets",
    price: "₹250",
    bestSeller: true,
    image: "/images/products/choco-pic.png",
    shortDescription: "Chocolate stems arranged like flowers — sweet, and still elegant.",
    description:
      "A chocolate bouquet wrapped with the same care as our floral pieces. For birthdays, thank-yous, and last-minute love.",
  },
  {
    slug: "classic-chocolate-bouquet",
    name: "Classic Chocolate Bouquet",
    category: "chocolate-bouquets",
    price: "₹799",
    bestSeller: true,
    image: "/images/products/classic-chocolate.png",
    shortDescription: "Darker wrapping, richer chocolates, a more evening mood.",
    description:
      "A chocolate arrangement with deeper wrapping and a gold-tied finish. Made to feel like a night-out gift, even at home.",
  },
  {
    slug: "mini-girl-hamper",
    name: "Mini Girl Hamper",
    category: "gift-hampers-girls",
    price: "₹350",
    bestSeller: true,
    image: "/images/products/mini-girl.png",
    shortDescription: "A pretty, considered box — not a pile of random bits.",
    description:
      "A hamper built around blush tones, a small bouquet, and treats chosen to feel personal. Add a name or note when you order.",
  },
  {
    slug: "miniest-girl-hamper",
    name: "Miniest Girl Hamper",
    category: "gift-hampers-girls",
    price: "₹189",
    bestSeller: true,
    image: "/images/products/miniest-girl.png",
    shortDescription: "A pretty, considered box — not a pile of random bits.",
    description:
      "A hamper built around blush tones, a small bouquet, and treats chosen to feel personal. Add a name or note when you order.",
  },
  {
    slug: "pretty-girl-hamper",
    name: "Pretty Girl Hamper",
    category: "gift-hampers-girls",
    price: "₹649",
    bestSeller: true,
    image: "/images/products/pretty-girl.png",
    shortDescription: "A pretty, considered box — not a pile of random bits.",
    description:
      "A hamper built around blush tones, a small bouquet, and treats chosen to feel personal. Add a name or note when you order.",
  },
  {
    slug: "deluxe-girl-hamper",
    name: "Deluxe Girl Hamper",
    category: "gift-hampers-girls",
    price: "₹999",
    bestSeller: true,
    image: "/images/products/deluxe-girl.png",
    shortDescription: "A pretty, considered box — not a pile of random bits.",
    description:
      "A hamper built around blush tones, a small bouquet, and treats chosen to feel personal. Add a name or note when you order.",
  },
  {
    slug: "gentle-boy-hamper",
    name: "Gentle Boy Hamper",
    category: "gift-hampers-boys",
    price: "₹1199",
    bestSeller: false,
    image: "/images/products/gentle-boy.png",
    shortDescription: "A thoughtful box that still feels special — no cartoon clutter.",
    description:
      "A warmer, quieter hamper for boys and young men: useful, nice to unwrap, and easy to personalise.",
  },
  {
    slug: "handmade-card",
    name: "Handmade Card",
    category: "gift-cards-magazines",
    price: "₹139",
    bestSeller: false,
    image: "/images/products/handmade-card.png",
    shortDescription: "A handmade card to tuck beside any bouquet or box.",
    description:
      "A small, handmade card with petal details. Pair it with a gift, or send it on its own when a parcel feels like too much.",
  },
   {
    slug: "custom-magazine",
    name: "Custom Magazine",
    category: "gift-cards-magazines",
    price: "₹159",
    bestSeller: false,
    image: "/images/products/custom-mag.png",
    shortDescription: "A handmade card to tuck beside any bouquet or box.",
    description:
      "A small, handmade card with petal details. Pair it with a gift, or send it on its own when a parcel feels like too much.",
  },
  {
    slug: "custom-card",
    name: "Custom Card",
    category: "gift-cards-magazines",
    price: "₹89",
    bestSeller: false,
    image: "/images/products/custom-card.png",
    shortDescription: "A handmade card to tuck beside any bouquet or box.",
    description:
      "A small, handmade card with petal details. Pair it with a gift, or send it on its own when a parcel feels like too much.",
  },
 
  {
    slug: "snack-surprise-hamper",
    name: "Snack & Surprise Hamper",
    category: "customized-gifts",
    price: "₹699",
    bestSeller: true,
    image: "/images/products/person-hamper.png",
    shortDescription: "A made-to-order piece when a ready gift is not quite right.",
    description:
      "Share colours, names, and the occasion. We will sketch a custom gift around what you already love in The Little Bow.",
  },
  {
    slug: "custom-birthday-hamper",
    name: "Custom birthday Hamper",
    category: "customized-gifts",
    price: "₹699",
    bestSeller: true,
    image: "/images/products/boy-ham.png",
    shortDescription: "A made-to-order piece when a ready gift is not quite right.",
    description:
      "Share colours, names, and the occasion. We will sketch a custom gift around what you already love in The Little Bow.",
  },
  {
    slug: "pretty-custom-hamper",
    name: "Pretty Custom Hamper",
    category: "customized-gifts",
    price: "₹549",
    bestSeller: true,
    image: "/images/products/pink.png",
    shortDescription: "A made-to-order piece when a ready gift is not quite right.",
    description:
      "Share colours, names, and the occasion. We will sketch a custom gift around what you already love in The Little Bow.",
  },
  {
    slug: "Build-your-hamper",
    name: "Build Your Own Hamper",
    category: "customized-gifts",
    price: "₹499",
    bestSeller: true,
    image: "/images/products/built-ham.png",
    shortDescription: "A made-to-order piece when a ready gift is not quite right.",
    description:
      "Share colours, names, and the occasion. We will sketch a custom gift around what you already love in The Little Bow.",
  },
];

export function getProduct(slug) {
  return products.find((product) => product.slug === slug);
}

export function getBestSellers() {
  return products.filter((product) => product.bestSeller);
}

export function getProductsByCategory(categorySlug) {
  if (!categorySlug) {
    return products;
  }

  return products.filter((product) => product.category === categorySlug);
}

export function getRelatedProducts(slug, limit = 3) {
  const current = getProduct(slug);

  if (!current) {
    return products.slice(0, limit);
  }

  const sameCategory = products.filter(
    (product) => product.category === current.category && product.slug !== slug,
  );

  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }

  const extras = products.filter(
    (product) => product.slug !== slug && product.category !== current.category,
  );

  return [...sameCategory, ...extras].slice(0, limit);
}
