'use client'
import Image from "next/image"
import { useState } from "react"
import { ChevronRight, Star, Shield, Clock, Car, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import bgimg from "../../../public/bg_img.jpg"
import { motion, AnimatePresence } from "framer-motion"
import SupportBanner from "./support"

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black">
        <SupportBanner/>
        
      {/* Navigation */}
      {/* top-0 hides the support banner if it is not needed */}
      <nav className="fixed top-8 w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-20">  {/* Changed h-20 to h-16 */}
            <div className="text-2xl font-bold tracking-tighter text-white" >CHAUFF-IT</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["Fleet", "Services", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
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
                    href={`#${item.toLowerCase()}`}
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

      {/* Hero Section */}
      <div className="relative min-h-screen">
        <Image
          src={bgimg}
          alt="Luxury car"
          fill
          className="object-cover object-center opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="max-w-3xl space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white [text-wrap:balance]">
                Let yourself be transported by excellence
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
                Your premium mobility solution that redefines luxury travel. With a curated fleet of prestigious
                vehicles and professional chauffeurs, we deliver sophistication on every journey.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group">
                Book Now
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                View Fleet
              </Button>
            </div>

            <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="flex items-center gap-3">
                <Shield color="white" className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold text-white">Premium Service</h3>
                  <p className="text-sm text-gray-400">Luxury guaranteed</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock color="white" className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold text-white">24/7 Available</h3>
                  <p className="text-sm text-gray-400">Always at your service</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Car color="white" className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold text-white">Luxury Fleet</h3>
                  <p className="text-sm text-gray-400">Premium vehicles</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-8">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 sm:w-10 h-8 sm:h-10 rounded-full border-2 border-black bg-gray-800" />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star color="yellow" key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-gray-400">Trusted by 10,000+ clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}