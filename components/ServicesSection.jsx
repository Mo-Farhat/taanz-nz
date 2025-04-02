import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const ServicesSection = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-montserrat text-center"
          >
            Comprehensive Outsourcing Solutions
          </motion.h1>
          
          {/* Qualifications and Expertise */}
          <div className="mb-12">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-700 leading-relaxed font-montserrat mb-6"
            >
              At TAANZ, we bring years of expertise in accounting and financial services, equipped with cutting-edge software proficiency in industry-standard tools like Xero, MYOB, QuickBooks, and more. Our team of certified professionals is committed to helping accounting firms across Australia and New Zealand scale their operations efficiently. Outsourcing with us means reduced operational costs, access to skilled professionals, and the flexibility to focus on strategic growth initiatives.
            </motion.p>
          </div>

          {/* Service Excellence */}
          <div className="mb-16">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-700 leading-relaxed font-montserrat"
            >
              We have consistently delivered exceptional results to accounting firms across Australia and New Zealand, helping them streamline operations and expand their client base. Our comprehensive suite of services is designed to provide end-to-end support for your accounting practice.
            </motion.p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* Bookkeeping */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-48">
              <Image 
                src="/books-calc.jpg" 
                alt="Bookkeeping Services" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 font-montserrat">Bookkeeping</h2>
              </div>
              <p className="text-gray-600 leading-relaxed font-montserrat">
                Our comprehensive bookkeeping services include daily transaction recording, bank reconciliation, accounts payable/receivable management, and detailed financial statement preparation. We ensure accurate record-keeping and timely reporting while maintaining full compliance with accounting standards.
              </p>
            </div>
          </motion.div>

          {/* Accounts Preparation */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-48">
              <Image 
                src="/mag-glass.jpg" 
                alt="Accounts Preparation Services" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 font-montserrat">Accounts Preparation</h2>
              </div>
              <p className="text-gray-600 leading-relaxed font-montserrat">
                We deliver professional preparation of statutory and management accounts in accordance with accounting standards. Our team ensures accurate, timely reports that meet regulatory requirements and provide clear insights into business performance.
              </p>
            </div>
          </motion.div>

          {/* Taxation */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-48">
              <Image 
                src="/book-pen.jpg" 
                alt="Taxation Services" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 font-montserrat">Taxation</h2>
              </div>
              <p className="text-gray-600 leading-relaxed font-montserrat">
                Our comprehensive tax services cover personal and business tax returns, tax planning, and GST compliance. We ensure accurate tax calculations and maximize your tax benefits while maintaining full compliance with tax regulations.
              </p>
            </div>
          </motion.div>

          {/* Payroll and Virtual Admin */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-48">
              <Image 
                src="/work-4.png" 
                alt="Payroll and Virtual Admin Services" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 font-montserrat">Payroll & Virtual Admin</h2>
              </div>
              <p className="text-gray-600 leading-relaxed font-montserrat">
                Complete payroll management including salary processing, leave management, and superannuation calculations. Our virtual admin services provide efficient handling of emails, scheduling, document management, and general administrative tasks to streamline your business operations.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Support Types */}
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl font-bold text-gray-900 mb-8 font-montserrat text-center"
          >
            Our Support Structure
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Dedicated Support */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-montserrat">Dedicated Support</h3>
              </div>
              <p className="text-gray-600 leading-relaxed font-montserrat">
                Our dedicated support model provides you with a dedicated team member who works exclusively on your accounts. This ensures consistent service delivery, deep understanding of your business, and personalized attention to your specific needs. Perfect for firms requiring ongoing, comprehensive support.
              </p>
            </motion.div>

            {/* As Required Support */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-montserrat">As Required Support</h3>
              </div>
              <p className="text-gray-600 leading-relaxed font-montserrat">
                Our as-required support model offers flexible assistance when you need it most. This cost-effective solution is ideal for firms that need occasional support during peak periods or for specific projects. You only pay for the services you use, making it perfect for managing workload fluctuations.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection 