'use client'
import { useState } from 'react';
// Import motion from framer-motion
import { motion } from 'framer-motion';
import { MapPin, Star, Award, Globe, Phone, Calendar, CreditCard, Activity, Shield, ArrowRight, Search } from 'lucide-react';
// Assuming Navbar, Footer, Footer2 components exist and are styled appropriately or don't need specific changes here.
import Navbar from './navbar';
// import Footer from './footer';
import Footer2 from './footer2';

// Define color theme based on the image pattern (black background, gold/red touches)
const colors = {
  primary: '#720c17',
  secondary: '#bd8c5e',
  dark: '#000000',
  white: '#FFFFFF',
  lightGray: '#D1D5DB',
  cardBg: '#111827',    // Tailwind gray-900
  iconColor: '#bd8c5e',
  inputBg: '#1F2937',   // Tailwind gray-800 for input background
  inputBorder: '#4B5563' // Tailwind gray-600 for input border
};

// Mock data for driver profiles (assuming this remains the same)
const drivers = [
    { id: 1, name: 'Birendra Yadav', photo: 'birender.png', experience: 2, languages: ['Hindi'], license: 'JH13-20220004459 ', licenseExpiry: '03-12-2038', aadhaarVerified: true, bloodGroup: 'O+', emergencyContact: '+91-8800422624', rating: 4.8, reviews: 124, },
    { id: 2, name: 'Ashutosh Kumar', photo: 'ashutosh.jpeg', experience: 7, languages: ['Hindi'], license: 'UP5O-20099001829', licenseExpiry: '25-03-2029 ', aadhaarVerified: true, bloodGroup: 'Unknown', emergencyContact: '+91-98123XXXXX', rating: 4.9, reviews: 98, },
    { id: 3, name: 'Brajesh Kumar', photo: 'brajesh.jpeg', experience: 4, languages: ['Hindi'], license: 'JH13-20090002776 ', licenseExpiry: '09-12-2029', aadhaarVerified: true, bloodGroup: 'O+', emergencyContact: '+91-95678XXXXX', rating: 4.7, reviews: 86, },
    { id: 4, name: 'Dharmendar Kumar Singh', photo: 'dharmender.jpeg', experience: 8, languages: ['Hindi'], license: 'JH-1320130008694 ', licenseExpiry: '07-09-2033', aadhaarVerified: true, bloodGroup: 'A+', emergencyContact: '+91-99123XXXXX', rating: 4.9, reviews: 154, },
    { id: 5, name: 'Rintu Kumar', photo: 'rintu.jpeg', experience: 6, languages: ['Hindi', 'Haryanvi'], license: 'BRO2-20240001850 ', licenseExpiry: '31-12-2043', aadhaarVerified: true, bloodGroup: 'A+', emergencyContact: '+91-97890XXXXX', rating: 4.8, reviews: 112, },
    { id: 6, name: 'Sonu Kumar Ram', photo: 'sonu.jpeg', experience: 3, languages: ['Hindi'], license: 'JH13-20200041308', licenseExpiry: '18-08-2040 ', aadhaarVerified: true, bloodGroup: 'O+', emergencyContact: '+91-96543XXXXX', rating: 4.6, reviews: 58, },
];

// --- Components ---

// Mock Navbar and Footer components for demonstration if not imported
// const MockNavbar = () => <nav style={{ backgroundColor: colors.cardBg, color: colors.white, padding: '1rem', textAlign:'center' }}>Navbar</nav>;
// const MockFooter = () => <footer style={{ backgroundColor: colors.cardBg, color: colors.white, padding: '1rem', marginTop: '2rem', textAlign:'center' }}>Footer</footer>;


