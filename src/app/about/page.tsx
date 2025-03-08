'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '../components/Header';

const AboutPage = () => {
  return (
    <main className="min-h-screen relative">
    <Header />
      {/* Background with blur effect */}
      <div className="fixed inset-0 bg-gradient-to-b from-orange-100/80 to-white/90 -z-10" />
      <div className="fixed inset-0 bg-[url('/pattern-bg.png')] opacity-5 -z-10" />

      {/* Hero Section */}
      {/* <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <Image
          src="/restaurant-interior.jpg"
          alt="Bait Al-Khair Restaurant"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white backdrop-blur-sm bg-black/10 p-12 rounded-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-gotham-bold mb-4 tracking-tight">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl font-gotham-thin tracking-wider">
              A Journey of Passion & Excellence
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* CEO Profile Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            // initial={{ opacity: 0, y: 20 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true }}
            // transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
              <Image
                src="/everythingd-min.jpg"
                alt="Ramla - CEO of Bait Al-Khair"
                quality={90}
                priority={true}
                fill
                className="object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              className="backdrop-blur-md bg-white/30 rounded-3xl p-12 shadow-xl"
            >
              <h2 className="text-2xl font-gotham-thin text-orange-600 mb-2">
                Our CEO
              </h2>
              <h3 className="text-4xl md:text-5xl font-gotham-bold text-gray-800 mb-8">
                Ramla
              </h3>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  With a passion for authentic cuisine and a vision for creating memorable dining experiences,
                  Ramla has transformed Bait Al-Khair from a dream into a culinary destination that celebrates
                  the rich traditions of our Eastern and Western African heritage.
                </p>
                <p>
                  Her journey in the culinary world began with a simple belief: that food has the power to
                  bring people together and create lasting memories. This belief has been the driving force
                  behind every decision at Bait Al-Khair.
                </p>
                <blockquote className="border-l-4 border-orange-500 pl-8 py-2 my-12 text-xl italic font-gotham-thin">
                  "At Bait Al-Khair, we're not just serving meals; we're creating experiences that honor our
                  traditions while embracing innovation. Every dish tells a story, and every guest becomes
                  part of our family."
                </blockquote>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-gotham-bold text-center text-gray-800 mb-16">
              Our Vision & Values
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  title: "Authenticity",
                  description: "Preserving the genuine flavors and cooking techniques that make our cuisine unique.",
                  icon: "🌟"
                },
                {
                  title: "Community",
                  description: "Creating a welcoming space where people can come together and share memorable moments.",
                  icon: "🤝"
                },
                {
                  title: "Excellence",
                  description: "Maintaining the highest standards in food quality, service, and guest experience.",
                  icon: "✨"
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="backdrop-blur-md bg-white/20 rounded-2xl p-8 shadow-xl 
                    hover:shadow-2xl transition-all duration-300 border border-white/30
                    hover:bg-white/30"
                >
                  <div className="text-5xl mb-6">{value.icon}</div>
                  <h3 className="text-2xl font-gotham-bold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* Contact Section */}
    <section className="container mx-auto px-4 py-24">
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center backdrop-blur-md bg-white/20 rounded-3xl p-16 shadow-xl"
    >
        <h2 className="text-4xl md:text-5xl font-gotham-bold text-gray-800 mb-8">
        Connect With Us
        </h2>
        <p className="text-xl text-gray-700 mb-12 font-gotham-thin">
        We'd love to hear from you. Reach out through any of these channels.
        </p>
        
        {/* Contact Information */}
        <div className="flex flex-col items-center gap-6 mb-12">
        <motion.a
            href="tel:+233000000000"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 text-xl font-gotham-medium text-gray-800 
            backdrop-blur-sm bg-white/30 px-8 py-4 rounded-full hover:bg-white/40 
            transition-all duration-300"
        >
            <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
            </svg>
            +233 598 577 005
        </motion.a>

        <motion.a
            href="mailto:hello@baitalkhair.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 text-xl font-gotham-medium text-gray-800 
            backdrop-blur-sm bg-white/30 px-8 py-4 rounded-full hover:bg-white/40 
            transition-all duration-300"
        >
            <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
            </svg>
            info@bait-al-khair.com
        </motion.a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6">
        {[
            {
            name: 'Instagram',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
            ),
            href: 'https://instagram.com/baitalkhair'
            },
            {
            name: 'Facebook',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
            ),
            href: 'https://facebook.com/baitalkhair'
            },
            {
            name: 'TikTok',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
            ),
            href: 'https://tiktok.com/@baitalkhair'
            }
        ].map((social) => (
            <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-4 backdrop-blur-sm bg-white/30 rounded-full hover:bg-white/40 
                transition-all duration-300 text-gray-800 hover:text-orange-500"
            >
            {social.icon}
            </motion.a>
        ))}
        </div>
    </motion.div>
    </section>

    </main>
  );
};

export default AboutPage;
