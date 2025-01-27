"use client"
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-slate-950/95 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="text-white font-bold text-xl">
          <Link href="/">GoShare</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-white hover:text-yellow-400">Home</Link>
          <Link href="#features" className="text-white hover:text-yellow-400">Features</Link>
          <Link href="#testimonials" className="text-white hover:text-yellow-400">Testimonials</Link>
          <Link href="#contact" className="text-white hover:text-yellow-400">Contact</Link>
        </div>

        {/* Mobile Navigation */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-16 left-0 right-0 bg-slate-950 p-4`}>
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-white hover:text-yellow-400">Home</Link>
            <Link href="#features" className="text-white hover:text-yellow-400">Features</Link>
            <Link href="#testimonials" className="text-white hover:text-yellow-400">Testimonials</Link>
            <Link href="#contact" className="text-white hover:text-yellow-400">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
