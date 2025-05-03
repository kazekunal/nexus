"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Shield, MapPin, CheckCircle2, Award, Car, Headphones, SquareUserRound, Link } from "lucide-react"
import { motion } from "framer-motion"

const FeaturesSection = () => {
  const accentColor = "#bd8c5e";
  const accentColorLight = "#e0b088";
  const accentColorDark = "#8a6548";

  const features = [
    {
      icon: <Shield className="w-10 h-10" style={{ color: accentColor }} />,
      title: "Enhanced Safety",
      description:
        "Two-factor authentication, driver profiles, dashcam footage (Coming Soon), and live tracking available for 24 hours with sharing options.",
    },
    
    {
      icon: <SquareUserRound className="w-10 h-10" style={{ color: accentColor }} />,
      title: "Premium Chauffeurs",
      description:
        "Professionally trained drivers ensuring a comfortable and reliable experience for all your transportation needs.",
    },
    {
      icon: <MapPin className="w-10 h-10" style={{ color: accentColor }} />,
      title: "Venue Partners",
      description:
        "Find our suited teams at five premium nightlife venues in Gurgaon soon, ready to assist you with immediate bookings.",
    },
  ]

  const services = [
    "Live tracking and enhanced security measures",
    "Professional chauffeurs with extensive training",
    "Seamless booking with 5-10 minute driver availability",
    "Dashcam access (Coming Soon) for security and trip memories",
  ]

  return (
    <section className="w-full pb-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-white">
              Premium <span style={{ color: accentColor }}>Features</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Your luxury travel companion in Gurgaon, combining online convenience with premium offline service for an
              unmatched chauffeur experience.
            </p>
          </motion.div>
        </div> */}

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="group bg-black border border-gray-800 hover:border-[#c2946b] transition-all duration-300 overflow-hidden">
                <div className="h-2 bg-gradient-to-r" style={{ from: accentColorDark, to: accentColor }}></div>
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 p-4 bg-black rounded-full border-2 transform group-hover:scale-110 transition-transform duration-300" style={{ borderColor: accentColor }}>
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
          className="relative"
        >
          {/* Accent elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2" style={{ borderColor: accentColorDark, opacity: 0.5 }}></div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2" style={{ borderColor: accentColorDark, opacity: 0.5 }}></div>

          <Card className="border border-gray-800 bg-gradient-to-br" style={{ from: "gray-900", to: `rgba(${parseInt(accentColor.slice(1, 3), 16)}, ${parseInt(accentColor.slice(3, 5), 16)}, ${parseInt(accentColor.slice(5, 7), 16)}, 0.3)` }}>
            <CardContent className="p-0 flex flex-col md:flex-row">
              <div className="md:w-1/2 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-black/80" style={{ to: `rgba(${parseInt(accentColor.slice(1, 3), 16)}, ${parseInt(accentColor.slice(3, 5), 16)}, ${parseInt(accentColor.slice(5, 7), 16)}, 0.3)` }} />
                <img
                  src="feat2.jpg?height=600&width=800"
                  alt="Luxury Chauffeur Service"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <div className="flex items-center gap-2 text-white">
                    <Award className="w-6 h-6" style={{ color: accentColor }} />
                    <span className="font-bold">Trusted by 10,000+ clients</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8 lg:p-12">
                <div className="inline-block mb-4 px-3 py-1 rounded-full" style={{ backgroundColor: `rgba(${parseInt(accentColor.slice(1, 3), 16)}, ${parseInt(accentColor.slice(3, 5), 16)}, ${parseInt(accentColor.slice(5, 7), 16)}, 0.3)`, borderColor: accentColor, borderWidth: '1px' }}>
                  <span className="text-sm font-medium" style={{ color: accentColorLight }}>Premium Service</span>
                </div>
                <h3 className="text-2xl font-semibold mb-6 text-white">All-Inclusive Experience</h3>
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
                      <CheckCircle2 className="w-5 h-5 mt-1 shrink-0" style={{ color: accentColor }} />
                      <span className="text-gray-300">{service}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-800">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full" style={{ backgroundColor: `rgba(${parseInt(accentColor.slice(1, 3), 16)}, ${parseInt(accentColor.slice(3, 5), 16)}, ${parseInt(accentColor.slice(5, 7), 16)}, 0.2)` }}>
                      <Headphones className="w-5 h-5" style={{ color: accentColor }} />
                    </div>
                    <a href='#contact'>
                    <div>
                      <p className="text-gray-400 text-sm">Need assistance?</p>
                      <p className="text-white font-semibold">Customer Support Available</p>
                    </div>
                    </a>
                  </div>
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