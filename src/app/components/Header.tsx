'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { 
  HomeIcon, 
  BookOpenIcon,
  InformationCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'


const Sidebar = ({isScrolled}: {isScrolled: boolean}) => {
    const [isOpen, setIsOpen] = useState(false)
  
    const menuItems = [
      { title: 'Home', icon: HomeIcon, href: '/' },
      { title: 'About', icon: InformationCircleIcon, href: '/about' },
    ]
  
    const sidebarVariants = {
      open: {
        x: 0,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 30,
          staggerChildren: 0.1,
          delayChildren: 0.2
        }
      },
      closed: {
        x: "100%",
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 30,
          staggerChildren: 0.1,
          staggerDirection: -1
        }
      }
    }
  
    const itemVariants = {
      open: {
        x: 0,
        opacity: 1
      },
      closed: {
        x: 20,
        opacity: 0
      }
    }
  
    return (
      <>
        {/* Hamburger Menu Button */}
        <button
          onClick={() => {
              console.log("Clickd")
              setIsOpen(true)
          }}
          className={`fixed top-4 right-4 z-50 p-2 rounded-lg backdrop-blur-sm 
            hover:bg-white/20 transition-colors duration-300
            ${isScrolled ? 'bg-gray-400' : 'bg-white/40'}`}
        >
          <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
          >
              <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
              />
          </svg>
        </button>
  
        {/* Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            />
          )}
        </AnimatePresence>
  
        {/* Sidebar */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
              className="fixed bg-transparent top-0 right-0 h-full w-64 bg-white/60 backdrop-blur-lg 
                shadow-2xl z-50 p-6"
            >
              {/* Close Button */}
              <motion.button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 left-4 p-2 rounded-lg hover:bg-gray-100 
                  transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <XMarkIcon className="h-6 w-6 text-gray-800" />
              </motion.button>
  
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-8 mb-12"
              >
                <h2 className="text-2xl font-bold font-gotham-bold text-gray-800">Bait Al Khair</h2>
                <p className=" text-orange-600">The Home of Goodness</p>
              </motion.div>
  
              {/* Menu Items */}
              <nav>
                <ul className="space-y-4">
                  {menuItems.map((item) => (
                    <motion.li key={item.title} variants={itemVariants}>
                      <Link 
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-4 p-3 rounded-lg 
                          hover:bg-orange-50 hover:text-orange-600 transition-colors duration-300
                          group relative"
                      >
                        <item.icon className="h-6 w-6 transition-colors duration-300 group-hover:text-orange-600 text-black" />
                        <span className="font-medium text-black">{item.title}</span>
                        
                        {/* Hover Indicator */}
                        <motion.div
                          className="absolute right-0 w-1 h-full bg-orange-500 rounded-l-full"
                          initial={{ scaleY: 0 }}
                          whileHover={{ scaleY: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
  
              {/* Bottom Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-8 left-6 right-6"
              >
                <div className="p-4 rounded-lg bg-orange-50">
                  <h3 className="text-sm font-medium text-orange-800">Opening Hours</h3>
                  <p className="text-xs text-orange-600 mt-2">
                    Mon - Fri: 8AM - 10PM<br />
                    Sat - Sun: 10AM - 11PM
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    )
  }



const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
    // Add scroll event listener
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <header className={`sticky top-0 z-50 rounded-b-2xl transition-colors duration-300 ${
        isScrolled ? 'bg-white/40 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}>


      <div className="container mx-auto px-4 ">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image
                src="/Halal_sign_no_back.png"
                alt="Halal Certified"
                width={40}
                height={40}
                className="opacity-100 hover:opacity-80 bg-white rounded-full transition-opacity mr-5"
            />
            <Link href="/" className="text-xl font-bold text-orange-600 uppercase">
              Bait Al-Khair
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-700 relative group"
                >
                  <span className="relative">
                    Home
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-700 relative group"
                >
                  <span className="relative">
                    About
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                  </span>
                </Link>
              </li>
            </ul>
          </nav>

        {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sidebar isScrolled={isScrolled} />
          </div>        
        </div>
      </div>
    </header>
  );
};

export default Header;
