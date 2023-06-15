import React, { useState } from 'react'
import { BrowserRouter, Link, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import MobileMenu from '../Components/Images/Mobile/mobile-menu.png'

const Layout = () => {

    /*------Active-states-------*/
    const location = useLocation();
    //For Desktop and Laptop device only.
    const isActiveDesktop = (path) => {
        return location.pathname === path ? 'bg-White text-black' : '';
    };
    //For Tablet and Mobile device only.
    const isActiveMobile = (path) => {
        return location.pathname === path ? 'bg-Yellow text-black' : '';
    }

    
    //Toggle-function
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
    <>
        <div>
            <header>
            
            {/*Laptop and Desktop device only*/}
            <div className="block Tablet:hidden">
                <div className="relative">
                    <nav className="absolute flex justify-center top-0 left-0 z-50 w-full p-8">
                        <h2 className="mr-auto text-White font-Poppins font-bold text-4xl py-1 px-5">sunnyside</h2>
                        <ul className="flex">
                            <li>
                                <Link to="/About" className={`block text-[18px] font-Barlow text-White rounded-full ml-5 py-3 px-5 ${isActiveDesktop('/About')}`}>About</Link>
                            </li>
                            <li>
                                <Link to="/Services" className={`block text-[18px] font-Barlow text-White rounded-full ml-5 py-3 px-5 ${isActiveDesktop('/Services')}`}>Services</Link>
                            </li>
                            <li>
                                <Link to="/Projects" className={`block text-[18px] font-Barlow text-White rounded-full ml-5 py-3 px-5 ${isActiveDesktop('/Projects')}`}>Projects</Link>
                            </li>
                            <li>
                                <Link to="/" className={`block text-[18px] font-Barlow text-White rounded-full ml-5 py-3 px-5 ${isActiveDesktop('/')}`}>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <Outlet />
                </div>
            </div>
                
            {/* Tablet and Mobile devices only*/}
            <div className='hidden Tablet:block Mobile:block'>
                <div className="relative">
                    <nav className='absolute flex justify-center top-0 left-0 z-50 w-full p-6'>
                        <h2 className='mr-auto text-White font-Poppins font-bold text-3xl'>sunnyside</h2>
                        <button onTouchStart={toggleNavbar}>
                            <FontAwesomeIcon icon={faBars} className="h-7 w-7 text-White" />
                        </button>
                        <div className={`${isOpen ? 'block' : 'hidden'} absolute top-0 left-[50%] transform -translate -translate-x-1/2 -translate-y-1/2 w-[92%] p-3 rounded-lg z-50`}>
                            <div className='absolute top-16 left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-full h-[50%]'>
                                <img src={MobileMenu} alt={'Mobile-Menu'} className='block p-3 h-96 rounded-lg w-full' />
                            </div>
                            <ul className='flex flex-col justify-center text-center absolute top-[270px] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[85%]'>
                                <li>
                                    <Link className={`block text-[18px] font-Barlow text-VDGB p-3 rounded-full m-3 w-1/2 mx-auto ${isActiveMobile('/About')}`} to='/About'>About</Link>
                                </li>
                                <li>
                                    <Link className={`block text-[18px] font-Barlow text-VDGB p-3 rounded-full m-3 w-1/2 mx-auto ${isActiveMobile('/Services')}`} to='/Services'>Services</Link>
                                </li>
                                <li>
                                    <Link className={`block text-[18px] font-Barlow text-VDGB p-3 rounded-full m-3 w-1/2 mx-auto ${isActiveMobile('/Projects')}`} to='/Projects'>Projects</Link>
                                </li>
                                <li>
                                    <Link className={`block text-[18px] font-Barlow text-VDGB p-3 rounded-full m-3 w-1/2 mx-auto ${isActiveMobile('/')}`} to='/'>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Outlet />
                </div>
            </div>

            </header>      
        </div>
    </>
    )
}

const Navbar = () => {
    return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path='About' element={<About />}/>
                <Route path='Services' element={<Services />}/>
                <Route path='Projects' element={<Projects />}/>
                <Route index element={<Contact />}/>
            </Route>
        </Routes>
    </BrowserRouter>
    </>
    )
}

export default Navbar;