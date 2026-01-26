
// import Image from "next/image";
// import Header from "../app/Navigation/Header";
// import Herosection from '../app/components/Home/HeroSection'
// import Section2 from '../app/components/Home/Section2'
// import Section3 from '../app/components/Home/Section3'
// import Sectionfour from '../app/components/Home/Sectionfour'
// import Collection from '../app/components/Home/Collection'
// import Section5 from '../app/components/Home/section5'
// import Section6 from '../app/components/Home/Section6'
// import Section7 from '../app/components/Home/Section7'
// import Section8 from '../app/components/Home/Section8'
// import Footer from '../app/Navigation/Footer'
// import Section9 from '../app/components/Home/Section9'
// export default function Home() {

//   return (
//     <div className="flex  items-center justify-center w-full bg-[#FFFF] ">
//       <main className="flex w-full flex-col items-center justify-between   sm:items-start">
//         <div className="bg-[#DA3C24] w-full h-screen relative">
//           <div className="absolute inset-0 w-full h-full">
//             <Image src="/assets/decorimage.png" alt="decor" height={800} width={2000} />
//           </div>
//           <div className="md:w-[75%] w-[90%] relative z-10 mx-auto py-4">

//             <Header />

//           </div>
//           <Herosection />
//           <div className='absolute bottom-[45%] left-10 md:left-1/5   z-5'>
//             <Image src={'/assets/plus.svg'} alt="plus" width={20} height={20} />
//           </div>
//           <div className='absolute bottom-[35%] right-8 md:right-1/4   z-5'>
//             <Image src={'/assets/plus.svg'} alt="plus" width={20} height={20} />
//           </div>
//           <div className="absolute -bottom-4 left-0 right-0 w-full h-24 z-1">
//             <div className="relative w-full h-full"><Image src={'/assets/Container.png'} alt="container" fill className="object-cover" /> </div>
//           </div>

//         </div>
//         <Section2 />
//         {/* <Section3 /> */}

//         <Sectionfour />
//         {/* <Section5 /> */}
//         {/* <Section6 /> */}
//         {/* <Section7 /> */}
//         {/* <Section8 /> */}
//         {/* <Section9 /> */}
//         <Footer />
//       </main>
//     </div>
//   );
// }




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
import Header_two from '../app/Navigation/Header_two'
import Categories from '../app/components/Home/Categories'
import Logoslider from '../app/components/Home/Logoslider'
export default function Home() {

  return (
    <div className="flex  items-center justify-center w-full bg-[#FFFF] ">
      <main className="flex w-full flex-col items-center justify-between   sm:items-start">
        {/* <div className="bg-[#DA3C24] w-full h-screen relative">


        </div> */}
        <Header_two />
        <HeroSection_two />
        <Categories />
        <Logoslider />
        {/* <Section2 /> */}
        {/* <Section3 /> */}

        <Sectionfour />
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

