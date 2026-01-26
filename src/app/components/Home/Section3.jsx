import Image from "next/image";

const cards = [
    {
        title: "Organic",
        titleClass: "text-indigo-700",
        rotateWrap: "-rotate-3 hover:rotate-0",
        rotateInner: "-rotate-3 hover:rotate-0",
        icon: "/assets/card-1.svg",
        desc:
            "Toyo takes great pride in sourcing materials for its products organically, ensuring the highest level of quality and safety.",
    },
    {
        title: "Innovative & Safe",
        titleClass: "text-pink-600",
        rotateWrap: "",
        rotateInner: "",
        desc:
            "At Toyo innovation meets safety as we curate products that spark joy and provide peace of mind for parents and their children.",
    },
    {
        title: "Eco Friendly",
        titleClass: "text-green-600",
        rotateWrap: "rotate-3 hover:rotate-0",
        rotateInner: "rotate-4 hover:rotate-0",
        desc:
            "Toyo is committed to a greener future offering eco-friendly products that nurture both babies and the planet they will inherit.",
    },
];

export default function OurValues() {
    return (
        <div className="relative w-full min-h-screen bg-[#FFD265] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-34">
                <Image
                    src="/assets/backgroundtransparentshape.svg"
                    alt="Background shape"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="absolute top-0 left-0 right-0 pt-24 pb-32">
                <div className="max-w-6xl mx-auto px-8">
                    <h1 className="text-5xl font-bold text-red-600 text-center mb-16">
                        Our Values
                    </h1>

                    <div className="flex justify-center items-start gap-6 max-w-5xl mx-auto">
                        {cards.map((card, i) => (
                            <div
                                key={i}
                                className={`rounded-2xl p-6 flex-1 shadow-lg relative h-[300px] transition-transform  ${card.rotateWrap}`}
                            >
                                <div className="bg-black rounded-2xl absolute inset-0 -translate-x-[2%] translate-y-[2%]" />

                                <div
                                    className={`bg-[url('/assets/card-bg.png')] bg-center bg-cover rounded-2xl p-6 absolute inset-0 shadow-lg transition-transform ${card.rotateInner}`}
                                >
                                    <h2 className={`text-2xl font-bold mb-3 ${card.titleClass}`}>
                                        {card.title}
                                    </h2>
                                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                                        {card.desc}
                                    </p>

                                    {card.icon && (
                                        <div className="flex justify-end items-end">
                                            <Image
                                                src={card.icon}
                                                alt={card.title}
                                                width={90}
                                                height={90}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
