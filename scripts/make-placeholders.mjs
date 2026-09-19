import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function placeholder({ title, hint, width = 800, height = 1000, accent = "#7A2433" }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="${title}">
  <rect width="100%" height="100%" fill="#EDE4D8"/>
  <rect x="28" y="28" width="${width - 56}" height="${height - 56}" fill="none" stroke="${accent}" stroke-width="1.5" opacity="0.55"/>
  <rect x="48" y="48" width="${width - 96}" height="${height - 96}" fill="#F6F0E8"/>
  <path d="M${width / 2 - 28} ${height / 2 - 36} C${width / 2 - 58} ${height / 2 - 72}, ${width / 2 - 8} ${height / 2 - 78}, ${width / 2} ${height / 2 - 42} C${width / 2 + 8} ${height / 2 - 78}, ${width / 2 + 58} ${height / 2 - 72}, ${width / 2 + 28} ${height / 2 - 36} C${width / 2 + 52} ${height / 2 - 10}, ${width / 2 + 10} ${height / 2 + 8}, ${width / 2} ${height / 2 + 18} C${width / 2 - 10} ${height / 2 + 8}, ${width / 2 - 52} ${height / 2 - 10}, ${width / 2 - 28} ${height / 2 - 36} Z" fill="${accent}" opacity="0.88"/>
  <circle cx="${width / 2}" cy="${height / 2 - 8}" r="7" fill="#B8943F"/>
  <text x="50%" y="${height / 2 + 64}" text-anchor="middle" font-family="Georgia, serif" font-size="28" fill="#2C1810">${title}</text>
  <text x="50%" y="${height / 2 + 96}" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="#7A2433">${hint}</text>
</svg>
`;
}

const files = {
  "public/images/brand/logo-mark.svg": placeholder({
    title: "The Little Bow",
    hint: "Replace with your logo",
    width: 800,
    height: 800,
  }),
  "public/images/hero/hero-main.svg": placeholder({
    title: "Hero photograph",
    hint: "Replace with your best product photo",
    width: 1200,
    height: 1500,
  }),
  "public/images/about/studio.svg": placeholder({
    title: "About photograph",
    hint: "Replace with a making / packing photo",
    width: 1000,
    height: 1200,
  }),
};

const categories = [
  ["bouquets", "Bouquets"],
  ["chocolate-bouquets", "Chocolate Bouquets"],
  ["pipe-cleaner-flowers", "Pipe Cleaner Flowers"],
  ["gift-hampers", "Gift Hampers"],
  ["personalized-gifts", "Personalized Gifts"],
  ["cards-and-notes", "Cards & Notes"],
  ["crochet-bouquets", "Crochet Bouquets"],
  ["hampers-girls", "Hampers for Girls"],
  ["hampers-boys", "Hampers for Boys"],
  ["personalized-hampers", "Personalized Hampers"],
];

for (const [slug, title] of categories) {
  files[`public/images/categories/${slug}.svg`] = placeholder({
    title,
    hint: `Add photo: categories/${slug}.jpg`,
  });
}

const products = [
  ["blush-handmade-bouquet", "Blush Handmade Bouquet"],
  ["wine-rose-bouquet", "Wine Rose Bouquet"],
  ["soft-crochet-bouquet", "Soft Crochet Bouquet"],
  ["ivory-pipe-cleaner-bloom", "Ivory Pipe Cleaner Bloom"],
  ["berry-pipe-cleaner-bunch", "Berry Pipe Cleaner Bunch"],
  ["cocoa-kiss-bouquet", "Cocoa Kiss Bouquet"],
  ["midnight-chocolate-wrap", "Midnight Chocolate Wrap"],
  ["rose-girl-hamper", "Rose Girl Hamper"],
  ["gentle-boy-hamper", "Gentle Boy Hamper"],
  ["initials-personalized-hamper", "Initials Personalized Hamper"],
  ["pressed-petal-card", "Pressed Petal Card"],
  ["little-bow-gift-card", "Little Bow Gift Card"],
  ["custom-keepsake-gift", "Custom Keepsake Gift"],
  ["garden-mixed-bouquet", "Garden Mixed Bouquet"],
];

for (const [slug, title] of products) {
  files[`public/images/products/${slug}.svg`] = placeholder({
    title,
    hint: `Add photo: products/${slug}.jpg`,
  });
}

for (let i = 1; i <= 6; i += 1) {
  files[`public/images/instagram/post-${i}.svg`] = placeholder({
    title: `@thelittlebow._`,
    hint: `Add photo: instagram/post-${i}.jpg`,
    width: 800,
    height: 800,
    accent: i % 2 === 0 ? "#5C1A26" : "#7A2433",
  });
}

for (const [rel, contents] of Object.entries(files)) {
  const full = join(root, rel);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, contents);
}

console.log(`Wrote ${Object.keys(files).length} placeholder images`);
