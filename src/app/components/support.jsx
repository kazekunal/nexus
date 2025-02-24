import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SupportBanner = () => {
  return (
    <div className="fixed top-0 left-0 h-12 right-0 z-50 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-2">
        {/* Mobile Version - Text only */}
        <Link href="/support" className="block sm:hidden">
          <div className="flex justify-center">
            <p className="text-white text-sm">
              🚀 Exclusive Chauffeur Service Coming Soon!
            </p>
          </div>
        </Link>

        {/* Desktop Version */}
        <div className="hidden sm:flex items-center justify-center gap-4">
          <p className="text-white text-base">
            🚀 Exclusive Chauffeur Service Coming Soon!
          </p>
          <Link
            href="/support"
            className={`
              relative overflow-hidden
              inline-flex items-center gap-1 text-sm
              bg-gradient-to-r from-cyan-500 to-blue-600 
              text-white font-medium px-4 py-1 rounded-full
              shadow-md hover:shadow-cyan-500/50 
              transition-all duration-300 ease-in-out
              group
            `}
          >
            <span className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="relative z-10 flex items-center">
              Back Us Now! ⚡️
              <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <span className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SupportBanner;