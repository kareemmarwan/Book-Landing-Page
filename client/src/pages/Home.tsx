import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Check } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background bg-texture font-sans selection:bg-accent selection:text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left Column: Text */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:w-1/2 z-10"
            >
              <div className="inline-flex items-center space-x-2 bg-secondary px-4 py-2 rounded-full mb-8 border border-border/50">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-medium text-primary/80 uppercase tracking-wider">Now Available</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary leading-[1.1] mb-6">
                Mastering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Digital Product</span> <br />
                <span className="italic font-serif text-accent relative">
                  Design
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
                The comprehensive guide to building beautiful, functional, and scalable digital products. Stop guessing and start designing with intent.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <WhatsAppButton location="hero" variant="large" />
                <button 
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-5 rounded-full font-semibold text-primary hover:bg-secondary transition-colors"
                >
                  Explore Chapters
                </button>
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span>Instant PDF Download</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span>Lifetime Updates</span>
                </div>
              </div>
            </motion.div>
            
            {/* Right Column: 3D Book Visual */}
            <motion.div 
              initial={{ opacity: 0, x: 30, rotateY: 30 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="lg:w-1/2 flex justify-center lg:justify-end book-container perspective-1000"
            >
              <div className="relative">
                {/* Abstract Background Blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-secondary via-white to-accent/10 rounded-full blur-3xl -z-10" />
                
                {/* Book Cover */}
                <div className="book group relative cursor-pointer">
                  {/* Front Cover */}
                  <div className="absolute inset-0 bg-primary rounded-r-md rounded-l-sm shadow-2xl flex flex-col items-center justify-center p-8 border-l-4 border-l-white/20 overflow-hidden">
                    {/* Cover Texture */}
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-bl-full blur-2xl" />
                    
                    <div className="z-10 text-center w-full h-full flex flex-col justify-between border-2 border-white/10 p-6">
                      <div className="text-white/60 font-medium tracking-widest text-xs uppercase">The Ultimate Guide</div>
                      <div>
                        <h2 className="text-4xl font-display font-bold text-white mb-2">Digital Product</h2>
                        <h2 className="text-4xl font-display italic text-accent">Design</h2>
                      </div>
                      <div className="text-white/80 text-sm">By Alex Morgan</div>
                    </div>
                  </div>
                  
                  {/* Book Spine Effect (Left Side) */}
                  <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-gray-900 to-gray-800 rounded-l-sm transform -translate-x-full origin-right" />
                  
                  {/* Pages Effect (Right Side) */}
                  <div className="absolute right-0 top-2 bottom-2 w-8 bg-white border-l border-gray-200 transform translate-x-[1px] -z-10 rounded-r-sm" 
                       style={{ background: 'linear-gradient(to right, #e3e3e3 0%, #ffffff 100%)' }} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Features />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
