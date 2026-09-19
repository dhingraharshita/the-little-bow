"use client";

import { useSearchParams } from "next/navigation";
import ContactForm from "@/components/ContactForm";

export default function OrderPage() {
  const searchParams = useSearchParams();

  const type = searchParams.get("type");

  return (
    <main className="min-h-screen bg-cream py-16 px-4">

      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-10">

          <p className="text-burgundy uppercase tracking-[0.2em] text-sm">
            The Little Bow
          </p>

          <h1 className="serif text-4xl mt-3 text-ink">
            Place Your Order
          </h1>

          {type === "custom-hamper" && (
            <p className="mt-3 text-gray-600">
              Complete the details below for your custom hamper.
            </p>
          )}

        </div>

        <ContactForm />

      </div>

    </main>
  );
}