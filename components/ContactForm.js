"use client";

import { useEffect, useState } from "react";
import { getProduct } from "@/data/products";
import { supabase } from "@/lib/supabaseClient";

export default function ContactForm({ productslug = "" }) {

  const selected = getProduct(productslug);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [customHamper, setCustomHamper] = useState(null);


  /* GET CUSTOM HAMPER DETAILS */

  useEffect(() => {

    const savedHamper =
      localStorage.getItem("customHamperOrder");

    if (savedHamper) {

      try {

        const hamper = JSON.parse(savedHamper);

        setCustomHamper(hamper);

      } catch (error) {

        console.error(
          "Error reading custom hamper:",
          error
        );

      }

    }

  }, []);


  /* CREATE PRODUCT TEXT FOR CUSTOM HAMPER */

  const customHamperText = customHamper
    ? `Custom Hamper: ${customHamper.items
        .map(
          (item) =>
            `${item.name} × ${item.quantity}`
        )
        .join(", ")} — Total ₹${customHamper.total}`
    : "";


  /* SUBMIT ORDER */

  async function handleSubmit(event) {

    event.preventDefault();

    setLoading(true);

    const form = event.currentTarget;

    const formData = new FormData(form);


    const productValue =
      customHamperText ||
      formData.get("product") ||
      "";


    const quantityValue =
      customHamper
        ? customHamper.items.reduce(
            (sum, item) =>
              sum + item.quantity,
            0
          )
        : Number(formData.get("quantity"));


    const order = {

      name: formData.get("name"),

      phone: formData.get("phone"),

      email: formData.get("email"),

      instagram: formData.get("instagram"),


      address: formData.get("address"),

      city: formData.get("city"),

      state: formData.get("state"),

      pincode: formData.get("pincode"),


      product: productValue,

      quantity: quantityValue,

      occasion: formData.get("occasion"),

      delivery_date:
        formData.get("deliveryDate"),

      message:
        formData.get("message"),

      status: "Pending",

    };


    console.log(
      "NEW ORDER:",
      order
    );


    /* SAVE TO SUPABASE */

    const { error } = await supabase
      .from("orders")
      .insert([order]);


    if (error) {

      console.error(
        "ORDER ERROR:",
        error
      );

      alert(
        "Supabase Error: " +
        error.message
      );

      setLoading(false);

      return;
    }


    /* SUCCESS */

    setSubmitted(true);

    setLoading(false);

    form.reset();


    /* REMOVE SAVED CUSTOM HAMPER */

    if (customHamper) {

      localStorage.removeItem(
        "customHamperOrder"
      );

      setCustomHamper(null);

    }

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


        {/* NAME */}

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


        {/* PHONE */}

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


        {/* EMAIL */}

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


        {/* INSTAGRAM */}

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


        {/* ADDRESS */}

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


        {/* CITY / STATE / PINCODE */}

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


        {/* CUSTOM HAMPER DISPLAY */}

        {customHamper ? (

          <div className="border border-beige bg-cream p-4">

            <p className="text-burgundy uppercase tracking-[0.16em] text-sm">
              Your Custom Hamper
            </p>

            <div className="mt-3 space-y-2">

              {customHamper.items.map(
                (item) => (

                  <div
                    key={item.id}
                    className="flex justify-between text-sm"
                  >

                    <span>
                      {item.name} ×{" "}
                      {item.quantity}
                    </span>

                    <span>
                      ₹
                      {item.price *
                        item.quantity}
                    </span>

                  </div>

                )
              )}

            </div>

            <div className="border-t mt-4 pt-3 flex justify-between font-semibold">

              <span>
                Total
              </span>

              <span>
                ₹{customHamper.total}
              </span>

            </div>

          </div>

        ) : (

          <label className="block text-sm">

            <span className="text-burgundy uppercase tracking-[0.16em]">
              Gift / Product
            </span>

            <input
              name="product"
              defaultValue={
                selected
                  ? selected.name
                  : ""
              }
              placeholder="Product name"
              className="mt-2 w-full border border-beige bg-cream px-3 py-3 outline-none"
            />

          </label>

        )}


        {/* QUANTITY */}

        <label className="block text-sm">

          <span className="text-burgundy uppercase tracking-[0.16em]">
            Quantity *
          </span>

          <input
            required
            name="quantity"
            type="number"
            min="1"
            defaultValue={
              customHamper
                ? customHamper.items.reduce(
                    (sum, item) =>
                      sum + item.quantity,
                    0
                  )
                : "1"
            }
            readOnly={!!customHamper}
            className="mt-2 w-full border border-beige bg-cream px-3 py-3 outline-none"
          />

        </label>


        {/* OCCASION */}

        <label className="block text-sm">

          <span className="text-burgundy uppercase tracking-[0.16em]">
            Occasion
          </span>

          <select
            name="occasion"
            className="mt-2 w-full border border-beige bg-cream px-3 py-3 outline-none"
          >

            <option value="">
              Select occasion
            </option>

            <option value="Birthday">
              Birthday
            </option>

            <option value="Anniversary">
              Anniversary
            </option>

            <option value="Valentine's Day">
              Valentine's Day
            </option>

            <option value="Friendship">
              Friendship
            </option>

            <option value="Thank You">
              Thank You
            </option>

            <option value="Other">
              Other
            </option>

          </select>

        </label>


        {/* DELIVERY DATE */}

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


        {/* PERSONAL MESSAGE */}

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


        {/* SUBMIT */}

        <button
          type="submit"
          disabled={loading}
          className="mt-4 bg-burgundy px-6 py-4 text-sm tracking-[0.16em] text-white uppercase disabled:opacity-60"
        >

          {loading
            ? "Submitting..."
            : "Submit Order"}

        </button>


        {/* SUCCESS MESSAGE */}

        {submitted && (

          <div className="mt-6 border border-beige bg-cream p-6 text-center">

            <h3 className="serif text-2xl text-burgundy">
              🎀 Order Request Received!
            </h3>

            <p className="mt-3 text-sm leading-6 text-ink">
              Thank you for choosing The Little Bow!
              We’ve received your order details.
              We’ll review your order and contact
              you regarding confirmation and payment.
            </p>

            <p className="mt-3 text-sm text-burgundy">
              Please note: Orders should be placed
              at least 15 days before the required
              delivery date.
            </p>

          </div>

        )}

      </div>

    </form>

  );
}