export default function ChauffeurPortal() {
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [activeTab, setActiveTab] = useState('details');
  // State for the search query
  const [searchQuery, setSearchQuery] = useState('');

  const handleViewProfile = (driver) => {
    setSelectedDriver(driver);
    window.scrollTo(0, 0);
  };

  const handleBackToList = () => {
    setSelectedDriver(null);
    setActiveTab('details'); // Reset tab when going back
  };

  // Handle changes in the search input
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter drivers based on the search query
  const filteredDrivers = drivers.filter(driver =>
    driver.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    // Main container with black background
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: colors.dark }}>
      {/* Navigation Bar */}
      <Navbar/>

      {/* Hero Section */}
      {/* <header
        className="py-20 px-6 pt-40 text-center"
        style={{ backgroundColor: colors.dark }}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.white }}>
            Meet our Professional <br/> <span style={{ color: colors.secondary }}>Chauffeurs</span>
          </h1>
          <p className="text-xl mb-8" style={{ color: colors.lightGray }}>
          Our drivers ensure safety, and professionalism for your journey.
          </p>
          <button
            className="px-6 py-3 rounded text-lg font-medium flex items-center mx-auto transition-transform hover:scale-105" // Added hover effect
            style={{ backgroundColor: colors.primary, color: colors.white }}
          >
            Book a Chauffeur
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="flex-grow px-6 py-8 pt-36 max-w-6xl mx-auto w-full">
        {selectedDriver ? (
          // Display Driver Profile Page if a driver is selected
          <DriverProfilePage
            driver={selectedDriver}
            onBack={handleBackToList}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            colors={colors}
          />
        ) : (
          // Display Search and Driver List if no driver is selected
          <>
            {/* Search Bar */}
            <div className="mb-10 max-w-lg mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Chauffeur by Name..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full px-4 py-3 pl-10 rounded-lg focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: colors.inputBg,
                    color: colors.white,
                    borderColor: colors.inputBorder,
                    borderWidth: '1px',
                    '--tw-ring-color': colors.secondary // Set ring color using CSS variable
                  }}
                />
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2"
                  size={20}
                  style={{ color: colors.lightGray }}
                 />
              </div>
            </div>

            {/* Driver List Section */}
            <DriverListSection
              drivers={filteredDrivers} // Pass filtered list
              onViewProfile={handleViewProfile}
              colors={colors}
              searchQuery={searchQuery} // Pass query for "no results" message
            />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer2/>
    </div>
  );
}

// Driver List Section Component
function DriverListSection({ drivers, onViewProfile, colors, searchQuery }) {
  return (
    <div>
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{ color: colors.white }}>
        Our Professional <span style={{ color: colors.secondary }}>Chauffeurs</span>
      </h2>
      {drivers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {drivers.map((driver, index) => (
            <DriverCard
              key={driver.id}
              driver={driver}
              onViewProfile={onViewProfile}
              colors={colors}
              index={index} // Pass index for staggered animation
            />
          ))}
        </div>
      ) : (
        // Message when no drivers match the search
        <p className="text-center text-xl mt-10" style={{ color: colors.lightGray }}>
          No chauffeurs found matching "{searchQuery}".
        </p>
      )}
    </div>
  );
}

// Driver Card Component with Framer Motion Animation
function DriverCard({ driver, onViewProfile, colors, index }) {
  return (
    <motion.div
      className="rounded-lg overflow-hidden shadow-md transition-shadow duration-300 cursor-pointer"
      // Dark card background, subtle golden top border
      style={{ backgroundColor: colors.cardBg, borderTop: `3px solid ${colors.secondary}` }}
      // Animation Props
      initial={{ opacity: 0, y: 20 }} // Start slightly lower and invisible
      animate={{ opacity: 1, y: 0 }}   // Animate to full opacity and original position
      transition={{ duration: 0.3, delay: index * 0.05 }} // Staggered delay based on index
      whileHover={{ y: -5, scale: 1.03, boxShadow: `0px 10px 20px rgba(0, 0, 0, 0.4)` }} // Lift and scale on hover
    //   onClick={() => onViewProfile(driver)} // Make the whole card clickable
    >
      <div className="p-6 flex flex-col items-center">
        {/* Image */}
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2" style={{ borderColor: colors.secondary }}>
          <img
            src={driver.photo}
            alt={`${driver.name} - Chauffeur`}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Name */}
        <h3 className="text-xl font-bold mb-1 text-center" style={{ color: colors.white }}>
          {driver.name}
        </h3>
        {/* Rating */}
        <div className="flex items-center mb-2">
          <Star size={16} fill={colors.secondary} stroke={colors.secondary} className="mr-1" />
          <span style={{ color: colors.lightGray }}>{driver.rating} ({driver.reviews} reviews)</span>
        </div>
        {/* Experience */}
        <div className="flex items-center text-center mb-2" style={{ color: colors.lightGray }}>
          <Award size={16} className="mr-2 flex-shrink-0" style={{ color: colors.iconColor }}/>
          <span>{driver.experience} years experience</span>
        </div>
        {/* Languages */}
        <div className="flex items-center text-center mb-4" style={{ color: colors.lightGray }}>
          <Globe size={16} className="mr-2 flex-shrink-0" style={{ color: colors.iconColor }}/>
          <span>{driver.languages.join(', ')}</span>
        </div>
        {/* View Profile Button (Optional - Card is clickable) */}
         {/* You can keep the button or rely on the card click */}
         <button
            // onClick={(e) => { e.stopPropagation(); onViewProfile(driver); }} // Prevent card click if button is clicked
            className="mt-2 px-4 py-2 rounded flex items-center text-sm transition-transform hover:scale-105"
            style={{ backgroundColor: colors.primary, color: colors.white }} // Red button
            onClick={() => onViewProfile(driver)}
         >
           View Profile <ArrowRight size={16} className="ml-1" />
         </button>
      </div>
    </motion.div>
  );
}

