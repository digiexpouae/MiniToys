"use client";
import { useEffect, useState } from "react";
import {
  ShoppingCart, Heart, Gift, Wallet, MapPin,
  CreditCard, Users, User, Lock, Trash2, ChevronRight, Plus,
} from "lucide-react";
import Order from '../components/order'
import api from "../utils/axiosInterceptor";
import { toast } from "react-toastify";
const NAV = [
  // { id: "orders",     label: "My Orders",          icon: ShoppingCart },
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
  const [form, setForm]= useState({name:'',
    email:'',
current_password:'',
updated_passwrod:'' })

  const [showPw, setShowPw] = useState(false);
  // const [user,setUser]=useState({})




const FetchProfile=async()=>{
  try{
  const response=await api.get({url:'v1/user/get-profile'})
 const user=response.userProfile;

 setForm({name:user.name,
  email:user.email
 })
  console.log("Fetch profile",response)

}

 catch(error){
console.log("Error",error)
}


}
  useEffect(()=>{
FetchProfile()
},[])

const handleUpdate=async ()=>{
 try{
   const formValues={
   name:form.name,
   password:form.current_password,
   updatedpassword:form.updated_passwrod
   }
console.log("Form values",formValues)
const response=await api.put({url:"v1/user/update-profile",data:formValues})
console.log("Profile update Response",response)
toast.success(response.message);

}
catch(error){
  console.log("Error",error)
  toast.error(error)
}
}



 return (
  <div className="min-h-screen bg-gray-50 font-sans flex flex-col md:flex-row">

    {/* ── Sidebar ── */}
    <aside className="w-full md:w-56 md:shrink-0 bg-white border-b md:border-b-0 md:border-r border-gray-100 md:py-6 flex flex-col">
      {/* Mobile: horizontal scroll nav */}
      <nav className="flex md:flex-col flex-row overflow-x-auto md:overflow-visible gap-0.5 px-2 py-3 md:py-0 md:space-y-0.5">
        {NAV.map((item, i) =>
          !item ? (
            <div key={i} className="hidden md:block my-3 border-t border-gray-100" />
          ) : (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`flex-shrink-0 md:w-full flex items-center gap-2 md:gap-3 px-3 py-2 md:py-2.5 rounded-lg text-sm transition-colors whitespace-nowrap ${
                active === item.id
                  ? "text-white bg-[#CF092D] font-medium"
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
    <main className="flex-1 p-5 md:p-10 max-w-2xl w-full mx-auto md:mx-0">
      <h1 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 md:mb-8">My Profile</h1>

      {active === "profile" && (
        <div className="space-y-4 md:space-y-6">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Name</label>
            <input
              value={form?.name}
              onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-1">Email</label>
            <input
              disabled
              value={form?.email}
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 bg-gray-50 cursor-not-allowed"
            />
          </div>

          {/* Mobile CTA */}
          <div className="rounded-xl bg-amber-50 border border-amber-100 p-4 flex flex-col sm:flex-row items-start justify-between gap-3">
            <div>
              <p className="text-sm font-medium text-gray-800">Add mobile number to your profile</p>
              <p className="text-xs text-gray-500 mt-0.5">To enjoy faster login &amp; hassle free shopping!</p>
            </div>
            <button className="shrink-0 flex items-center gap-1.5 bg-[#CF092D] hover:bg-[#CF092D]/70 text-white text-xs font-medium px-4 py-2 rounded-lg transition-colors">
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
              <input
                value={form?.current_password}
                type="password"
                placeholder="Current password"
                onChange={(e) => setForm((prev) => ({ ...prev, current_password: e.target.value }))}
                className="w-full border text-black border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <input
                value={form?.updated_passwrod}
                type="password"
                placeholder="Updated password"
                onChange={(e) => setForm((prev) => ({ ...prev, updated_passwrod: e.target.value }))}
                className="w-full border text-black border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
          )}

          <button
            onClick={() => handleUpdate()}
            className="bg-[#CF092D] hover:bg-[#CF092D]/70 text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-colors"
          >
            Save changes
          </button>

          <button className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-red-500 transition-colors underline underline-offset-2 mt-2">
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