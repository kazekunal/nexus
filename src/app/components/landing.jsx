// import React from 'react';
// import { Button } from "@/components/ui/button";

// const LandingPage = () => {
//   return (
//     <div className="relative min-h-screen bg-[#29292B]">
//       {/* Main Hero Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
//         {/* Text Content - Left Side */}
//         <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 z-10">
//           <h1 className="text-5xl lg:text-7xl font-light text-white mb-6 leading-tight">
//             Let yourself be
//             <span className="block">transported by</span>
//             <span className="block">excellence</span>
//           </h1>
          
//           <p className="text-[#C9C7BA] text-lg mb-8 max-w-xl leading-relaxed">
//             Your premium mobility solution that redefines luxury travel. 
//             With a curated fleet of prestigious vehicles and professional chauffeurs, 
//             we deliver sophistication on every journey.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 mt-2">
//             <Button 
//               className="bg-[#C9C7BA] text-[#29292B] hover:bg-white hover:text-[#29292B] px-8 py-6 text-lg rounded-full transition-all duration-300"
//             >
//               Book Now
//             </Button>
            
//             <Button 
//               variant="outline"
//               className="border-2 border-[#C9C7BA] text-[#C9C7BA] hover:bg-[#C9C7BA] hover:text-[#29292B] px-8 py-6 text-lg rounded-full transition-all duration-300"
//             >
//               View Services
//             </Button>
//           </div>
//         </div>

//         {/* Background Image */}
//         <div className="absolute inset-0 lg:relative lg:inset-auto z-0 lg:z-10">
//           <div className="absolute inset-0 bg-black/50 lg:bg-gradient-to-l lg:from-transparent lg:to-[#29292B] z-10" />
//           <img 
//             src="bg-1.jpg" 
//             alt="Luxury vehicle"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>

//       {/* Subtle Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center text-[#C9C7BA] animate-bounce">
//         <span className="text-sm mb-2">Scroll to explore</span>
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;

// import React from 'react';
// import { Button } from "@/components/ui/button";

// const LandingPage = () => {
//   return (
//     <div className="min-h-screen bg-[#29292B]">
//       {/* Sticky Navbar */}
//       <nav className="fixed top-0 w-full bg-[#29292B]/80 backdrop-blur-sm z-50 py-4 px-6 lg:px-12">
//         <div className="max-w-7xl mx-auto flex items-center justify-between">
//           {/* Logo */}
//           <div className="text-2xl font-light text-white tracking-wider" style={{ fontFamily: 'Playfair Display, serif' }}>
//             NEXUS
//           </div>

//            {/* Navigation Links */}
//            <div className="hidden md:flex items-center gap-12">
//              <a href="/fleet" className="text-[#C9C7BA] hover:text-white transition-colors">Fleet</a>
//              <a href="/services" className="text-[#C9C7BA] hover:text-white transition-colors">Services</a>
//              <a href="/about" className="text-[#C9C7BA] hover:text-white transition-colors">About</a>
//              <a href="/contact" className="text-[#C9C7BA] hover:text-white transition-colors">Contact</a>
//            </div>

//            {/* Auth Buttons */}
//            <div className="flex items-center gap-4">
//              <Button 
//               variant="ghost"
//               className="text-[#C9C7BA] hover:text-white hover:bg-transparent"
//             >
//               Login
//             </Button>
//             <Button 
//               className="bg-[#C9C7BA] text-[#29292B] hover:bg-white hover:text-[#29292B] rounded-full px-6"
//             >
//               Sign Up
//             </Button>
//           </div>
//         </div>
//       </nav>

//        {/* Main Hero Section */}
//        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen pt-20">
//          {/* Text Content - Left Side */}
//          <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 z-10">
//            <h1 className="text-5xl lg:text-7xl font-light text-white mb-6 leading-tight">
//              Let yourself be
//              <span className="block">transported by</span>
//              <span className="block">excellence</span>
//            </h1>
          
//            <p className="text-[#C9C7BA] text-lg mb-8 max-w-xl leading-relaxed">
//              Your premium mobility solution that redefines luxury travel. 
//              With a curated fleet of prestigious vehicles and professional chauffeurs, 
//              we deliver sophistication on every journey.
//            </p>

//            <div className="flex flex-col sm:flex-row gap-4 mt-2">
//             <Button 
//               className="bg-[#C9C7BA] text-[#29292B] hover:bg-white hover:text-[#29292B] px-8 py-6 text-lg rounded-full transition-all duration-300"
//             >
//               Book Now
//             </Button>
            
//             <Button 
//               variant="outline"
//               className="border-2 border-[#C9C7BA] text-[#C9C7BA] hover:bg-[#C9C7BA] hover:text-[#29292B] px-8 py-6 text-lg rounded-full transition-all duration-300"
//             >
//               View Services
//             </Button>
//           </div>
//         </div>

//         {/* Background Image */}
//         <div className="absolute inset-0 lg:relative lg:inset-auto z-0 lg:z-10">
//           <div className="absolute inset-0 bg-black/50 lg:bg-gradient-to-l lg:from-transparent lg:to-[#29292B] z-10" />
//           <img 
//             src="bg-1.jpg" 
//             alt="Luxury vehicle"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>

//       {/* Subtle Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center text-[#C9C7BA] animate-bounce">
//         <span className="text-sm mb-2">Scroll to explore</span>
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;

'use client'
// import React from 'react';
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";

