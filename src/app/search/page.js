"use client"
import React, { useEffect, useState } from 'react'
// import Header_two from '../Navigation/Header_two'
import Footer from '../Navigation/Footer'
import { Suspense } from 'react';
import api from '../utils/axiosInterceptor'
import { useSearchParams } from 'next/navigation'
import SectionFour from '../components/Home/Sectionfour'




const SearchResults = () => {
    const [products, setProducts] = useState([])
    const searchParams = useSearchParams() // Hook is called here
    const q = searchParams.get('q')

    const fetchSearchProdcuts = async (query) => {
        if (!query) return;
        try {
            const response = await api.get({ url: `v1/product/search?q=${query}` })
            if (response.success) {
                setProducts(response.suggestions)
            }
        } catch (error) {
            console.log("search error", error)
        }
    }

    useEffect(() => {
        fetchSearchProdcuts(q)
    }, [q])

    return (
        <>
            <h1 className='text-black'>Search {q}</h1>
            <SectionFour products={products} />
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