// components/navbar.jsx
'use client';
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../../../public/navbar.png";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed  w-full z-50 bg-[#d9d1c6]/80 backdrop-blur-lg border-b border-[#bd8c5e]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="/">
            <div className="text-2xl font-bold tracking-tighter text-white">
              <Image
                src={logo}
                alt="Luxury car"
                width="200"
                height="100"
                className="object-cover object-center"
              />
            </div>
          </a>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["Features", "How it works", "About us","Pricing","Trip Insurance", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#720c17] hover:text-[#bd8c5e] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <a href="/bookings">
            <div className="hidden md:flex items-center space-x-4">
              <Button className="bg-[#720c17] hover:bg-[#5a0912] text-white">
                Book Now
              </Button>
            </div>
          </a>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#720c17] p-2 hover:text-[#bd8c5e]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-0 right-0 z-40 px-6 py-8 md:hidden border-b border-[#bd8c5e]/30 bg-[#d9d1c6]"
          >
            <div className="flex flex-col gap-6">
              {["Features", "How it works", "About us","Pricing","Trip Insurance", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[#720c17] hover:text-[#bd8c5e] transition-colors font-light"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="flex flex-col gap-4 pt-4 border-t border-[#bd8c5e]/30">
                <a href="/bookings" className="w-full">
                  <Button
                    className="bg-[#720c17] hover:bg-[#5a0912] text-white w-full text-base font-medium"
                  >
                    Book Now
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}