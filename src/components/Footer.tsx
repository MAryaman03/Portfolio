import { ArrowUp } from 'lucide-react';
import { cn } from '../lib/utils';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 py-8 mt-12 overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-white/50 text-sm">
          &copy; {new Date().getFullYear()} Aryaman Mohanty. All rights reserved.
        </div>

        <div className="flex items-center gap-6">
          <a href="#home" className="text-white/50 hover:text-white transition-colors text-sm">Home</a>
          <a href="#projects" className="text-white/50 hover:text-white transition-colors text-sm">Projects</a>
          <a href="#contact" className="text-white/50 hover:text-white transition-colors text-sm">Contact</a>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-8 right-8 p-3 rounded-full bg-primary text-white shadow-[0_0_20px_rgba(112,0,255,0.3)] hover:scale-110 hover:bg-primary-light transition-all z-50",
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
