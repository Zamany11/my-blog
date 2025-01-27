"use client"
import Image from "next/image";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface DetailsCardProps {
    image: string;
    title: string;
    name: string;
    description: string;
    width: number;
    height: number;
}

interface DetailsCardListProps {
    cards: DetailsCardProps[];
}

export default function DetailsCardList({ cards }: DetailsCardListProps) {
    return (
        <>
            {/* Desktop View */}
            <div className="hidden md:grid md:grid-cols-3 gap-4">
                {cards.map((card, index) => (
                    <DetailsCard key={index} {...card} />
                ))}
            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden">
                <Carousel
                    showArrows={true}
                    showStatus={false}
                    showThumbs={false}
                    swipeable={true}
                    emulateTouch={true}
                    infiniteLoop={true}
                    autoPlay={true}
                    stopOnHover={true}
                    className="custom-carousel"
                >
                    {cards.map((card, index) => (
                        <div key={index} className="px-4 pb-8">
                            <DetailsCard {...card} />
                        </div>
                    ))}
                </Carousel>
            </div>
        </>
    );
}

function DetailsCard({ image, title, name, description, width, height }: DetailsCardProps) {
    return (
        <div className="bg-gradient-to-br from-blue-500/70 to-purple-500/80 hover:bg-purple-600 p-10 rounded-lg shadow-md border border-blue-400">
            <div className="mb-4">
                <Image
                    src={image}
                    alt={name}
                    className="md:w-12 md:h-12 rounded-full object-cover"
                    width={width}
                    height={height}
                    sizes="(max-width: 768px) 1000px, (max-width: 1024px) 1000px, 1000px"
                />
                <div className="mt-4">
                    <h2 className="font-bold text-xl text-white">{title}</h2>
                </div>
            </div>
            <h3 className="text-yellow-400 font-bold text-2xl">{name}</h3>
            <p className="text-gray-300">{description}</p>
        </div>
    );
}
