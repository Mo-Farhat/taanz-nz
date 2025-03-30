import Image from 'next/image'
import React, { useRef, useState, useEffect } from 'react'
import { assets } from "../assets/assets";

const Navbar = () => {
    const sideMenuRef = useRef(null);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) { // Adjust this threshold if needed
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const openMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(-16rem)';
        }
    };

    const closeMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(16rem)';
        }
    };

    return (
        <>
            <div className='w-11/12 absolute top-0 right-0 -z-10 translate-y-[-80%]'>
                <Image src={assets.header_bg_color} alt='header-bg-color' className='w-full' />
            </div>

            <nav className={`w-full px-5 lg:px-8 xl:px-[8%] flex items-center justify-between z-50 bg-blue-300 shadow-md sticky top-0 py-[1px]`}>
                <a href="#" className="transition-transform duration-200 hover:scale-105">
                    <Image 
                        src={assets.logo} 
                        alt="taanz-logo" 
                        priority
                        className='w-28 cursor-pointer mr-14 object-contain'
                    />
                </a>

                <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:text-gray-800 hover:border-gray-800'>
                    <li><a className='font-ovo text-gray-800 hover:text-gray-800' href="#top">HOME</a></li>
                    <li><a className='font-ovo text-gray-800 hover:text-gray-800' href="#about">ABOUT</a></li>
                    <li><a className='font-ovo text-gray-800 hover:text-gray-800' href="#services">SERVICES</a></li>
                    <li><a className='font-ovo text-gray-800 hover:text-gray-800' href="#contact">CONTACT</a></li>
                </ul>

                <div>
                    <a href="#contact" className='hidden lg:flex items-center gap-3 px-8 py-2 border border-gray-500 rounded-full ml-4 font-ovo bg-white shadow-md hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:text-gray-800 hover:border-gray-800 '>
                        Connect 
                        <Image 
                            src={assets.arrow_icon} 
                            width={12}
                            height={12}
                            alt='arrow-icon'
                            className='w-3'
                        />
                    </a>

                    <button onClick={openMenu} className='md:hidden block ml-3'>
                        <Image src={assets.menu_black} alt='menu-icon' className='w-6' />
                    </button>
                </div>

                {/* Mobile Menu */}
                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-all duration-300'>
                    <div onClick={closeMenu} className='absolute top-12 right-6'>
                        <Image src={assets.close_black} alt='close-icon' className='w-6 cursor-pointer' />
                    </div>
                    <li><a onClick={closeMenu} className='font-Ovo' href="#top">Home</a></li>
                    <li><a onClick={closeMenu} className='font-Ovo' href="#about">About Us</a></li>
                    <li><a onClick={closeMenu} className='font-Ovo' href="#services">Services</a></li>
                    <li><a onClick={closeMenu} className='font-Ovo' href="#contact">Contact Us</a></li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
