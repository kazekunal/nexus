"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, MapPin, UtensilsCrossed, Building, Plane } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import internationalTripImg from "../../../public/resort.jpg"
import luxuryDiningImg from "../../../public/resort.jpg"
import privateJetImg from "../../../public/resort.jpg"
import hotelSuiteImg from "../../../public/resort.jpg"
import luxuryYachtImg from "../../../public/resort.jpg"
import Navbar from "./navbar"

// Luxury travel and dining images with proper imports
const carouselImages = [
  {
    src: internationalTripImg,
    alt: "Luxury beachfront resort with infinity pool overlooking the ocean",
  },
  {
    src: luxuryDiningImg,
    alt: "Elegant fine dining restaurant with gourmet meal presentation",
  },
  {
    src: privateJetImg,
    alt: "Private jet interior with luxurious leather seats",
  },
  {
    src: hotelSuiteImg,
    alt: "Five-star hotel suite with panoramic city views",
  },
  {
    src: luxuryYachtImg,
    alt: "Luxury yacht sailing through crystal clear waters",
  },
]

// Dream option cards
const dreamOptions = [
  {
    id: "fine-dining",
    title: "5-Star Dining",
    description: "Experience culinary excellence at the world's finest restaurants",
    icon: <UtensilsCrossed className="h-8 w-8" />,
  },
  {
    id: "luxury-hotel",
    title: "Luxury Hotels",
    description: "Stay at exclusive properties with world-class amenities and service",
    icon: <Building className="h-8 w-8" />,
  },
  {
    id: "domestic-travel",
    title: "Domestic Getaways",
    description: "Discover hidden gems and luxury experiences within your country",
    icon: <MapPin className="h-8 w-8" />,
  },
  {
    id: "international-travel",
    title: "International Adventures",
    description: "Explore exotic destinations with VIP experiences and premium service",
    icon: <Plane className="h-8 w-8" />,
  },
]

