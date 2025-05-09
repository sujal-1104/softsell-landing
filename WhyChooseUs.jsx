// components/WhyChooseUs.jsx
import { motion } from 'framer-motion';
export default function WhyChooseUs() {
  const benefits = [
    {
      emoji: "⚡",
      title: "Instant Valuations",
      description: "Get immediate quotes using our smart valuation engine.",
    },
    {
      emoji: "🔒",
      title: "Secure Transactions",
      description: "Your data and payments are fully protected with encryption.",
    },
    {
      emoji: "🤝",
      title: "Trusted by Businesses",
      description: "Used by 100+ companies to recover value from unused software.",
    },
    {
      emoji: "📞",
      title: "24/7 Support",
      description: "Our support team is available anytime you need help.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
       <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-6 rounded-xl bg-gray-50 shadow hover:shadow-md transition text-center">
              <div className="text-4xl mb-4">{benefit.emoji}</div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
