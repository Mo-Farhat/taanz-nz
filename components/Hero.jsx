import Image from 'next/image'
import React from 'react'
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center bg-gray-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gray-50 opacity-50"></div>
      
      {/* Main Content */}
      <div className="w-full px-5 lg:px-8 xl:px-[8%] relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-ovo mb-6">
                Your Trusted Partner in
                <span className="text-blue-700"> Financial Excellence</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 font-light">
                Empowering accounting firms across Australia and New Zealand with comprehensive outsourcing solutions that drive growth and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <a 
                  href="#contact" 
                  className="px-8 py-3 bg-blue-700 text-white rounded-full font-ovo hover:bg-blue-800 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  Get Started
                  <Image 
                    src={assets.arrow_icon} 
                    alt="arrow" 
                    width={20} 
                    height={20}
                    className="w-5 h-5"
                  />
                </a>
                <a 
                  href="#about" 
                  className="px-8 py-3 border border-blue-700 text-blue-700 rounded-full font-ovo hover:bg-blue-50 transition-colors duration-300"
                >
                  Learn More
                </a>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-6 max-w-md mx-auto lg:mx-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Image 
                      src={assets.project_icon} 
                      alt="projects" 
                      width={20} 
                      height={20}
                      className="w-5 h-5"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Expert Team</div>
                    <div className="text-xs text-gray-600">Dedicated Professionals</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Image 
                      src={assets.code_icon} 
                      alt="technology" 
                      width={20} 
                      height={20}
                      className="w-5 h-5"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Modern Solutions</div>
                    <div className="text-xs text-gray-600">Latest Technology</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="w-full lg:w-1/2">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-2xl shadow-xl">
              <Image 
                src="/team.png" 
                alt="TAANZ Team" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                className="object-cover"
                priority
              />
            
                {/* Floating Element */}
                <div className="absolute -bottom-1 -left-1 bg-blue-100 p-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-300 rounded-full flex items-center justify-center">
                      <Image 
                        src={assets.project_icon} 
                        alt="projects" 
                        width={24} 
                        height={24}
                        className="w-6 h-6"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Active Projects</div>
                      <div className="text-2xl font-bold text-blue-700">150+</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      
    </section>
  )
}

export default Hero 