import { motion } from 'framer-motion';
import { FaTrophy, FaHeartbeat, FaRegSmile, FaRegClock } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaTrophy className="w-12 h-12 text-sport" />,
    title: "تعزيز الأداء",
    description: "تضمن لك راحة ودعماً مثاليين لتحسين أدائك في التدريبات والرياضات"
  },
  {
    icon: <FaHeartbeat className="w-12 h-12 text-sport" />,
    title: "صحة أفضل",
    description: "تساعد على تحسين وضعية القدم وتقليل الإجهاد أثناء التمارين"
  },
  {
    icon: <FaRegSmile className="w-12 h-12 text-sport" />,
    title: "ثقة عالية",
    description: "تمنحك شعوراً بالراحة التامة في كل حركة"
  },
  {
    icon: <FaRegClock className="w-12 h-12 text-sport" />,
    title: "استثمار ذكي",
    description: "جودة عالية تدوم طويلاً مع ضمان لمدة عامين"
  }
];

export default function Benefits() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-sport-dark">ماذا تضيف لك SportFlex؟</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <div className="flex justify-center mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-sport-dark">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}