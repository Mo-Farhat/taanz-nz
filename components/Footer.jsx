import React from 'react'
import Image from 'next/image'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="text-white">
        <div className='w-full h-[1px] bg-gray-300'></div>
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                    <Image src={assets.logo} alt="TAANZ Logo" width={100} height={100} />
                </div>
                <div className="space-y-4 flex items-center justify-center">
                    <p className="text-gray-600 font-ovo text-sm">
                        © 2025 TAANZ. All rights reserved.
                    </p>
                </div>
                <div className="space-y-4 flex items-center justify-center">
                    <ul className="flex gap-6 font-ovo text-sm">
                        <li className='hover:text-blue-700 transition-colors duration-300'>
                            <a href="/terms" className="text-gray-600">Terms of Service</a>
                        </li>
                        <li className='hover:text-blue-700 transition-colors duration-300'>
                            <a href="/privacy" className="text-gray-600">Privacy Policy</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
