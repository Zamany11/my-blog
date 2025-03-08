import Link from "next/link";

// components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-gray-950 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-white text-lg font-bold">GoShare</h3>
              <p className="text-sm">
                Earn more income by just linking your whatsapp, perform simple tasks and get paid.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
                <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
  
            {/* Contact Info */}
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>Email: victorchiemelie980@gmail.com</li>
                <li>Phone: +2348026057491</li>
              </ul>
            </div>
  
            {/* Social Links */}
            <div>
              <h4 className="text-white font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="#footer" className="hover:text-white transition-colors">Twitter </Link>
                <Link href="#footer" className="hover:text-white transition-colors">Facebook </Link>
                <Link href="#footer" className="hover:text-white transition-colors">Instagram </Link>
              </div>
            </div>
          </div>
  
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
           <Link href="https://wa.me/message/SYION5AVZPNSK1">
              <p>&copy; {new Date().getFullYear()} Developed by 
                <span className="text-blue-300 hover:underline"> Zamany Web Dev</span> 
                  <br /> 
                  All rights reserved.
              </p>
                </Link>
          </div>
        </div>
      </footer>
    )
  }
  