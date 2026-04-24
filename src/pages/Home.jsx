import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import BookingForm from "../components/BookingForm";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="overflow-hidden">
      
      {/* HERO */}
      <HeroSection />

      {/* SERVICES */}
      <section className="bg-white py-20">
        <Services />
      </section>

      {/* TRUST / STATS SECTION */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 text-center gap-8 px-6">
          {[
            { value: "10,000+", label: "Repairs Done" },
            { value: "4.8★", label: "Customer Rating" },
            { value: "24/7", label: "Support Available" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow"
            >
              <h3 className="text-3xl font-bold text-blue-600">
                {item.value}
              </h3>
              <p className="text-gray-600 mt-2">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold">
          Get Your Device Fixed Today 🚀
        </h2>
        <p className="mt-3 text-gray-200">
          Fast service, affordable pricing, and trusted technicians.
        </p>

        <div className="mt-8 max-w-xl mx-auto">
          <BookingForm />
        </div>
      </section>

    </main>
  );
}