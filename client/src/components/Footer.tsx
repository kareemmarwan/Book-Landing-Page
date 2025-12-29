import { WhatsAppButton } from "./WhatsAppButton";
import { Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer dir="rtl" className="bg-secondary pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* شعار ومقدمة */}
          <div className="col-span-1 lg:col-span-2 text-right">
            <h3 className="font-display text-2xl font-bold text-primary mb-6">
              التسويق <span className="text-accent">احترافي</span>
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
              تمكين الجيل القادم من المسوقين الرقميين من خلال استراتيجيات عملية وقابلة للتطبيق. انضم لمجتمعنا وابدأ في تحسين حملاتك التسويقية وتحقيق نتائج ملموسة.

            </p>
            <div className="flex flex-row gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* روابط سريعة */}
          <div className="text-right">
            <h4 className="font-bold text-primary mb-6" style={{ fontFamily: 'Cairo, sans-serif' }}>روابط سريعة</h4>
            <ul className="space-y-4">
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors">الفصول</a></li>
              <li><a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">آراء المستخدمين</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">الأسئلة الشائعة</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">سياسة الخصوصية</a></li>
            </ul>
          </div>

          {/* احصل على الكتاب */}
          <div className="text-right">
            <h4 className="font-bold text-primary mb-6" style={{ fontFamily: 'Cairo, sans-serif' }}>احصل على الكتاب</h4>
            <p className="text-sm text-muted-foreground mb-4">ابدأ رحلتك في إتقان التصميم الآن.</p>
            <WhatsAppButton location="footer" variant="outline" className="w-full" />
          </div>
        </div>

        {/* تذييل أسفل الصفحة */}
        <div className="border-t border-primary/10 pt-8 flex flex-col flex justify-between items-center text-sm text-muted-foreground text-right">
          <p>© 2026 كتاب التسويق الرقمي. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
