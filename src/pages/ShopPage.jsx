import Shop from "../components/Shop";
import { motion } from "framer-motion";

export default function ShopPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      
      {/* HERO HEADER */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          Shop Accessories
        </motion.h1>

        <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
          Explore high-quality accessories for your devices at the best prices.
        </p>
      </section>

      {/* OPTIONAL FILTER BAR (UI READY) */}
      <section className="max-w-6xl mx-auto px-6 mt-10 flex justify-between items-center">
        <p className="text-gray-600">Showing latest products</p>

        <select className="border px-4 py-2 rounded-lg outline-none">
          <option>Sort by: Popular</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </section>

      {/* PRODUCTS */}
      <section className="py-10 px-6">
        <Shop />
      </section>

      {/* CTA */}
      <section className="bg-white py-16 text-center px-6">
        <h2 className="text-3xl font-bold">
          Need Help Choosing?
        </h2>
        <p className="text-gray-600 mt-3">
          Contact our experts for the best recommendations.
        </p>

        <a href="/contact">
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition">
            Contact Support
          </button>
        </a>
      </section>

    </main>
  );
}