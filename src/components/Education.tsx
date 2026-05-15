import { motion } from 'framer-motion';
import Section from './Section';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    institution: "Trident Academy of Technology",
    degree: "B.Tech in Computer Science and Engineering",
    duration: "2023 – 2026",
    status: "Completed"
  },
  {
    institution: "Aryan Institute of Engineering and Technology",
    degree: "Diploma in Computer Science and Engineering",
    duration: "2019 – 2021",
    status: "Completed"
  }
];

export default function Education() {
  return (
    <Section id="education" title="Academic Background" subtitle="Education">
      <div className="max-w-3xl mx-auto grid gap-6">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", bounce: 0.4, duration: 1, delay: idx * 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass-card p-6 md:p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start md:items-center relative overflow-hidden group will-change-transform"
          >
            {/* Animated Background Blob */}
            <motion.div 
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 90, 0]
              }}
              transition={{ duration: 8 + idx * 2, repeat: Infinity, ease: "linear" }}
              className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl rounded-full group-hover:from-primary/50 group-hover:to-secondary/50 transition-colors pointer-events-none" 
            />

            {/* Interactive Icon */}
            <motion.div 
              whileHover={{ rotate: [0, -15, 15, -15, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(112,0,255,0.4)] transition-all z-10 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <GraduationCap className="w-8 h-8 text-primary-light group-hover:text-white transition-colors relative z-10" />
            </motion.div>

            <div className="flex-1 relative z-10">
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-primary-light transition-all">
                {edu.institution}
              </h3>
              <p className="text-white/70 font-medium mb-3">{edu.degree}</p>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/60 shadow-inner">
                  {edu.duration}
                </span>
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  className={`px-3 py-1 border rounded-full text-xs font-semibold shadow-lg ${
                    edu.status === 'Completed' 
                      ? 'bg-green-500/10 text-green-400 border-green-500/20' 
                      : 'bg-primary/10 text-primary-light border-primary/20'
                  }`}
                >
                  {edu.status}
                </motion.span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
