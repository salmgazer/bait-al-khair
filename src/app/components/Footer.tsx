'use client'
import { motion } from 'framer-motion';
import { ClockIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const socialHoverVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.footer 
      className="mt-16 bg-white/40 rounded-t-xl backdrop-blur-sm py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Main Heading */}
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-bold text-gray-800"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Bait Al Khair
          </motion.h2>
          <motion.p 
            className="text-orange-600 mt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            The Home of Goodness
          </motion.p>
        </motion.div>

        {/* Three Columns */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Column 1 */}
          <motion.div 
            className="space-y-4"
            variants={itemVariants}
          >
            <h3 className="text-lg font-semibold text-gray-800">Opening Hours</h3>
            <ul className="space-y-2 text-gray-600">
              <motion.li 
                className="flex items-center gap-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <ClockIcon className="h-5 w-5 text-orange-500" />
                <span>Mon - Fri: 8AM - 10PM</span>
              </motion.li>
              <motion.li 
                className="flex items-center gap-2 pl-7"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span>Sat - Sun: 10AM - 11PM</span>
              </motion.li>
            </ul>
          </motion.div>

          {/* Column 2 */}
          <motion.div 
            className="space-y-4"
            variants={itemVariants}
          >
            <h3 className="text-lg font-semibold text-gray-800">Contact Us</h3>
            <ul className="space-y-2 text-gray-600">
              <motion.li 
                className="flex items-center gap-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <PhoneIcon className="h-5 w-5 text-orange-500" />
                <span>+971 123 4567</span>
              </motion.li>
              <motion.li 
                className="flex items-center gap-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <EnvelopeIcon className="h-5 w-5 text-orange-500" />
                <span>info@baitalkhair.com</span>
              </motion.li>
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
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="text-center mt-12 text-gray-600 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p>© {currentYear} Bait Al Khair. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
