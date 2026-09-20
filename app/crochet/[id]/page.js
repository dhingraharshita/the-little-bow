import Link from "next/link";
import Image from "next/image";
import  crochetItems  from "@/data/crochetp";

export default async function CrochetDetailsPage({ params }) {
  const { id } = await params;

  const item = crochetItems.find(
    (product) => product.id === id
  );

  // If product does not exist
  if (!item) {
    return (
      <main
        style={{
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <h1>Product Not Found</h1>

        <p style={{ marginTop: "10px" }}>
          Sorry, this crochet product does not exist.
        </p>

        <Link
          href="/crochet"
          style={{
            marginTop: "25px",
            padding: "14px 28px",
            background: "#8f1835",
            color: "white",
            textDecoration: "none",
          }}
        >
          Back to Crochet Items
        </Link>
      </main>
    );
  }

  return (
    <main className="product-detail-page">
      <div className="product-detail-container">

        {/* LEFT - IMAGE */}
        <div className="product-detail-image">
          <Image
            src={item.image}
            alt={item.name}
            width={700}
            height={850}
            priority
            className="detail-product-img"
          />
        </div>

        {/* RIGHT - DETAILS */}
        <div className="product-detail-info">

          <p className="product-detail-category">
            CROCHET ITEMS
          </p>

          <h1>{item.name}</h1>

          <p className="product-detail-price">
            ₹{item.price}
          </p>

          <p className="product-detail-description">
            {item.description}
          </p>

          <div className="product-detail-buttons">

            {/* ORDER NOW */}
            <Link
              href={`/order?product=${encodeURIComponent(
                item.name
              )}&price=${item.price}`}
              className="order-now-button"
            >
              ORDER NOW
            </Link>

            {/* BACK / CUSTOMIZE */}
            <Link
              href="/crochet"
              className="customize-button"
            >
              BACK TO CROCHET
            </Link>

          </div>

        </div>
      </div>
    </main>
  );
}