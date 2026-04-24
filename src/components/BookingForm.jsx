import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Smartphone, Wrench } from "lucide-react";

export default function BookingForm() {
  const [form, setForm] = useState({
    device: "",
    issue: "",
    date: "",
    contact: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!form.device || !form.issue || !form.date || !form.contact) {
      alert("Please fill all fields");
      return;
    }

    setSuccess(true);

    // Reset form
    setForm({ device: "", issue: "", date: "", contact: "" });

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg"
      >
        {/* Title */}
        <h2 className="text-2xl font-bold mb-6 text-center">
          Book a Repair
        </h2>

        {/* Success Message */}
        {success && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
            ✅ Booking submitted successfully!
          </div>
        )}

        {/* Device */}
        <div className="mb-4">
          <label className="text-sm font-medium">Device Type</label>
          <div className="flex items-center border rounded-lg px-3 mt-1">
            <Smartphone size={18} className="text-gray-400" />
            <input
              name="device"
              value={form.device}
              onChange={handleChange}
              placeholder="e.g. iPhone 13"
              className="w-full p-2 outline-none"
            />
          </div>
        </div>

        {/* Issue */}
        <div className="mb-4">
          <label className="text-sm font-medium">Issue</label>
          <div className="flex items-center border rounded-lg px-3 mt-1">
            <Wrench size={18} className="text-gray-400" />
            <input
              name="issue"
              value={form.issue}
              onChange={handleChange}
              placeholder="Screen broken, battery issue..."
              className="w-full p-2 outline-none"
            />
          </div>
        </div>

        {/* Date */}
        <div className="mb-4">
          <label className="text-sm font-medium">Preferred Date</label>
          <div className="flex items-center border rounded-lg px-3 mt-1">
            <Calendar size={18} className="text-gray-400" />
            <input
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
              className="w-full p-2 outline-none"
            />
          </div>
        </div>

        {/* Contact */}
        <div className="mb-6">
          <label className="text-sm font-medium">Contact Info</label>
          <input
            name="contact"
            value={form.contact}
            onChange={handleChange}
            placeholder="Phone or Email"
            className="w-full p-2 border rounded-lg mt-1 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
        >
          Book Now
        </button>
      </motion.form>
    </section>
  );
}