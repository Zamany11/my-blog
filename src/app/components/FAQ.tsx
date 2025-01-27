// components/FAQ.tsx
"use client"
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface FAQItem {
  question: string
  answer: string
  category: string
}

const faqData: FAQItem[] = [
  {
    category: "Getting Started",
    question: "What is GoShare?",
    answer: "GoShare is a platform that allows users to make money online by completing simple microtasks. Linking heir whatsapp for ads purposes and for performing other quick tasks, GoShare offers easy ways to earn extra income. No special skills are required, and users can get started from anywhere, using any device."
  },
  {
    category: "Earnings",
    question: "How do I get paid?",
    answer: "You get paid immediately you Link your whatsapp and complete the necessary tasks. Payments are processed automatically to your connected bank account."
  },
    {
        category: "Earnings",
        question: "How much can I earn?",
        answer: "The amount you can earn depends on the tasks you complete. Some tasks pay more than others, and you can increase your earnings by completing more tasks. The more tasks you complete, the more you can earn."
    },
    {
        category: "Earnings",
        question: "How often can I cash out?",
        answer: "You can cash out your earnings as often as you like. There are no restrictions on how often you can withdraw your earnings, and you can access your money at any time."
    },
    {
        category: "Blocking",
        question: "Are there any side effects of linking my whatsapp?",
        answer: "There are no side effects of linking your whatsapp. It is safe and secure, and your information is protected. Linking your whatsapp allows you to access more tasks and earn more money, so it is highly recommended. However, we don't advice you use your main whatsapp account"
    },
  // Add more FAQ items
]

export default function FAQ() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null)
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  return (
    <div ref={ref} className="max-w-4xl mx-auto px-4 py-16">
      <h2 className={`text-4xl font-bold text-center mb-12 transition-all duration-500 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div 
            key={index}
            className="border-b border-gray-200 last:border-0"
          >
            <button
              onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
              className="flex justify-between items-center w-full py-4 text-left"
            >
              <span className="font-medium text-lg">{faq.question}</span>
              <span className={`transform transition-transform duration-200 ${
                activeQuestion === index ? 'rotate-180' : ''
              }`}>
                ↓
              </span>
            </button>
            
            <div className={`transition-all duration-200 overflow-hidden ${
              activeQuestion === index ? 'max-h-96 pb-4' : 'max-h-0'
            }`}>
              <p className="text-gray-600">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
