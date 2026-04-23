"use client"
import React, { useEffect, useState } from 'react'
// import Header_two from '../Navigation/Header_two'
import Footer from '../Navigation/Footer'
import api from '../utils/axiosInterceptor'
import { useSearchParams } from 'next/navigation'
import SectionFour from '../components/Home/Sectionfour'
const Search = () => {

    const [products, setProducts] = useState()
    const searchParams = useSearchParams()
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
    useEffect(() => {
        fetchSearchProdcuts(q)
    }, [q])

    return <div>
        {/* <Header_two /> */}
        <h1 className='text-black'>Search {q}</h1>
        <SectionFour products={products} />
        <Footer />
    </div>

}
export default Search