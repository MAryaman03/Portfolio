import { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const titles = [
  "Software Developer",
  "Technical Consultant",
  "FullStack Engineer"
];

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < titles.length) {
      const timer = setTimeout(() => {
        setIndex(index + 1);
      }, 2600); // Properly accounts for AnimatePresence exit/enter delays
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        onComplete();
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [index, onComplete]);

  // Generate deterministic particles to avoid React render mismatches
  const particles = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: `${(Math.random() * 100).toFixed(2)}%`,
      y: `${(Math.random() * 100).toFixed(2)}%`,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2
    }));
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030014] overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Immersive background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030014]/50 to-[#030014] z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-primary/20 rounded-full blur-[150px] pointer-events-none opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-secondary/10 rounded-full blur-[100px] pointer-events-none opacity-40" />
      
      {/* Subtle floating particles */}
      <div className="absolute inset-0 z-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute bg-white rounded-full blur-[1px]"
            style={{
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
            }}
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 0.5, 0],
              y: -100
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Cinematic Title Sequence */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {index < titles.length && (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center relative"
            >
              <h2 className="text-2xl md:text-5xl font-light tracking-[0.3em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
                {titles[index]}
              </h2>
              
              {/* Subtle Breathing Glow behind text */}
              <motion.div 
                className="absolute inset-0 bg-primary/30 blur-[40px] -z-10 rounded-full"
                animate={{ 
                  opacity: [0.2, 0.6, 0.2], 
                  scale: [0.8, 1.2, 0.8] 
                }}
                transition={{ 
                  duration: 2.2, 
                  ease: "easeInOut", 
                  repeat: Infinity 
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
