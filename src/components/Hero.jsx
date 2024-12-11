import { motion } from 'framer-motion';
import { FaShoppingCart, FaArrowDown } from 'react-icons/fa';
import CtaBtn from './CtaBtn';
import ProductSlider from './ProductSlider';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-sport-dark to-sport text-white">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="container mx-auto px-4 py-32 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold mb-6">SportFlex</h1>
          <p className="text-2xl mb-8 max-w-2xl mx-auto">
            هل ترغب في تعزيز أدائك الرياضي بينما تحافظ على راحتك وأسلوبك العصري؟
          </p>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            اكتشف خفافات SportFlex، الحذاء الذي يجمع بين الراحة الفائقة والتصميم الرياضي الأنيق ليمنحك الأداء المثالي في كل خطوة.
          </p>
          <CtaBtn />
          <ProductSlider />
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            
            <FaArrowDown className="w-6 h-6 text-white" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}