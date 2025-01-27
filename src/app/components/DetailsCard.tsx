import Image from "next/image";

interface DetailsCardProps {
    image: string;
    title: string;
    name: string;
    description: string;
    width: number;
    height: number;
}

export default function DetailsCard({ image, title, name, description, width, height }: DetailsCardProps) {
    return (
        <div className="bg-gradient-to-br from-blue-500/70 to-purple-500/80 hover:bg-purple-600 p-10 rounded-lg shadow-md border border-blue-400">
            <div className="mb-4">
                <Image
                    src={image}
                    alt={name}
                    className="w-12 h-12 rounded-full object-cover"
                    width={width}
                    height={height}
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