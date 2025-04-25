'use client'
import React from 'react'
import { Share2, Award, Gift, Users } from 'lucide-react'

export default function ReferralLoyaltyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section - Compact */}
      <section className="py-12 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-white">Rewards & </span>
          <span className="text-[#bd8c5e]">Loyalty</span>
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-300">
          We're not just driving you home—we're rewarding your loyalty too! Earn credits by referring friends or enjoy exclusive discounts for being a regular user.
        </p>
      </section>

      {/* Main Content Area - Unified Design */}
      <section className="px-4 pb-16 max-w-4xl mx-auto">
        <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
          {/* Top Section with Tabs */}
          <div className="grid grid-cols-1 border-b border-gray-800">
            <div className="flex items-center justify-center py-4 px-2 bg-gray-800">
              <Share2 className="h-5 w-5 text-[#bd8c5e] mr-2" />
              <h2 className="text-xl font-bold">Referral & Loyalty Program</h2>
            </div>
            {/* <div className="flex items-center justify-center py-4 px-2">
              <Award className="h-5 w-5 text-[#bd8c5e] mr-2" />
              <h2 className="text-xl font-bold">Loyalty Program</h2>
            </div> */}
          </div>

          <div className="p-6">
            {/* Referral Program Section */}
            <div className="mb-8">
              <div className="bg-[#720c17]/10 p-4 rounded-md border-l-4 border-[#720c17] mb-5">
                <p className="text-sm font-medium mb-2">Your Referral Code:</p>
                <div className="bg-black flex justify-between items-center p-2 rounded">
                  <code className="text-lg text-[#bd8c5e]">CHAUFF2025</code>
                  <button
                    className="bg-[#720c17] text-white px-3 py-1 rounded text-xs cursor:pointer"
                    onClick={() => {
                        navigator.clipboard.writeText("CHAUFF2025").then(() => {
                        alert("Code copied");
                        });
                    }}
                    >
                    Copy
                </button>
                </div>
              </div>
              
              <h3 className="text-sm text-[#bd8c5e] uppercase font-bold tracking-wider mb-3">How It Works</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <div className="min-w-4 h-4 flex items-center justify-center mt-1">
                    <div className="w-1.5 h-1.5 bg-[#bd8c5e] rounded-full"></div>
                  </div>
                  <p>Share your unique referral code</p>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <div className="min-w-4 h-4 flex items-center justify-center mt-1">
                    <div className="w-1.5 h-1.5 bg-[#bd8c5e] rounded-full"></div>
                  </div>
                  <p>New users get ₹100 off their first trip</p>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <div className="min-w-4 h-4 flex items-center justify-center mt-1">
                    <div className="w-1.5 h-1.5 bg-[#bd8c5e] rounded-full"></div>
                  </div>
                  <p>Referrers earn ₹100 Chauffit credits per successful referral</p>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <div className="min-w-4 h-4 flex items-center justify-center mt-1">
                    <div className="w-1.5 h-1.5 bg-[#bd8c5e] rounded-full"></div>
                  </div>
                  <p>Max ₹300/month in referral credits (valid for 6 months)</p>
                </li>
              </ul>
            </div>
            
            <div className="border-t border-gray-800 my-6"></div>
            
            {/* Loyalty Program Section */}
            <div>
              <h3 className="text-sm text-[#bd8c5e] uppercase font-bold tracking-wider mb-3">Loyalty Tiers</h3>
              
              <div className="space-y-4 mb-6">
                {/* Silver Tier - Compact */}
                <div className="bg-gray-800/50 p-3 rounded-md flex">
                  <div className="mr-3">
                    <div className="bg-gray-500 p-1.5 rounded-full">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="text-base font-bold text-gray-300">Silver Tier</h4>
                      <span className="text-xs text-gray-400">5 rides/month</span>
                    </div>
                    <p className="text-xs text-gray-400 mb-2">5% off next month</p>
                    <div className="w-full h-1.5 bg-gray-700 rounded-full">
                      <div className="w-1/3 h-full bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Gold Tier - Compact */}
                <div className="bg-gray-800/50 p-3 rounded-md flex">
                  <div className="mr-3">
                    <div className="bg-yellow-600 p-1.5 rounded-full">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="text-base font-bold text-yellow-500">Gold Tier</h4>
                      <span className="text-xs text-gray-400">10 rides/month</span>
                    </div>
                    <p className="text-xs text-gray-400 mb-2">10% off + priority booking</p>
                    <div className="w-full h-1.5 bg-gray-700 rounded-full">
                      <div className="w-1/2 h-full bg-yellow-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Platinum Tier - Compact */}
                <div className="bg-gray-800/50 p-3 rounded-md flex">
                  <div className="mr-3">
                    <div className="bg-blue-500 p-1.5 rounded-full">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="text-base font-bold text-blue-400">Platinum Tier</h4>
                      <span className="text-xs text-gray-400">20 rides/month</span>
                    </div>
                    <p className="text-xs text-gray-400 mb-2">15% off + priority + dedicated support</p>
                    <div className="w-full h-1.5 bg-gray-700 rounded-full">
                      <div className="w-3/4 h-full bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Milestone Bonuses - Compact */}
              <div className="bg-black p-4 rounded-md border border-[#bd8c5e]/20">
                <div className="flex items-center gap-2 mb-3">
                  <Gift className="h-4 w-4 text-[#bd8c5e]" />
                  <h3 className="text-sm font-bold text-[#bd8c5e]">Milestone Bonuses</h3>
                </div>
                <div className="flex gap-4 justify-around">
                  <div className="text-center">
                    <div className="text-xs text-gray-400 mb-1">50 Trips</div>
                    <div className="text-base text-[#bd8c5e] font-bold">₹500 credits</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400 mb-1">100 Trips</div>
                    <div className="text-base text-[#bd8c5e] font-bold">₹1000 credits</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Call to action */}
            <div className="mt-8 bg-[#720c17]/20 p-4 rounded-md flex items-center justify-between">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-[#bd8c5e] mr-2" />
                <p className="text-sm">Ready to start earning rewards?</p>
              </div>
              <button id="contact"
                    className="bg-[#720c17] text-white px-4 py-1.5 rounded text-sm cursor:pointer"
                    onClick={() => {
                        navigator.clipboard.writeText("https://www.instagram.com/chauff.it?igsh=dmUxZjQxMnhlMXYy&utm_source=qr").then(() => {
                        alert("Link copied");
                        });
                    }}
                    >
                    Refer a friend
                </button>
              {/* //  */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}