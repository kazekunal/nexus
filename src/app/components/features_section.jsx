"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Shield, MapPin, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

const FeaturesSection = () => {
  const features = [
    {
      icon: <Clock color="white" className="w-10 h-10 text-primary" />,
      title: "Quick Booking",
      description:
        "Book experienced chauffeurs within 15-20 minutes through our seamless online platform or at our venue partners.",
    },
    {
      icon: <Shield color="white" className="w-10 h-10 text-primary" />,
      title: "Enhanced Safety",
      description:
        "Two-factor authentication, detailed driver profiles, and dashcam footage available for 24 hours ensuring your security.",
    },
    {
      icon: <MapPin color="white" className="w-10 h-10 text-primary" />,
      title: "Venue Partners",
      description:
        "Find our suited teams at five premium nightlife venues in Gurgaon, ready to assist you with immediate bookings.",
    },
  ]

  const services = [
    "Multiple trip options: short, long, and one-sided journeys",
    "Live tracking and enhanced security measures",
    "24/7 customer support and immediate assistance",
    "Professional chauffeurs with extensive training",
    "Luxury vehicle fleet maintenance and cleanliness",
    "Complimentary amenities in every vehicle",
  ]

  return (
    <section id="services" className="w-full py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Premium Features
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Your luxury travel companion in Gurgaon, combining online convenience with premium offline service for an
              unmatched chauffeur experience.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="group bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:bg-gray-900/80 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-gray-800 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
            <CardContent className="p-0 flex flex-col md:flex-row">
              <div className="md:w-1/2 relative">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <img
                  src="feat2.jpg?height=600&width=800"
                  alt="Luxury Chauffeur Service"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 lg:p-12">
                <h3 className="text-2xl font-semibold mb-6 text-white">All-Inclusive Service</h3>
                <div className="grid gap-4">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 color="green" className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <span className="text-gray-300">{service}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <div id="about"></div>
    </section>
  )
}

export default FeaturesSection
