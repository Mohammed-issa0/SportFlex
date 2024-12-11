import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    text: "تجربتي مع SportFlex كانت رائعة، شعرت بتحسن كبير في أدائي في الجري.",
    name: "يوسف",
    age: "30 سنة"
  },
  {
    text: "أفضل حذاء رياضي جربته، مريح للغاية وداعم في كل خطوة.",
    name: "فاطمة",
    age: "25 سنة"
  },
  {
    text: "خفافات مثالية للتدريب المكثف، لا أستطيع العودة إلى أي حذاء آخر.",
    name: "علي",
    age: "28 سنة"
  },
  {
    text: "منذ أن بدأت في استخدام SportFlex، تحسنت راحت قدمي أثناء ممارسة الرياضة بشكل ملحوظ.",
    name: "رانيا",
    age: "35 سنة"
  }
];

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000
  };

  return (
    <section className="py-20 bg-sport-dark text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">تجارب عملائنا</h2>
        <div className="max-w-3xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div dir='rtl' key={index} className="border  py-5 rounded-md  text-right px-8">
                <p className="font-bold ">
                  {testimonial.name}، {testimonial.age}
                </p>
                <p className="text-xl mt-6">{testimonial.text}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}