import ProductPage from "./product";
import Header_two from "../Navigation/Header_two";
import Herosection from "../products/Herosection";
import Footer from '../Navigation/Footer'
import Recommended from "../components/Home/recommeded";
const Product = () => {
    return (
        <>
            <div className="min-h-screen relative">
                <Header_two />
                <div className="relative  w-full">
                    <Herosection />
                    <div className="relative rounded-2xl max-w-5xl mx-auto -translate-y-44">
                        <ProductPage />

                    </div>
                    <Recommended />

                </div>

            </div>
            <Footer />

        </>
    );
};

export default Product;