// const LandingPage = () => {
//   return (
//     <div className="relative min-h-screen bg-[#29292B] overflow-hidden">
//       {/* Background Image */}
//       <div className="fixed inset-0">
//         <img 
//           src="bg-1.jpg" 
//           alt="Luxury vehicle"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/60" />
//       </div>

//       {/* Sticky Navbar */}
//       <motion.nav 
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="fixed top-0 w-full bg-[#29292B]/80 backdrop-blur-md z-50 px-6 lg:px-12 h-20 flex items-center"
//       >
//         <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
//           {/* Logo */}
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-2xl text-white tracking-widest"
//             style={{ fontFamily: 'Playfair Display, serif' }}
//           >
//             NEXUS
//           </motion.div>

//           {/* Navigation Links */}
//           <div className="hidden md:flex items-center gap-12">
//             {["Fleet", "Services", "About", "Contact"].map((item, i) => (
//               <motion.a
//                 key={item}
//                 href={`/${item.toLowerCase()}`}
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 + i * 0.1 }}
//                 className="text-[#C9C7BA] hover:text-white transition-colors text-sm font-light"
//               >
//                 {item}
//               </motion.a>
//             ))}
//           </div>

//           {/* Auth Buttons */}
//           <div className="flex items-center gap-4">
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.7 }}
//             >
//               <Button 
//                 variant="ghost"
//                 className="text-[#C9C7BA] hover:text-white hover:bg-white/10 px-6"
//               >
//                 Login
//               </Button>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.8 }}
//             >
//               <Button 
//                 className="bg-[#C9C7BA]/20 hover:bg-[#C9C7BA]/30 text-white border border-[#C9C7BA]/50 px-6"
//               >
//                 Sign Up
//               </Button>
//             </motion.div>
//           </div>
//         </div>
//       </motion.nav>

//       {/* Main Content */}
//       <div className="relative min-h-screen flex items-center px-6 lg:px-12 pt-20">
//         <div className="max-w-7xl mx-auto w-full">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="max-w-2xl"
//           >
//             <h1 className="text-5xl lg:text-7xl font-light text-white mb-6 leading-tight">
//               Let yourself be
//               <span className="block">transported by</span>
//               <span className="block">excellence</span>
//             </h1>
            
//             <p className="text-[#C9C7BA] text-lg mb-8 leading-relaxed">
//               Your premium mobility solution that redefines luxury travel. 
//               With a curated fleet of prestigious vehicles and professional chauffeurs, 
//               we deliver sophistication on every journey.
//             </p>

//             <motion.div 
//               className="flex gap-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//             >
//               <Button 
//                 className="bg-white hover:bg-white/90 text-[#29292B] px-8 py-2"
//               >
//                 Book Now
//               </Button>
              
//               <Button 
//                 variant="outline"
//                 className="border border-[#C9C7BA]/50 text-white hover:bg-white/10 px-8 py-2"
//               >
//                 View Services
//               </Button>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LandingPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#29292B]">
      {/* Hero Section with Background Image */}
      <div className="relative h-screen">
        {/* Background Image Container */}
        <div className="absolute inset-0">
          <img 
            src="bg_img.jpg" 
            alt="Luxury vehicle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Sticky Navbar */}
        <motion.nav 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 w-full bg-[#29292B]/90 backdrop-blur-md z-50 px-6 lg:px-12 h-20 flex items-center"
        >
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl text-white tracking-widest font-light"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              CHAUFF-IT
            </motion.div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-12">
              {["Fleet", "Services", "About", "Contact"].map((item, i) => (
                <motion.a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-white hover:text-[#C9C7BA] transition-colors text-lg font-light tracking-wide"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Button 
                  variant="ghost"
                  className="text-white hover:text-[#C9C7BA] hover:bg-white/10 px-6 text-base"
                >
                  Login
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Button 
                  className="bg-white hover:bg-[#C9C7BA] text-[#29292B] px-6 text-base font-medium"
                >
                  Sign Up
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </motion.nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-20 left-0 right-0 bg-[#29292B]/95 backdrop-blur-md z-40 px-6 py-8 md:hidden"
            >
              <div className="flex flex-col gap-6">
                {["Fleet", "Services", "About", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="text-white hover:text-[#C9C7BA] transition-colors text-lg font-light tracking-wide"
                  >
                    {item}
                  </a>
                ))}
                <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
                  <Button 
                    variant="ghost"
                    className="text-white hover:text-[#C9C7BA] hover:bg-white/10 w-full text-base"
                  >
                    Login
                  </Button>
                  <Button 
                    className="bg-white hover:bg-[#C9C7BA] text-[#29292B] w-full text-base font-medium"
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Content */}
        <div className="relative h-full flex items-center px-6 lg:px-12">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl lg:text-7xl font-light text-[#E9E8E6] mb-6 leading-tight">
                Let yourself be
                <span className="block">transported by</span>
                <span className="block">excellence</span>
              </h1>
              
              <p className="text-[#d3d0cb] text-lg mb-8 leading-relaxed">
                Your premium mobility solution that redefines luxury travel. 
                With a curated fleet of prestigious vehicles and professional chauffeurs, 
                we deliver sophistication on every journey.
              </p>

              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button 
                  className="bg-white hover:bg-white/70 text-[#29292B] px-8 py-2"
                >
                  Book Now
                </Button>
                
                <Button 
                  variant="outline"
                  className=" text-black hover:bg-white/70 hover:text-[#29292B] px-8 py-2"
                >
                  View Services
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content below hero section can be added here */}
    </div>
  );
};

export default LandingPage;