"use client"
import React, { useEffect, useState } from 'react'
// import Header_two from '../Navigation/Header_two'
import Footer from '../../Navigation/Footer'
import { Suspense } from 'react';
import api from '../../utils/axiosInterceptor'
import { useSearchParams,useParams } from 'next/navigation'
import Section from '../section'


const Category = () => {
    const [categories,setCategories]=useState([])
    const [products, setProducts] = useState([])
    const searchParams = useSearchParams() // Hook is called here
    const {slug}=useParams()
    const price=searchParams.get('price');

  const fetchCategories = async () => {
    try {
      const response = await api.get({ url: `v1/category/all` });
      setCategories(response.categories);
      console.log("categories", response.categories)
    } catch (error) {
      console.log(error);
    }
  }

 const fetchSearchProdcuts = async (slug,price) => {
        // if (!slug  || !price) return;
           let response;
        try {
    if (slug || price)  {  
        
          response = await api.get({ url: `v1/category/filter_category/${slug}?price=${price}` })
        console.log("price api hit")
        console.log("price",price)
        }
        
    else{
             response = await api.get({ url: `v1/category/filter_category/${slug}` })
            
               console.log("slug api hit")
            }

                 if (response.success) {
                console.log("search response",response)
                setProducts(response.suggestions)
            }
   
        } catch (error) {
            console.log("search error", error)
        }
    }



useEffect(()=>{
     fetchSearchProdcuts(slug,price)
    fetchCategories()
   
},[])

useEffect(() => {
        fetchSearchProdcuts(slug,price)
    }, [slug,price])




    return (
        <>
            <h1 className='text-black'>Search {slug}</h1>
            <Section categories={categories} products={products} price={price} slug={slug} />
                  <Footer />
        </>
    )
}
// 2. The main exported component provides the Suspense boundary
const Search = () => {
    return (
        <div>
            {/* The Suspense boundary MUST be outside the component calling useSearchParams */}
            <Suspense fallback={<div className="text-black">Loading search results...</div>}>
                <Category />
            </Suspense>
      
        </div>
    )
}

export default Category;