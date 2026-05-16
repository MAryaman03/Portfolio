import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from './Section';
import { ExternalLink, Github, X, Target, Activity } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Stock Monitoring Tool",
    description: "Real-time portfolio tracking platform with live stock updates and dynamic state management.",
    longDescription: "A high-performance financial dashboard engineered to handle real-time market data streams. Built with a robust MERN stack architecture to deliver instant portfolio valuations and historical trend analysis without layout thrashing.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "WebSockets"],
    features: [
      "Real-time WebSocket data streaming",
      "Secure JWT-based authentication",
      "Optimized React state management",
      "Interactive D3.js charting",
    ],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop",
    metrics: [
      { label: "Data Latency", value: "<50ms" },
      { label: "API Uptime", value: "99.9%" }
    ],
    challenge: "Handling high-frequency market data streams without dropping frames or causing React re-render bottlenecks.",
    github: "https://github.com/MAryaman03",
    live: "#"
  },
  {
    id: 2,
    title: "Travel Booking Platform",
    description: "Comprehensive reservation platform with dynamic pricing engine and real-time booking validation.",
    longDescription: "An enterprise-grade CRM solution built natively on Salesforce. This platform manages complex travel itineraries, customer relationships, and dynamic pricing algorithms using Apex triggers and Lightning Web Components.",
    tech: ["Salesforce", "Apex", "LWC", "OAuth 2.0", "SOQL"],
    features: [
      "Dynamic pricing engine algorithms",
      "RBAC secure authentication",
      "Real-time booking validation",
      "Custom Lightning Community portal"
    ],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000&auto=format&fit=crop",
    metrics: [
      { label: "Bookings Processed", value: "10k+" },
      { label: "Query Speed", value: "0.2s" }
    ],
    challenge: "Designing a complex relational schema within Salesforce limits while maintaining fast SOQL query performance.",
    github: "https://github.com/MAryaman03",
    live: "#"
  },
  {
    id: 3,
    title: "AI Workforce Intelligence",
    description: "Advanced analytics platform for employee retention insights and visualization dashboards.",
    longDescription: "A next-generation SaaS platform utilizing AI to predict employee churn and optimize workforce allocation. Features a highly interactive dashboard with role-based access control and real-time metric synchronization.",
    tech: ["Next.js", "PostgreSQL", "Supabase", "TypeScript", "Tailwind"],
    features: [
      "AI-powered predictive reporting",
      "Employee retention ML insights",
      "Hardware-accelerated visualization",
      "Secure admin hierarchy (RLS)"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    metrics: [
      { label: "Render FPS", value: "60fps" },
      { label: "Prediction Acc.", value: "92%" }
    ],
    challenge: "Implementing a fluid, iOS-native feeling navigation system while fetching heavy analytics payloads securely.",
    github: "https://github.com/MAryaman03",
    live: "#"
  }
];

export default function Projects() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    if (selectedId !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedId]);

  return (
    <>
      <Section id="projects" title="Featured Work" subtitle="Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedId(project.id)}
              className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full cursor-pointer hover:border-primary/50 transition-colors shadow-lg hover:shadow-[0_0_30px_rgba(112,0,255,0.2)]"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 relative bg-gradient-to-b from-transparent to-[#030014]/50">
                <motion.h3 className="text-xl font-bold text-white mb-2 relative z-10 group-hover:text-secondary transition-colors">
                  {project.title}
                </motion.h3>
                <motion.p className="text-white/60 text-sm mb-4 relative z-10 line-clamp-2">
                  {project.description}
                </motion.p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-4 mt-auto relative z-10">
                  {project.tech.slice(0, 3).map(t => (
                    <span key={t} className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 bg-white/5 text-primary-light rounded-full border border-white/10 group-hover:border-primary/30 transition-colors">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 bg-white/5 text-white/50 rounded-full border border-white/10">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Expandable Modal View */}
      <AnimatePresence>
        {selectedId && (
          <>
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-[#030014]/60 z-40"
            />

            <div className="fixed inset-0 flex items-center justify-center z-50 p-4 md:p-6 pointer-events-none">
              {projects.filter(p => p.id === selectedId).map(project => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300, mass: 0.5 }}
                  key="modal"
                  className="w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(112,0,255,0.3)] bg-[#030014] pointer-events-auto relative flex flex-col md:flex-row will-change-transform"
                >
                  <button
                    onClick={() => setSelectedId(null)}
                    className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-primary/50 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden shrink-0">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent md:bg-gradient-to-r" />
                  </div>

                  <div className="p-6 md:p-10 flex-1 flex flex-col">
                    <motion.h3 className="text-3xl font-bold text-white mb-2">
                      {project.title}
                    </motion.h3>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map(t => (
                        <span key={t} className="text-xs px-3 py-1 bg-primary/20 text-primary-light rounded-full border border-primary/30 shadow-[0_0_10px_rgba(112,0,255,0.2)]">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-2">Overview</h4>
                        <motion.p className="text-white/80 leading-relaxed text-sm">
                          {project.longDescription}
                        </motion.p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="glass-card p-4 rounded-xl bg-white/5 border border-white/5">
                          <h4 className="flex items-center gap-2 text-sm font-semibold text-secondary mb-3">
                            <Target className="w-4 h-4" /> Challenge Solved
                          </h4>
                          <p className="text-xs text-white/70 leading-relaxed">
                            {project.challenge}
                          </p>
                        </div>

                        <div className="glass-card p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-center">
                          <h4 className="flex items-center gap-2 text-sm font-semibold text-primary-light mb-3">
                            <Activity className="w-4 h-4" /> Core Metrics
                          </h4>
                          <div className="flex justify-between items-center">
                            {project.metrics.map(m => (
                              <div key={m.label} className="text-center">
                                <div className="text-xl font-bold text-white mb-1">{m.value}</div>
                                <div className="text-[10px] text-white/50 uppercase tracking-wider">{m.label}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group">
                        <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        Source Code
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-[#030014] font-bold hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all flex items-center justify-center gap-2 group">
                        Live Demo
                        <ExternalLink className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
