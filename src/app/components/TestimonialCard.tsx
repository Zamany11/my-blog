// components/TestimonialCard.tsx
interface TestimonialProps {
    image: string
    name: string
    title: string
    content: string
  }
  
  export function TestimonialCard({ image, name, title, content }: TestimonialProps) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="ml-4">
            <h4 className="font-bold text-black">{name}</h4>
            <p className="text-gray-600 text-sm">{title}</p>
          </div>
        </div>
        <p className="text-gray-700">{content}</p>
      </div>
    )
  }
  