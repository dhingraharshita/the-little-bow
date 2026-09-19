"use client";

import { useState } from "react";
import { getProduct } from "@/data/products";
import { supabase } from "@/lib/supabaseClient";

export default function ContactForm({ productslug = "" }) {
  const selected = getProduct(productslug);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const order = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      instagram: formData.get("instagram"),

      address: formData.get("address"),
      city: formData.get("city"),
      state: formData.get("state"),
      pincode: formData.get("pincode"),

      product: formData.get("product"),
      quantity: Number(formData.get("quantity")),
      occasion: formData.get("occasion"),
      delivery_date: formData.get("deliveryDate"),
      message: formData.get("message"),

      status: "Pending",
    };

    console.log("NEW ORDER:", order);

    const { error } = await supabase
      .from("orders")
      .insert([order]);

    if (error) {
      console.error("ORDER ERROR:", error);
      alert("Supabase Error: " + error.message);
      setLoading(false);
      return;
   }

    setSubmitted(true);
    setLoading(false);
    form.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-beige bg-ivory p-6"
    >
      <div className="grid gap-5">

        {/* CUSTOMER DETAILS */}

        <h2 className="serif text-2xl text-ink">
          Customer Details
        </h2>

        <label className="block text-sm">
          <span className="text-burgundy uppercase tracking-[0.16em]">
            Full Name *
          </span>

          <input
            required
            name="name"
            type="text"
            placeholder="Your full name"
            className="mt-2 w-full border border-beige bg-cream px-3 py-3 outline-none"
          />
        </label>

        <label className="block text-sm">
          <span className="text-burgundy uppercase tracking-[0.16em]">
            Mobile Number *
          </span>

          <input
            required
            name="phone"
            type="tel"
            placeholder="10-digit mobile number"
            className="mt-2 w-full border border-beige bg-cream px-3 py-3 outline-none"
          />
        </label>

        <label className="block text-sm">
          <span className="text-burgundy uppercase tracking-[0.16em]">
            Email Address
          </span>

          <input
            name="email"
            type="email"
            placeholder="your@email.com"
            className="mt-2 w-full border border-beige bg-cream px-3 py-3 outline-none"
          />
        </label>

        <label className="block text-sm">
          <span className="text-burgundy uppercase tracking-[0.16em]">
            Instagram ID
          </span>

          <input
            name="instagram"
            type="text"
            placeholder="@yourusername"
            className="mt-2 w-full border border-beige bg-cream px-3 py-3 outline-none"
          />
        </label>


        {/* DELIVERY DETAILS */}

        <h2 className="serif mt-5 text-2xl text-ink">
          Delivery Details
        </h2>

        <label className="block text-sm">
          <span className="text-burgundy uppercase tracking-[0.16em]">
            Full Address *
          </span>

          <textarea
            required
            name="address"
            rows="3"
            placeholder="House/Flat number, Street, Area"
            className="mt-2 w-full border border-beige bg-cream px-3 py-3 outline-none"
          />
        </label>

        <div className="grid gap-5 md:grid-cols-3">

          <label className="block text-sm">
            <span className="text-burgundy uppercase tracking-[0.16em]">
              City *
            </span>

            <input
              required
              name="city"
              type="text"
              placeholder="City"
              className="mt-2 w-full border border-beige bg-cream px-3 py-3 outline-none"
            />
          </label>

          <label className="block text-sm">
            <span className="text-burgundy uppercase tracking-[0.16em]">
              State *
            </span>

            <input
              required
              name="state"
              type="text"
              placeholder="State"
              className="mt-2 w-full border border-beige bg-cream px-3 py-3 outline-none"
            />
          </label>

          <label className="block text-sm">
            <span className="text-burgundy uppercase tracking-[0.16em]">
              Pincode *
            </span>

            <input
              required
              name="pincode"
              type="text"
              inputMode="numeric"
              placeholder="Pincode"
              className="mt-2 w-full border border-beige bg-cream px-3 py-3 outline-none"
            />
          </label>

        </div>


        {/* ORDER DETAILS */}

        <h2 className="serif mt-5 text-2xl text-ink">
          Order Details
        </h2>

        <label className="block text-sm">
          <span className="text-burgundy uppercase tracking-[0.16em]">
            Gift / Product
          </span>

          <input
            name="product"
            defaultValue={selected ? selected.name : ""}
            placeholder="Product name"
            className="mt-2 w-full border border-beige bg-cream px-3 py-3 outline-none"
          />
        </label>

        <label className="block text-sm">
          <span className="text-burgundy uppercase tracking-[0.16em]">
            Quantity *
          </span>

          <input
            required
            name="quantity"
            type="number"
            min="1"
            defaultValue="1"
            className="mt-2 w-full border border-beige bg-cream px-3 py-3 outline-none"
          />
        </label>

        <label className="block text-sm">
          <span className="text-burgundy uppercase tracking-[0.16em]">
            Occasion
          </span>

          <select
            name="occasion"
            className="mt-2 w-full border border-beige bg-cream px-3 py-3 outline-none"
          >
            <option value="">Select occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Valentine's Day">Valentine's Day</option>
            <option value="Friendship">Friendship</option>
            <option value="Thank You">Thank You</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label className="block text-sm">
          <span className="text-burgundy uppercase tracking-[0.16em]">
            Preferred Delivery Date
          </span>

          <input
            name="deliveryDate"
            type="date"
            className="mt-2 w-full border border-beige bg-cream px-3 py-3 outline-none"
          />
        </label>

        <label className="block text-sm">
          <span className="text-burgundy uppercase tracking-[0.16em]">
            Personalised Message
          </span>

          <textarea
            name="message"
            rows="4"
            placeholder="Write the message you want on the gift..."
            className="mt-2 w-full border border-beige bg-cream px-3 py-3 outline-none"
          />
        </label>


        {/* SUBMIT BUTTON */}

        <button
          type="submit"
          disabled={loading}
          className="mt-4 bg-burgundy px-6 py-4 text-sm tracking-[0.16em] text-white uppercase disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Submit Order"}
        </button>


        {/* SUCCESS MESSAGE */}

        {submitted && (
          <div className="mt-6 border border-beige bg-cream p-6 text-center">

            <h3 className="serif text-2xl text-burgundy">
              🎀 Order Request Received!
            </h3>

            <p className="mt-3 text-sm leading-6 text-ink">
              Thank you for choosing The Little Bow! We’ve received
              your order details. We’ll review your order and contact
              you regarding confirmation and payment.
            </p>

            <p className="mt-3 text-sm text-burgundy">
              Please note: Orders should be placed at least 15 days
              before the required delivery date.
            </p>

          </div>
        )}

      </div>
    </form>
  );
}