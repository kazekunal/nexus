'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Clock, Shield, MapPin, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button"
import ServiceCards from '../components/booking'

function page() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div>
        <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-20">  {/* Changed h-20 to h-16 */}
    <a href='/'>
            <div className="text-2xl font-bold tracking-tighter text-white" ><Image
              src={logo}
              alt="Luxury car"
              width="150"
              height="50"
              className="object-cover object-center"
            /></div>
            </a>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["Fleet", "Services", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`/`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
            
            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-300 hover:text-black">
                Login
              </Button>
              <Button>Sign Up</Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2"
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
              className="fixed top-20 left-0 right-0 bg-[#0A0A0A] z-40 px-6 py-8 md:hidden"
            >
              <div className="flex flex-col gap-6">
                {["Fleet", "Services", "About", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`/`}
                    className="text-white hover:text-[#C9C7BA] transition-colors text-lg font-light tracking-wide"
                  >
                    {item}
                  </a>
                ))}
                <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
                  <Button 
                    variant="ghost"
                    className="text-white hover:text-[#C9C7BA] hover:bg-white/10 w-full text-base"
                  >
                    Login
                  </Button>
                  <Button 
                    className="bg-white hover:bg-[#C9C7BA] text-[#29292B] w-full text-base font-medium"
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
        <ServiceCards/>
    </div>
  )
}

export default page