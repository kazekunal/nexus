"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Link from "next/link"

const AboutUs = () => {
  return (
    <section className="bg-black text-white py-16" id="about us">
      <div className="max-w-7xl mx-auto px-4" >
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8 text-center pt-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About <span className="text-[#bd8c5e]">Us</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          {/* Left side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="text-lg mb-6 leading-relaxed text-center">
              Discover the concept behind Chauffit and why we exist. Chauffit is a premium chauffeur-on-demand
              service designed for customers who want the convenience and safety of a professional chauffeur for
              their personal vehicle.
            </p>
            
            {/* QR Code Section - Centered */}
            <div className="flex flex-col items-center mt-8">
              <div className="bg-white p-3 w-40 h-40 inline-block">
                <Link href="https://mywebar.com/p/Project_2_e090eiruh6">
                <Image
                  src="/qr_3.png"
                  alt="Chauffit QR Code"
                  width={150}
                  height={150}
                  className="object-contain"
                />
                </Link>
              </div>
              <p className="text-[#bd8c5e] text-center mt-3 font-medium">
                Bring our services to life — scan for the AR experience!
              </p>
            </div>
          </motion.div>

          {/* Right side: Visual Card */}
          <motion.div
            className="w-full h-full"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="bg-[#111] rounded-lg overflow-hidden border border-[#d9d1c6]/20 h-full">
              <div className="relative w-full h-48 md:h-64">
                {/* Map iframe */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28059.283897488876!2d77.03024415809182!3d28.46718209831867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1747398598646!5m2!1sen!2sin"
                  height="100%"
                  width="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#720c17] rounded-tl-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#d9d1c6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#d9d1c6]">Weekend Service</h3>
                <p className="text-gray-300 mb-4">
                  Our chauffeurs are available for Friday and Saturday nights in Gurgaon,
                  ensuring you have a safe ride home after your weekend events.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#720c17]"></div>
                  <span className="text-[#d9d1c6] text-sm">Service available from 10 PM to 3:30 AM</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs