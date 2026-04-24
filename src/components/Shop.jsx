import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";

function Shop() {
  const { addToCart } = useContext(CartContext);

  const products = [
    {
      id: 1,
      name: "Fast Charger",
      price: 500,
      image: "https://via.placeholder.com/300x200",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Wireless Headphones",
      price: 1500,
      image: "https://via.placeholder.com/300x200",
      rating: 4.7,
    },
    {
      id: 3,
      name: "Premium Phone Cover",
      price: 300,
      image: "https://via.placeholder.com/300x200",
      rating: 4.3,
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-12">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold">Shop Accessories</h2>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map((p) => (
          <motion.div
            key={p.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden group"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold">{p.name}</h3>

              {/* Rating */}
              <div className="flex items-center gap-1 text-yellow-500 text-sm mt-1">
                <Star size={16} fill="currentColor" />
                {p.rating}
              </div>

              <p className="text-gray-600 mt-2 font-medium">₹{p.price}</p>

              {/* Button */}
              <button
                onClick={() => addToCart(p)}
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl transition flex items-center justify-center gap-2"
              >
                <ShoppingCart size={18} />
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Shop;