import Image from "next/image";
import AboutMission from "./components/about";
import AboutUs from "./components/aboutus";
import EmailSection from "./components/contact";
// import FeaturesSection from "./components/features";
import FeaturesSection from "./components/features_section";
import Footer from "./components/footer";
// import HeroImage from "./components/heroimg";
import LandingPage from "./components/landing";
import LandingPage2 from "./components/landing_2";
import Navbar from "./components/navbar";
import PricingComponent from "./components/pricing";
import ReferralLoyaltyPage from "./components/referal";
import SupportBanner from "./components/support";
import SupportSection from "./components/support__section";
import TripInsurancePage from "./components/trip_insu";
import WhyChooseUsPage from "./components/whyus";

export default function Home() {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
    <Navbar/>
    {/* <HeroImage/> */}
    <LandingPage2/>
      {/* <LandingPage/> */}
      <FeaturesSection/>
      <AboutMission/>
      <AboutUs/>
      <PricingComponent/>
      <WhyChooseUsPage/>
      <SupportSection/>
      <ReferralLoyaltyPage/>
      <TripInsurancePage/>
      <EmailSection/>
      <Footer/>
    </div>
  );
}
