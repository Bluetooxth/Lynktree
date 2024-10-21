import Features from '@/components/Features'
import HeroSection from '@/components/Hero'
import PricingPlan from '@/components/Pricing'
import HowItWorks from '@/components/Working'
import React from 'react'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
    <Navbar />
    <main className="pb-12 space-y-12">
      <HeroSection />
      <Features />
      <HowItWorks />
      {/* <PricingPlan /> */}
    </main>
    <Footer />
    </>
  )
}

export default Home