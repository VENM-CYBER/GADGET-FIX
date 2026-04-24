import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-gray-50 px-6 py-12">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <p className="text-gray-600 mt-2">
          We're here to help you with your repair needs.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
        
        <div className="bg-white p-6 rounded-2xl shadow text-center">
          <Mail className="mx-auto text-blue-600 mb-3" size={28} />
          <h3 className="font-semibold text-lg">Email</h3>
          <p className="text-gray-600 mt-2">support@gadgetfix.com</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow text-center">
          <Phone className="mx-auto text-blue-600 mb-3" size={28} />
          <h3 className="font-semibold text-lg">Phone</h3>
          <p className="text-gray-600 mt-2">+91 98765 43210</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow text-center">
          <MapPin className="mx-auto text-blue-600 mb-3" size={28} />
          <h3 className="font-semibold text-lg">Location</h3>
          <p className="text-gray-600 mt-2">Kolkata, India</p>
        </div>
      </div>

      {/* Optional CTA */}
      <div className="text-center">
        <a
          href="/booking"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          Book a Repair
        </a>
      </div>
    </section>
  );
}