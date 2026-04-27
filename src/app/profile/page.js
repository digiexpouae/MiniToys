"use client";
import { useState } from "react";
import {
  ShoppingCart, Heart, Gift, Wallet, MapPin,
  CreditCard, Users, User, Lock, Trash2, ChevronRight, Plus,
} from "lucide-react";

const NAV = [
  { id: "orders",     label: "My Orders",          icon: ShoppingCart },
  { id: "wishlist",   label: "Wishlist",            icon: Heart },
  { id: "registry",   label: "Gift Registry",       icon: Gift },
  null, // divider
  { id: "wallet",     label: "Wallet",              icon: Wallet },
  { id: "addresses",  label: "Delivery Addresses",  icon: MapPin },
  { id: "cards",      label: "Saved Cards",         icon: CreditCard },
  { id: "invite",     label: "Invite a friend",     icon: Users },
  { id: "profile",    label: "My Profile",          icon: User },
];

export default function MyProfile() {
  const [active, setActive] = useState("profile");
  const [form, setForm]     = useState({ first: "", last: "" });
  const [showPw, setShowPw] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex">
      {/* ── Sidebar ── */}
      <aside className="w-56 shrink-0 bg-white border-r border-gray-100 py-6 flex flex-col">
        {/* Avatar */}
        <div className="flex items-center gap-3 px-5 mb-8">
          <div className="w-9 h-9 rounded-full    bg-[#CF092D] text-white text-sm font-semibold flex items-center justify-center uppercase">
            {form.first[0]}
          </div>
          <span className="text-sm font-medium text-gray-800 truncate">
            {form.first} {form.last}
          </span>
        </div>

        <nav className="flex-1 space-y-0.5 px-2">
          {NAV.map((item, i) =>
            !item ? (
              <div key={i} className="my-3 border-t border-gray-100" />
            ) : (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  active === item.id
                    ? "text-white  bg-[#CF092D] font-medium"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <item.icon size={16} strokeWidth={1.8} />
                {item.label}
              </button>
            )
          )}
        </nav>
      </aside>

      {/* ── Main ── */}
      <main className="flex-1 p-10 max-w-2xl">
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">My Profile</h1>

        {active === "profile" && (
          <div className="space-y-6">
            {/* Name row */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "First name", key: "first" },
                { label: "Last name",  key: "last"  },
              ].map(({ label, key }) => (
                <div key={key}>
                  <label className="block text-xs text-gray-500 mb-1">{label}</label>
                  <input
                    value={form["first" | "last"]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>
              ))}
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs text-gray-500 mb-1">Email</label>
              <p className="text-sm text-gray-700"></p>
            </div>

            {/* Mobile CTA */}
            <div className="rounded-xl bg-amber-50 border border-amber-100 p-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-gray-800">Add mobile number to your profile</p>
                <p className="text-xs text-gray-500 mt-0.5">To enjoy faster login &amp; hassle free shopping!</p>
              </div>
              <button className="shrink-0 flex items-center gap-1.5    bg-[#CF092D] hover:bg-[#CF092D]/70 text-white text-xs font-medium px-4 py-2 rounded-lg transition-colors">
                <Plus size={13} /> Add Mobile Number
              </button>
            </div>

            {/* Update password */}
            <button
              onClick={() => setShowPw(!showPw)}
              className="w-full flex items-center justify-between border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <span className="flex items-center gap-2.5">
                <Lock size={15} className="text-gray-400" /> Update password
              </span>
              <ChevronRight size={15} className="text-gray-400" />
            </button>

            {showPw && (
              <div className="space-y-3 pl-1">
                {["Current password", "New password", "Confirm new password"].map((ph) => (
                  <input
                    key={ph}
                    type="password"
                    placeholder={ph}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                ))}
                <button className="   bg-[#CF092D] hover:bg-[#CF092D]/70 text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors">
                  Save password
                </button>
              </div>
            )}

            {/* Save */}
            <button className="  bg-[#CF092D] hover:bg-[#CF092D]/70 text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-colors">
              Save changes
            </button>

            {/* Delete */}
            <button className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-red-500 transition-colors underline underline-offset-2 mt-4">
              <Trash2 size={13} /> Delete Account
            </button>
          </div>
        )}

        {active !== "profile" && (
          <div className="flex flex-col items-center justify-center h-64 text-gray-400 text-sm gap-2">
            <span className="text-4xl">🚧</span>
            <p>This section is under construction.</p>
          </div>
        )}
      </main>
    </div>
  );
}