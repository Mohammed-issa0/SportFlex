import { motion } from 'framer-motion';
import { FaRunning, FaShieldAlt, FaBolt, FaWind, FaHeart } from 'react-icons/fa';

const features = [
  {
    icon: <FaRunning className="w-8 h-8 mb-4 text-sport-dark" />,
    title: "تصميم عصري ومريح",
    description: "تم تصميمها لتلائم جميع الأنشطة الرياضية"
  },
  {
    icon: <FaShieldAlt className="w-8 h-8 mb-4 text-sport-dark" />,
    title: "مواد عالية الجودة",
    description: "مصنوعة من قماش شبكي خفيف وقوي"
  },
  {
    icon: <FaBolt className="w-8 h-8 mb-4 text-sport-dark" />,
    title: "أداء استثنائي",
    description: "تقنيات مبتكرة لتوفير دعم مثالي"
  },
  {
    icon: <FaWind className="w-8 h-8 mb-4 text-sport-dark" />,
    title: "مقاومة للتعرق",
    description: "توفر تهوية ممتازة لتبقى قدماك جافة"
  },
  {
    icon: <FaHeart className="w-8 h-8 mb-4 text-sport-dark" />,
    title: "راحة قصوى",
    description: "حشوة ناعمة وشريط تثبيت مرن"
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-sport-dark">لماذا خفافات SportFlex؟</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-sport-light p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-sport-dark">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}