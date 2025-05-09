// components/HowItWorks.jsx
import { motion } from 'framer-motion';
export default function HowItWorks() {
  const steps = [
    {
      emoji: "📤",
      title: "Upload License",
      description: "Submit details of the unused software licenses you want to sell.",
    },
    {
      emoji: "💰",
      title: "Get Valuation",
      description: "We’ll analyze and give you a competitive market valuation instantly.",
    },
    {
      emoji: "🏦",
      title: "Get Paid",
      description: "Accept the offer and receive secure payment directly to your account.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-6">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-12 text-gray-800">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">{step.emoji}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
