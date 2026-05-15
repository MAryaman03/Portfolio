import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '../lib/utils';

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

export default function Section({ id, className, children, title, subtitle }: SectionProps) {
  return (
    <section id={id} className={cn("py-24 relative overflow-hidden", className)}>
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {(title || subtitle) && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-24"
          >
            {subtitle && (
              <span className="text-secondary font-medium tracking-wider text-sm uppercase mb-3 block">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-3xl md:text-5xl font-bold">
                <span className="text-gradient">{title}</span>
              </h2>
            )}
          </motion.div>
        )}
        
        {children}
      </div>
    </section>
  );
}
