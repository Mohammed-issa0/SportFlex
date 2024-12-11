import { motion } from 'framer-motion';
import { GiMeshBall, GiRunningShoe, GiWeightLiftingUp, GiStopwatch } from 'react-icons/gi';

const specifications = [
  {
    icon: <GiMeshBall className="w-12 h-12 mb-4 text-sport-dark" />,
    title: "قماش شبكي مقاوم للتعرق",
    description: "يضمن تهوية ممتازة وراحة طوال اليوم"
  },
  {
    icon: <GiRunningShoe className="w-12 h-12 mb-4 text-sport-dark" />,
    title: "نعل EVA متطور",
    description: "قدرة عالية على امتصاص الصدمات"
  },
  {
    icon: <GiWeightLiftingUp className="w-12 h-12 mb-4 text-sport-dark" />,
    title: "تصميم خفيف الوزن",
    description: "لتوفير حرية الحركة والراحة القصوى"
  },
  {
    icon: <GiStopwatch className="w-12 h-12 mb-4 text-sport-dark" />,
    title: "ضمان لمدة عامين",
    description: "ضمان شامل على جميع العيوب المصنعية"
  }
];

export default function Specifications() {
  return (
    <section className="py-20 bg-sport-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-sport-dark">المواصفات الأساسية</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specifications.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <div className="flex justify-center">{spec.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-sport-dark">{spec.title}</h3>
              <p className="text-red-900">{spec.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}