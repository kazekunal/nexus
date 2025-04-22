'use client'
import React from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'

export default function WhyChooseUsPage() {
  return (
    <div className="flex flex-col bg-black text-white">
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="py-4 px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Why Choose </span>
            <span className="text-[#bd8c5e]">Chauffit</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12">
            Still wondering if Chauffit is the right choice? Here's why our customers trust us with their rides:
          </p>
        </section>

        {/* Features Section - Simplified with bullet points */}
        <section className="py-4 px-6">
          <div className="container mx-auto max-w-3xl">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#720c17] p-2 rounded-full mt-1">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">Trained & Verified Chauffeurs</h3>
                  <p className="text-gray-300">
                    Every chauffeur undergoes rigorous background checks and professional training. Your safety is our top priority.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-[#720c17] p-2 rounded-full mt-1">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">Affordable & Transparent Pricing</h3>
                  <p className="text-gray-300">
                    No hidden fees or surprises. Our competitive rates mean luxury service without the luxury price tag.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-[#720c17] p-2 rounded-full mt-1">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">Your Car, Our Responsibility</h3>
                  <p className="text-gray-300">
                    We treat your vehicle with the same care and respect as our own, ensuring a worry-free experience.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-[#720c17] p-2 rounded-full mt-1">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">Available Friday & Saturday Nights</h3>
                  <p className="text-gray-300">
                    Enjoy your weekend nights without worrying about driving. We're available when you need us most in Gurgaon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}