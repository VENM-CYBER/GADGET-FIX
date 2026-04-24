import Services from "../components/Services";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ServicesPage() {
  return (
    <main className="bg-gray-50 min-h-screen">

      {/* HERO HEADER */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          Our Services
        </motion.h1>

        <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
          We provide fast, reliable and affordable repair solutions for all your
          devices.
        </p>

        <Link to="/booking">
          <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
            Book a Repair
          </button>
        </Link>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 px-6">
        <Services />
      </section>

      {/* CTA SECTION */}
      <section className="bg-white py-16 text-center px-6">
        <h2 className="text-3xl font-bold">
          Need a Quick Fix?
        </h2>
        <p className="text-gray-600 mt-3">
          Our experts are ready to repair your device today.
        </p>

        <Link to="/booking">
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition">
            Book Now
          </button>
        </Link>
      </section>

    </main>
  );
}