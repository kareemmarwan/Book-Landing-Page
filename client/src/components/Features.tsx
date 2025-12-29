import { motion } from "framer-motion";
import { Palette, Layout, Type, Smartphone, Zap, Award } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "استراتيجيات الألوان في التسويق",
    description:
      "تعلم كيفية استخدام الألوان لجذب الانتباه، التأثير على المشاعر، وزيادة معدلات التحويل في الحملات التسويقية."
  },
  {
    icon: Layout,
    title: "تصميم تخطيطات الحملات الإعلانية",
    description:
      "بناء محتوى بصري متوازن وواضح يضمن إيصال الرسالة التسويقية بشكل فعال عبر جميع المنصات."
  },
  {
    icon: Type,
    title: "كتابة محتوى تسويقي فعال",
    description:
      "إتقان اختيار الخطوط، ترتيب النصوص، وإنشاء رسائل واضحة وجاذبة لتحفيز العملاء على التفاعل."
  },
  {
    icon: Smartphone,
    title: "التسويق للجوال أولًا",
    description:
      "استراتيجيات لتصميم إعلانات ومحتوى رقمي فعال على الهواتف المحمولة، للوصول إلى أكبر عدد من العملاء."
  },
  {
    icon: Zap,
    title: "تجربة الحملات السريعة",
    description:
      "كيفية اختبار الأفكار التسويقية بسرعة وتحليل النتائج لتحسين الأداء وزيادة المبيعات."
  },
  {
    icon: Award,
    title: "بناء سمعة العلامة التجارية",
    description:
      "تعلم طرق عرض منتجاتك وخدماتك بشكل احترافي لبناء الثقة والمصداقية مع العملاء."
  }
];

export function Features() {
  return (
    <section
      id="features"
      dir="rtl" // اتجاه عربي
      className="py-24 bg-secondary/50 relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/40 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* العنوان */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-bold tracking-wider text-sm mb-4 block"
          >
            ماذا ستتعلم في الكتاب
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-primary mb-6"
          >
            كل ما تحتاجه لتصبح مسوقًا محترفًا
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            دليل شامل يحتوي على استراتيجيات تسويقية مجربة، نصائح عملية، وأمثلة واقعية لزيادة المبيعات وتحقيق النجاح الرقمي.
          </motion.p>
        </div>

        {/* الكروت */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-xl hover:border-accent/30 transition-all duration-300 group text-right"
            >
              <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-xl font-display font-bold text-primary mb-3">
                {feature.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
