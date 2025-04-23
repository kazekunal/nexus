"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

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
                {/* Map iframe<iframe  width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.3799341406184!2d77.06038057580592!3d28.46810257575496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1998d93a2cfb%3A0x6738361a7da66f53!2sDowntown%20Diner%20%26%20Fresh%20Beer%20Cafe!5e0!3m2!1sen!2sin!4v1745415254024!5m2!1sen!2sin"
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