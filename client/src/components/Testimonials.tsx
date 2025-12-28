import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Senior UX Designer",
    content: "This book completely transformed how I approach design systems. The chapter on typography hierarchy alone is worth the price.",
    rating: 5,
    initials: "SJ"
  },
  {
    name: "Marcus Chen",
    role: "Frontend Developer",
    content: "As a developer, I struggled with design decisions. This guide gave me the vocabulary and rules to create beautiful interfaces confidently.",
    rating: 5,
    initials: "MC"
  },
  {
    name: "Elena Rodriguez",
    role: "Product Manager",
    content: "Clear, concise, and incredibly practical. I bought copies for my entire product team. It's now our design bible.",
    rating: 5,
    initials: "ER"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">Loved by designers worldwide</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of professionals who have elevated their craft with this comprehensive guide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-secondary/30 p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-primary/80 mb-8 italic leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold font-display text-lg">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-bold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
