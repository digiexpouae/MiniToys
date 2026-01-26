import Image from "next/image";
const Herosection = ({ name }) => {
    return (
        <div className="bg-[#FF3A09] relative w-full flex items-center justify-center h-[40vh] overflow-hidden">
            <div className="absolute left-0 top-0 w-[120px]  aspect-[4/3]   md:w-[300px]">
                <Image src="/assets/ribbon1.png" className="object-cover" alt="decor" fill />

            </div>
            <div className="absolute right-0 top-0 w-[120px]  aspect-[4/3]  md:w-[300px]">
                <Image src="/assets/ribbon02.png" className="object-cover" alt="decor" fill />
            </div>
            <h2 className="text-4xl text-[#FEED17] md:text-7xl font-bold">{name}</h2>
        </div>

    );
};

export default Herosection;