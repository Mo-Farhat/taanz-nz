import React from 'react'
import { assets } from "../assets/assets";
import Image from 'next/image';

const Contact = () => {
  return (
    <section id="contact" className='w-full py-20 px-5 lg:px-8 xl:px-[8%] bg-gray-100'>
      <div className="max-w-7xl mx-auto">
        <h1 className='text-black text-2xl sm:text-3xl lg:text-4xl font-bold mb-0 font-ovo md:text-start text-center max-w-4xl py-4'>
          Contact Us
        </h1>
        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-50">
            <h2 className="text-xl font-bold font-ovo mb-6 text-black text-center">
              Send us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2 font-ovo">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2 font-ovo">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 font-ovo">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2 font-ovo">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 font-ovo  ">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-ovo hover:bg-blue-800 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Send Message
                
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
