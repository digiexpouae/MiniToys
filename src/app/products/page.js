"use client"
import Herosection from "./Herosection";
import Footer from '../Navigation/Footer'
import Sectionfour from '../components/Home/Sectionfour'
import { useEffect, useState } from "react";
import api from "../utils/axiosInterceptor";
const Product = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await api.get({ url: "v1/product/all" });
                setProducts(response.products);
            
                console.log("products", response, response.products)
            } catch (error) {
                console.log(error);
            }
        }
        fetchProducts();
    }, [])

    return (
        <div className="flex  items-center justify-center w-full bg-[#FFFF] ">
            <main className="flex w-full flex-col items-center justify-between   sm:items-start">
                {/* <div className="bg-[#DA3C24] w-full h-screen relative">
        
        
                </div> */}
                <Herosection name={'Products'} />
                <Sectionfour products={products}/>
                <Footer />
            </main>
        </div>
    );
};

export default Product;