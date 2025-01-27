import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-slate-950 text-white p-4 shadow-md">
      <div className="container py-3 px-7 mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-slate-300">
          <Link href="/">Zads Media</Link>
        </h1>
        <div className="flex space-x-4">
          <Link href="/" className="hover:underline hover:text-yellow-400">
            Home
          </Link>
          <Link href="#contact" className="hover:underline hover:text-yellow-400">
            Contact Us
          </Link>
            <Link href="#faq" className="hover:underline hover:text-yellow-400">
            FAQ
            </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
