import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-black py-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-2 text-gray-400 text-sm">
            <Link href="Tncs.pdf"  target="_blank">
          <p>Copyright © 2025. CHAUFF-IT</p>
          </Link>
          <p>
            Designed and Developed by{' '}
            <span className="text-white hover:text-gray-300 transition-colors cursor-pointer">
              <a href='https://kunalpassan.vercel.app/'>Kunal Passan</a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;