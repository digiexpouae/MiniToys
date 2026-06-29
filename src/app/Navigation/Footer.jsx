import React from 'react';
// import { Pinterest } from 'lucide-react';
import Image from 'next/image';
import Dropdown from './Dropdown';
import Link from 'next/link';
// export default function NewsletterFooter() {
//     const socialMedia = [
//         {
//             icon: "/assets/facebook.svg",
//             link: "/"
//         },
//         {
//             icon: "/assets/in.svg",
//             link: "/"
//         },
//         {

//             icon: "/assets/x.svg",
//             link: "/"
//         }
//         ,
//         {
//             icon: "/assets/instagram.svg",
//             link: "/"
//         }
//     ]




//     return (
//         <div className="w-full bg-[#FFD265] relative overflow-hidden">
//             {/* Decorative Squiggles */}
//             <div className="absolute  top-0 left-0 right-0 z-10">
//                 <Image src="/assets/transparent-curve3.svg" alt="curve" width={1920} height={10} />
//             </div>

//             <div className='absolute translate-y-2/3 top-2 -right-16 md:right-0 '>
//                 <Image src="/assets/elem06.svg" alt="curve" width={120} height={120} />
//             </div>
//             <div className='absolute top-2 left-1/6'>
//                 <Image src="/assets/elem07.svg" alt="curve" width={120} height={120} />
//             </div>
//             <div className='absolute translate-y-2/3 top-2/3 md:top-1/6 -left-24 md:left-0'>
//                 <Image src="/assets/elem05.svg" alt="curve" width={180} height={120} />
//             </div>


//             {/* Main Content */}
//             <div className="max-w-4xl mx-auto px-4 py-16 relative z-10">
//                 {/* Newsletter Section */}
//                 <div className="text-center mb-12">
//                     <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
//                         Sign Up to the Newsletter
//                     </h2>
//                     <p className="text-slate-800 text-sm md:text-base mb-6">
//                         Be the first to get notified about New Arrivals, Discounts, and Bargain Deals!
//                     </p>

//                     {/* Newsletter Form */}
//                     <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto justify-center items-center">
//                         <input
//                             type="email"
//                             placeholder="Add Your E-Mail Here"
//                             className="w-full sm:w-64 px-4 py-2.5 text-zinc-800 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.35)] border-2 border-zinc-800 bg-white focus:outline-none  text-sm"
//                         />
//                         <button className="w-full sm:w-auto px-8 py-2.5 bg-[#DA3C24] text-white font-semibold rounded-full hover:from-pink-600 hover:to-red-600 transition-all shadow-md  text-sm">
//                             Subscribe
//                         </button>
//                     </div>
//                 </div>

//                 {/* Footer Links */}
//                 <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8 text-sm">
//                     {/* Home Column */}
//                     <div>
//                         <h3 className="font-bold text-slate-900 mb-3">Home</h3>
//                         <ul className="space-y-2 text-slate-700">
//                             <li><a href="#" className="hover:text-slate-900 transition-colors">Best Sellers</a></li>
//                             <li><a href="#" className="hover:text-slate-900 transition-colors">Trending</a></li>
//                             <li><a href="#" className="hover:text-slate-900 transition-colors">Browse Wrap</a></li>
//                             <li><a href="#" className="hover:text-slate-900 transition-colors">Marvel/Multiverse</a></li>
//                         </ul>
//                     </div>

//                     {/* Shop Column */}
//                     <div>
//                         <h3 className="font-bold text-slate-900 mb-3">Shop</h3>
//                         <ul className="space-y-2 text-slate-700">
//                             <li><a href="#" className="hover:text-slate-900 transition-colors">Best Sellers</a></li>
//                             <li><a href="#" className="hover:text-slate-900 transition-colors">New Collection</a></li>
//                             <li><a href="#" className="hover:text-slate-900 transition-colors">Merch Kn</a></li>
//                         </ul>
//                     </div>

