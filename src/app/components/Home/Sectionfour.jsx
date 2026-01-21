import Image from "next/image";
const Sectionfour = () => {
    return (
        <div className="h-screen relative w-full">
            <div className='absolute top-0 left-0 w-full h-34'>
                <Image
                    src="/assets/bg-transparent-2.svg"
                    alt="Background transparent shape"
                    fill
                    className="object-cover"
                /></div>        </div>
    );
};
export default Sectionfour;