"use client"

import { useParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Footer from "@/app/Navigation/Footer";
import Product from "@/app/components/Product";
import Herosection from "../../products/Herosection";
import Recommended from "../../components/Home/recommeded";
import Mobileproduct from "../../components/mobileproduct";
import api from "@/app/utils/axiosInterceptor";

// Separate the actual page content into its own component
function ProductPageContent() {
    const { slug } = useParams();
    const [product, setProduct] = useState(null);
    const [sellerinfo, setSellerinfo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await api.get({ url: `v1/product/${slug}` });
                setProduct(response.product);
                setSellerinfo(response.sellerName);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        if (slug) fetchProducts();
    }, [slug]);

    if (loading) return <p>Loading...</p>;
    if (!product) return <p>Product not found</p>;

    return (
        <>
            <div className="relative w-full">
                <Herosection />
                <div className="rounded-2xl max-w-5xl mx-auto -translate-y-44">
                    <Product product={product} sellerinfo={sellerinfo} />
                    <Mobileproduct product={product} />
                </div>
                <Recommended />
            </div>
            <Footer />
        </>
    );
}

// ✅ Default export wraps content in Suspense
export default function ProductPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProductPageContent />
        </Suspense>
    );
}