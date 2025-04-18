"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

const HowItWorks = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const onlineBookingSteps = [
    "Click on \"Book Now\"",
    "Share your pickup location and car details",
    "A trained Chauffit chauffeur arrives at your location",
    "Sit back and enjoy a safe ride in your own car"
  ]

  const offlineBookingSteps = [
    "Walk out of the bar and find a Chauffit chauffeur stationed nearby",
    "Share your details and confirm your booking",
    "Get driven home by a professional Chauffit chauffeur"
  ]

  return (
    <section className="bg-black text-white py-16" id="how it works">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-8 text-center pt-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          How It <span className="text-[#bd8c5e]">Works</span>
        </motion.h2>
        
        <motion.p 
          className="text-lg text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Get home safely and hassle-free with Chauffit. Whether you book online or find us outside your favorite
          venue, we make the process seamless.
        </motion.p>

        {/* Online Booking Flow */}
        <div className="mb-20">
          <motion.h3 
            className="text-2xl font-bold mb-8 text-center text-[#d9d1c6]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            For Online Bookings:
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Steps on the left */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {onlineBookingSteps.map((step, index) => (
                <motion.div 
                  key={`online-${index}`}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + (index * 0.2), duration: 0.5 }}
                >
                  <div className="flex-shrink-0 bg-[#d9d1c6] text-[#720c17] rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <p className="text-lg pt-1">{step}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Illustration on the right */}
            <motion.div 
              className="bg-[#111] rounded-lg p-6 h-64 flex items-center justify-center border border-[#d9d1c6]/20"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-[#222] mx-auto mb-4 flex items-center justify-center border-2 border-[#720c17]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#d9d1c6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm text-[#d9d1c6]">Online Booking Illustration</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Offline Booking Flow */}
        <div>
          <motion.h3 
            className="text-2xl font-bold mb-8 text-center text-[#d9d1c6]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            For Offline Bookings:
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Illustration on the left for desktop, but will appear below heading on mobile */}
            <motion.div 
              className="bg-[#111] rounded-lg p-6 h-64 flex items-center justify-center md:order-1 order-2 border border-[#d9d1c6]/20"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-[#222] mx-auto mb-4 flex items-center justify-center border-2 border-[#720c17]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#d9d1c6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </div>
                <p className="text-sm text-[#d9d1c6]">Offline Booking Illustration</p>
              </div>
            </motion.div>

            {/* Steps on the right for desktop */}
            <motion.div 
              className="space-y-6 md:order-2 order-1"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              {offlineBookingSteps.map((step, index) => (
                <motion.div 
                  key={`offline-${index}`}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + (index * 0.2), duration: 0.5 }}
                >
                  <div className="flex-shrink-0 bg-[#d9d1c6] text-[#720c17] rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <p className="text-lg pt-1">{step}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <a 
            href="#" 
            className="inline-block px-8 py-3 bg-[#720c17] text-white rounded hover:bg-[#5a0912] transition-colors duration-300 font-medium"
          >
            Book a Chauffeur
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks