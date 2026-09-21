"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ExitIntentModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    // Desktop: exit intent (mouse leaves top viewport)
    const handleMouseOut = (e: MouseEvent) => {
      if (e.clientY < 10 && !hasTriggered) {
        setIsVisible(true);
        setHasTriggered(true);
      }
    };

    // Mobile: timeout or fast scroll up
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        // If we want a timer-based or scroll-based trigger on mobile
        // For simplicity, we just trigger after 15 seconds if it hasn't triggered
      }, 1000);
    };

    const timer = setTimeout(() => {
      if (!hasTriggered) {
        setIsVisible(true);
        setHasTriggered(true);
      }
    }, 20000); // 20 seconds fallback for mobile

    document.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
      clearTimeout(scrollTimeout);
    };
  }, [hasTriggered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVisible(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-md" 
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-zinc-900 border border-[#7B85FF]/30 rounded-3xl p-8 max-w-md w-full shadow-[0_0_50px_rgba(123,133,255,0.2)] overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-fuchsia-600 to-pink-500" />
            <button onClick={() => setIsVisible(false)} className="absolute top-4 right-4 text-zinc-400 hover:text-white">&times;</button>
            
            <h3 className="text-3xl font-display font-black text-white uppercase mb-3 leading-none">
              ¿Te vas <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">tan pronto?</span>
            </h3>
            
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              Únete a nuestro boletín y entérate de nuevas tendencias, activaciones y oportunidades para tu marca antes que nadie. Cero spam.
            </p>
            
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsVisible(false); alert('Suscrito correctamente'); }}>
              <div>
                <input 
                  type="email" 
                  placeholder="Tu mejor correo..." 
                  required 
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#7B85FF] transition-colors" 
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-[#7B85FF] hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl transition-colors uppercase tracking-wider text-sm shadow-[0_0_20px_rgba(123,133,255,0.4)]"
              >
                Suscribirme
              </button>
            </form>
            
            <button 
              onClick={() => setIsVisible(false)}
              className="mt-6 w-full text-center text-xs text-zinc-500 hover:text-zinc-300 underline underline-offset-4"
            >
              No, prefiero perderme las tendencias
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
