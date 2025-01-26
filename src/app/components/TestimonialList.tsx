// components/TestimonialList.tsx
import { TestimonialCard } from './TestimonialCard'
import { testimonials } from '../data/testimonials'

export function TestimonialList() {
  return (
    <div className="relative w-full overflow-hidden bg-gray-700 py-10">
      <div className="relative w-full overflow-x-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="mx-4 w-[350px] flex-shrink-0"
            >
              <TestimonialCard
                image={testimonial.image}
                name={testimonial.name}
                title={testimonial.title}
                content={testimonial.content}
              />
            </div>
          ))}
          {testimonials.map((testimonial) => (
            <div 
              key={`${testimonial.id}-duplicate`}
              className="mx-4 w-[350px] flex-shrink-0"
            >
              <TestimonialCard
                image={testimonial.image}
                name={testimonial.name}
                title={testimonial.title}
                content={testimonial.content}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
