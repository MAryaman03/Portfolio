import { motion } from 'framer-motion';
import { Code2, Cpu, Layout, Sparkles } from 'lucide-react';
import Section from './Section';

const highlights = [
  {
    icon: <Sparkles className="text-secondary" />,
    title: "Salesforce Certified",
    description: "Agentforce Specialist with expertise in AI-driven agent deployment and architecture."
  },
  {
    icon: <Layout className="text-primary-light" />,
    title: "Full-Stack Developer",
    description: "Experience building scalable backend systems and high-performance React frontends."
  },
  {
    icon: <Cpu className="text-secondary" />,
    title: "AI Enthusiast",
    description: "Passionate about future technologies, prompt engineering, and intelligent systems."
  },
  {
    icon: <Code2 className="text-primary-light" />,
    title: "Clean UI/UX",
    description: "Focused on performance optimization, smooth animations, and modern design principles."
  }
];

export default function About() {
  return (
    <Section id="about" title="About Me" subtitle="Who I Am">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", bounce: 0.4, duration: 1 }}
        >
          <motion.div 
            whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="glass-card p-8 rounded-2xl relative overflow-hidden group will-change-transform"
          >
            {/* Ambient Background Blob */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
                rotate: [0, 90, 0]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/30 to-secondary/30 blur-[80px] rounded-full pointer-events-none" 
            />
            <h3 className="text-2xl font-bold mb-4 text-white relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-primary-light transition-all">The Engineering Mindset</h3>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                I am a dedicated Software Engineer bridging the gap between scalable full-stack development and enterprise-grade Salesforce solutions. My journey is driven by a strong problem-solving mindset and a passion for building robust applications.
              </p>
              <p>
                With a solid foundation in React.js, Node.js, Apex, REST APIs, and MongoDB, I thrive in environments that challenge me to optimize performance and craft exceptional user experiences.
              </p>
              <p>
                Whether I'm developing AI-powered platforms or integrating complex systems, my goal is to deliver clean architecture, maintainable code, and products that truly matter.
              </p>
            </div>

            {/* Currently Building Indicator */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
              className="mt-8 p-5 rounded-xl bg-gradient-to-r from-[#030014]/80 to-primary/10 border border-primary/20 relative overflow-hidden group hover:border-primary/40 transition-colors shadow-lg cursor-default"
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-start gap-4 relative z-10">
                <div className="relative mt-1.5 flex-shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00E5FF] shadow-[0_0_12px_#00E5FF]" />
                  <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-[#00E5FF] animate-ping opacity-75" />
                </div>
                <div>
                  <h4 className="text-secondary font-semibold text-xs tracking-widest uppercase mb-1.5">Active Project</h4>
                  <p className="text-sm text-white/70 leading-relaxed">
                    Currently building AI-powered workforce intelligence systems using <span className="text-white font-medium">Next.js</span>, <span className="text-white font-medium">PostgreSQL</span>, <span className="text-white font-medium">Supabase</span>, and <span className="text-white font-medium">TypeScript</span>.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", bounce: 0.4, duration: 1, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="glass-card p-6 rounded-xl group cursor-default relative overflow-hidden will-change-transform"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(112,0,255,0.3)] transition-all relative z-10"
              >
                {item.icon}
              </motion.div>
              <h4 className="text-lg font-semibold mb-2 text-white relative z-10 group-hover:text-primary-light transition-colors">{item.title}</h4>
              <p className="text-sm text-white/60 relative z-10">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
