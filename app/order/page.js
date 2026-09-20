"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ContactForm from "@/components/ContactForm";

function OrderContent() {
  const searchParams = useSearchParams();

  const type = searchParams.get("type");
  const product = searchParams.get("product");
  const price = searchParams.get("price");

  const isCustomHamper = type === "custom-hamper";

  return (
    <main className="min-h-screen bg-cream py-16 px-4">
      <div className="max-w-3xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">
          <p className="text-burgundy uppercase tracking-widest">
            The Little Bow
          </p>

          <h1 className="serif text-4xl mt-3 text-ink">
            Place Your Order
          </h1>

          <p className="mt-3 text-gray-600">
            Complete the details below for your order.
          </p>
        </div>

        {/* CUSTOM HAMPER MESSAGE */}
        {isCustomHamper && (
          <p className="mb-6 text-gray-600">
            Complete the details below for your custom hamper.
          </p>
        )}

        {/* PRODUCT ORDER MESSAGE */}
        {!isCustomHamper && product && (
          <div className="mb-8 border border-beige bg-cream p-5">
            <p className="text-burgundy text-sm uppercase tracking-widest">
              Your Selected Product
            </p>

            <div className="mt-3 flex items-center justify-between">
              <span className="serif text-xl text-ink">
                {product}
              </span>

              {price && (
                <span className="text-lg text-burgundy">
                  ₹{price}
                </span>
              )}
            </div>
          </div>
        )}

        <ContactForm
          productName={product || ""}
          productPrice={price || ""}
          isCustomHamper={isCustomHamper}
        />

      </div>
    </main>
  );
}

export default function OrderPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OrderContent />
    </Suspense>
  );
}