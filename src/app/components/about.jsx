"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import cab from "../../../public/cab1.jpg"

const AboutMission = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const missionPoints = [
    "Fostering Sustainable Growth and Green Development",
    "Innovating for a Sustainable Future",
    "Customer-Centric Approach",
    "Building Stronger Communities",
  ]

  return (
    <div className="bg-black min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Images */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={cab}
              alt="Blueprint and planning tools"
              width={600}
              height={200}
              className="w-full h-1/2 object-cover"
            />
          </div>

          
        </motion.div>

        {/* Right Column - Content */}
        <motion.div
          className="lg:pl-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-white mb-8">Our Mission</h2>

          <p className="text-lg text-white mb-10 leading-relaxed">
            To provide exceptional chauffeur services that exceed client expectations through innovation, quality
            service, and a commitment to reliability. We aim to build lasting relationships and create experiences that
            enhance comfort and convenience. Through precision, expertise, and a customer-centric approach, we strive to
            exceed expectations in every journey. Our dedication to integrity and excellence drives us to build lasting
            relationships and a legacy of trust.
          </p>

          <div className="space-y-6">
            {missionPoints.map((point, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg text-white">{point}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutMission

