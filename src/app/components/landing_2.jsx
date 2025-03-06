'use client'
import Image from "next/image"
import { useState } from "react"
import { ChevronRight, Star, Shield, Clock, Car, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import bgimg from "../../../public/bg_img.jpg"
import { motion, AnimatePresence } from "framer-motion"
import SupportBanner from "./support"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black">
        <SupportBanner/>
        
      {/* Navigation */}
      {/* top-0 hides the support banner if it is not needed */}
      <nav className="fixed top-10 w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-20">  {/* Changed h-20 to h-16 */}
    <a href="/">
            <div className="text-2xl font-bold tracking-tighter text-white" >
            <Image
              src="/logo3.png"
              alt="Luxury car"
              width="150"
              height="50"
              className="object-cover object-center"
            />
            </div>
            </a>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["Services" , "About", "Support", "Contact"].map((item) => (
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
                {["Services" , "About", "Support", "Contact"].map((item) => (
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
              Redefining luxury travel with highly professional chauffeurs, ensuring every journey is seamless, secure, and tailored to your needs with the utmost sophistication and reliability.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
                <a href="/bookings">
                  <Button size="lg" className="group">
                    View Fleet
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button className="md:hidden" size="lg" variant="outline">
                      Add as App
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="p-0 sm:p-6">
                    <SheetHeader className="p-4 sm:p-0 border-b sm:border-0">
                      <SheetTitle className="text-xl sm:text-2xl">Add to Home Screen</SheetTitle>
                      <SheetDescription className="text-xs sm:text-sm">
                        Quick access to CHAUFF-IT
                      </SheetDescription>
                    </SheetHeader>
                    
                    <Tabs defaultValue="iphone" className="w-full">
                      <TabsList className="w-full grid grid-cols-2 mb-2">
                        <TabsTrigger value="iphone">iPhone</TabsTrigger>
                        <TabsTrigger value="android">Android</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="iphone" className="p-4 h-full">
                        <div className="flex flex-col gap-3">
                          <div className="space-y-1">
                            <h4 className="font-medium text-sm">Using Safari</h4>
                            <ol className="text-xs space-y-1 pl-4 list-decimal">
                              <li>Open Safari & go to this site</li>
                              <li>Tap the menu bar</li>
                              <li>Tap Add to Home Screen</li>
                              <li>Choose a name & tap Add</li>
                            </ol>
                          </div>
                          
                          <div className="space-y-1">
                            <h4 className="font-medium text-sm">Using Chrome</h4>
                            <ol className="text-xs space-y-1 pl-4 list-decimal">
                              <li>Open Chrome & go to this site</li>
                              <li>Tap Share on the address bar</li>
                              <li>Tap Add to Home Screen</li>
                              <li>Confirm & tap Add</li>
                            </ol>
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="android" className="p-4 h-full">
                        <div className="space-y-1">
                          <h4 className="font-medium text-sm">Using Chrome</h4>
                          <ol className="text-xs space-y-1 pl-4 list-decimal">
                            <li>Open Chrome & go to this site</li>
                            <li>Tap the menu icon (three dots)</li>
                            <li>Select "Add to Home screen"</li>
                            <li>Choose a name & tap "Add"</li>
                          </ol>
                        </div>
                      </TabsContent>
                    </Tabs>
                    
                    <div className="p-4 border-t">
                      <SheetClose asChild>
                        <Button className="w-full">Got it</Button>
                      </SheetClose>
                    </div>
                  </SheetContent>
                </Sheet>
            </div>

            <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="flex items-center gap-3">
                <Car color="white" className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold text-white">Premium Service</h3>
                  <p className="text-sm text-gray-400">Professional chauffeur</p>
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
                <Shield color="white" className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold text-white">Trusted & Secure</h3>
                  <p className="text-sm text-gray-400">Your safety is our top priority</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-8">
            <div className="flex -space-x-2">
            {[
              { letter: "K", color: "bg-blue-600" },
              { letter: "V", color: "bg-red-600" },
              { letter: "L", color: "bg-yellow-600" },
              { letter: "R", color: "bg-green-600" }
            ].map((item, i) => (
              <div 
                key={i} 
                className={`flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 rounded-full border-2 border-black ${item.color} text-white font-bold text-sm sm:text-base`}
              >
                {item.letter}
              </div>
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
            <div id="services"></div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

