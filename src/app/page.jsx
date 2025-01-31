import React from 'react';
import Aboutus from './LandingPage/Aboutus';
import WhyUs from "@/app/LandingPage/WhyUs";
import Footer from "@/app/Menubar/Footer.jsx";
import HeroSection from "@/app/LandingPage/HeroSection";
import Faq from "@/app/LandingPage/faq";
import Borrowed from '@/app/Borrowed/page'
import Returned from '@/app/Returned/page'
const page = () => {
  return (
    <div>
      <Aboutus />
      {/* <HeroSection />
      <Faq />
      <WhyUs />
      <Footer /> */}
      {/* <Borrowed />
      <Returned /> */}
    </div>
  )
}

export default page
