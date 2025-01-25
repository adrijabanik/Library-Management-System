import WhyUs from "@/components/LandingPage/WhyUs";
import Footer from "@/components/Menubar/Footer";
import HeroSection from "@/components/LandingPage/HeroSection";
import Faq from "@/components/LandingPage/faq";
import Borrowed from '@/components/Borrowed/page'
import Returned from '@/components/Returned/page'

function Page() {
  return (
    <div>
      {/* <HeroSection />
      <Faq />
      <WhyUs />
      <Footer /> */}
      <Borrowed />
      <Returned />
    </div>
  );
}

export default Page;
