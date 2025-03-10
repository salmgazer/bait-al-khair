'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import MenuModal from './components/MenuModal';
import { useState } from 'react';


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    // redirect to https://chefly.starlabelapps.com/m/dKoCmlWBJnm-wDKQyhT6U
    window.location.href = 'https://chefly.starlabelapps.com/m/dKoCmlWBJnm-wDKQyhT6U';
  }

  const topDishes = [
    {
      name: "Collada",
      image: "/collada.png",
      price: "GH₵35",
      description: "Authentic collada juice with irresistible taste."
    },
    {
      name: "Samosa",
      image: "/samosa.png", 
      price: "GH₵10",
      description: "Crispy pastry filled with spiced potatoes, peas and aromatic herbs"
    },
    {
      name: "Fresh Mango Juice",
      image: "/mango.png",
      price: "GH₵30",
      description: "Freshly squeezed mango juice with a hint of mint"
    },
    {
      name: "Chapati",
      image: "/chapati.png",
      price: "GH₵10",
      description: "Soft and fluffy flatbread, perfect for scooping up curries and sauces"  
    }
    ];

  return (
    <>
      {/* Glassmorphic overlay for entire page */}
      <div className="fixed inset-0 bg-white/60 backdrop-blur-sm -z-10"></div>
      <div className="fixed inset-0 -z-20">
        <Image
          src="/vegs1-min.jpeg"
          alt="Background Pizza"
          fill
          className="object-cover"
          priority={true}
        />
      </div>
      <main className="relative min-h-screen px-6 md:px-12 lg:px-24"> {/* Added padding to main container */}
      <Header />

        {/* Hero Section */}
        <section className="container mx-auto md:px-4 md:py-16 flex flex-col md:flex-row items-center gap-8">
          {/* Left Column */}
          <motion.div 
            className="md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl font-gotham-bold text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Magical Taste
            </motion.h1>
            
            <motion.h3 
              className="text-3xl text-orange-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              From the House of Goodness
            </motion.h3>

            <motion.p 
              className="text-lg text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Experience a unique blend of flavors where East and West African cuisine meets Italian classics. 
              Fresh ingredients, passionate cooking, unforgettable taste.
            </motion.p>

            <motion.button 
              onClick={openMenu}
              className="px-8 py-3 bg-orange-500 text-white rounded-full 
                hover:bg-orange-600 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Vew Menu
            </motion.button>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="md:w-1/2 relative h-[500px]"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="relative z-10 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              whileHover={{ 
                y: -10,
                transition: { 
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                whileHover={{ 
                  scale: 1.02,
                  rotateZ: 2,
                  transition: { duration: 0.3 }
                }}
              >
                <Image
                  src="/everythingd-min.jpg"
                  quality={90}
                  priority={true}
                  alt="Delicious Pizza"
                  width={300}
                  height={400}
                  className="rounded-lg bg-[white]/30 shadow-lg"
                />
              </motion.div>
                                         
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                whileHover={{ 
                  scale: 1.02,
                  rotateZ: 2,
                  transition: { duration: 0.3 }
                }}
              >
                <Image
                  src="/mango2-min.jpg"
                  alt="Fresh Juice"
                  quality={90}
                  priority={true}
                  width={300}
                  height={400}
                  className="rounded-lg shadow-lg mt-16"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
  
        {/* Top List Section */}
        <section className="container mx-auto sm:-mb-[0px] md:px-4 md:py-16">
          <motion.h2 
            className="text-3xl font-gotham-thin text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Top Picks
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-2 max-w-7xl mx-auto"> {/* Changed to grid-cols-4 and max-w-7xl */}
            {topDishes.slice(0,3).map((dish, index) => (
              <motion.div 
                key={index} 
                className="bg-white/40 mb-10 rounded-4xl overflow-visible shadow-lg 
                  hover:transform hover:scale-105 transition-all duration-300 max-w-[260px] mx-auto" // Adjusted max-width to 260px
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }} // Reduced delay between cards
                whileHover={{ y: -5 }}
              >
                <div className="h-48 relative -mt-10 mx-4 item-center"> {/* Adjusted height if needed */}
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="p-4 space-y-3">
                  <h3 className="text-xl font-gotham-thin text-gray-800 tracking-tight">{dish.name}</h3>
                  <p className="text-gray-600 text-sm tracking-wide">{dish.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-600 font-bold text-lg">{dish.price}</span>
                    <motion.button 
                      onClick={openMenu}
                      className="px-4 py-2 bg-orange-500 text-white rounded-full 
                        hover:bg-orange-600 transition-colors duration-300 text-sm tracking-wide"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Order Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
            <motion.div 
                key={3} 
                className="bg-white/40 mb-10 rounded-4xl overflow-visible shadow-lg 
                  hover:transform hover:scale-105 transition-all duration-300 max-w-[260px] mx-auto" // Adjusted max-width to 260px
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 3 * 0.1, duration: 0.6 }} // Reduced delay between cards
                whileHover={{ y: -5 }}
              >
                <div className="h-40 w-32 relative -mt-8 mx-auto item-center"> {/* Adjusted height if needed */}
                  <Image
                    src={topDishes[3].image}
                    alt={topDishes[3].name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="p-4 space-y-3">
                  <h3 className="text-xl font-gotham-thin text-gray-800 tracking-tight">{topDishes[3].name}</h3>
                  <p className="text-gray-600 text-sm tracking-wide">{topDishes[3].description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-600 font-bold text-lg">{topDishes[3].price}</span>
                    <motion.button 
                      onClick={openMenu}
                      className="px-4 py-2 bg-orange-500 text-white rounded-full 
                        hover:bg-orange-600 transition-colors duration-300 text-sm tracking-wide"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Order Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
          </div>
        </section>

        <MenuModal 
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />
        <Footer />

      </main>
    </>
  );
  
}
