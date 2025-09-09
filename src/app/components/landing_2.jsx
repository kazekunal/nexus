// components/landing.jsx
'use client';
import Image from "next/image";
import { ChevronRight, Star, Shield, Clock, Car, Umbrella, SquareUserRound} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Landing() {
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);
  
  // Setup video autoplay once component loads
  useEffect(() => {
    // Try to autoplay videos
    if (desktopVideoRef.current) {
      desktopVideoRef.current.play().catch(error => {
        console.log("Desktop video autoplay failed:", error);
      });
    }
    
    if (mobileVideoRef.current) {
      mobileVideoRef.current.play().catch(error => {
        console.log("Mobile video autoplay failed:", error);
      });
    }
  }, []);

  const handleWaitlistClick = () => {
    // Redirect to your desired page - replace '/bookings' with your target route
    window.location.href = '/bookings';
  };

  return (
    <div className="flex flex-col">
      {/* Full-width hero video section */}
      <div className="relative w-full h-screen">
        {/* Desktop Video */}
        <div className="hidden sm:block absolute inset-0">
          <video
            ref={desktopVideoRef}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/landingVideo.mp4" type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Mobile Video */}
        <div className="block sm:hidden absolute inset-0">
          <video
            ref={mobileVideoRef}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/mobile.mp4" type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Video Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Overlay Content */}
        <div className="absolute bottom-0 left-0 right-0 text-center p-4 md:p-6 bg-gradient-to-t from-black to-transparent">
          <Button
            size="lg"
            className="group bg-[#720c17] hover:bg-[#5a0912] text-white animate-bounce mb-20 md:mb-0"
            onClick={() =>
              document
                .getElementById('content-section')
                .scrollIntoView({ behavior: 'smooth' })
            }
          >
            Scroll Down
            <ChevronRight className="ml-2 h-4 w-4 transform rotate-90" />
          </Button>
        </div>
      </div>

      {/* Content section below the video */}
      <div id="content-section" className="w-full bg-black h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24 md:pt-32">
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white [text-wrap:balance] mx-auto">
                Your Personal <span className="text-[#bd8c5e]">Chauffeur</span><br/>  Just a Tap Away!
              </h1>
              <p className="text-lg sm:text-xl text-[#d9d1c6] max-w-2xl mx-auto">
                Professional, safe, and reliable chauffeurs for your personal car – now available in Gurgaon!
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center" id="features">
              <Button 
                size="lg" 
                className="group bg-[#720c17] hover:bg-[#5a0912] text-white"
                onClick={handleWaitlistClick}
              >
                Join Our Waitlist
              </Button>
              
              {/* <a href="/portal">
                <Button size="lg" className="group bg-[#720c17] hover:bg-[#5a0912] text-white">
                  View Our Fleet
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a> */}
              <br/>
              <Sheet>
                <SheetTrigger asChild>
                  <Button className="md:hidden" size="lg" variant="outline"
                    style={{ borderColor: '#bd8c5e', color: '#bd8c5e' }}>
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
                          <h4 className="font-medium text-sm text-[#bd8c5e] text-center">Using Safari</h4>
                          <ol className="text-xs space-y-1 pl-4 list-decimal text-[#d9d1c6]">
                            <li>Open Safari & go to this site</li>
                            <li>Tap the menu bar</li>
                            <li>Tap Add to Home Screen</li>
                            <li>Choose a name & tap Add</li>
                          </ol>
                        </div>

                        <div className="space-y-1">
                          <h4 className="font-medium text-sm text-[#bd8c5e] text-center">Using Chrome</h4>
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
                        <h4 className="font-medium text-sm text-[#bd8c5e] text-center">Using Chrome</h4>
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

            {/* <div className="flex flex-col items-center gap-4 pt-8 bg-[#111]/80 p-4 rounded-lg">
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

              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#bd8c5e] text-[#bd8c5e]" />
                  ))}
                </div>
                <p className="text-sm text-[#d9d1c6]">Trusted by 10,000+ clients</p>
              </div>
              <div id="services"></div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}