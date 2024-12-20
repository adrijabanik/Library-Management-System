import React from 'react';
import FAQ from '../components/LandingPage/faq'; // Correct path
import Navbar from '@/components/LandingPage/Header';
import Footer from '@/components/LandingPage/Footer';

function Page() {
  return (
    <div>
           <div>
      
        <Navbar />
         <br />
         <br />
         <br />
        <FAQ />
         <br />
         <br />
         <br />
        <Footer />
      </div>
    </div>
    
  );
}

export default Page;