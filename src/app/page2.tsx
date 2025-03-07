'use client'
import Image from 'next/image';
import { ClockIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';



const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    <motion.header 
      className={`sticky top-0 z-50 rounded-b-2xl transition-colors duration-300 ${
        isScrolled ? 'bg-white/30 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/" className={`text-base font-bold tracking-wide text-orange-600 uppercase`}>
              Bait Al-Khair
            </Link>
          </motion.div>

          {/* Navigation Menu */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {['Home', 'Menu', 'About'].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className={`font-normal tracking-tight text-gray-700 font-bold relative group uppercase`}
                  >
                    <span className="relative">
                      {item}
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden p-2 rounded-lg hover:bg-white/20"
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <nav className="py-4">
              <ul className="space-y-4">
                {['Home', 'Menu', 'About'].map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                      className="block text-gray-700 relative group"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="relative">
                        {item}
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    {
      src: "/everythingd.jpg",
      alt: "Delicious Food"
    },
    {
      src: "/pizza1.jpeg",
      alt: "Pizza"
    },
    {
      src: "/mango3.jpg",
      alt: "Fresh Juice"
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-2xl">
      {images.map((image, index) => (
        <motion.div
          key={image.src}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: index === currentImageIndex ? 1 : 0,
            scale: index === currentImageIndex ? 1 : 1.1
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </motion.div>
      ))}
    </div>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="mt-16 bg-white/40 rounded-t-2xl backdrop-blur-sm py-12"      
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.div 
          className="text-center mb-12"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-gray-800">Bait Al Khair</h2>
          <p className="text-orange-600 mt-2">The Home of Goodness</p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Column 1 */}
          <motion.div 
            className="space-y-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-gray-800">Opening Hours</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5 text-orange-500" />
                <span>Mon - Fri: 8AM - 10PM</span>
              </li>
              <li className="flex items-center gap-2 pl-7">
                <span>Sat - Sun: 10AM - 11PM</span>
              </li>
            </ul>
          </motion.div>

          {/* Column 2 */}
          <motion.div 
            className="space-y-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold text-gray-800">Contact Us</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <PhoneIcon className="h-5 w-5 text-orange-500" />
                <span>+971 123 4567</span>
              </li>
              <li className="flex items-center gap-2">
                <EnvelopeIcon className="h-5 w-5 text-orange-500" />
                <span>info@baitalkhair.com</span>
              </li>
            </ul>
          </motion.div>

          {/* Column 3 */}
          <motion.div 
            className="space-y-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-gray-800">Get Social</h3>
            <div className="flex gap-4">
              <motion.a
                  href="#"
                  className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={"Facebook"}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={"Instagram"}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={"Tiktok"}
                >
                  <svg 
                    className="h-5 w-5" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    stroke="none"
                  >
                    <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" />
                  </svg>
                </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="text-center mt-12 text-gray-600 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p>© {currentYear} Bait Al Khair. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default function Home() {
  const topDishes = [
    {
      name: "Spicy Jollof Rice",
      image: "/jollof.png",
      price: "$15.99",
      description: "Traditional West African rice dish cooked in rich tomato sauce"
    },
    {
      name: "Samosa",
      image: "/samosa1.png", 
      price: "$8.99",
      description: "Crispy pastry filled with spiced potatoes, peas and aromatic herbs"
    },
    {
      name: "Fresh Mango Juice",
      image: "/mango.png",
      price: "$6.99",
      description: "Freshly squeezed mango juice with a hint of mint"
    }
  ];
  return (
    <>
      <div className={`font-sans fixed inset-0 bg-white/60 backdrop-blur-sm -z-10`}></div>
      <div className="fixed inset-0 -z-20">
        <Image
          src="/vegs1.jpeg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <main className="relative min-h-screen px-6 md:px-12 lg:px-24">
        <Header />

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8">
          {/* Left Column */}
          <motion.div 
            className="md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-5xl font-bold tracking-tight text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Taste the Magic of
              <motion.span 
                className="block text-orange-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Culinary Fusion
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Experience a unique blend of flavors where African cuisine meets Italian classics. 
              Fresh ingredients, passionate cooking, unforgettable taste.
            </motion.p>
            <motion.button 
              className="px-8 py-3 bg-orange-500 text-white rounded-full 
                hover:bg-orange-600 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Order Now
            </motion.button>
          </motion.div>
  
          {/* Right Column - Carousel */}
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ImageCarousel />
          </motion.div>
        </section>
  
        {/* Top List Section */}
        <section className="container mx-auto px-4 py-16">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Top Picks
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-2 max-w-6xl mx-auto">
            {topDishes.map((dish, index) => (
              <motion.div 
                key={index} 
                className="bg-white/40 rounded-4xl overflow-visible shadow-lg 
                  hover:transform hover:scale-105 transition-all duration-300 max-w-[280px] mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-55 relative -mt-10 mx-4">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="p-4 space-y-3">
                  <h3 className="text-xl font-semibold text-gray-800">{dish.name}</h3>
                  <p className="text-gray-600 text-sm">{dish.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-600 font-bold text-lg">{dish.price}</span>
                    <motion.button 
                      className="px-4 py-2 bg-orange-500 text-white rounded-full 
                        hover:bg-orange-600 transition-colors duration-300 text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Order Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
