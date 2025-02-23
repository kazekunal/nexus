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
            className="inline-flex items-center gap-2 text-base bg-white text-black px-4 py-1 rounded-full hover:bg-gray-100 transition-all"
          >
            Back Us Now! ⚡️
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SupportBanner;