export default function HeroPage() {
  const [showForm, setShowForm] = useState(false)
  const [formStep, setFormStep] = useState(0)
  const [selectedDream, setSelectedDream] = useState("")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Auto-rotate carousel images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1))
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const handleStartExploring = () => {
    setShowForm(true)
  }

  const handleNextStep = () => {
    setFormStep(formStep + 1)
  }

  const handlePrevStep = () => {
    setFormStep(formStep - 1)
  }

  const handleDreamSelection = (dreamId) => {
    setSelectedDream(dreamId)
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background image carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={carouselImages[currentImageIndex].src}
              alt={carouselImages[currentImageIndex].alt}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Navigation bar */}
        <Navbar/>

      {/* Main content */}
      <div className="relative z-10 flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        {!showForm ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl text-center"
          >
            <h2 className="mb-2 text-sm font-medium uppercase tracking-widest text-red-400 md:text-base">
              Reward Points Exchange
            </h2>
            <h1 className="mb-6 font-sans text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Transform Your Points <br className="hidden md:inline" />
              Into <span className="text-red-400">Extraordinary</span> Experiences
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/90 md:text-xl">
              Unlock the full potential of your reward points with personalized luxury experiences tailored to your
              dreams
            </p>
            <Button
              onClick={handleStartExploring}
              size="lg"
              className="bg-red-500 px-8 py-6 text-lg font-medium text-white hover:bg-red-600"
            >
              Start Exploring
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-4xl"
          >
            <Card className="overflow-hidden bg-white/95 shadow-2xl backdrop-blur-sm">
              {formStep === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-6 md:p-8"
                >
                  <h2 className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-red-500">
                    Step 1 of 3
                  </h2>
                  <h3 className="mb-6 text-center text-2xl font-bold text-gray-900 md:text-3xl">
                    What luxury experience are you dreaming of?
                  </h3>
                  <p className="mb-8 text-center text-gray-600">
                    Select the experience you'd like to transform your points into
                  </p>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {dreamOptions.map((option) => (
                      <motion.div
                        key={option.id}
                        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                        className={`cursor-pointer rounded-xl border-2 p-6 transition-all ${
                          selectedDream === option.id
                            ? "border-red-500 bg-red-50"
                            : "border-gray-200 hover:border-red-200"
                        }`}
                        onClick={() => handleDreamSelection(option.id)}
                      >
                        <div
                          className={`mb-4 rounded-full p-3 inline-flex ${
                            selectedDream === option.id ? "bg-red-100 text-red-500" : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {option.icon}
                        </div>
                        <h4 className="mb-2 text-lg font-semibold text-gray-900">{option.title}</h4>
                        <p className="text-sm text-gray-600">{option.description}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 flex justify-end">
                    <Button
                      onClick={handleNextStep}
                      className="bg-red-500 text-white hover:bg-red-600"
                      disabled={!selectedDream}
                    >
                      Continue
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {formStep === 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-6 md:p-8"
                >
                  <h2 className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-red-500">
                    Step 2 of 3
                  </h2>
                  <h3 className="mb-6 text-center text-2xl font-bold text-gray-900 md:text-3xl">
                    Tell us more about your dream
                  </h3>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="dream-details" className="text-gray-700">
                        What specifically are you looking for?
                      </Label>
                      <Textarea
                        id="dream-details"
                        placeholder={
                          selectedDream === "fine-dining"
                            ? "Michelin-starred restaurants, specific cuisine, special occasion..."
                            : selectedDream === "luxury-hotel"
                              ? "Beachfront resort, city hotel, specific amenities..."
                              : selectedDream === "domestic-travel"
                                ? "Mountain retreat, beach vacation, city exploration..."
                                : "Specific countries, type of experience, duration..."
                        }
                        className="min-h-[120px] resize-none"
                      />
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="budget" className="text-gray-700">
                          Approximate point budget
                        </Label>
                        <Input id="budget" placeholder="How many points do you have to use?" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="timeline" className="text-gray-700">
                          When are you planning this experience?
                        </Label>
                        <Input id="timeline" placeholder="Next month, within 6 months, etc." />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="special-requests" className="text-gray-700">
                        Any special requests or preferences?
                      </Label>
                      <Textarea
                        id="special-requests"
                        placeholder="Dietary restrictions, accessibility needs, special occasions..."
                        className="min-h-[80px] resize-none"
                      />
                    </div>
                  </div>

                  <div className="mt-8 flex justify-between">
                    <Button variant="outline" onClick={handlePrevStep}>
                      Back
                    </Button>
                    <Button onClick={handleNextStep} className="bg-red-500 text-white hover:bg-red-600">
                      Continue
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {formStep === 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-6 md:p-8"
                >
                  <h2 className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-red-500">
                    Step 3 of 3
                  </h2>
                  <h3 className="mb-6 text-center text-2xl font-bold text-gray-900 md:text-3xl">
                    Let's make your dream a reality
                  </h3>
                  <p className="mb-8 text-center text-gray-600">
                    Share your contact details so our luxury experience specialists can help you
                  </p>

                  <div className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="first-name" className="text-gray-700">
                          First Name
                        </Label>
                        <Input id="first-name" placeholder="Your first name" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="last-name" className="text-gray-700">
                          Last Name
                        </Label>
                        <Input id="last-name" placeholder="Your last name" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700">
                        Email Address
                      </Label>
                      <Input id="email" type="email" placeholder="email@example.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-700">
                        Phone Number
                      </Label>
                      <Input id="phone" placeholder="Your phone number" />
                    </div>

                    <div className="flex items-start space-x-2">
                      <input
                        type="checkbox"
                        id="consent"
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-red-500 focus:ring-red-500"
                      />
                      <Label htmlFor="consent" className="text-sm text-gray-600">
                        I agree to receive personalized recommendations and offers related to my luxury experience
                        preferences.
                      </Label>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-between">
                    <Button variant="outline" onClick={handlePrevStep}>
                      Back
                    </Button>
                    <Button className="bg-red-500 text-white hover:bg-red-600">Submit Request</Button>
                  </div>
                </motion.div>
              )}
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  )
}