import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex z-50 w-full flex-col md:flex-row justify-between px-4 md:px-8 lg:px-16 h-[65px] items-center border-b-2 border-gray-400 sticky top-0 bg-white">
            <div className="flex justify-between w-full md:w-auto items-center">
                <Link to="/" className="font-bold">
                    <p>
                        <img src="/logo.png" width={150} height={50} alt="logo" />
                    </p>
                </Link>
                <button
                    className="block md:hidden focus:outline-none"
                    onClick={toggleMenu}
                    aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
                    aria-expanded={isOpen ? 'true' : 'false'}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                    </svg>
                </button>
            </div>
            <div
                className={`md:flex flex-col md:flex-row gap-y-2 md:gap-y-0 font-semibold text-black md:gap-x-8 ${isOpen ? 'flex w-full border-gray-50 rounded-l bg-white' : 'hidden'} md:items-center`}
                role="menu"
                aria-hidden={!isOpen}
            >
                <Link to="/about">
                    <p onClick={() => setIsOpen(false)} role="menuitem">About</p>
                </Link>
                <div className="relative" onMouseEnter={() => setIsSolutionsOpen(true)} onMouseLeave={() => setIsSolutionsOpen(false)}>
                    <Link to="/solutions">
                    <p className="cursor-pointer" onClick={() => setIsOpen(false)} role="menuitem">Solutions</p>
                    </Link>
                    {isSolutionsOpen && (
                        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 shadow-md rounded-md p-2">
                            <Link to="/solutions/password-cache">
                                <p onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-blue-500">Password Cache UI Application</p>
                            </Link>
                            {/* Add more child items here as needed */}
                        </div>
                    )}
                </div>
                <Link to="/projects">
                    <p onClick={() => setIsOpen(false)} role="menuitem">Our Projects</p>
                </Link>
                <Link to="/careers">
                    <p onClick={() => setIsOpen(false)} role="menuitem">Careers</p>
                </Link>
                <Link to="/contact">
                    <p onClick={() => setIsOpen(false)} role="menuitem">Contact Us</p>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;

