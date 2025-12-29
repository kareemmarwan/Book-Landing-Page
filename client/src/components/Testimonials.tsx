import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "ليلى أحمد",
    role: "مديرة تسويق",
    content:
      "استراتيجية هذا الكتاب في التسويق الرقمي ساعدتني على زيادة مبيعاتنا عبر الإنترنت بشكل كبير خلال ثلاثة أشهر فقط.",
    rating: 5,
    initials: "لأ"
  },
  {
    name: "خالد محمود",
    role: "أخصائي تسويق رقمي",
    content:
      "التقنيات والأدوات الموصوفة في هذا الدليل ساعدتني على تحسين حملاتنا الإعلانية وتحقيق عائد استثمار أعلى.",
    rating: 5,
    initials: "خم"
  },
  {
    name: "منى علي",
    role: "استراتيجية محتوى",
    content:
      "الأساليب العملية التي يقدمها الكتاب جعلتني أصمم محتوى تسويقي يجذب العملاء ويزيد التفاعل بشكل ملحوظ.",
    rating: 5,
    initials: "مأ"
  }
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      dir="rtl" // اتجاه عربي
      className="py-24 bg-white relative font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* العنوان */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-sans" style={{ fontFamily: 'Cairo, sans-serif' }}>
            آراء خبراء التسويق
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            اكتشف كيف ساعد هذا الدليل آلاف المسوقين على تحسين استراتيجياتهم وتحقيق نتائج أفضل.
          </p>
        </div>

        {/* البطاقات */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-secondary/30 p-8 rounded-2xl relative text-right"
            >
              {/* أيقونة الاقتباس على اليمين */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />

              {/* التقييم */}
              <div className="flex flex-row-reverse gap-1 mb-6 justify-end">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* النص */}
              <p className="text-primary/80 mb-8 italic leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* معلومات المستخدم */}
              <div className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.initials}
                </div>

                <div className="text-right" >
                  <h4 className="font-bold text-primary" style={{ fontFamily: 'Cairo, sans-serif' }}>
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
