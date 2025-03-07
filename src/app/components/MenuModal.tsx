import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuModal = ({ isOpen, onClose }: MenuModalProps) => {
  const menuItems = [
    {
      category: "Main Dishes",
      items: [
        { name: "Spicy Jollof Rice", price: "GH₵40", description: "Traditional Ghanaian rice dish cooked in rich tomato sauce" },
        { name: "Chapati Wrap", price: "GH₵50", description: "Fresh chapati filled with seasoned vegetables and sauce" }
      ]
    },
    {
      category: "Appetizers",
      items: [
        { name: "Samosa", price: "GH₵10", description: "Crispy pastry filled with spiced potatoes and peas" },
        { name: "Spring Rolls", price: "GH₵15", description: "Vegetable filled crispy rolls" }
      ]
    },
    {
      category: "Beverages",
      items: [
        { name: "Fresh Mango Juice", price: "GH₵30", description: "Freshly squeezed mango juice with mint" },
        { name: "Passion Fruit Smoothie", price: "GH₵25", description: "Tropical smoothie blend" }
      ]
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50"
        >
          {/* Glassmorphic Background */}
          <div className="absolute inset-0 bg-white/80 backdrop-blur-md" />

          {/* Modal Content */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="absolute inset-0 overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white/50 backdrop-blur-sm p-6 border-b border-gray-200">
              <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h2 className="text-3xl font-gotham-bold text-gray-800">Our Menu</h2>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 rounded-full bg-orange-500 text-white"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>
            </div>

            {/* Menu Content */}
            <div className="max-w-7xl mx-auto p-6">
              {menuItems.map((category, idx) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="mb-12"
                >
                  <h3 className="text-2xl font-gotham-thin text-gray-800 mb-6">{category.category}</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((item, itemIdx) => (
                      <motion.div
                        key={item.name}
                        whileHover={{ y: -5 }}
                        className="bg-white/40 rounded-xl p-6 shadow-lg"
                      >
                        <h4 className="text-xl font-gotham-thin text-gray-800">{item.name}</h4>
                        <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                        <div className="flex justify-between items-center mt-4">
                          <span className="text-orange-600 font-bold">{item.price}</span>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 bg-orange-500 text-white rounded-full text-sm"
                          >
                            Call to Order
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuModal;
