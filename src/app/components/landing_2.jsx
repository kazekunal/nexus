// components/landing.jsx
'use client';
import Image from "next/image";
import { ChevronRight, Star, Shield, Clock, Car, Umbrella } from "lucide-react";
import { Button } from "@/components/ui/button";
import bgimgDesktop from "../../../public/bg_img.png";
import bgimgMobile from "../../../public/bg_img_3.png";
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
  return (
    <div className="flex flex-col">
      {/* Full-width hero image section */}
      <div className="relative w-full h-screen">
  {/* Desktop Image */}
  <div className="hidden sm:block absolute inset-0">
    <Image
      src={bgimgDesktop} // your desktop image
      alt="Luxury car desktop"
      fill
      className="object-cover object-center"
      priority
    />
  </div>

  {/* Mobile Image */}
  <div className="block w-full h-full sm:hidden absolute inset-0">
  <Image
    src={bgimgMobile} // your mobile image
    alt="Luxury car mobile"
    fill
    className=""
    priority
  />
</div>

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



      {/* Content section below the image */}
      <div id="content-section" className="w-full bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24 md:pt-32">
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white [text-wrap:balance] mx-auto">
                Your Personal <span className="text-[#bd8c5e]">Chauffeur</span><br/>  Just a Tap Away!
              </h1>
              <p className="text-lg sm:text-xl text-[#d9d1c6] max-w-2xl mx-auto">
              Professional, safe, and reliable chauffeurs for your personal car – now available in Gurgaon for Friday & Saturday nights!
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/bookings">
                <Button size="lg" className="group bg-[#720c17] hover:bg-[#5a0912] text-white">
                  Book a Chauffeur
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Sheet>
                <SheetTrigger asChild>
                  <Button className="md:hidden" size="lg" variant="outline"
                    style={{ borderColor: 'rgba(189, 140, 94, 0.5)', color: '#d9d1c6' }}>
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

            <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="flex items-center gap-3 bg-[#111]/80 p-4 rounded-lg transition-colors text-center flex-col">
                <Car className="h-8 w-8 text-[#bd8c5e]" />
                <div>
                  <h3 className="font-semibold text-white">Premium Chauffeurs</h3>
                  <p className="text-sm text-[#d9d1c6]">Seamless reservations</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-[#111]/80 p-4 rounded-lg transition-colors text-center flex-col">
                <Clock className="h-8 w-8 text-[#bd8c5e]" />
                <div>
                  <h3 className="font-semibold text-white"> Customer Support</h3>
                  <p className="text-sm text-[#d9d1c6]">Seamless reservations</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-[#111]/80 p-4 rounded-lg transition-colors text-center flex-col">
                <Shield className="h-8 w-8 text-[#bd8c5e]" />
                <div>
                  <h3 className="font-semibold text-white">Real-Time Tracking</h3>
                  <p className="text-sm text-[#d9d1c6]">Your safety, Our priority</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-[#111]/80 p-4 rounded-lg transition-colors text-center flex-col">
                <Umbrella className="h-8 w-8 text-[#bd8c5e]" />
                <div>
                  <h3 className="font-semibold text-white">Trip <br className="hidden md:block"/>Insurance</h3>
                  <p className="text-sm text-[#d9d1c6]">At affordable <br className="hidden md:block"/>rates</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 pt-8 bg-[#111]/80 p-4 rounded-lg">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}