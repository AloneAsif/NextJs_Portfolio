
import { FC } from 'react';
import Link from 'next/link';
const Footer: FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center">
          <div className="mb-6 sm:mb-0">
            {/* <h2 className="text-3xl font-semibold">Your Brand</h2> */}
            <p className="text-sm text-gray-400 mt-2">Making things better, one step at a time.</p>
          </div>

          <div className="flex space-x-6">
            <Link href="/" className="text-gray-300 hover:text-white transition duration-300">
              Home
            </Link>
            <Link href="/pages/about" className="text-gray-300 hover:text-white transition duration-300">
              About Us
            </Link>
            {/* <Link href="#services" className="text-gray-300 hover:text-white transition duration-300">
              Services
            </Link> */}
            <Link href="/pages/contact" className="text-gray-300 hover:text-white transition duration-300">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()}  M.Asif All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
