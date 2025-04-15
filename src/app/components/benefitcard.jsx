import React from 'react';
import Image from 'next/image';

function BenefitCard({ image, title, description }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default function Benefits() {
  return (
    <section id="benefits" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Unlock Amazing Benefits</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Turn your everyday spending into extraordinary experiences with our
            rewards optimization.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BenefitCard
            image="/placeholder.svg?height=200&width=300"
            title="Free Travel"
            description="Earn enough points for flights to your dream destinations."
          />
          <BenefitCard
            image="/placeholder.svg?height=200&width=300"
            title="Luxury Hotel Stays"
            description="Redeem points for premium hotel experiences worldwide."
          />
          <BenefitCard
            image="/placeholder.svg?height=200&width=300"
            title="Cash Back"
            description="Convert your points to cash and save on everyday expenses."
          />
        </div>
      </div>
    </section>
  );
}