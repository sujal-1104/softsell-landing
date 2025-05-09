// components/Testimonials.jsx
import { motion } from 'framer-motion';
export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "SoftSell made it incredibly easy to sell our old software licenses. Quick process and instant payment!",
      name: "Priya Sharma",
      role: "CTO",
      company: "TechNova",
    },
    {
      quote:
        "Highly recommend! We recovered thousands in unused licenses with zero hassle. Great support too.",
      name: "James Miller",
      role: "IT Lead",
      company: "ByteCore Inc.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
              <div className="text-sm font-medium text-gray-900">
                {t.name} — <span className="text-gray-600">{t.role}, {t.company}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
