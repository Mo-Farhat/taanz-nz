import Image from 'next/image'
import React from 'react'
import { assets } from "../assets/assets";

const About = () => {
  return (
    <section id="about" className='w-full py-8 px-5 lg:px-8 xl:px-[8%] bg-gray-100'>
      {/* Main About Section */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 mb-20">
          {/* Left - Image */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image 
                src="/work-3.png" 
                alt="TAANZ Team" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
          

          {/* Right - Content */}
          <div className="w-full md:w-1/2">
            <h1 className='text-black text-2xl sm:text-3xl lg:text-4xl font-bold mb-0 font-ovo md:text-start text-center max-w-4xl py-4'>
              About Us
            </h1>
            <p className="text-black text-base lg:text-lg font-light font-ovo leading-relaxed py-4">
              At TAANZ, we are a trusted partner for accounting firms in Australia and New Zealand, offering comprehensive outsourcing solutions tailored to your financial needs.
              With a focus on efficiency, accuracy, and compliance, we deliver exceptional service that frees up your resources to focus on strategic growth.
              Our team of experienced professionals is dedicated to providing the best possible service to our clients.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold font-ovo text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-rose-50">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Image 
                  src={assets.project_icon} 
                  alt="excellence" 
                  width={28} 
                  height={28}
                  className="w-7 h-7"
                />
              </div>
              <h3 className="text-xl font-bold font-outfit mb-3 text-blue-600">Excellence</h3>
              <p className="text-gray-600 leading-relaxed font-ovo">We strive for the highest standards in everything we do, ensuring quality and precision in our services.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-rose-50">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Image 
                  src={assets.code_icon} 
                  alt="innovation" 
                  width={28} 
                  height={28}
                  className="w-7 h-7"
                />
              </div>
              <h3 className="text-xl font-bold font-outfit mb-3 text-blue-600">Innovation</h3>
              <p className="text-gray-600 leading-relaxed font-ovo">We embrace new technologies and methods to provide cutting-edge solutions for our clients.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-rose-50">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Image 
                  src={assets.edu_icon} 
                  alt="integrity" 
                  width={28} 
                  height={28}
                  className="w-7 h-7"
                />
              </div>
              <h3 className="text-xl font-bold font-outfit mb-3 text-blue-600">Integrity</h3>
              <p className="text-gray-600 leading-relaxed font-ovo">We maintain the highest ethical standards and transparency in all our business dealings.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
