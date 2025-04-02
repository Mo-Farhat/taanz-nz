'use client'

import Header from "@/components/Header";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import HeroSection from "@/components/HeroSection";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HeroSection />
      <Services />
      
      
      <Footer />
    </main>
  );
}
