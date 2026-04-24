import { motion } from "framer-motion";
import { Smartphone, Laptop, Headphones } from "lucide-react";

export default function Services() {
  const services = [
    {
      name: "Mobile Repair",
      desc: "Screen replacement, battery issues, software fixes with fast turnaround.",
      icon: <Smartphone size={32} />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Laptop Repair",
      desc: "Hardware upgrades, OS fixes, performance tuning & diagnostics.",
      icon: <Laptop size={32} />,
      color: "from-purple-500 to-indigo-500",
    },
    {
      name: "Accessories",
      desc: "Premium chargers, covers, headphones & original parts.",
      icon: <Headphones size={32} />,
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 px-6">
      
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-extrabold">Our Services</h2>
        <p className="text-gray-600 mt-3">
          Fast, reliable and professional repair solutions
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="relative group bg-white rounded-2xl p-8 shadow-md overflow-hidden"
          >
            
            {/* Gradient Glow */}
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition bg-gradient-to-r ${s.color}`}
            />

            {/* Icon */}
            <div
              className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r ${s.color} text-white mb-6`}
            >
              {s.icon}
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold mb-2">{s.name}</h3>
            <p className="text-gray-600 mb-4">{s.desc}</p>

            {/* CTA */}
            <button className="text-blue-600 font-semibold hover:underline">
              Learn More →
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}