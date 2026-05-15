import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Download, Bot, Code, Webhook } from 'lucide-react';

const techIcons = [
  // Inner Orbit
  { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'Next.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', invert: true },
  { name: 'Salesforce', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg' },
  { name: 'Apex', icon: Code },
  // Middle Orbit
  { name: 'Tailwind', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'Express', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', invert: true },
  { name: 'Java', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'Supabase', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' },
  // Outer Orbit
  { name: 'HTML5', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'MySQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'GitHub', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', invert: true },
  { name: 'Postman', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
  { name: 'REST API', icon: Webhook },
  { name: 'Agentforce', icon: Bot },
];

const orbits = [
  { items: techIcons.slice(0, 6), radius: 110, duration: 25, reverse: false },
  { items: techIcons.slice(6, 13), radius: 175, duration: 35, reverse: true },
  { items: techIcons.slice(13, 21), radius: 240, duration: 45, reverse: false },
];

const TechOrbit = ({ items, radius, duration, reverse }: any) => {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 w-0 h-0 will-change-transform"
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      {items.map((item: any, i: number) => {
        const angle = (i * 360) / items.length;
        const rad = angle * (Math.PI / 180);
        const x = Math.cos(rad) * radius;
        const y = Math.sin(rad) * radius;

        return (
          <motion.div
            key={item.name}
            className="absolute -translate-x-1/2 -translate-y-1/2 will-change-transform"
            style={{ left: x, top: y }}
            animate={{ rotate: reverse ? 360 : -360 }}
            transition={{ duration, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:scale-125 hover:shadow-[0_0_20px_rgba(112,0,255,0.5)] transition-all cursor-pointer group relative z-20 hover:z-50 backdrop-blur-sm will-change-transform">
              {item.src ? (
                <img src={item.src} alt={item.name} className={`w-6 h-6 ${item.invert ? 'filter invert opacity-90' : ''}`} />
              ) : (
                item.icon && <item.icon className="w-6 h-6 text-white/80" />
              )}

              {/* Tooltip */}
              <span className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[11px] font-medium text-white whitespace-nowrap bg-[#030014]/90 px-3 py-1.5 rounded-lg border border-white/10 shadow-xl pointer-events-none">
                {item.name}
              </span>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

const heroTitles = [
  "Software Engineer",
  "FullStack Engineer",
  "Salesforce Developer",
  "Technical Consultant",
  "AI Enthusiast"
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % heroTitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[30rem] h-[30rem] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", bounce: 0.4, duration: 1.2, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 border-white/10 hover:bg-white/5 transition-colors cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm font-medium text-white/80">Available for Opportunities</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm <br />
              <span className="text-gradient">Aryaman Mohanty</span>
            </h1>

            <div className="h-8 md:h-10 mb-8 flex items-center justify-center lg:justify-start overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={titleIndex}
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-lg md:text-2xl text-white/80 font-light tracking-wide"
                >
                  {heroTitles[titleIndex]}
                </motion.h2>
              </AnimatePresence>
            </div>

            <motion.p 
              className="text-lg text-white/50 mb-10 max-w-2xl mx-auto lg:mx-0 border-l-4 border-primary pl-4 py-2 bg-white/[0.02] rounded-r-lg"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.04, delayChildren: 0.8 } }
              }}
            >
              {"\"Building scalable software systems, AI-powered platforms, and enterprise-grade CRM solutions.\"".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 15, filter: "blur(8px)", scale: 0.9 },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ type: "spring", bounce: 0.5, duration: 1.2, delay: 1.5 }}
            >
              <a href="#projects" className="w-full sm:w-auto px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-primary-light text-white font-medium hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all flex items-center justify-center gap-2 group hover:scale-105 active:scale-95">
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/AryamanMohanty26 (4).pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-lg glass-card text-white font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95">
                Download Resume
                <Download className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div 
              className="flex items-center gap-6 mt-12 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ type: "spring", bounce: 0.5, duration: 1.2, delay: 1.7 }}
            >
              <a href="https://www.linkedin.com/in/aryaman-mohanty-053a041b1/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-card hover:text-secondary hover:scale-110 active:scale-95 transition-all text-white/70">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/MAryaman03" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-card hover:text-secondary hover:scale-110 active:scale-95 transition-all text-white/70">
                <Github className="w-6 h-6" />
              </a>
              <a href="mailto:aryaan375@gmail.com" className="p-3 rounded-full glass-card hover:text-secondary hover:scale-110 active:scale-95 transition-all text-white/70">
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>

          <div className="flex-1 w-full max-w-lg lg:max-w-none relative flex justify-center mt-12 lg:mt-0 lg:translate-x-12 scale-[0.55] sm:scale-[0.75] md:scale-100 origin-center">
            <motion.div
              className="w-full relative flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {/* Abstract Tech Illustration or Image Placeholder */}
              <div className="relative aspect-square w-full rounded-full border border-white/10 glass flex items-center justify-center shadow-[0_0_100px_rgba(112,0,255,0.2)]">
                <div className="absolute inset-4 rounded-full border border-secondary/30 border-dashed animate-spin-slow" />
                <div className="absolute inset-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl" />
                <div className="relative z-10 w-48 h-48 rounded-2xl glass-card flex items-center justify-center rotate-12 hover:rotate-0 transition-all duration-500 hover:scale-110">
                  <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary-light to-secondary">{'</>'}</span>
                </div>

                {/* Orbital Rings Background */}
                <div className="absolute inset-0 rounded-full border border-white/[0.08] scale-[0.9]" />

                {/* Floating Tech Orbits */}
                {orbits.map((orbit, i) => (
                  <TechOrbit
                    key={i}
                    items={orbit.items}
                    radius={orbit.radius}
                    duration={orbit.duration}
                    reverse={orbit.reverse}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >

        <motion.div
          className="w-px h-12 bg-gradient-to-b from-primary to-transparent"
          animate={{ height: ["0%", "100%", "0%"], y: [0, 10, 20] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
