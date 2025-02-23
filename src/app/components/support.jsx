import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const SupportBanner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-center gap-4">
          <p className="text-white text-sm">
            Support us, going live in a few days
          </p>
          <Link 
            href="/support" 
            className="inline-flex items-center gap-2 text-sm bg-white text-black px-4 py-0.5 rounded-md hover:bg-gray-100 transition-colors"
          >
            Support
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SupportBanner;