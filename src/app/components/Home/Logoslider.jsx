import Image from "next/image";
const Logoslider = () => {


    const logo = ["/assets/logo-1.svg", "/assets/logo-2.svg", "/assets/logo-3.svg", "/assets/logo-4.svg", "/assets/logo-5.svg", "/assets/logo-1.svg", "/assets/logo-2.svg", "/assets/logo-3.svg", "/assets/logo-4.svg", "/assets/logo-5.svg"]
    return (
        <div className="w-full bg-[#CF092D] relative h-[200px] py-12 flex flex-col gap-4 items-center justify-start"><h2 className="text-white text-3xl font-semibold">Brand In Spotlight</h2>

            <div className="absolute bottom-0 z-20 left-0 top-0  w-1/7 opacity-60 h-full  bg-[#CF092D]"></div>
            <div className="absolute bottom-0 z-20 right-0 top-0 w-1/7 opacity-60 h-full  bg-[#CF092D]"></div>
            <div className="absolute left-0 right-0 bottom-10 z-10">
                <div className="marquee ">
                    <div className="marquee__track flex flex-nowrap gap-24 px-12">                    {logo.map((item, index) => (
                        <Image key={index} src={item} width={120} height={120} alt="Logo" />
                    ))}


                    </div>
                    <div className="marquee__track grid grid-cols-5 gap-24">
                        {logo.map((item, index) => (
                            <Image key={index} src={item} width={120} height={120} alt="Logo" />
                        ))}


                    </div>

                </div>
            </div>
        </div>
    );
};
export default Logoslider