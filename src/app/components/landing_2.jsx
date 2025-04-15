'use client'
import Image from "next/image"
import { useState } from "react"
import { ChevronRight, Star, Shield, Clock, Car, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import bgimg from "../../../public/bg_img.jpg"
import { motion, AnimatePresence } from "framer-motion"
import logo from "../../../public/navbar.png"
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
        {/* <SupportBanner/> */}
        
      {/* Navigation */}
      <nav className="fixed  w-full z-50 bg-black/80 backdrop-blur-lg border-b border-[#bd8c5e]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="/">
              <div className="text-2xl font-bold tracking-tighter text-white" >
                <Image
                  src={logo}
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
                  className="text-[#d9d1c6] hover:text-[#bd8c5e] transition-colors"
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
              className="md:hidden text-[#d9d1c6] p-2 hover:text-[#bd8c5e]"
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
              className="fixed top-20 left-0 right-0 bg-black z-40 px-6 py-8 md:hidden border-b border-[#bd8c5e]/30"
            >
              <div className="flex flex-col gap-6">
                {["Services" , "About", "Support", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-[#d9d1c6] hover:text-[#bd8c5e] transition-colors text-lg font-light tracking-wide"
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

      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Changed position from "fill" to relative sizing and z-index to fix image display */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={bgimg}
            alt="Luxury car"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="opacity-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="max-w-3xl space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white [text-wrap:balance]">
                Let yourself be transported by <span className="text-[#bd8c5e]">excellence</span>
              </h1>
              <p className="text-lg sm:text-xl text-[#d9d1c6] max-w-2xl">
                Redefining luxury travel with highly professional chauffeurs, ensuring every journey is seamless, secure, and tailored to your needs with the utmost sophistication and reliability.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="/bookings">
                <Button size="lg" className="group bg-[#720c17] hover:bg-[#5a0912] text-white">
                  View Fleet
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Sheet>
                <SheetTrigger asChild>
                  <Button className="md:hidden" size="lg" variant="outline" 
                    style={{borderColor: 'rgba(189, 140, 94, 0.5)', color: '#d9d1c6'}}>
                    Add as App
                  </Button>
                </SheetTrigger>
                <SheetContent className="p-0 sm:p-6 bg-black text-[#d9d1c6] border-l border-[#bd8c5e]/30">
                  <SheetHeader className="p-4 sm:p-0 border-b sm:border-0 border-[#bd8c5e]/30">
                    <SheetTitle className="text-xl sm:text-2xl text-white">Add to Home Screen</SheetTitle>
                    <SheetDescription className="text-xs sm:text-sm text-[#d9d1c6]">
                      Quick access to CHAUFF-IT
                    </SheetDescription>
                  </SheetHeader>
                  
                  <Tabs defaultValue="iphone" className="w-full">
                    <TabsList className="w-full grid grid-cols-2 mb-2 bg-black">
                      <TabsTrigger value="iphone" className="data-[state=active]:bg-[#720c17] data-[state=active]:text-white">iPhone</TabsTrigger>
                      <TabsTrigger value="android" className="data-[state=active]:bg-[#720c17] data-[state=active]:text-white">Android</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="iphone" className="p-4 h-full">
                      <div className="flex flex-col gap-3">
                        <div className="space-y-1">
                          <h4 className="font-medium text-sm text-[#bd8c5e]">Using Safari</h4>
                          <ol className="text-xs space-y-1 pl-4 list-decimal text-[#d9d1c6]">
                            <li>Open Safari & go to this site</li>
                            <li>Tap the menu bar</li>
                            <li>Tap Add to Home Screen</li>
                            <li>Choose a name & tap Add</li>
                          </ol>
                        </div>
                        
                        <div className="space-y-1">
                          <h4 className="font-medium text-sm text-[#bd8c5e]">Using Chrome</h4>
                          <ol className="text-xs space-y-1 pl-4 list-decimal text-[#d9d1c6]">
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
                        <h4 className="font-medium text-sm text-[#bd8c5e]">Using Chrome</h4>
                        <ol className="text-xs space-y-1 pl-4 list-decimal text-[#d9d1c6]">
                          <li>Open Chrome & go to this site</li>
                          <li>Tap the menu icon (three dots)</li>
                          <li>Select "Add to Home screen"</li>
                          <li>Choose a name & tap "Add"</li>
                        </ol>
                      </div>
                    </TabsContent>
                  </Tabs>
                  
                  <div className="p-4 border-t border-[#bd8c5e]/30">
                    <SheetClose asChild>
                      <Button className="w-full bg-[#720c17] hover:bg-[#5a0912] text-white">Got it</Button>
                    </SheetClose>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="flex items-center gap-3 bg-black/40 p-4 rounded-lg transition-colors">
                <Car className="h-8 w-8 text-[#bd8c5e]" />
                <div>
                  <h3 className="font-semibold text-white">Premium Service</h3>
                  <p className="text-sm text-[#d9d1c6]">Professional chauffeur</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-black/40 p-4 rounded-lg transition-colors">
                <Clock className="h-8 w-8 text-[#bd8c5e]" />
                <div>
                  <h3 className="font-semibold text-white">Easy Booking</h3>
                  <p className="text-sm text-[#d9d1c6]">Seamless reservations</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-black/40 p-4 rounded-lg transition-colors">
                <Shield className="h-8 w-8 text-[#bd8c5e]" />
                <div>
                  <h3 className="font-semibold text-white">Trusted & Secure</h3>
                  <p className="text-sm text-[#d9d1c6]">Your safety, Our priority</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-8 bg-black/40 p-4 rounded-lg ">
              <div className="flex -space-x-2">
                {[
                  { letter: "K", color: "bg-[#720c17]" },
                  { letter: "V", color: "bg-[#314b4c]" },
                  { letter: "L", color: "bg-[#bd8c5e]" },
                  { letter: "R", color: "bg-black" }
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className={`flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 rounded-full border-2 border-[#bd8c5e]/30 ${item.color} text-white font-bold text-sm sm:text-base shadow-lg`}
                  >
                    {item.letter}
                  </div>
                ))}
              </div>

              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#bd8c5e] text-[#bd8c5e]" />
                  ))}
                </div>
                <p className="text-sm text-[#d9d1c6]">Trusted by 10,000+ clients</p>
              </div>
            </div>
            <div id="services"></div>
          </div>
        </div>
      </div>
    </div>
  )
}