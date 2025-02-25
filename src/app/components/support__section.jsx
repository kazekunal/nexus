'use client'
import React from 'react';
import Link from 'next/link';

const SupportSection = () => {
  return (
    <section className="w-full py-8 bg-black text-white pb-16 sm:pb-24 md:pb-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left column - Information */}
          <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 md:space-y-10 mb-8 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">Join Our Journey to Redefine Luxury Transportation</h2>
            
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              CHAUFF-IT is seeking visionary early adopters and investors who recognize 
              the potential in revolutionizing the premium mobility market.
            </p>
            
            <div className="pt-4 sm:pt-6">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">Investment Opportunity</h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Early investors receive exclusive perks including equity options, 
                lifetime service discounts, and VIP membership to our Founders' Club.
              </p>
              <Link href="/support">
                <button className="mt-4 sm:mt-6 px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition duration-300 w-full sm:w-auto">
                  Learn More About Investment
                </button>
              </Link>
            </div>
          </div>
          
          {/* Right column - Features */}
          <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8">
            <h3 className="text-2xl sm:text-3xl font-semibold">Coming April 2025</h3>
              
            <div className="space-y-4 sm:space-y-6">
              {[
                { title: "Instant Chauffeur Booking", desc: "Book a professional chauffeur within 15-20 minutes." },
                { title: "One-Way Trip Option", desc: "Need a driver after a drink or feeling unwell? Book a one-way trip instantly." },
                { title: "Pre-Verified Chauffeurs", desc: "All drivers undergo pre-police verification and document screening for your safety." },
                { title: "Live Tracking & Dashcams", desc: "Track your ride in real-time and access dashcam footage for security and fun moments." },
                { title: "Driver Dress Code", desc: "Chauffeurs dressed in black suits, managers in grey suits for a premium experience." },
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-gray-800 rounded-full mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg sm:text-xl">{feature.title}</h4>
                    <p className="text-gray-400 text-sm sm:text-base">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;

 
                // { title: "Instant Chauffeur Booking", desc: "Book a professional chauffeur within 15-20 minutes." },
                // { title: "One-Way Trip Option", desc: "Need a driver after a drink or feeling unwell? Book a one-way trip instantly." },
                // { title: "Pre-Verified Chauffeurs", desc: "All drivers undergo pre-police verification and document screening for your safety." },
                // { title: "Live Tracking & Dashcams", desc: "Track your ride in real-time and access dashcam footage for security and fun moments." },
                // { title: "Driver Dress Code", desc: "Chauffeurs dressed in black suits, managers in grey suits for a premium experience." },
                // { title: "Corporate & Millennial Focus", desc: "Targeting professionals and millennials seeking a premium chauffeur experience." },
                // { title: "Driver Incentive Program", desc: "Drivers earn incentives based on trip quality ratings and customer feedback." },
                // { title: "Peak Hour Surge Pricing", desc: "Competitive surge pricing similar to Uber and Ola during high demand hours." },
                // { title: "Round Trip Availability", desc: "Need a chauffeur for a longer journey? Round trips are available." },
                // { title: "Partnership with Nightlife Venues", desc: "Collaborating with top nightclubs and bars in Gurgaon for on-site chauffeur bookings." },
                // { title: "Live Location & Dashcam Sharing", desc: "Share your live ride updates and dashcam footage with loved ones for safety." },
                // { title: "Distance-Based Payment Model", desc: "Transparent and fair pricing for both customers and chauffeurs." },
                // { title: "Trial Offline Operations", desc: "Starting with a 3-month offline pilot in Gurgaon with 5-6 drivers per location." },
                // { title: "Strategic Brand Marketing", desc: "Exclusive brand partnerships with restaurants and nightlife spots to promote Chauff-IT." }
              