"use client";

import { useState } from "react";

export default function CustomizeForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-beige bg-cream px-6 py-10">
        <p className="serif text-3xl text-ink">Your custom request is noted.</p>
        <p className="mt-3 text-sm leading-7 text-ink/70">
          No payment or inbox is connected yet. Screenshot this page or send the same details to
          Instagram so nothing is lost.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 border border-beige bg-ivory p-6">
      <label className="block text-sm">
        <span className="text-[11px] tracking-[0.16em] text-burgundy uppercase">Your name</span>
        <input
          required
          name="name"
          className="mt-2 w-full border border-beige bg-cream px-3 py-3 outline-none focus:border-burgundy"
        />
      </label>
      <label className="block text-sm">
        <span className="text-[11px] tracking-[0.16em] text-burgundy uppercase">Occasion</span>
        <input
          required
          name="occasion"
          placeholder="Birthday, anniversary, thank you..."
          className="mt-2 w-full border border-beige bg-cream px-3 py-3 outline-none focus:border-burgundy"
        />
      </label>
      <label className="block text-sm">
        <span className="text-[11px] tracking-[0.16em] text-burgundy uppercase">Who is it for?</span>
        <input
          required
          name="recipient"
          className="mt-2 w-full border border-beige bg-cream px-3 py-3 outline-none focus:border-burgundy"
        />
      </label>
      <label className="block text-sm">
        <span className="text-[11px] tracking-[0.16em] text-burgundy uppercase">Colours or notes</span>
        <textarea
          required
          name="notes"
          rows={5}
          className="mt-2 w-full border border-beige bg-cream px-3 py-3 outline-none focus:border-burgundy"
        />
      </label>
      <button
        type="submit"
        className="bg-burgundy px-6 py-3.5 text-xs tracking-[0.22em] text-ivory uppercase hover:bg-wine"
      >
        Request custom gift
      </button>
    </form>
  );
}
