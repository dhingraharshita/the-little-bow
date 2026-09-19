"use client";

import { useMemo, useState } from "react";
import hamperItems from "@/data/hamperItems";

export default function BuildYourOwnHamper() {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart((current) => {
      const existing = current.find((i) => i.id === item.id);

      if (existing) {
        return current.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }

      return [...current, { ...item, quantity: 1 }];
    });
  };

  const decreaseItem = (id) => {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const total = useMemo(() => {
    return cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, [cart]);

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Build Your Own Hamper 🎁
          </h2>

          <p className="mt-3 text-gray-600">
            Pick your favourite gifts and create your perfect hamper.
          </p>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {hamperItems
            .filter((item) => item.available)
            .map((item) => {
              const selected = cart.find((i) => i.id === item.id);

              return (
                <div
                  key={item.id}
                  className="border rounded-2xl overflow-hidden bg-white"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full aspect-square object-cover"
                  />

                  <div className="p-4">
                    <h3 className="font-medium">
                      {item.name}
                    </h3>

                    <p className="mt-1 font-semibold">
                      ₹{item.price}
                    </p>

                    {!selected ? (
                      <button
                        type="button"
                        onClick={() => addItem(item)}
                        className="mt-4 w-full rounded-full border px-4 py-2"
                      >
                        + Add
                      </button>
                    ) : (
                      <div className="mt-4 flex items-center justify-between border rounded-full px-3 py-2">
                        <button
                          type="button"
                          onClick={() => decreaseItem(item.id)}
                          className="text-lg"
                        >
                          −
                        </button>

                        <span>{selected.quantity}</span>

                        <button
                          type="button"
                          onClick={() => addItem(item)}
                          className="text-lg"
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
        </div>

        {/* Selected Hamper */}
        <div className="mt-12 border rounded-2xl p-6">
          <h3 className="text-2xl font-semibold">
            Your Hamper
          </h3>

          {cart.length === 0 ? (
            <p className="mt-4 text-gray-500">
              Your hamper is empty. Add some items above.
            </p>
          ) : (
            <>
              <div className="mt-5 space-y-3">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <p className="font-medium">
                        {item.name}
                      </p>

                      <p className="text-sm text-gray-500">
                        ₹{item.price} × {item.quantity}
                      </p>
                    </div>

                    <p className="font-medium">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t mt-6 pt-5 flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>₹{total}</span>
              </div>

              <button
                type="button"
                onClick={() => {
                  console.log("Custom Hamper:", cart);
                  alert("Your hamper has been prepared!");
                }}
                className="mt-6 w-full rounded-full px-6 py-3 font-medium border"
              >
                Continue to Order →
              </button>
            </>
          )}
        </div>

      </div>
    </section>
  );
}