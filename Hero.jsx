// components/Hero.jsx
import { motion } from 'framer-motion';
export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-indigo-600 to-blue-500 text-white py-20 px-6">
      <motion.div className="max-w-4xl mx-auto text-center"
      initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: 'easeOut' }}>
        <img src="/logo.png" alt="SoftSell logo" className="mx-auto mb-4 w-20 h-20" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
            SoftSell
        </h1>

        <p className="text-lg md:text-xl mb-8">
          SoftSell helps businesses sell unused or surplus software licenses in minutes.
        </p>
        <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition">
          Get a Quote
        </button>
       </motion.div>
    </section>
  );
}
