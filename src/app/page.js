
import Image from "next/image";
import Header from "../app/Navigation/Header";
import Herosection from '../app/components/Home/HeroSection'
import Section2 from '../app/components/Home/Section2'
import Section3 from '../app/components/Home/Section3'
import Sectionfour from '../app/components/Home/Sectionfour'
export default function Home() {

  return (
    <div className="flex  items-center justify-center w-full bg-[#FFFF] ">
      <main className="flex w-full flex-col items-center justify-between   sm:items-start">
        <div className="bg-[#DA3C24] w-full h-screen relative">
          <div className="absolute inset-0 w-full h-full">
            <Image src="/assets/decorimage.png" alt="decor" height={800} width={2000} />
          </div>
          <div className="md:w-[75%] w-[90%] relative z-10 mx-auto py-4">

            <Header />

          </div>
          <Herosection />
          <div className='absolute bottom-[45%] left-10 md:left-1/5   z-5'>
            <Image src={'/assets/plus.svg'} alt="plus" width={20} height={20} />
          </div>
          <div className='absolute bottom-[35%] right-8 md:right-1/4   z-5'>
            <Image src={'/assets/plus.svg'} alt="plus" width={20} height={20} />
          </div>
          <div className="absolute -bottom-4 left-0 right-0 w-full h-24 z-1">
            <div className="relative w-full h-full"><Image src={'/assets/Container.png'} fill className="object-cover" /> </div>
          </div>

        </div>
        <Section2 />
        <Section3 />
        <Sectionfour />
      </main>
    </div>
  );
}
