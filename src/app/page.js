import Image from "next/image";
// import FeaturesSection from "./components/features";
import FeaturesSection from "./components/features_section";
import LandingPage from "./components/landing";
import LandingPage2 from "./components/landing_2";

export default function Home() {
  return (
    <>
    <LandingPage2/>
      {/* <LandingPage/> */}
      <FeaturesSection/>
    </>
  );
}
