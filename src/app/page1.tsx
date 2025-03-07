import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';

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
      {/* Glassmorphic overlay for entire page */}
      <div className="fixed inset-0 bg-white/60 backdrop-blur-sm -z-10"></div>
      <div className="fixed inset-0 -z-20">
        <Image
          src="/vegs1.jpeg"
          alt="Background Pizza"
          fill
          className="object-cover"
          priority
        />
      </div>
      <main className="relative min-h-screen px-6 md:px-12 lg:px-24"> {/* Added padding to main container */}
      <Header />

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8">
          {/* Left Column */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-5xl font-bold text-gray-800">
              Taste the Magic of
              <span className="block text-orange-600">Culinary Fusion</span>
            </h1>
            <p className="text-lg text-gray-700">
              Experience a unique blend of flavors where African cuisine meets Italian classics. 
              Fresh ingredients, passionate cooking, unforgettable taste.
            </p>
            <button className="px-8 py-3 bg-orange-500 text-white rounded-full 
              hover:bg-orange-600 transition-colors duration-300">
              Order Now
            </button>
          </div>
  
          {/* Right Column */}
          <div className="md:w-1/2 relative h-[500px]">
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <Image
                src="/everythingd.jpg"
                alt="Delicious Pizza"
                width={300}
                height={400}
                className="rounded-lg bg-[white]/30 shadow-lg"
              />
              <Image
                src="/mango2.jpg"
                alt="Fresh Juice"
                width={300}
                height={400}
                className="rounded-lg shadow-lg mt-16"
              />
            </div>
          </div>
        </section>
  
        {/* Top List Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Top Picks
          </h2>
          <div className="grid md:grid-cols-3 gap-2 max-w-6xl mx-auto"> {/* Changed gap-2.5 to gap-2 */}
            {topDishes.map((dish, index) => (
              <div key={index} className="bg-white/40 rounded-4xl overflow-visible shadow-lg 
                hover:transform hover:scale-105 transition-all duration-300 max-w-[280px] mx-auto">
                <div className="h-55 relative -mt-10 mx-4">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 space-y-3">
                  <h3 className="text-xl font-semibold text-gray-800">{dish.name}</h3>
                  <p className="text-gray-600 text-sm">{dish.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-600 font-bold text-lg">{dish.price}</span>
                    <button className="px-4 py-2 bg-orange-500 text-white rounded-full 
                      hover:bg-orange-600 transition-colors duration-300 text-sm">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Footer />

      </main>
    </>
  );
  
}
