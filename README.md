# The Little Bow

Handmade gifting website — Phase 1 (frontend only).

Next.js, React, Tailwind CSS, JavaScript. Ready for GitHub and Vercel. No database, auth, or payments yet.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Add your photos

Put files in `public/images/` (see that folder's README). Then update the `image` path in `data/products.js` or `data/categories.js`.

## Add a product

Edit `data/products.js`. Copy an existing object, give it a new `slug`, and set `category` to a slug from `data/categories.js`.

## Change a price

In `data/products.js`, change `price` from `"₹XXX"` to a real value such as `"₹899"`.
