import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
    <section id="services" className='w-full py-2 px-5 lg:px-8 xl:px-[8%] bg-gray-100 mb-3'>
      <h1 className='text-black text-2xl sm:text-3xl lg:text-4xl font-bold mb-0 font-montserrat md:text-center text-center py-4'>Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <h3 className="text-white text-xl font-bold font-montserrat">Bookkeeping</h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-600 font-montserrat leading-relaxed">
              Comprehensive bookkeeping services including transaction recording, bank reconciliation, and financial statement preparation. We ensure accurate record-keeping and timely reporting for informed business decisions.
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
              <h3 className="text-white text-xl font-bold font-montserrat">Accounts Preparation</h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-600 font-montserrat leading-relaxed">
              Professional preparation of statutory and management accounts in accordance with accounting standards. We deliver accurate, timely reports that meet regulatory requirements.
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
              <h3 className="text-white text-xl font-bold font-montserrat">Taxation</h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-600 font-montserrat leading-relaxed">
              Comprehensive tax services including personal and business tax returns, tax planning, and GST compliance. We ensure accurate tax calculations and maximize your tax benefits.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image 
                src="/work-4.png" 
                alt="Payroll Services" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-bold font-montserrat">Payroll</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 font-montserrat leading-relaxed">
                Complete payroll management including salary processing, leave management, and superannuation calculations. We ensure accurate and timely payments with full compliance.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image 
                src="/accounting-1.jpg" 
                alt="Virtual Admin Services" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-bold font-montserrat">Virtual Admin</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 font-montserrat leading-relaxed">
                Efficient virtual administrative support including email management, scheduling, and document organization. We help streamline your business operations through professional remote assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
