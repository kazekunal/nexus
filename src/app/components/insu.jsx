'use client'
import { useState } from 'react'

export default function InsurancePlanPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center mb-6">Insurance Plan</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Overview</h2>
          <p className="mb-4">
            Chauffit provides an optional trip insurance plan for customers who book a chauffeur through our platform. 
            This insurance safeguards the customer's car during the trip, offering peace of mind and financial protection 
            in case of damages. The insurance plan is <strong>capped at ₹15,000</strong> and is available for three pricing 
            options based on the chosen coverage category.
          </p>
          <hr className="border-gray-300 my-4" />
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Insurance Categories</h2>
          <p className="mb-4">
            The insurance coverage is divided into three phases, allowing customers to choose the level of protection that 
            best suits their needs. Each category offers specific coverage, which will be detailed in the terms and conditions 
            when applying for a claim.
          </p>
          
          <div className="space-y-4 mt-4">
            <div className="border border-gray-300 p-4 rounded">
              <h3 className="font-semibold">1. Scratch Coverage</h3>
              <p>Covers minor scratches; up to ₹5,000.</p>
              <p className="font-semibold mt-2">Price: ₹79/-</p>
            </div>
            
            <div className="border border-gray-300 p-4 rounded">
              <h3 className="font-semibold">2. Scratch & Dent Coverage</h3>
              <p>Covers dents and minor surface damages; up to ₹10,000.</p>
              <p className="font-semibold mt-2">Price: ₹99/-</p>
            </div>
            
            <div className="border border-gray-300 p-4 rounded">
              <h3 className="font-semibold">3. Full Coverage</h3>
              <p>Comprehensive protection for scratches, dents, and minor damages; up to ₹15,000.</p>
              <p className="font-semibold mt-2">Price: ₹129/-</p>
            </div>
          </div>
          <hr className="border-gray-300 my-4" />
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">How It Works</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <span className="font-semibold">Booking:</span>
              <p>When booking a chauffeur through the Chauffit app, customers can opt for insurance by selecting their preferred category.</p>
            </li>
            <li>
              <span className="font-semibold">Payment:</span>
              <p>The add-on fee for the insurance will be included in the final booking cost.</p>
            </li>
            <li>
              <span className="font-semibold">Coverage:</span>
              <p>The customer's car is insured for the duration of the trip.</p>
              <p>In the event of damage, customers can claim the applicable coverage amount by providing necessary proof and documentation.</p>
            </li>
          </ol>
          <hr className="border-gray-300 my-4" />
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Terms and Conditions</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>The insurance is valid only for trips booked through the Chauffit platform.</li>
            <li>The maximum coverage amount is capped at ₹15,000 across all categories.</li>
            <li>Claims must be submitted within 3 days of the trip completion with relevant evidence.</li>
            <li>
              Claims will be categorized into three phases:
              <ul className="list-disc pl-5 mt-2">
                <li>Scratch Coverage: Covers minor scratches; up to ₹5,000.</li>
                <li>Scratch & Dent Coverage: Covers dents and minor surface damages; up to ₹10,000.</li>
                <li>Full Coverage: Comprehensive protection for scratches, dents, and minor damages; up to ₹15,000.</li>
              </ul>
            </li>
            <li>The insurance is valid for all segments of cars, ranging from luxury vehicles to hatchbacks.</li>
            <li>
              Claims Process:
              <ul className="list-disc pl-5 mt-2">
                <li>Customers must notify Chauffit in writing within 3 days of any event that may give rise to a claim.</li>
                <li>Repair invoices must be uploaded within 15 days of the repair from authorized service centers.</li>
                <li>All claims are subject to deductibles, sub-limits, and coverage availability.</li>
              </ul>
            </li>
            <li>
              Coverage Duration:
              <ul className="list-disc pl-5 mt-2">
                <li>Coverage starts when the chauffeur boards the customer's car and ends when the customer ends the Chauffit trip.</li>
              </ul>
            </li>
            <li>
              Coverage Exclusions:
              <ul className="list-disc pl-5 mt-2">
                <li>Normal wear and tear, such as spark plugs, brake pads, tires, etc.</li>
                <li>Mechanical or electrical failures.</li>
                <li>Rusting, weather-related damage, or normal aging of the vehicle.</li>
                <li>Damage to accessories, electrical equipment, or third-party liabilities.</li>
                <li>Vehicles without valid motor vehicle insurance.</li>
                <li>Commercial or yellow-board vehicles.</li>
              </ul>
            </li>
            <li>
              Excluded Incidents:
              <ul className="list-disc pl-5 mt-2">
                <li>Fraud, unlawful activities, or intentional overloading.</li>
                <li>Damages caused by third parties or war-like operations.</li>
                <li>Manufacturing defects or damage covered by dealer warranties.</li>
              </ul>
            </li>
            <li>
              Repairs:
              <ul className="list-disc pl-5 mt-2">
                <li>Only repairs from GST-authorized service centers are eligible for claims.</li>
                <li>Visible, external, and accidental damages are covered during the trip.</li>
              </ul>
            </li>
          </ol>
          <hr className="border-gray-300 my-4" />
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Benefits</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Affordable and flexible protection for your vehicle.</li>
            <li>Peace of mind during every journey.</li>
            <li>Simplified claims process with dedicated support.</li>
          </ul>
        </section>
        
        <div className="flex justify-center mt-8 mb-10">
          <button 
            className="px-6 py-3 bg-white border border-black rounded transition-colors"
            onClick={() => window.history.back()}
          >
            <p className='text-black'>Back to Website</p>
          </button>
        </div>
      </div>
    </div>
  )
}