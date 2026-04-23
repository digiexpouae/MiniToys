// Import your products array
"use client"
import products from "../../product";
import { useParams } from "next/navigation"; // <- correct import
// import Header_two from "@/app/Navigation/Header_two";
import Footer from "@/app/Navigation/Footer";
import Product from "@/app/components/Product";
import Herosection from "../../products/Herosection"
import Recommended from "../../components/Home/recommeded";
import Mobileproduct from '../../components/mobileproduct'
import { useEffect, useState } from "react";
import api from "@/app/utils/axiosInterceptor";
import axios from "axios";
export default function ProductPage() {
    const params = useParams();
    const { slug } = params;
    const [product, setProduct] = useState();
    const [sellerinfo,setSellerinfo]=useState()
    const fetchProducts = async () => {
        try {
            const response = await api.get({ url: `v1/product/${slug}` });
            setProduct(response.product);
            console.log("single product", response, response.product)
                setSellerinfo(response.sellerName)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {

        fetchProducts();
    }, [])
    // const product = products.find((p) => { console.log("slug", p.slug, slug); return p.slug === slug });

    console.log("product", product)

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <>
            {/* <Header_two /> */}
            <div className="relative  w-full">
                <Herosection />
                <div className="rounded-2xl max-w-5l mx-auto -translate-y-44">
                    <Product product={product}  sellerinfo={sellerinfo}  />
                    <Mobileproduct product={product} />

                </div>
                <Recommended />


            </div>

            <Footer />
        </>
    );
}
