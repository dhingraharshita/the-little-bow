"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ContactForm from "@/components/ContactForm";

function OrderContent() {
  const searchParams = useSearchParams();

  const type = searchParams.get("type");

  return (
    <main className="min-h-screen bg-cream py-16 px-4">
      <div className="max-w-3xl mx-auto">

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

        {type === "custom-hamper" && (
          <p className="mb-6 text-gray-600">
            Complete the details below for your custom hamper.
          </p>
        )}

        <ContactForm />

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