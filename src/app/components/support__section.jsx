"use client"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import soon_2 from "../../../public/soon_2.webp"

const SupportSection = () => {
  return (
    <section className="w-full py-16 md:py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left column - Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight bg-clip-text text-transparent text-white">
              Join Our Journey to Redefine Luxury Transportation
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed">
              CHAUFF-IT is seeking visionary early adopters and investors who recognize the potential in revolutionizing
              the premium mobility market.
            </p>

            <div className="pt-6">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">Investment Opportunity</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Early investors receive exclusive perks including equity options, lifetime service discounts, and VIP
                membership to our Founders' Club.
              </p>
              <Link href="/support" className="group">
                <button className="mt-6 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition duration-300 flex items-center space-x-2">
                  <span>Learn More About Investment</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Right column - Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col items-center justify-center"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={soon_2}
                alt="CHAUFF-IT Luxury Transportation"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-2">Coming April 2025</h3>
                <div className="flex items-center space-x-2 text-lg">
                  <Calendar className="w-5 h-5" />
                  <span>Mark your calendars</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SupportSection


// 'use client'
// import React from 'react';
// import Link from 'next/link';

// const SupportSection = () => {
//   return (
//     <section className="w-full py-8 bg-black text-white pb-16 sm:pb-24 md:pb-32">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
//         <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-start">
//           {/* Left column - Information */}
//           <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 md:space-y-10 mb-8 lg:mb-0">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">Join Our Journey to Redefine Luxury Transportation</h2>
            
//             <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
//               CHAUFF-IT is seeking visionary early adopters and investors who recognize 
//               the potential in revolutionizing the premium mobility market.
//             </p>
            
//             <div className="pt-4 sm:pt-6">
//               <h3 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">Investment Opportunity</h3>
//               <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
//                 Early investors receive exclusive perks including equity options, 
//                 lifetime service discounts, and VIP membership to our Founders' Club.
//               </p>
//               <Link href="/support">
//                 <button className="mt-4 sm:mt-6 px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition duration-300 w-full sm:w-auto">
//                   Learn More About Investment
//                 </button>
//               </Link>
//             </div>
//           </div>
          
//           {/* Right column - Image */}
//           <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
//             <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-10">Coming April 2025</h3>
//             <div className="w-full rounded-lg overflow-hidden">
//               <img 
//                 src={soon_2} 
//                 alt="CHAUFF-IT Luxury Transportation" 
//                 className="w-full h-auto object-cover rounded-lg shadow-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SupportSection;

