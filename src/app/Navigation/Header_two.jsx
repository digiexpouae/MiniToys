"use client"
import { ShoppingCart, User, Search, Menu, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Navitems from './Navitems'
import Link from 'next/link'
import Cookies from "js-cookie";
import { useState, useEffect, useRef, useCallback } from "react";
import { useCartStore } from '../store/cartstore';
import api from '../utils/axiosInterceptor';
import { useContext } from 'react';
import { AuthContext } from '../context/Authcontext';
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { fetchCartCount, isLoggedIn } from '../utils/auth';
const Header_two = () => {
    const { IsAuth, setIsAuth } = useContext(AuthContext)
      const [mounted, setMounted] = useState(false);
    const debounceRef = useRef()
    const [token, setToken] = useState(null);
    const router = useRouter()
    const pathname = usePathname()
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const isNavigatingRef = useRef(false);
    const { cartCount, refreshCount } = useCartStore();
    const [products, setProducts] = useState([])
    const searchParams = useSearchParams()
  

useEffect(() => {
    setMounted(true);
}, []);


// Clear on route change
useEffect(() => {
    setProducts([]);
}, [router.pathname]); 



useEffect(()=>{console.log("mount",mounted)},[mounted])
    useEffect(() => {
        // Route finished changing

        if (pathname === "/") {
            setSearchValue("");
            setProducts([]);
            setActive(-1);
        }
        isNavigatingRef.current = false;
    }, [pathname, searchParams]);


    const [searchValue, setSearchValue] = useState("")
    const [active, setActive] = useState(-1)
    const q = searchParams.get('q')
    const fetchSearchProdcuts = async (q) => {
        try {
            const response = await api.get({ url: `v1/product/search?q=${q}` })
            if (response.success) {
                console.log("search", response)
                setProducts(response.suggestions)

            }

        }
        catch (error) {
            console.log("search error", error)
        }
    }

    const debounceFunc = useCallback((q) => {
        if (debounceRef.current) {
            clearTimeout(debounceRef.current)
        }

        debounceRef.current = setTimeout(() => {
            fetchSearchProdcuts(q)
        }, 500)
    }, [])



    const handleSearch = (value) => {
        router.push(`/search?q=${value}`);
        setProducts([]);
        setActive(-1);
    };
    useEffect(() => {
        if (!isLoggedIn()) return setToken(false);
        (async () => {
            await refreshCount();

        })()
    }, []);



    useEffect(() => {
        (async () => {
            if (!isLoggedIn()) return;
            setToken(true)



        })();

    }, [token]);

    useEffect(() => {
        return () => {
            if (debounceRef.current) {
                clearTimeout(debounceRef.current);
            }
        };
    }, []);

    const handleLogout = async () => {
        Cookies.remove("authToken");
        setIsAuth(false)
        await refreshCount();
        setToken(false);
        setDropdownOpen(false);
    };


    return (<div className='w-full'>
        <div className=" hidden md:block bg-[#FEED17] text-gray-800 text-sm py-2">
            <div className="container mx-auto px-12 flex justify-between items-center">
                <div className="flex gap-6">
                    <span>The Choice of Millions of Moms</span>
                    <span>Curated for Every Stage</span>
                    <span>Delivery across the GCC</span>
                </div>
                <div className="flex gap-4">
                    <span>Help</span>
                    <span>العربية</span>
                    <span>Global</span>
                </div>
            </div>
        </div>

        {/* Main Header */}
        <header className=" md:block hidden bg-white shadow-md">
            <div className="container mx-auto px-18 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-18 aspect-[16/9] relative flex items-center justify-center">
                            <Link href={'/'}>
                                <Image src="/assets/logo2.svg" alt="logo" fill />
                            </Link>
                            {/* <span className="text-white font-bold text-xl">T</span> */}
                        </div>
                        <div>
                            {/* <h1 className="text-2xl font-bold text-gray-800">ToyStore</h1> */}
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="flex-1 max-w-2xl mx-8">
                        <div className="relative">
                            <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#CF092D] text-white p-2 rounded-full hover:bg-pink-600">
                                <Search size={20} />
                            </button>
                            <input
                                type="text"
                                placeholder="Search Baby Monitor"
                                className="w-full px-4 py-3 pl-12 font-sm text-zinc-800 border border-[#95969E] rounded-full focus:outline-none focus:border-zinc-800"
                                onChange={(e) => {
                                    if (isNavigatingRef.current) return;
                                    setSearchValue(e.target.value)
                                    console.log("targeted val", e.target.value)
                                    debounceFunc(e.target.value)
                                }}
                                value={searchValue}
                                onKeyDown={(e) => {

                                    if (e.key === "ArrowDown" && products.length > 0) {
                                        e.preventDefault()
                                        console.log("down arrow", active)
                                        setActive((prev) => (prev + 1) % products.length)
                                    }
                                    if (e.key === "ArrowUp" && products.length > 0) {
                                        e.preventDefault()
                                        console.log("up arrow")
                                        setActive((prev) => (prev - 1 + products.length) % products.length)
                                    }

                                    if (e.key === "Enter" && searchValue) {
                                        e.target.blur();
                                        if (debounceRef.current) {
                                            clearTimeout(debounceRef.current);
                                        }
                                        isNavigatingRef.current = true;
                                        if (active >= 0 && products[active]) {

                                            console.log("log1", products)
                                            router.push(`/search?q=${products[active].name}`)
                                            setProducts([])
                                        }
                                        else {
                                            router.push(`/search?q=${e.target.value}`)

                                        }
                                        // setProducts([])
                                        console.log("log2", products)

                                    }

                                }}
                            />
                            {products.length > 0 && (
                                <div className="absolute w-full bg-white top-[100%] border mt-2 rounded-xl shadow-lg z-50">
                                    {products.map((item, index) => (
                                        <div
                                            key={item.id}
                                            className={`${index === active ? "bg-gray-400" : ""} p-3 hover:bg-gray-100 text-black cursor-pointer`}
                                            onMouseEnter={() => {
                                                console.log("mouse Enter active index", active)
                                                setActive(index)

                                            }}

                                            onMouseDown={(e) => {
                                                e.preventDefault();
                                                handleSearch(item.name)
                                            }}
                                        >

                                            {item.name}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-6 text-zinc-800">
                        <div className="text-center cursor-pointer hover:text-pink-500">
                            {/* <User size={24} /> */}
                            <p className="text-xs">Delivering to</p>
                            <span className="text-sm">United States</span>
                        </div>
{!mounted ? (
    // ✅ show a neutral placeholder during SSR & hydration
       <div className="w-10 h-10" />) :
                        IsAuth ?(
                            <div className="relative">

                                <button
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 transition"
                                >
                                    <User size={24} />
                                </button>   {dropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200 z-50">
                                        <Link
                                            href="/profile"
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition"
                                            onClick={() => setDropdownOpen(false)}
                                        >
                                            Profile
                                        </Link>
                                        <Link
                                            href="/myorders"
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition"
                                            onClick={() => setDropdownOpen(false)}
                                        >
                                            Orders
                                        </Link>
                                        {/* <Link
                                            href="/settings"
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition"
                                            onClick={() => setDropdownOpen(false)}
                                        >
                                            Settings
                                        </Link> */}
                                        <button
                                            onClick={handleLogout}
                                            className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 transition"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>)

                            : (<Link href="/login">
                                <button className="bg-[#CF092D] text-white px-6 py-2 cursor-pointer rounded-md hover:bg-[#CF092D]/50 font-medium">
                                    Sign In
                                </button></Link>)}
                        <div className="relative cursor-pointer  hover:text-pink-500">
                            {/* <ShoppingCart size={24} /> */}
                            <div className='absolute -top-2 -right-2 rounded bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'> {cartCount ? cartCount : 0}</div>

                            <Link href="/cart">
                                <ShoppingBag size={24} /> </Link>
                            {/* <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">

                            </span> */}
                        </div>

                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="bg-gray-50 border-t">
                <Navitems />
            </nav>
        </header >
        {/* mobile header */}
        < header className="block md:hidden bg-white shadow-md py-4" >
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-18 aspect-[16/9] relative flex items-center justify-center">
                            <Link href={'/'}>

                                <Image src="/assets/logo2.svg" alt="logo" fill />
                            </Link>
                            {/* <span className="text-white font-bold text-xl">T</span> */}
                        </div>
                        <div>
                            {/* <h1 className="text-2xl font-bold text-gray-800">ToyStore</h1> */}
                        </div>
                    </div>

                    {/* Search Bar */}

                    {/* Right Section */}
                    <div className="flex items-center gap-6 text-zinc-800">
                       {!mounted ? (
                          <div className="w-10 h-10" /> ):
                        IsAuth ?(
                            <div className="relative">

                                <button
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 transition"
                                >
                                    <User size={24} />
                                </button>   {dropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200 z-50">
                                        <Link
                                            href="/profile"
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition"
                                            onClick={() => setDropdownOpen(false)}
                                        >
                                            Profile
                                        </Link>
                                        <Link
                                         href="/myorders"
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition"
                                            onClick={() => setDropdownOpen(false)}
                                        >
                                            Orders
                                        </Link>
                                        {/* <Link
                                            href="/settings"
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition"
                                            onClick={() => setDropdownOpen(false)}
                                        >
                                            Settings
                                        </Link> */}
                                        <button
                                            onClick={handleLogout}
                                            className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 transition"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        )
                            : (<Link href="/login">
                                <button className="bg-[#CF092D] text-white px-6 py-2 cursor-pointer rounded-md hover:bg-[#CF092D]/50 font-medium">
                                    Sign In
                                </button></Link>)}
                        <div className="relative cursor-pointer  hover:text-pink-500">
                            {/* <ShoppingCart size={24} /> */}
                            <div className='absolute -top-2 -right-2 rounded bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'> {cartCount}</div>
                            <Link href="/cart">
                                <ShoppingBag size={24} />    </Link>
                            {/* <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">

                            </span> */}
                        </div>

                    </div>
                </div>
            </div>
            <div className="flex-1 max-w-5xl mx-4 ">
                <div className="relative">
                    <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#CF092D] text-white p-2 rounded-full hover:bg-pink-600">
                        <Search size={20} />
                    </button>
                    <input
                        type="text"
                        placeholder="Search Baby Monitor"
                        onChange={(e) => {
                                    if (isNavigatingRef.current) return;
                                    setSearchValue(e.target.value)
                                    console.log("targeted val", e.target.value)
                                    debounceFunc(e.target.value)
                                }}
                                value={searchValue}
                                onKeyDown={(e) => {

                                    if (e.key === "ArrowDown" && products.length > 0) {
                                        e.preventDefault()
                                        console.log("down arrow", active)
                                        setActive((prev) => (prev + 1) % products.length)
                                    }
                                    if (e.key === "ArrowUp" && products.length > 0) {
                                        e.preventDefault()
                                        console.log("up arrow")
                                        setActive((prev) => (prev - 1 + products.length) % products.length)
                                    }

                                    if (e.key === "Enter" && searchValue) {
                                        e.target.blur();
                                        if (debounceRef.current) {
                                            clearTimeout(debounceRef.current);
                                        }
                                        isNavigatingRef.current = true;
                                        if (active >= 0 && products[active]) {

                                            console.log("log1", products)
                                            router.push(`/search?q=${products[active].name}`)
                                            setProducts([])
                                        }
                                        else {
                                            router.push(`/search?q=${e.target.value}`)

                                        }
                                        // setProducts([])
                                        console.log("log2", products)

                                    }

                                }}
                        className="w-full px-4 py-3 pl-12 font-sm text-zinc-800 border border-[#95969E] rounded-full focus:outline-none focus:border-zinc-800"
                    />
                    {products.length > 0 && (
                        <div className="absolute w-full bg-white top-[100%] border mt-2 rounded-xl shadow-lg z-50">
                            {products.map((item,index) => (
                                <div
                                    key={item.id}
                                    className="p-3 hover:bg-gray-100 text-black cursor-pointer"
                              
                                 onMouseEnter={() => {
                                                console.log("mouse Enter active index", active)
                                                setActive(index)

                                            }}

                                            onMouseDown={(e) => {
                                                e.preventDefault();
                                                handleSearch(item.name)
                                            }}
                              
                              
                              >

                                    <Link href={`/search?q=${item.name ? item.name : ""}`}> {item.name}</Link>
                                </div>
                            ))}
                        </div>
                    )}

                </div>
            </div>


            {/* Navigation */}
            {/* <nav className="bg-gray-50 border-t">
                <Navitems />
            </nav> */}
        </header >
    </div >
    )
}

export default Header_two