// Driver Profile Page Component (largely unchanged, added mock button action)
function DriverProfilePage({ driver, onBack, activeTab, setActiveTab, colors }) {
  return (
    // Add fade-in animation to the profile page as well
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} // Optional: Animate out when component unmounts
      transition={{ duration: 0.4 }}
    >
      {/* Back Button */}
      <button
        onClick={onBack}
        className="mb-6 px-4 py-2 rounded flex items-center transition-transform hover:scale-105"
        style={{ backgroundColor: colors.cardBg, color: colors.lightGray, border:`1px solid ${colors.secondary}` }}
      >
        &larr; Back to All Chauffeurs
      </button>

      {/* Driver Header */}
      <div
        className="rounded-lg shadow-md p-6 mb-6 flex flex-col md:flex-row"
        style={{ backgroundColor: colors.cardBg }}
      >
        {/* Profile Image */}
        <div className="w-full md:w-1/4 flex justify-center md:justify-start mb-6 md:mb-0">
          <div className="w-40 h-40 rounded-full overflow-hidden border-2" style={{ borderColor: colors.secondary }}>
            <img
              src={driver.photo}
              alt={`${driver.name} - Chauffeur`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Driver Info */}
        <div className="md:w-3/4 md:pl-6"> {/* Added padding */}
          <h1 className="text-3xl font-bold mb-2" style={{ color: colors.white }}>
            {driver.name}
          </h1>
          <div className="flex items-center mb-4">
            <Star size={20} fill={colors.secondary} stroke={colors.secondary} className="mr-1" />
            <span className="text-xl" style={{ color: colors.white }}>{driver.rating}</span>
            <span className="ml-2" style={{ color: colors.lightGray }}>({driver.reviews} reviews)</span>
          </div>
          <p className="text-xl mb-4" style={{ color: colors.secondary }}>
            Professional Chauffeur with {driver.experience} Years of Experience
          </p>
          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-6"> {/* Increased margin-bottom */}
            {['Safe Driver', 'Punctual', 'Professional', 'Courteous'].map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: '#374151', color: colors.lightGray }}>
                {tag}
              </span>
            ))}
          </div>
          {/* Book Button */}
          <a href='/bookings'>
          <button
            className="px-6 py-3 rounded font-medium flex items-center transition-transform hover:scale-105"
            style={{ backgroundColor: colors.primary, color: colors.white }}
          >
            Book This Driver <ArrowRight size={20} className="ml-2" />
          </button>
          </a>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex border-b mb-6" style={{ borderColor: '#4B5563' }}>
        {['details', 'reviews', 'availability'].map((tabName) => (
             <button
              key={tabName}
              onClick={() => setActiveTab(tabName)}
              className={`px-4 py-2 font-medium capitalize ${activeTab === tabName ? 'border-b-2 font-bold' : ''}`} // Capitalize tab name
              style={{
                borderColor: activeTab === tabName ? colors.secondary : 'transparent',
                color: activeTab === tabName ? colors.secondary : colors.lightGray
              }}
            >
              {tabName}
            </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="rounded-lg shadow-md p-6" style={{ backgroundColor: colors.cardBg }}>
        {/* Details Tab */}
        {activeTab === 'details' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
             {/* (Content identical to previous version - omitted for brevity) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: colors.white }}>
                Personal Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Shield className="mr-3 mt-1 flex-shrink-0" size={18} style={{ color: colors.iconColor }} />
                  <div>
                    <p className="font-medium" style={{ color: colors.white }}>License Number</p>
                    <p style={{ color: colors.lightGray }}>{driver.license}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Calendar className="mr-3 mt-1 flex-shrink-0" size={18} style={{ color: colors.iconColor }} />
                  <div>
                    <p className="font-medium" style={{ color: colors.white }}>License Expiry Date</p>
                    <p style={{ color: colors.lightGray }}>{driver.licenseExpiry}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CreditCard className="mr-3 mt-1 flex-shrink-0" size={18} style={{ color: colors.iconColor }} />
                  <div>
                    <p className="font-medium" style={{ color: colors.white }}>Aadhaar Verification</p>
                     {/* Adjusted green color for dark background */}
                    <p className="font-medium" style={{ color: driver.aadhaarVerified ? '#34D399' : '#F87171' }}> {/* Tailwind green-400 / red-400 */}
                      {driver.aadhaarVerified ? 'Verified' : 'Pending'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: colors.white }}>
                Emergency Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Activity className="mr-3 mt-1 flex-shrink-0" size={18} style={{ color: colors.iconColor }} />
                  <div>
                    <p className="font-medium" style={{ color: colors.white }}>Blood Group</p>
                    <p style={{ color: colors.lightGray }}>{driver.bloodGroup}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="mr-3 mt-1 flex-shrink-0" size={18} style={{ color: colors.iconColor }} />
                  <div>
                    <p className="font-medium" style={{ color: colors.white }}>Emergency Contact</p>
                    <p style={{ color: colors.lightGray }}>{driver.emergencyContact}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="mr-3 mt-1 flex-shrink-0" size={18} style={{ color: colors.iconColor }} />
                  <div>
                    <p className="font-medium" style={{ color: colors.white }}>Languages Spoken</p>
                    <p style={{ color: colors.lightGray }}>{driver.languages.join(', ')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </motion.div>
        )}
        {/* Reviews Tab */}
        {activeTab === 'reviews' && (
           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
              {/* (Content identical to previous version - omitted for brevity) */}
                <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold" style={{ color: colors.white }}>
                Customer Reviews
              </h3>
              <div className="flex items-center">
                <Star size={20} fill={colors.secondary} stroke={colors.secondary} className="mr-1" />
                <span className="text-xl font-bold" style={{ color: colors.white }}>{driver.rating}</span>
                <span className="ml-2" style={{ color: colors.lightGray }}>({driver.reviews} reviews)</span>
              </div>
            </div>

            <div className="space-y-6">
              {/* Sample reviews - adjusted for dark theme */}
              <div className="border-b pb-4" style={{ borderColor: '#4B5563' }}> {/* gray-600 border */}
                <div className="flex justify-between mb-2">
                  <div className="font-medium" style={{ color: colors.white }}>Priya Sharma</div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < 5 ? colors.secondary : "transparent"}
                        stroke={colors.secondary}
                      />
                    ))}
                  </div>
                </div>
                <p style={{ color: colors.lightGray }}>
                  Excellent service! Very professional and courteous driver. Made me feel safe throughout the journey.
                </p>
              </div>

              <div className="border-b pb-4" style={{ borderColor: '#4B5563' }}> {/* gray-600 border */}
                <div className="flex justify-between mb-2">
                  <div className="font-medium" style={{ color: colors.white }}>Rajan Malhotra</div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < 4 ? colors.secondary : "transparent"}
                        stroke={colors.secondary}
                      />
                    ))}
                  </div>
                </div>
                <p style={{ color: colors.lightGray }}>
                  Very punctual and knows the roads of Gurgaon really well. Would recommend for weekend nights out.
                </p>
              </div>

              <div> {/* Removed border-b from last item */}
                <div className="flex justify-between mb-2">
                  <div className="font-medium" style={{ color: colors.white }}>Neha Gupta</div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < 5 ? colors.secondary : "transparent"}
                        stroke={colors.secondary}
                      />
                    ))}
                  </div>
                </div>
                <p style={{ color: colors.lightGray }}>
                  Outstanding service. The driver was extremely professional and ensured I reached home safely after my late-night office party.
                </p>
              </div>
            </div>
          </div>
           </motion.div>
        )}
        {/* Availability Tab */}
        {activeTab === 'availability' && (
           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
             {/* (Content identical to previous version - omitted for brevity) */}
              <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: colors.white }}>
              Driver Availability
            </h3>
            <p className="mb-4" style={{ color: colors.lightGray }}>
              This driver is available on Friday and Saturday nights in Gurgaon from 8:00 PM to 4:00 AM.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Availability cards with subtle borders */}
              <div className="border rounded p-4" style={{ borderColor: '#4B5563' }}> {/* gray-600 border */}
                <h4 className="font-medium mb-2" style={{ color: colors.white }}>Friday</h4>
                <p style={{ color: colors.lightGray }}>8:00 PM - 4:00 AM</p>
              </div>
              <div className="border rounded p-4" style={{ borderColor: '#4B5563' }}> {/* gray-600 border */}
                <h4 className="font-medium mb-2" style={{ color: colors.white }}>Saturday</h4>
                <p style={{ color: colors.lightGray }}>8:00 PM - 4:00 AM</p>
              </div>
            </div>

            {/* Guidelines section with slightly different background */}
            <div className="p-4 rounded" style={{ backgroundColor: '#374151' }}> {/* Tailwind gray-700 background */}
              <p className="font-medium mb-2" style={{ color: colors.secondary }}>Booking Guidelines:</p> {/* Golden heading */}
              <ul className="list-disc pl-5" style={{ color: colors.lightGray }}>
                <li>Please book at least 2 hours in advance</li>
                <li>Provide complete pickup and drop location details</li>
                <li>Driver will contact you 15 minutes before arrival</li>
                <li>Cancellation is free up to 1 hour before pickup</li>
              </ul>
            </div>
          </div>
           </motion.div>
        )}
      </div>
    </motion.div>
  );
}