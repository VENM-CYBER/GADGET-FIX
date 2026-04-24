import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Smartphone, Laptop, Star, Clock } from "lucide-react";

import mobileImg from "../assets/mobile-repair.jpg";
import laptopImg from "../assets/laptop-repair.jpg";
import tabletImg from "../assets/tablet-repair.jpg";
import accessoriesImg from "../assets/accessories.jpg";

/* 🔥 Custom Counter Hook (NO library, no bugs) */
function useCounter(end, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
}

export default function HeroSection() {
  const devices = [
    { name: "Mobile Repair", img: mobileImg },
    { name: "Laptop Repair", img: laptopImg },
    { name: "Tablet Repair", img: tabletImg },
    { name: "Accessories", img: accessoriesImg },
  ];

  const stats = [
    { icon: <Smartphone size={18} />, label: "Repairs", value: 10000, suffix: "+" },
    { icon: <Star size={18} />, label: "Rating", value: 4.8, decimals: 1 },
    { icon: <Clock size={18} />, label: "Avg Time", value: 2, suffix: " hrs" },
    { icon: <Laptop size={18} />, label: "Devices Fixed", value: 5000, suffix: "+" },
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-50 via-white to-gray-100 pt-32 pb-24 px-6 overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-30"></div>

      {/* 🔥 Hero Content */}
      <div className="relative max-w-4xl mx-auto text-center">

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-sm mb-4"
        >
          ⭐ Trusted by 10,000+ customers
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
        >
          Repair Your Devices <br />
          <span className="text-blue-600">Fast & Hassle-Free</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-gray-500 mt-6 text-lg"
        >
          Mobile, laptop & gadget repair with expert technicians and quick turnaround.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 flex justify-center gap-4"
        >
          <button className="btn-primary">Book Repair</button>
          <button className="btn-secondary">View Services</button>
        </motion.div>

        {/* 💎 Floating Stats Bar */}
        <div className="mt-12 bg-white border border-gray-100 shadow-sm rounded-2xl px-6 py-6 flex flex-wrap justify-between gap-6 max-w-4xl mx-auto">
          {stats.map((s, i) => {
            const value = useCounter(s.value);

            return (
              <div key={i} className="flex items-center gap-3">

                <div className="bg-blue-50 text-blue-600 p-2 rounded-lg">
                  {s.icon}
                </div>

                <div className="text-left">
                  <p className="text-xl font-semibold">
                    {s.decimals
                      ? value.toFixed(s.decimals)
                      : Math.floor(value)}
                    {s.suffix || ""}
                  </p>
                  <p className="text-gray-500 text-sm">{s.label}</p>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* 💎 Device Cards */}
      <div className="relative mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {devices.map((d, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6 }}
            className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={d.img}
                alt={d.name}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>

            <div className="p-5">
              <h3 className="font-semibold text-lg">{d.name}</h3>

              <p className="text-gray-500 text-sm mt-2">
                Quick & reliable service with genuine parts.
              </p>

              <button className="mt-4 text-blue-600 font-medium">
                Learn More →
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔻 Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}