import WhyUs from "@/components/LandingPage/WhyUs";
import Footer from "@/components/Menubar/Footer";
import HeroSection from "@/components/LandingPage/HeroSection";
import Faq from "@/components/LandingPage/faq";

function Page() {
  return (
    <div>
      <HeroSection />
      <Faq />
      <WhyUs />
      <Footer />
    </div>
  );
}

export default Page;
