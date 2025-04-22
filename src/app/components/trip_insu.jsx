'use client'
import React, { useState } from 'react'
import Link from 'next/link'

export default function TripInsurancePage() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  
  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <div className="flex flex-col bg-black text-white">

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="py-8 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Trip </span>
            <span className="text-amber-600">Insurance</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-4">
            At Chauffit, your peace of mind is our priority. That's why we offer optional trip insurance to protect your car during the ride. Based on your comfort level, you can choose from three flexible plans:
          </p>
        </section>

        {/* Insurance Cards Section */}
        <section className="py-8 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-black p-8 rounded-lg border border-gray-800 hover:border-amber-600 transition-all transform hover:-translate-y-1 mb-4">
                {/* <div className="text-amber-600 text-4xl mb-4">
                  🛡️
                </div> */}
                <h3 className="text-2xl font-bold mb-2">Scratch Coverage</h3>
                <div className="text-4xl font-bold text-white mb-4">₹79</div>
                <div className="h-px bg-gray-700 w-full mb-4"></div>
                <p className="text-gray-300 mb-4">
                  Covers minor scratches
                </p>
                <div className="bg-gray-800 p-3 rounded-md text-center mb-6">
                  <p className="text-lg font-semibold">Coverage up to</p>
                  <p className="text-2xl font-bold text-amber-600">₹5,000</p>
                </div>
                {/* <button className="w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-700 transition-colors">
                  Select Plan
                </button> */}
              </div>
              
              {/* Card 2 */}
              <div className="bg-black p-8 rounded-lg border border-blue-600 shadow-lg shadow-blue-900/20 transform scale-105 md:scale-105">
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-sm font-bold px-4 py-1 rounded-tr-lg rounded-bl-lg">
                  POPULAR
                </div>
                {/* <div className="text-blue-500 text-4xl mb-4">
                  🛡️🛡️
                </div> */}
                <h3 className="text-2xl font-bold mb-2">Scratch & Dent Coverage</h3>
                <div className="text-4xl font-bold text-white mb-4">₹99</div>
                <div className="h-px bg-gray-700 w-full mb-4"></div>
                <p className="text-gray-300 mb-4">
                  Covers dents and surface damage
                </p>
                <div className="bg-gray-800 p-3 rounded-md text-center mb-6">
                  <p className="text-lg font-semibold">Coverage up to</p>
                  <p className="text-2xl font-bold text-blue-500">₹10,000</p>
                </div>
                {/* <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                  Select Plan
                </button> */}
              </div>
              
              {/* Card 3 */}
              <div className="bg-black p-8 rounded-lg border border-gray-800 hover:border-amber-600 transition-all transform hover:-translate-y-1">
                {/* <div className="text-amber-600 text-4xl mb-4">
                  🛡️🛡️🛡️
                </div> */}
                <h3 className="text-2xl font-bold mb-2">Full Coverage</h3>
                <div className="text-4xl font-bold text-white mb-4">₹129</div>
                <div className="h-px bg-gray-700 w-full mb-4"></div>
                <p className="text-gray-300 mb-4">
                  Comprehensive protection for all damages
                </p>
                <div className="bg-gray-800 p-3 rounded-md text-center mb-6">
                  <p className="text-lg font-semibold">Coverage up to</p>
                  <p className="text-2xl font-bold text-amber-600">₹15,000</p>
                </div>
                {/* <button className="w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-700 transition-colors">
                  Select Plan
                </button> */}
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-500 text-center mt-8">
            <Link href="/insurance" className="hover:underline">
                Insurance terms & conditions apply*
            </Link>
            </p>
        </section>
        
      </main>
    </div>
  )
}