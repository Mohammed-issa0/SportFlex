import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "كيف أضمن جودة المنتج؟",
    answer: "كل زوج من الخفافات يأتي مع شهادة ضمان أصالة وجودة معتمدة."
  },
  {
    question: "هل يمكنني استبدالها أو إرجاعها؟",
    answer: "نعم، نوفر ضمان استبدال أو إرجاع خلال 30 يومًا من تاريخ الشراء."
  },
  {
    question: "هل تناسب الخفافات الاستخدام اليومي؟",
    answer: "بالتأكيد، تم تصميمها لتحمل الاستخدام اليومي في الأنشطة الرياضية."
  },
  {
    question: "هل تأتي مع ضمان؟",
    answer: "نعم، الخفافات مشمولة بضمان لمدة عامين على جميع العيوب المصنعية."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-sport-dark font-bold text-center mb-16">الأسئلة الشائعة</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="w-full text-right bg-white p-6 rounded-lg shadow-md"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <span className="text-xl font-semibold text-sport-dark">{faq.question}</span>
                  <span className="transform transition-transform duration-200 text-sport-dark font-bold">
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </div>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-gray-600"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}