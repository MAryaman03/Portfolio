import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import Section from './Section';
import { Briefcase, Calendar } from 'lucide-react';

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2500, bounce: 0 });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary text-3xl">0{suffix}</span>;
}

const experiences = [
  {
    id: 1,
    role: "Full-Stack Developer Intern",
    company: "Mindpex Technologies",
    duration: "Jan 2026 – Present",
    responsibilities: [
      "Engineered an AI-powered workforce intelligence platform using Next.js and TypeScript.",
      "Developed high-performance employee analytics dashboards with Recharts and Framer Motion.",
      "Implemented secure authentication and Row Level Security (RLS) via Supabase.",
      "Optimized rendering pipelines, significantly improving data visualization load times."
    ],
    metrics: [
      { label: "Rendering Speed", value: 2, suffix: "x" },
      { label: "Faster Queries", value: 40, suffix: "%" }
    ]
  },
  {
    id: 2,
    role: "Salesforce Developer Intern",
    company: "Neevas",
    duration: "Jul 2024 – Sep 2024",
    responsibilities: [
      "Built custom enterprise Salesforce modules leveraging Apex and LWC.",
      "Automated complex record synchronization workflows, eliminating manual overhead.",
      "Engineered secure REST API integrations with third-party logistics systems.",
      "Designed dynamic KPI dashboards and strict data validation rules."
    ],
    metrics: [
      { label: "Workflow Optimized", value: 35, suffix: "%" },
      { label: "Fewer Data Errors", value: 40, suffix: "%" },
      { label: "Hours Saved / Wk", value: 6, suffix: "+" }
    ]
  }
];

export default function Experience() {
  return (
    <Section id="experience" title="Professional Journey" subtitle="Experience">
      <div className="max-w-5xl mx-auto relative mt-12">
        {/* Cinematic Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-transparent -translate-x-1/2 hidden md:block">
          <motion.div 
            className="absolute top-0 left-0 right-0 bottom-0 bg-white/20 blur-[2px]"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>
        
        <div className="space-y-16 md:space-y-32">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col md:flex-row gap-8 lg:gap-16 relative ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-5 h-5 rounded-full bg-[#030014] border-2 border-secondary shadow-[0_0_20px_#00E5FF] -translate-x-[9px] md:-translate-x-1/2 mt-1.5 md:mt-0 z-20 hidden md:flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              </div>
              
              {/* Content Card */}
              <div className={`flex-1 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12 lg:pl-16' : 'md:pr-12 lg:pr-16'}`}>
                <div className="glass-card p-8 lg:p-10 rounded-2xl relative group overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(112,0,255,0.15)] hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 tracking-tight">{exp.role}</h3>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-secondary mb-8 font-medium">
                      <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                        <Briefcase className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/5 text-white/70">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-4 text-white/70 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary mt-2.5 flex-shrink-0 shadow-[0_0_8px_rgba(112,0,255,0.8)]" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Animated Metrics */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 pt-6 border-t border-white/10">
                      {exp.metrics.map((metric, idx) => (
                        <div key={idx} className="flex flex-col gap-1 p-3 rounded-xl bg-white/[0.02] border border-white/5 group-hover:bg-white/[0.04] transition-colors">
                          <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                          <span className="text-xs text-white/50 font-medium uppercase tracking-wider">{metric.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Empty Space for alternate side layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
