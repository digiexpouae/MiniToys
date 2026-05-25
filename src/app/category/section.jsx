"use client"
import Image from "next/image";
import Link from 'next/link'
import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { useRouter } from 'next/navigation'
import { DirhamSymbol } from "../components/Dirhamsymbol";
const Sectionfour = ({ products ,categories,slug,price}) => {
    const [activeTab, setActiveTab] = useState('Stuffed Toys');
    const [activeCategory, setActiveCategory] = useState('');
    const [priceRange, setPriceRange] = useState([0, 500]);
    const router=useRouter()
    const [ismounted,setIsmounted]=useState(false)


    const priceFilters = [
        { label: 'Under AED 10', min: 0, max: 10 },
        { label: 'AED 20 – 30', min: 20, max: 30 },
        { label: 'AED 30 – 50', min: 30, max: 50 },
        { label: 'AED 50 - 100', min: 50, max: 100 },
         { label: 'AED 100 - 200', min: 100, max:200 },

    ];
useEffect(()=>{

setActiveCategory(slug)


},[slug])


useEffect(()=>{
console.log("acitveCate" ,activeCategory)

},[activeCategory])


    const [activePriceFilter, setActivePriceFilter] = useState(null);

    const filteredProducts = Array.isArray(products) ? products.filter((p) => {
        const categoryMatch = activeCategory === 'All' || 
            (activeCategory === 'On Sale' && p.discount) ||
            (activeCategory === 'Exclusive' && p.discount) ||
            (activeCategory === 'New Arrivals') ||
            (activeCategory === 'Best Sellers');

        const priceMatch = activePriceFilter === null || (
            p.price >= priceFilters[activePriceFilter].min &&
            p.price < priceFilters[activePriceFilter].max
        );

        return categoryMatch && priceMatch;
    }) : [];

 
    

    return (
        <div className="h-auto md:min-h-screen relative w-full py-8 md:py-16">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-center text-4xl md:text-6xl font-bold text-[#0784FF] mb-6">
                    Our Favourite Collections
                </h2>
{/* 
                Tabs - Desktop
                <div className="hidden md:flex justify-center mb-8">
                    {/* <div className="flex justify-start items-center rounded-full border border-zinc-800 overflow-auto">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 text-sm text-nowrap md:text-md font-medium transition-colors ${
                                    activeTab === tab
                                        ? 'bg-[#CF092D] border border-[#CF092D]/80 text-white'
                                        : 'bg-transparent text-gray-700 hover:bg-orange-100'
                                } ${index === 0 ? 'rounded-l-full' : ''} ${
                                    index === tabs.length - 1 ? 'rounded-r-full' : ''
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div> */}
                {/* </div> */} 

                {/* Mobile: Tab Dropdown + Category Dropdown */}
                <div className="flex md:hidden gap-3 mb-6 px-1">
                    <select
                      defaultValue={price || ''}
        onChange={(e) => {
             const val = e.target.value;
            const selectedFilter = priceFilters.find(pf => `${pf.min}-${pf.max}` == val  );
              console.log("Selected",selectedFilter)
            if (selectedFilter) {
                router.push(`/category/${slug}?price=${val}`); // adjust route as needed
            }
        }}
        className="flex-1 border border-zinc-300 rounded-full px-4 py-2 text-sm text-gray-700 bg-white"
    >
             <option value="select">select</option>
        {priceFilters.map((pf, i) => (
            <option key={i} value={`${pf.min}-${pf.max}`}>
                {pf.label}
            </option>
        ))}
    </select>                         
                 <select
  key={`${slug}-${categories.length}`}

    defaultValue={slug|| ''}
    onChange={(e) => {
        const val = e.target.value;
        const selectedCategory = categories.find(cat => cat.name == val);
        if (selectedCategory) {
            setActiveCategory(selectedCategory.name);
            router.push(`/category/${selectedCategory.name}`);
        }
    }}
    className="flex-1 border border-zinc-300 rounded-full px-4 py-2 text-sm text-gray-700 bg-white"
>
      <option value="select">select</option>
    {categories.map((cat, index) => (
      
        <option key={index} value={cat.name}>{cat.name}</option>
    ))}
</select>
                </div>

                {/* Mobile Slider */}
                <div className="block md:hidden mb-8 max-w-5xl mx-auto">
                    <div className="overflow-x-auto scrollbar-hide">
                        <div className="flex gap-4 snap-x snap-mandatory px-4">
                            {products.map((product, index) => (
                                <div key={index} className="flex-shrink-0 w-56 px-2 cursor-pointer">
                                <Link href={`/products/${product.slug}`}> 
                                        <div className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow relative overflow-hidden">
                                            {product.discount && (
                                                <span className="absolute top-2 left-2 bg-[#1FCBAA] text-white text-xs px-2 py-1 rounded font-semibold z-10">
                                                    Exclusive
                                                </span>
                                            )}
                                            {/* <button className="absolute top-2 right-2 bg-white rounded-full p-1.5 hover:bg-gray-100 z-10 shadow-sm">
                                                <Heart size={16} className="text-gray-600" />
                                            </button> */}
                                            <div className="flex justify-center items-center bg-gray-50 p-4 h-40">
                                                <Image
                                                    src={product.image}
                                                    alt={product.name}
                                                    width={120}
                                                    height={120}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            <div className="p-3">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="text-lg font-bold text-gray-900">
                                                        <DirhamSymbol /> {parseFloat(product.price).toFixed(2)}
                                                    </span>
                                                    {product.originalPrice && (
                                                        <>
                                                            <span className="text-sm text-gray-400 line-through">
                                                                {parseFloat(product.originalPrice).toFixed(2)}
                                                            </span>
                                                            <span className="text-xs text-[#CF092D] font-semibold ml-auto">
                                                                -{product.discount}%
                                                            </span>
                                                        </>
                                                    )}
                                                </div>
                                                <h3 className="text-sm text-gray-700 mb-3 line-clamp-2 h-10">
                                                    {product.name}
                                                </h3>
                                                <button className="w-full bg-[#CF092D] text-white rounded-full py-2 flex items-center justify-center gap-2 hover:bg-[#B00828] transition-colors">
                                                    <Plus size={18} />
                                                </button>
                                            </div>
                                        </div>
                                  </Link> 
                                </div>
                            ))}
                            <></>
                        </div>
                    </div>
                </div>

                {/* Desktop: Sidebar + Product Grid */}
                <div className="hidden md:flex gap-6">

                    {/* ── SIDEBAR ── */}
                    <aside className="w-56 flex-shrink-0">

                        {/* Category Filter */}
                        <div className="bg-white border border-zinc-200 rounded-2xl p-5 mb-4">
                            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
                                Category
                            </h3>
                            <ul className="space-y-1">
                                {categories.map((cat,index) => (
                                    <li key={index}>
                                                <Link
                                        href={`/category/${cat.name}`}>
                                        <button
                                            onClick={() => setActiveCategory(slug)

                                            }
                                            className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-colors ${
                                                activeCategory == cat.name
                                                    ? 'bg-[#CF092D] text-white font-medium'
                                                    : 'text-gray-600 hover:bg-red-50 hover:text-[#CF092D]'
                                            }`}
                                        >
                                        
                                            {cat.name}
                                                                                 

                                        </button>
                                           </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Price Filter */}
                        <div className="bg-white border border-zinc-200 rounded-2xl p-5 mb-4">
                            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
                                Price Range
                            </h3>
                            <ul className="space-y-1">
                                {priceFilters.map((pf, i) => (
                                    <li key={i}>
                                        <Link
                        href={`/category/${slug}?price=${pf.min}-${pf.max}`}>
                                        <button
                                            onClick={() => setActivePriceFilter(activePriceFilter === i ? null : i)}
                                            className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-colors ${
                                                activePriceFilter === i
                                                    ? 'bg-[#0784FF] text-white font-medium'
                                                    : 'text-gray-600 hover:bg-blue-50 hover:text-[#0784FF]'
                                            }`}
                                        >
                                            {pf.label}
                                        </button>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Availability Filter */}
                        <div className="bg-white border border-zinc-200 rounded-2xl p-5">
                            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
                                Availability
                            </h3>
                            <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer mb-2">
                                <input type="checkbox" className="accent-[#CF092D]" defaultChecked />
                                In Stock
                            </label>
                            <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                                <input type="checkbox" className="accent-[#CF092D]" />
                                Pre-order
                            </label>
                        </div>

                        {/* Clear Filters */}
                        {(activeCategory !== 'All' || activePriceFilter !== null) && (
                            <button
                                onClick={() => { setActiveCategory('All'); setActivePriceFilter(null); }}
                                className="mt-4 w-full text-sm text-[#CF092D] border border-[#CF092D] rounded-full py-2 hover:bg-red-50 transition-colors"
                            >
                                Clear Filters
                            </button>
                        )}
                    </aside>

                    {/* ── PRODUCT GRID ── */}
                    <div className="flex-1">
                        {products.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-64 text-gray-400">
                                <p className="text-lg font-medium">No products found</p>
                                <p className="text-sm mt-1">Try adjusting your filters</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {products.map((product,index) => (
                                    <div
                                        key={index}
                                        className="bg-[#FEF7E6] rounded-lg p-4 border border-zinc-800 hover:shadow-lg transition-shadow relative cursor-pointer"
                                    >
                                        <Link href={`/products/${product.slug}`}>
                                            <div className="flex justify-center items-center h-32 mb-4 text-6xl">
                                                <Image
                                                    src={product.image}
                                                    alt={product.name}
                                                    width={120}
                                                    height={120}
                                                />
                                            </div>
                                            <h3 className="text-center text-sm font-medium text-gray-800 mb-3 h-10">
                                                {product.name}
                                            </h3>
                                            <div className="text-center">
                                                <span className="text-gray-800 font-semibold">
                                                    <DirhamSymbol />  {parseFloat(product.price).toFixed(2)}
                                                </span>
                                                {product.originalPrice && (
                                                    <span className="ml-2 text-gray-400 line-through text-sm">
                                                        AED {parseFloat(product.originalPrice.toFixed(2))}
                                                    </span>
                                                )}
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Sectionfour;