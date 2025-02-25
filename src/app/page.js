import Image from "next/image";
import AboutMission from "./components/about";
import EmailSection from "./components/contact";
// import FeaturesSection from "./components/features";
import FeaturesSection from "./components/features_section";
import Footer from "./components/footer";
import LandingPage from "./components/landing";
import LandingPage2 from "./components/landing_2";
import SupportBanner from "./components/support";
import SupportSection from "./components/support__section";

export default function Home() {
  return (
    <>
    
    <LandingPage2/>
      {/* <LandingPage/> */}
      <FeaturesSection/>
      <AboutMission/>
      <SupportSection/>
      <EmailSection/>
      <Footer/>
    </>
  );
}
