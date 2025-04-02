import Image from 'next/image'
import React from 'react'
import { assets } from "../assets/assets";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/hero-bg.jpg"
          alt="TAANZ Office"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-50"
          quality={100}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </motion.div>
      
      {/* Main Content */}
      <div className="w-full px-5 lg:px-8 xl:px-[8%] relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Content */}
            <motion.div 
              className="w-full lg:w-1/2 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Your Trusted Partner in 
                <span className="text-blue-300 relative font-montserrat">
                  {" "}Outsourcing
                  <motion.span
                   className="absolute -bottom-2 left-0 w-full h-1 bg-blue-300"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                  />
                </span>
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-gray-200 mb-8 font-light font-montserrat"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Empowering accounting firms across Australia and New Zealand with comprehensive outsourcing solutions that drive growth and efficiency.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.a 
                  href="/contact" 
                  className="px-8 py-3 bg-white text-gray-900 rounded-full font-montserrat font-medium hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                  
                  </motion.div>
                </motion.a>
                <motion.a 
                  href="/services" 
                  className="px-8 py-3 border border-white text-white rounded-full font-montserrat font-medium hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Content - Feature Cards */}
            <motion.div 
              className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {[
                {
                  title: "Expert Team",
                  description: "Highly skilled professionals with years of experience",
                  icon: "👥"
                },
                {
                  title: "24/7 Support",
                  description: "Round-the-clock assistance for your needs",
                  icon: "🕒"
                },
                {
                  title: "Cost Effective",
                  description: "Competitive rates for quality service",
                  icon: "💰"
                },
                {
                  title: "Secure & Reliable",
                  description: "Your data is safe with us",
                  icon: "🔒"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 rounded-xl p-6 border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="text-white font-semibold mb-2 font-montserrat">{feature.title}</h3>
                  <p className="text-gray-300 text-sm font-montserrat">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 