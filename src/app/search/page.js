"use client"
import React, { useEffect, useState } from 'react'
// import Header_two from '../Navigation/Header_two'
import Footer from '../Navigation/Footer'
import { Suspense } from 'react';
import api from '../utils/axiosInterceptor'
import { useSearchParams } from 'next/navigation'
import SectionFour from '../components/Home/Sectionfour'




const SearchResults = () => {
    const [products, setProducts] = useState(null)
    const searchParams = useSearchParams() // Hook is called here
    const q = searchParams.get('q')

    const fetchSearchProdcuts = async (query) => {
        if (!query) return;
        try {
            const response = await api.get({ url: `v1/product/search?q=${query}` })
            if (response.success) {
                console.log("search response", response)
                setProducts(response.suggestions)
            }
        } catch (error) {
            console.log("search error", error)
        }
    }

    useEffect(() => {
        fetchSearchProdcuts(q)
    }, [q])
    useEffect(() => {
        console.log("products", products)
    }, [products])
    return (
        <>
            <h1 className='text-black'>Search {q}</h1>
            {products && products.length === 0 ? (<div className='h-[60vh] flex items-center justify-center'>
                <span className='text-2xl'> Product does'nt exist</span>


            </div>) :
                (<SectionFour products={products} />)}
        </>
    )
}
// 2. The main exported component provides the Suspense boundary
const Search = () => {
    return (
        <div>
            {/* The Suspense boundary MUST be outside the component calling useSearchParams */}
            <Suspense fallback={<div className="text-black">Loading search results...</div>}>
                <SearchResults />
            </Suspense>
            <Footer />
        </div>
    )
}

export default Search