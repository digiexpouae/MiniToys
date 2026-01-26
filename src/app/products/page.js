import Header_two from "../../app/Navigation/Header_two";
import Herosection from "./Herosection";
import Footer from '../Navigation/Footer'
import Sectionfour from '../components/Home/Sectionfour'
const Product = () => {
    return (
        <div className="flex  items-center justify-center w-full bg-[#FFFF] ">
            <main className="flex w-full flex-col items-center justify-between   sm:items-start">
                {/* <div className="bg-[#DA3C24] w-full h-screen relative">
        
        
                </div> */}
                <Header_two />
                <Herosection name={'Products'} />
                <Sectionfour />
                <Footer />
            </main>
        </div>
    );
};

export default Product;