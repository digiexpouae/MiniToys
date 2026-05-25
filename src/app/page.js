import Sectionfour from '../app/components/Home/Sectionfour'
import HeroSection_two from '../app/components/Home/HeroSection_two'
import Categories from '../app/components/Home/Categories'
import Logoslider from '../app/components/Home/Logoslider'
import Footer from '../app/Navigation/Footer'
export default async function Home()  {
  // const [products, setProducts] = useState([]);
  // const [categories, setCategories] = useState([]);
  let categories = [];
  let products = [];
   try {
   const [categoriesRes, productsRes] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/v1/category/all`, { cache: "no-store" }),
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/v1/product/all`, { cache: "no-store" }),
  ]);

  console.log("BASE_URL:", process.env.NEXT_PUBLIC_BASE_URL);
  console.log("categories status:", categoriesRes.status, categoriesRes.url);
  console.log("products status:", productsRes.status, productsRes.url);

  // check before parsing
  if (!categoriesRes.status === "fulfilled") {
    return <div>Categories failed: {categoriesRes.status} - {categoriesRes.url}</div>;
  }
else{
  const res1 = await categoriesRes.json();
   categories=res1.categories;}

  if (!productsRes.status === "fulfilled") {
    return <div>Products failed: {productsRes.status} - {productsRes.url}</div>;
  }

 else{
  const res2 = await productsRes.json();
   products=res2.products;}
  // console.log("products",products)

  } catch (error) {
    console.error("Unexpected error fetching data:", error);
  }


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

