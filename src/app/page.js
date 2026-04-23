"use client"
import Image from "next/image";
import Header from "../app/Navigation/Header";
import Herosection from '../app/components/Home/HeroSection'
import Section2 from '../app/components/Home/Section2'
import Section3 from '../app/components/Home/Section3'
import Sectionfour from '../app/components/Home/Sectionfour'
import Collection from '../app/components/Home/Collection'
import Section5 from '../app/components/Home/section5'
import Section6 from '../app/components/Home/Section6'
import Section7 from '../app/components/Home/Section7'
import Section8 from '../app/components/Home/Section8'
import Footer from '../app/Navigation/Footer'
import Section9 from '../app/components/Home/Section9'
import HeroSection_two from '../app/components/Home/HeroSection_two'
// import Header_two from '../app/Navigation/Header_two'
import Categories from '../app/components/Home/Categories'
import Logoslider from '../app/components/Home/Logoslider'
import api from "../app/utils/axiosInterceptor";

import { useEffect, useState } from "react";
export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const fetchProducts = async () => {
    try {
      const response = await api.get({ url: `v1/product/all` });
      setProducts(response.products);
      console.log("products", response, response.products)
    } catch (error) {
      console.log(error);
    }
  }
  const fetchCategories = async () => {
    try {
      const response = await api.get({ url: `v1/category/all` });
      setCategories(response.categories);
      console.log("categories", response, response.categories)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {

    fetchProducts();
    fetchCategories();
  }, []);

  return (
    <div className="flex  items-center justify-center w-full bg-[#FFFF] ">
      <main className="flex w-full flex-col items-center justify-between   sm:items-start">
        {/* <div className="bg-[#DA3C24] w-full h-screen relative">


        </div> */}
        {/* <Header_two /> */}
        <HeroSection_two />
        <Categories categories={categories} />
        <Logoslider />
        {/* <Section2 /> */}
        {/* <Section3 /> */}

        <Sectionfour products={products} />

        {/* <Section5 /> */}
        {/* <Section6 /> */}
        {/* <Section7 /> */}
        {/* <Section8 /> */}
        {/* <Section9 /> */}
        <Footer />
      </main>
    </div>
  );
}

