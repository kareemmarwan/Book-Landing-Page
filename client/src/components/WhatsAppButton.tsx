import { ExternalLink } from "lucide-react";
import { useTrackClick } from "@/hooks/use-analytics";

interface WhatsAppButtonProps {
  location: string;
  className?: string;
  variant?: 'primary' | 'outline' | 'large';
}

export function WhatsAppButton({ location, className = "", variant = 'primary' }: WhatsAppButtonProps) {
  const { mutate: trackClick } = useTrackClick();

  const handleBuyClick = () => {
    trackClick({
      type: `whatsapp_${location}`,
      userAgent: navigator.userAgent
    });

    const phoneNumber = "15550123456";
    const message = encodeURIComponent("مرحبًا، أريد شراء كتاب إتقان تصميم المنتجات الرقمية. يرجى تزويدي بتفاصيل الشراء.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-xl hover:-translate-y-1 rounded-full px-8 py-4 shadow-lg shadow-primary/20",
    outline: "border-2 border-primary text-primary hover:bg-primary/5 rounded-full px-6 py-3",
    large: "w-full sm:w-auto text-lg px-10 py-5 bg-accent text-white hover:bg-accent/90 hover:shadow-2xl hover:-translate-y-1 rounded-full shadow-xl shadow-accent/25 font-bold tracking-wide"
  };

  return (
    <button
      onClick={handleBuyClick}
      dir="rtl"
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span className="ml-2">اشترِ الآن عبر واتساب</span>
      <ExternalLink className="w-5 h-5" />
    </button>
  );
}
