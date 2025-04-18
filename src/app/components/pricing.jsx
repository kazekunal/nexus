'use client'
import { useState } from 'react';
import { Award } from 'lucide-react';

export default function PricingComponent() {
  const [activeTab, setActiveTab] = useState('perMin');
  
  const carSegments = [
    { name: 'Hatchback', fixed: '₹749', perKm: '₹349', perMin: '₹225', badge: '' },
    { name: 'Micro SUV', fixed: '₹849', perKm: '₹375', perMin: '₹275', badge: '' },
    { name: 'Mid-size SUV', fixed: '₹899', perKm: '₹425', perMin: '₹349', badge: 'Popular' },
    { name: 'Sedan', fixed: '₹899', perKm: '₹425', perMin: '₹375', badge: '' },
    { name: 'Full-size SUV', fixed: '₹999', perKm: '₹499', perMin: '₹425', badge: '' },
    { name: 'Luxury', fixed: '₹1199', perKm: '₹699', perMin: '₹699', badge: 'Best Value' },
  ];

  return (
    <div className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4 text-white">Pricing <span className="text-[#bd8c5e]"> Plans</span></h2>
          <p className="text-xl text-[#d9d1c6]">Find the right pricing plan for your needs. Chauffit offers flexible and transparent pricing for various ride types.</p>
        </div>
        
        <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-800">
          {/* Promo Banner */}
          <div className="bg-red-900/30 p-4 text-center font-bold text-red-300">
           Pilot offer active — 10% OFF First Ride
          </div>
          
          {/* Tabs */}
          <div className="flex">
            <button 
              onClick={() => setActiveTab('all')} 
              className={`flex-1 py-4 px-6 font-medium text-center ${activeTab === 'all' ? 'bg-red-800 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
            >
              All Plans
            </button>
            <button 
              onClick={() => setActiveTab('fixed')} 
              className={`flex-1 py-4 px-6 font-medium text-center ${activeTab === 'fixed' ? 'bg-red-800 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
            >
              Fixed Price Plan
            </button>
            <button 
              onClick={() => setActiveTab('perKm')} 
              className={`flex-1 py-4 px-6 font-medium text-center ${activeTab === 'perKm' ? 'bg-red-800 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
            >
              Per Km Plan
            </button>
            <button 
              onClick={() => setActiveTab('perMin')} 
              className={`flex-1 py-4 px-6 font-medium text-center ${activeTab === 'perMin' ? 'bg-red-800 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
            >
              Per Min Plan
            </button>
          </div>
          
          {/* Table */}
          <div className="p-6 overflow-x-auto">
            <table className="min-w-full bg-gray-900">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="py-3 px-4 text-left border-b border-gray-700">Car Segment</th>
                  {(activeTab === 'all' || activeTab === 'fixed') && 
                    <th className="py-3 px-4 text-left border-b border-gray-700">Fixed Cost (0–15 km)</th>
                  }
                  {(activeTab === 'all' || activeTab === 'perKm') && 
                    <th className="py-3 px-4 text-left border-b border-gray-700">Base Fair (+ ₹25 Per Km)</th>
                  }
                  {(activeTab === 'all' || activeTab === 'perMin') && 
                    <th className="py-3 px-4 text-left border-b border-gray-700">Base Fair (+ ₹15 Per Min)</th>
                  }
                </tr>
              </thead>
              <tbody>
                {carSegments.map((car, index) => (
                  <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/50">
                    <td className="py-4 px-4 text-gray-300">
                      <div className="flex items-center">
                        <span className="font-medium">{car.name}</span>
                        {car.badge && (
                          <span className="ml-2 bg-red-800 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                            <Award size={12} className="mr-1" />
                            {car.badge}
                          </span>
                        )}
                      </div>
                    </td>
                    {(activeTab === 'all' || activeTab === 'fixed') && 
                      <td className="py-4 px-4 font-bold text-white">{car.fixed}</td>
                    }
                    {(activeTab === 'all' || activeTab === 'perKm') && 
                      <td className="py-4 px-4 font-bold text-white">{car.perKm}</td>
                    }
                    {(activeTab === 'all' || activeTab === 'perMin') && 
                      <td className="py-4 px-4 font-bold text-white">{car.perMin}</td>
                    }
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Legend */}
          <div className="bg-gray-800 p-4">
            <div className="text-sm text-gray-400">
              <p className="mb-2"><span className="font-bold text-gray-300">Fixed Cost:</span> One-time fee for rides up to 15 kilometers</p>
              <p className="mb-2"><span className="font-bold text-gray-300">Per Km Plan:</span> Base fare plus ₹25 for each additional kilometer</p>
              <p><span className="font-bold text-gray-300">Per Min Plan:</span> Base fare plus ₹15 for each minute of journey time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}