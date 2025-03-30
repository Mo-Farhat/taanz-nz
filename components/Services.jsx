import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
    <section id="services" className='w-full py-2 px-5 lg:px-8 xl:px-[8%] bg-gray-100 mb-10'>
      <h1 className='text-black text-2xl sm:text-3xl lg:text-4xl font-bold mb-0 font-ovo md:text-start text-center max-w-4xl py-4'>Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image 
              src="/books-calc.jpg" 
              alt="Bookkeeping Services" 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <h3 className="text-white text-xl font-bold font-ovo">Bookkeeping</h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-600 font-ovo leading-relaxed">
              Comprehensive bookkeeping services including transaction recording, bank reconciliation, and financial statement preparation.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image 
              src="/mag-glass.jpg" 
              alt="Audit Services" 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <h3 className="text-white text-xl font-bold font-ovo">Audit</h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-600 font-ovo leading-relaxed">
              Thorough audit services ensuring compliance with regulatory requirements and providing detailed financial insights.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image 
              src="/book-pen.jpg" 
              alt="Tax Services" 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <h3 className="text-white text-xl font-bold font-ovo">Tax</h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-600 font-ovo leading-relaxed">
              Expert tax services including preparation, planning, and compliance to optimize your financial position.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
