import React from 'react';
import WhyUs from "@/app/LandingPage/WhyUs";
import Footer from "@/app/Menubar/Footer";
import HeroSection from "@/app/LandingPage/HeroSection";
import Faq from "@/app/LandingPage/faq";
import Borrowed from '@/app/Borrowed/page'
import Returned from '@/app/Returned/page'
const page = () => {
  return (
    <div>
      <HeroSection />
      <Faq />
      <WhyUs />
      <Footer />
      {/* <Borrowed />
      <Returned /> */}
    </div>
  )
}

export default page
