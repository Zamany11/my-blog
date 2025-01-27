// components/ContactForm.tsx
"use client"
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
  }

  return (
    <section id="contact" className="py-10 ">
        <div className=' py-10'>  
      <div ref={ref} className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center text-white mb-6 transition-all duration-500 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Contact Us
        </h2>
        
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-slate-950 p-8 rounded-lg border border-blue-400 shadow-md space-y-6">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          
          <div className="mb-4">
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
      </div>
    </section>
  )
}
