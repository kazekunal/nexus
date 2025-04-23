import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import Image from 'next/image';
import logo from "../../../public/navbar.png";
import Link from 'next/link';

export default function Footer2() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Chauffit */}
          

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-300 hover:text-red-400 transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-300 hover:text-red-400 transition-colors">How it Works</a></li>
              <li><a href="#about-us" className="text-gray-300 hover:text-red-400 transition-colors">About Us</a></li>
              <li><a href="#trip-insurance" className="text-gray-300 hover:text-red-400 transition-colors">Trip Insurance</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-red-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/tnc" className="text-gray-300 hover:text-red-400 transition-colors">Terms & Conditions</a></li>
              <li><a href="/insurance" className="text-gray-300 hover:text-red-400 transition-colors">Insurance Terms</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-red-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info & QR Code */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="flex flex-col space-y-4">
              <div>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300">
                    <span className="mr-2">Email:</span>
                    <a href="mailto:chauffit@gmail.com" className="hover:text-red-400 transition-colors">chauffit@gmail.com</a>
                  </li>
                </ul>
              </div>
              
              {/* QR Code */}
              <div className="mt-4 md:hidden">
                <p className="text-gray-300 mb-2">Scan to connect:</p>
                <div className="bg-white p-1 w-24 h-24 inline-block">
                  <Image
                    src="/qr_3.png"
                    alt="Chauffit QR Code"
                    width={90}
                    height={90}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-2xl font-bold tracking-tighter text-white">
                <Image
                  src={logo}
                  alt="Luxury car"
                  width="250"
                  height="150"
                  className="object-cover object-center"
                />
              </div>
            </div>
            {/* <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-red-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-red-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-red-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-300 hover:text-red-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div> */}
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-2 text-gray-400 text-sm">
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
}