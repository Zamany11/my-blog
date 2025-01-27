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
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
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
            <p>&copy; {new Date().getFullYear()} Zamany Digital Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }
  