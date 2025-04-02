import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { assets } from "../assets/assets";

const About = () => {
  return (
    <section id="about" className='w-full py-20 bg-gradient-to-b from-white to-gray-100'>
      <div className="container mx-auto px-4">
        {/* Main About Section */}
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-12 md:gap-16 mb-20"
          >
            {/* Left - Image */}
            <div className="w-full md:w-1/2">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                <Image 
                  src={assets.logo}
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
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='text-black text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 font-montserrat md:text-start text-center'
              >
                About Us
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-black text-base lg:text-lg font-light font-montserrat leading-relaxed mb-6"
              >
                At TAANZ, we are a trusted outsourcing partner for accounting firms in Australia and New Zealand. We offer comprehensive outsourcing solutions tailored to your operational needs. Focusing on efficiency, accuracy, and compliance, we deliver an exceptional service that frees up your resources to focus on strategic growth.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-black text-base lg:text-lg font-light font-montserrat leading-relaxed"
              >
                Our team of experienced professionals is dedicated to providing the best possible service to our clients, leveraging cutting-edge digital tools and industry best practices to ensure exceptional results.
              </motion.p>
            </div>
          </motion.div>

          {/* Team and Experience Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-center mb-12">Our Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold font-outfit mb-3 text-blue-600">Our Team</h3>
                <p className="text-gray-600 leading-relaxed font-montserrat">
                  Our diverse team of accounting professionals brings together years of experience and expertise. Each team member undergoes rigorous training and continuous professional development to stay at the forefront of industry standards and technological advancements.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold font-outfit mb-3 text-blue-600">5 Years of Excellence</h3>
                <p className="text-gray-600 leading-relaxed font-montserrat">
                  For the past five years, we've been helping accounting firms across Australia and New Zealand streamline their operations and grow their businesses. Our commitment to quality and innovation has made us a trusted partner in the industry.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Digital Accounting Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mb-20"
          >
            <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-center mb-12">Digital Accounting Excellence</h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-gray-600 leading-relaxed font-montserrat text-center max-w-3xl mx-auto">
                We embrace the digital transformation of accounting, utilizing cutting-edge software and automation tools to deliver efficient, accurate, and real-time financial solutions. Our digital-first approach ensures seamless integration with your existing systems while maintaining the highest standards of security and compliance.
              </p>
            </div>
          </motion.div>

          {/* Training and Procedures Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mb-20"
          >
            <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-center mb-12">Our Commitment to Quality</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold font-outfit mb-3 text-blue-600">Rigorous Training</h3>
                <p className="text-gray-600 leading-relaxed font-montserrat">
                  Our team undergoes comprehensive training programs covering the latest accounting standards, software platforms, and industry best practices.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold font-outfit mb-3 text-blue-600">Quality Procedures</h3>
                <p className="text-gray-600 leading-relaxed font-montserrat">
                  We follow strict quality control procedures and standardized workflows to ensure consistency and accuracy in all our deliverables.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold font-outfit mb-3 text-blue-600">Continuous Improvement</h3>
                <p className="text-gray-600 leading-relaxed font-montserrat">
                  We regularly review and update our processes to incorporate new technologies and industry best practices, ensuring we always deliver the best possible service.
                </p>
              </div>
            </div>
          </motion.div> 
          
        </div>
      </div>
    </section>
  )
}

export default About
