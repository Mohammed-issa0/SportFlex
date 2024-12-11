import { motion } from 'framer-motion';
import CtaBtn from './CtaBtn';

export default function Pricing() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-8 max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6">عرض خاص ومحدود</h2>
          <div className=" font-bold mb-4 flex items-end text-center justify-center bg-white text-secondary py-4 rounded-md">
            <span className="text-5xl">200 درهم</span>
            <span className="line-through text-gray-300 text-2xl">450 درهم</span>
            
          </div>
          <p className="text-2xl mb-3">وفر 50% لفترة محدودة!</p>
          <div className="mb-8">
            <p className="text-md">30 / 200 زوج متبقي فقط!</p>
          </div>
          <CtaBtn/>
        </motion.div>
      </div>
    </section>
  );
}