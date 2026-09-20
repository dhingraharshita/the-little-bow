"use client";

import Link from "next/link";
import Image from "next/image";

import crochetItems from "@/data/crochetp";

export default function CrochetPage() {
  return (
    <main className="crochet-page">

      {/* HEADER */}
      <section className="crochet-hero">
        <p className="crochet-small-title">
          HANDMADE WITH LOVE
        </p>

        <h1>Crochet Items 🧶</h1>

        <p>
          Cute handmade crochet gifts made specially
          for your special moments.
        </p>
      </section>

      {/* PRODUCTS */}
      <section className="crochet-products">

        {crochetItems.map((item) => (
          <div
            className="crochet-card"
            key={item.id}
          >

            {/* IMAGE */}
            <div className="crochet-card-image">
              <Image
                src={item.image}
                alt={item.name}
                width={500}
                height={600}
              />
            </div>

            {/* CONTENT */}
            <div className="crochet-card-content">

              <p className="crochet-category">
                CROCHET ITEMS
              </p>

              <h2>{item.name}</h2>

              <p className="crochet-price">
                ₹{item.price}
              </p>

              <p className="crochet-description">
                {item.description}
              </p>

              {/* BUTTONS */}
              <div className="crochet-buttons">

                {/* VIEW DETAILS */}
                <Link
                  href={`/crochet/${item.id}`}
                  className="view-details-button"
                >
                  VIEW DETAILS
                </Link>

                {/* ORDER NOW */}
                <Link
                  href={`/order?product=${encodeURIComponent(
                    item.name
                  )}&price=${item.price}`}
                  className="order-now-button"
                >
                  ORDER NOW
                </Link>

              </div>

            </div>
          </div>
        ))}

      </section>
    </main>
  );
}