//                     {/* Benefits Column */}
//                     <div>
//                         <h3 className="font-bold text-slate-900 mb-3">Benefits</h3>
//                         <ul className="space-y-2 text-slate-700">
//                             <li><a href="#" className="hover:text-slate-900 transition-colors">Our Story</a></li>
//                             <li><a href="#" className="hover:text-slate-900 transition-colors">Blog</a></li>
//                             <li><a href="#" className="hover:text-slate-900 transition-colors">FAQ</a></li>
//                             <li><a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a></li>
//                         </ul>
//                     </div>

//                     {/* Contact Us Column */}
//                     <div>
//                         <h3 className="font-bold text-slate-900 mb-3">Contact Us</h3>
//                         <ul className="space-y-2 text-slate-700">
//                             <li><a href="#" className="hover:text-slate-900 transition-colors">Customer Service</a></li>
//                             <li><a href="#" className="hover:text-slate-900 transition-colors">Live Help</a></li>
//                             <li><a href="#" className="hover:text-slate-900 transition-colors">Returns & Exchanges</a></li>
//                             <li><a href="#" className="hover:text-slate-900 transition-colors">Shipping</a></li>
//                         </ul>
//                     </div>
//                     <div className='w-48'>
//                         <select className='border w-full border-zinc-800 text-zinc-800 px-4 py-3 rounded-full'>
//                             <option value="USD">United States USD $</option>
//                             <option value="EUR">Europe EUR €</option>
//                             <option value="GBP">United Kingdom GBP £</option>
//                         </select>

//                     </div>

//                 </div>

//                 {/* Bottom Section */}
//                 <div className="flex flex-col md:flex-row justify-between items-center pt-6 ">
//                     {/* Social Icons */}

//                     {/* Latest Items Link */}
//                     <div className="mb-4 md:mb-0">
//                         <div className="flex gap-4 mb-4 md:mb-0">
//                             {socialMedia.map((item, index) => (
//                                 <Link
//                                     key={index}
//                                     href={item.link}
//                                     className="hover:scale-110 transition-transform"
//                                 >
//                                     <Image
//                                         src={item.icon}
//                                         alt="social icon"
//                                         width={index === 0 ? 12 : 20}
//                                         height={index === 0 ? 12 : 20}
//                                     />
//                                 </Link>
//                             ))}
//                         </div>

//                     </div>

//                     {/* Payment Icons */}
//                     <div className="flex items-center">
//                         <Image src="/assets/List.svg" alt="payment" width={390} height={120} />
//                     </div>
//                 </div>
//             </div>

//             {/* Copyright Section */}
//             <div className="bg-[#DA3C24] text-white py-4">
//                 <div className="max-w-6xl mx-auto px-4 text-center text-xs md:text-sm">
//                     <p>
//                         Proudly Made <span className="mx-2">|</span> Privacy Policy <span className="mx-2">|</span> Terms of Service <span className="mx-2">|</span> Refund Policy <span className="mx-2">|</span> Shipping Policy
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }


// FooterBanner.tsx
// Usage: Drop this component at the bottom of your page layout.
// Replace the placeholder divs marked with "// 👇 ADD IMAGE HERE" with your <Image> tags.


