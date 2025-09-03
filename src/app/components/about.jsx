"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';

const HowItWorks = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const onlineBookingSteps = [
    "Once the app is out, Click on Book Now to download the app, open it, and complete your booking.",
    "Sign up, enter your personal and vehicle details, and continue your journey with us.",
    "Enter your pickup and drop-off locations to proceed.",
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
          Get home safely and hassle-free with Chauffit. We make the process seamless.
        </motion.p>

        {/* Online Booking Flow */}
        <div className="mb-20">
        <motion.div
  className="mb-8 text-center"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.4, duration: 0.6 }}
>
  {/* Waitlist heading clickable */}
  <div className="text-2xl font-bold text-[#d9d1c6] cursor-pointer">
    <SignedOut>
      <SignInButton mode="modal">
        <span className="hover:text-[#bd8c5e] transition-colors">
          Join Our Waitlist
        </span>
      </SignInButton>
    </SignedOut>

    <SignedIn>
      <span
        onClick={() => router.push("/bookings")}
        className="hover:text-[#bd8c5e] transition-colors"
      >
        Join Our Waitlist
      </span>
    </SignedIn>
  </div>

  {/* Subheading */}
  <motion.p
    className="text-base text-[#d9d1c6] mt-2"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6, duration: 0.6 }}
  >
    Sign in through your email on our website and avail early bird offers.
  </motion.p>
</motion.div>

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
  className="bg-[#111] rounded-lg p-6 h-auto max-h-96 flex items-center justify-center"
  initial={{ opacity: 0, x: 30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.5, duration: 0.8 }}
>
  <img
    src="/online.png"
    alt="Luxury Chauffeur Service"
    className="w-full h-auto max-h-full object-cover rounded-md"
  />
</motion.div>
          </div>
        </div>

        {/* Offline Booking Flow */}
        {/* <div>
          <motion.h3 
            className="text-2xl font-bold mb-8 text-center text-[#d9d1c6]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            For Offline Bookings:
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8 items-center">
           
            <motion.div 
              className="bg-[#111] rounded-lg p-6 h-auto max-h-96 flex items-center justify-center"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <img
                src="/offline.jpg"
                alt="Luxury Chauffeur Service"
                className="w-full h-auto max-h-full object-cover rounded-md"
              />
            </motion.div>

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
        </div> */}
        
        {/* <motion.div
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
        </motion.div> */}
      </div>
      <div id="about us"></div>
    </section>
  )
}

export default HowItWorks