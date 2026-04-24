import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

const items = [
  {
    id: 1,
    name: "Fast Charger",
    price: 499,
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    name: "Wireless Earbuds",
    price: 999,
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    name: "USB Cable",
    price: 199,
    image: "https://via.placeholder.com/300x200",
  },
];

export default function Products() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">Shop Accessories</h1>

        {/* Cart */}
        <div className="relative">
          <ShoppingCart size={28} />
          <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
            {cart.length}
          </span>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden group"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-600 mt-1">₹{item.price}</p>

              {/* Button */}
              <button
                onClick={() => addToCart(item)}
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl transition flex items-center justify-center gap-2"
              >
                <ShoppingCart size={18} />
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}