export default function FooterBanner() {
  return (
    <footer className="w-full font-sans relative bg-[#0875AE]  ">
           <div
          className="absolute bottom-0 z-20 inset-x-0 w-full overflow-hidden leading-none"
          style={{ height: 90 }}
          
        ><div className='relative h-full w-full'>
            <Image src={'/assets/shape-footer.png'}  alt="shape-2"
        
        fill/>
         </div>
        </div>
      <div
        className="relative w-full overflow-hidden"
        style={{ minHeight: 200 }}
      >
        {/* Wave SVG at the very bottom of the blue section */}
     

        {/* ── Inner grid ──────────────────────────────────────── */}
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-8 flex items-center justify-between gap-6 py-6 pb-12">

          {/* LEFT — Newsletter signup */}
          <div className="flex-1 min-w-0 max-w-xs">
            <p className="text-white font-bold text-lg sm:text-xl leading-snug mb-3">
              Sign up for the latest<br className="hidden sm:block" /> deal from Minitoys
            </p>
            <div className="flex rounded-md overflow-hidden shadow-sm">
              <input
                type="email"
                placeholder="email@email.com"
                className="flex-1 min-w-0 px-3 py-2 text-sm text-gray-700 bg-white outline-none placeholder-gray-400"
              />
              <button className="bg-white border-l border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors whitespace-nowrap">
                submit
              </button>
            </div>
          </div>

          {/* CENTER — Panda mascot image placeholder */}
          <div className="flex-shrink-0 hidden -translate-y-1/2 sm:flex items-end justify-center self-end"
               style={{ width: 380, height: 400, marginBottom: -40 }}>
            {/* 👇 ADD IMAGE HERE — replace this div with your <Image> component */}
       
            <div className="w-full h-full relative rounded-xl  flex items-center justify-center">
     <Image
              src="/assets/panda-2.png"
              alt="Minitoys mascot"
              fill
              className="object-cover object-bottom"
            />            </div>
          </div>

          {/* RIGHT — Payments + Social */}
          <div className="flex-shrink-0 flex flex-col sm:flex-row gap-8 items-start sm:items-center">

            {/* Payments */}
            <div>
              <p className="text-white text-sm font-semibold mb-2">We accept</p>
              <div className="flex gap-2 items-center mb-2">
                {/* 👇 ADD VISA IMAGE HERE */}
                <div className="w-14 h-9 bg-white rounded flex items-center justify-center border border-gray-100 overflow-hidden">
                  {/* <Image src="/visa.png" alt="Visa" width={50} height={30} className="object-contain" /> */}
                  <span className="text-[#1A1F71] font-black text-sm tracking-tight">VISA</span>
                </div>
                {/* 👇 ADD MASTERCARD IMAGE HERE */}
                <div className="w-14 h-9 bg-white rounded flex items-center justify-center border border-gray-100 overflow-hidden">
                  {/* <Image src="/mastercard.png" alt="Mastercard" width={50} height={30} className="object-contain" /> */}
                  <div className="flex">
                    <span className="w-5 h-5 rounded-full bg-red-500 opacity-90 -mr-2 block"></span>
                    <span className="w-5 h-5 rounded-full bg-orange-400 opacity-90 block"></span>
                  </div>
                </div>
              </div>
              <p className="text-white text-xs">Cash on delivery</p>
            </div>

            {/* Social */}
            <div>
              <p className="text-white text-sm font-semibold mb-2">Find us at</p>
              <div className="flex gap-3 items-center">
                {/* Facebook */}
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-[#1877F2] flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H8.08V12h2.36V9.8c0-2.33 1.39-3.62 3.52-3.62 1.02 0 2.08.18 2.08.18v2.28h-1.17c-1.15 0-1.51.72-1.51 1.45V12h2.58l-.41 2.89h-2.17v6.99C18.34 21.12 22 16.99 22 12z"/>
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  style={{ background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)" }}
                >
                  <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                {/* YouTube */}
                <a
                  href="#"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-full bg-[#FF0000] flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>{/* /inner grid */}
      </div>{/* /blue banner */}

      {/* ── Bottom bar ─────────────────────────────────────────── */}
      <div className="px-4 sm:px-8 py-3 absolute bottom-0 z-30 inset-x-0 ">
        <div className="mx-auto max-w-6xl flex items-center justify-between gap-4 flex-wrap">

          {/* Language selector */}
          <div className=" flex items-center gap-3 text-sm text-gray-600">
            <button className="font-medium text-gray-900 hover:text-[#2A9BD8] transition-colors">
              English
            </button>
            <span className="text-gray-300">|</span>
            <button className="font-medium text-gray-600 hover:text-[#2A9BD8] transition-colors" dir="rtl">
              عربي
            </button>
          </div>

          {/* Footer nav links */}
          <nav className="flex items-center gap-1 flex-wrap">
            {["Store Locator", "Help", "Contact Us", "About Us"].map((label, i, arr) => (
              <React.Fragment key={label}>
                <a
                  href="#"
                  className="text-xs sm:text-sm text-gray-600 hover:text-[#2A9BD8] transition-colors whitespace-nowrap"
                >
                  {label}
                </a>
                {i < arr.length - 1 && (
                  <span className="text-gray-300 text-xs mx-1">|</span>
                )}
              </React.Fragment>
            ))}
          </nav>

        </div>
      </div>
    </footer>
  );
}