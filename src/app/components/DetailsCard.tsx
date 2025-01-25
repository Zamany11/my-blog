import Image from "next/image";

interface DetailsCardProps {
    image: string
    title: string
    name: string
    description: string
}

export default function DetailsCard({ image, title, name, description }: DetailsCardProps) {
    return (
        <div className="bg-gradient-to-br from-slate-200/70 to-green-100/80 hover:bg-slate-300 p-10 rounded-lg shadow-md">
        <div className="mb-4">
          <Image
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="mt-4">
            <h2 className="font-bold text-xl text-black">{title}</h2> 
            
                     
          </div>
        </div>
        <h3 className="text-gray-600 font-bold text-2xl">{name}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    );
}