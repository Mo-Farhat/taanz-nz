'use client'

import Header from "@/components/Header";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Header />
      <About />
      <Services />
      <Footer />
    </main>
  );
}
