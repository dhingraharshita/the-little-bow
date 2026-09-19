"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function AdminPage() {
  const router = useRouter();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [saving, setSaving] = useState(false);

  // -----------------------------
  // FETCH ORDERS
  // -----------------------------
  async function fetchOrders() {
    setLoading(true);

    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching orders:", error);
      setLoading(false);
      return;
    }

    setOrders(data || []);
    setLoading(false);
  }

  // -----------------------------
  // CHECK LOGIN + FETCH ORDERS
  // -----------------------------
  useEffect(() => {
    async function checkAdmin() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.replace("/admin/login");
        return;
      }

      fetchOrders();
    }

    checkAdmin();
  }, [router]);

  // -----------------------------
  // REALTIME NEW ORDERS
  // -----------------------------
  useEffect(() => {
    const channel = supabase
      .channel("orders-realtime")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "orders",
        },
        () => {
          fetchOrders();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // -----------------------------
  // LOGOUT
  // -----------------------------
  async function handleLogout() {
    await supabase.auth.signOut();
    router.replace("/admin/login");
  }

  // -----------------------------
  // CHANGE STATUS
  // -----------------------------
  async function updateStatus(orderId, newStatus) {
    setSaving(true);

    const { error } = await supabase
      .from("orders")
      .update({
        status: newStatus,
      })
      .eq("id", orderId);

    if (error) {
      console.error("Status update error:", error);
      alert("Could not update order status.");
      setSaving(false);
      return;
    }

    // Update screen immediately
    setOrders((currentOrders) =>
      currentOrders.map((order) =>
        order.id === orderId
          ? { ...order, status: newStatus }
          : order
      )
    );

    setSelectedOrder((current) =>
      current ? { ...current, status: newStatus } : current
    );

    setSaving(false);
  }

  // -----------------------------
  // SAVE ORDER DETAILS
  // -----------------------------
  async function saveOrder() {
    if (!selectedOrder) return;

    setSaving(true);

    // Don't send system fields back
    const editableData = { ...selectedOrder };

    delete editableData.id;
    delete editableData.created_at;
    delete editableData.updated_at;

    const { data, error } = await supabase
      .from("orders")
      .update(editableData)
      .eq("id", selectedOrder.id)
      .select()
      .single();

    if (error) {
      console.error("Save order error:", error);
      alert("Could not save changes.\n\n" + error.message);
      setSaving(false);
      return;
    }

    setOrders((currentOrders) =>
      currentOrders.map((order) =>
        order.id === selectedOrder.id ? data : order
      )
    );

    setSelectedOrder(data);

    alert("Order updated successfully!");
    setSaving(false);
  }

  // -----------------------------
  // EDIT FIELD
  // -----------------------------
  function handleFieldChange(field, value) {
    setSelectedOrder((current) => ({
      ...current,
      [field]: value,
    }));
  }

  // -----------------------------
  // STATUS BADGE
  // -----------------------------
  function getStatusClass(status) {
    if (status === "completed") {
      return "bg-green-100 text-green-700";
    }

    if (status === "cancelled") {
      return "bg-red-100 text-red-700";
    }

    return "bg-pink-100 text-burgundy";
  }

  return (
    <main className="min-h-screen bg-cream p-6 md:p-8">

      {/* HEADER */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>
          <h1 className="serif text-4xl text-burgundy">
            The Little Bow — Admin
          </h1>

          <p className="mt-2 text-ink">
            Manage customer orders
          </p>
        </div>

        <div className="flex gap-3">

          <button
            onClick={fetchOrders}
            className="rounded border border-burgundy px-5 py-2 text-burgundy hover:bg-burgundy hover:text-white"
          >
            Refresh
          </button>

          <button
            onClick={handleLogout}
            className="rounded bg-burgundy px-5 py-2 text-white"
          >
            Logout
          </button>

        </div>
      </div>

      {/* LOADING */}
      {loading ? (
        <p className="mt-8">Loading orders...</p>
      ) : orders.length === 0 ? (

        <div className="mt-8 rounded-lg border border-beige bg-ivory p-8">
          <p>No orders yet.</p>
        </div>

      ) : (

        <div className="mt-8 overflow-x-auto rounded-xl border border-beige bg-ivory shadow-sm">

          <table className="w-full">

            <thead>
              <tr className="border-b border-beige text-left">

                <th className="p-4">Name</th>

                <th className="p-4">Phone</th>

                <th className="p-4">Email</th>

                <th className="p-4">Product</th>

                <th className="p-4">Quantity</th>

                <th className="p-4">Delivery Date</th>

                <th className="p-4">Status</th>

                <th className="p-4">Action</th>

              </tr>
            </thead>

            <tbody>

              {orders.map((order) => (

                <tr
                  key={order.id}
                  className="border-b border-beige hover:bg-white"
                >

                  <td className="p-4">
                    {order.name || "-"}
                  </td>

                  <td className="p-4">
                    {order.phone || "-"}
                  </td>

                  <td className="p-4">
                    {order.email || "-"}
                  </td>

                  <td className="p-4">
                    {order.product || "-"}
                  </td>

                  <td className="p-4">
                    {order.quantity || "-"}
                  </td>

                  <td className="p-4">
                    {order.delivery_date || "-"}
                  </td>

                  {/* STATUS */}
                  <td className="p-4">

                    <select
                      value={order.status || "pending"}
                      onChange={(e) =>
                        updateStatus(order.id, e.target.value)
                      }
                      className={`rounded-full border-none px-4 py-2 text-sm font-medium outline-none ${getStatusClass(
                        order.status
                      )}`}
                    >

                      <option value="pending">
                        Pending
                      </option>

                      <option value="completed">
                        Completed
                      </option>

                      <option value="cancelled">
                        Cancelled
                      </option>

                    </select>

                  </td>

                  {/* VIEW / EDIT */}
                  <td className="p-4">

                    <button
                      onClick={() => setSelectedOrder(order)}
                      className="rounded bg-burgundy px-4 py-2 text-sm text-white hover:opacity-90"
                    >
                      View / Edit
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

      {/* -------------------------------- */}
      {/* ORDER DETAILS MODAL */}
      {/* -------------------------------- */}

      {selectedOrder && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

          <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-ivory p-6 shadow-xl">

            {/* MODAL HEADER */}

            <div className="flex items-center justify-between border-b border-beige pb-4">

              <div>

                <h2 className="serif text-3xl text-burgundy">
                  Order Details
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Order ID: {selectedOrder.id}
                </p>

              </div>

              <button
                onClick={() => setSelectedOrder(null)}
                className="text-2xl text-gray-500 hover:text-black"
              >
                ×
              </button>

            </div>

            {/* DETAILS */}

            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">

              {Object.entries(selectedOrder)
                .filter(
                  ([key]) =>
                    key !== "id" &&
                    key !== "created_at" &&
                    key !== "updated_at"
                )
                .map(([key, value]) => (

                  <div key={key}>

                    <label className="mb-2 block text-sm font-medium capitalize text-ink">
                      {key.replaceAll("_", " ")}
                    </label>

                    {key === "status" ? (

                      <select
                        value={value || "pending"}
                        onChange={(e) =>
                          handleFieldChange(
                            key,
                            e.target.value
                          )
                        }
                        className="w-full rounded-lg border border-beige bg-white p-3 outline-none"
                      >

                        <option value="pending">
                          Pending
                        </option>

                        <option value="completed">
                          Completed
                        </option>

                        <option value="cancelled">
                          Cancelled
                        </option>

                      </select>

                    ) : key === "message" ||
                      key === "address" ||
                      key === "notes" ||
                      key === "customization" ? (

                      <textarea
                        value={value ?? ""}
                        onChange={(e) =>
                          handleFieldChange(
                            key,
                            e.target.value
                          )
                        }
                        rows={4}
                        className="w-full rounded-lg border border-beige bg-white p-3 outline-none focus:border-burgundy"
                      />

                    ) : (

                      <input
                        type="text"
                        value={value ?? ""}
                        onChange={(e) =>
                          handleFieldChange(
                            key,
                            e.target.value
                          )
                        }
                        className="w-full rounded-lg border border-beige bg-white p-3 outline-none focus:border-burgundy"
                      />

                    )}

                  </div>

                ))}

            </div>

            {/* BUTTONS */}

            <div className="mt-8 flex justify-end gap-3 border-t border-beige pt-5">

              <button
                onClick={() => setSelectedOrder(null)}
                className="rounded-lg border border-burgundy px-5 py-2 text-burgundy"
              >
                Close
              </button>

              <button
                onClick={saveOrder}
                disabled={saving}
                className="rounded-lg bg-burgundy px-6 py-2 text-white disabled:opacity-50"
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>

            </div>

          </div>
        </div>

      )}

    </main>
  );
}