import { motion } from "framer-motion";
import { Palette, Layout, Type, Smartphone, Zap, Award } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Color Theory Mastery",
    description: "Learn to create harmonious color palettes that evoke emotion and guide user action."
  },
  {
    icon: Layout,
    title: "Grid Systems",
    description: "Build robust, responsive layouts that maintain rhythm and balance across all devices."
  },
  {
    icon: Type,
    title: "Typography Secrets",
    description: "Master font pairing, hierarchy, and scale to make your content beautifully readable."
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Strategies for creating seamless experiences on smaller screens without compromising quality."
  },
  {
    icon: Zap,
    title: "Rapid Prototyping",
    description: "Workflows to move from idea to interactive prototype in record time."
  },
  {
    icon: Award,
    title: "Portfolio Building",
    description: "How to showcase your work effectively to land your dream clients or job."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-secondary/50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block"
          >
            What You'll Learn
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-primary mb-6"
          >
            Everything you need to become a world-class designer
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            This book condenses years of industry experience into practical, actionable chapters that you can apply immediately.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-xl hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
