import { Link } from "wouter";
import { motion } from "framer-motion";

export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      dir="rtl" // ✅ اتجاه عربي
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* عكس الاتجاه */}
        <div className="flex flex-row-reverse justify-between items-center h-20">

          {/* الشعار */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="font-display text-2xl font-bold text-primary tracking-tight"
            >
              Marketing<span className="text-accent">Mastery</span>
            </Link>
          </div>

          {/* القائمة */}
          <div className="hidden md:flex flex-row items-center gap-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              المميزات
            </button>

            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              آراء العملاء
            </button>

            <button
              onClick={() => scrollToSection("faq")}
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              الأسئلة الشائعة
            </button>

            <button
              onClick={() => scrollToSection("hero")}
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              احصل على الكتاب
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
