'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Clock, Shield, MapPin, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button"

const ServiceCards = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  
  const services = [
    {
      id: 1,
      title: "One-Way Luxury Ride",
      description: "Ideal for a single journey with comfort & class",
      price: "₹2,500",
      icon: <Clock className="w-8 h-8 text-white" />,
      features: [
        "Professional chauffeur",
        "Luxury vehicle",
        "Door-to-door service",
        "Live tracking"
      ]
    },
    {
      id: 2,
      title: " Round-Trip Prestige Travel",
      description: "Ideal for those seeking a luxurious round-trip experience",
      price: "₹4,500",
      icon: <Shield className="w-8 h-8 text-white" />,
      recommended: true,
      features: [
        "Return journey guaranteed",
        "Same chauffeur both ways",
        "Flexible waiting time",
        "Premium vehicle options"
      ]
    },
    {
      id: 3,
      title: "VIP Nightlife Experience",
      description: "Designed for clubs, concerts & exclusive events",
      price: "₹3,500",
      icon: <MapPin className="w-8 h-8 text-white" />,
      features: [
        "Priority venue access",
        "24/7 availability",
        "Dedicated concierge",
        "Enhanced security"
      ]
    }
  ];

  const handleCardClick = (id, e) => {
    e.stopPropagation();
    setExpandedCard(expandedCard === id ? null : id);
  };

  const handleFormClick = (e) => {
    e.stopPropagation();
  };

  const BookingForm = () => (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="mt-6 grid gap-4"
      onClick={handleFormClick}
    >
      <div className="grid gap-2">
        <Label htmlFor="name" className="text-gray-300">Full Name</Label>
        <Input id="name" placeholder="Enter your name" className="bg-gray-800 border-gray-700 text-white" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="people" className="text-gray-300">Number of People</Label>
        <Input id="people" type="number" placeholder="Enter number of people" className="bg-gray-800 border-gray-700 text-white" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="aadhar" className="text-gray-300">Aadhar Number</Label>
        <Input id="aadhar" placeholder="Enter Aadhar number" className="bg-gray-800 border-gray-700 text-white" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="time" className="text-gray-300">Pickup Time</Label>
        <Input id="time" type="datetime-local" className="bg-gray-800 border-gray-700 text-white" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="pickup" className="text-gray-300">Pickup Location</Label>
        <Input id="pickup" placeholder="Enter pickup location" className="bg-gray-800 border-gray-700 text-white" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="dropoff" className="text-gray-300">Drop-off Location</Label>
        <Input id="dropoff" placeholder="Enter drop-off location" className="bg-gray-800 border-gray-700 text-white" />
      </div>
      <Button className="mt-4 w-full bg-white hover:bg-gray-200 text-black">
        Confirm Booking
      </Button>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-black p-8">
        
      <div className="max-w-6xl mx-auto py-10 pt-28">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Choose Your Premium Travel Experience</h2>
          <p className="text-gray-400">Seamless, Luxurious, and Secure Transportation for Every Occasion</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="h-full">
              <Card 
                className={`h-full bg-[#0A0C10] border-gray-800 text-white`}
              >
                <CardHeader className="text-center pt-8">
                  <div className="mx-auto rounded-full bg-gray-800 p-3 w-16 h-16 flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-white mb-2">{service.title}</CardTitle>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <div className="text-3xl font-bold text-white mb-4">
                    {service.price}
                    <span className="text-sm text-gray-400 font-normal">/trip</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="mb-6 space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <svg className="w-4 h-4 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      expandedCard === service.id 
                        ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                        : 'bg-white hover:bg-gray-200 text-black'
                    }`}
                    onClick={(e) => handleCardClick(service.id, e)}
                  >
                    {expandedCard === service.id ? 'Close' : 'Book Now'}
                  </Button>
                  
                  <AnimatePresence>
                    {expandedCard === service.id && <BookingForm />}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;