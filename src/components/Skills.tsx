import { motion } from 'framer-motion';
import Section from './Section';

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Java"]
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Lightning Web Components"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Apex", "REST APIs"]
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Supabase"]
  },
  {
    title: "Salesforce",
    skills: ["Apex", "Flow Builder", "Experience Cloud", "Agentforce", "OAuth 2.0"]
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Jira", "Postman"]
  },
  {
    title: "Concepts",
    skills: ["SDLC", "Agile", "RBAC", "API Integration", "Unit Testing"]
  }
];

export default function Skills() {
  return (
    <Section id="skills" title="Technical Arsenal" subtitle="Skills & Technologies">
      <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", bounce: 0.4, duration: 1, delay: idx * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] glass-card rounded-2xl p-6 relative overflow-hidden group will-change-transform"
          >
            {/* Hover Ambient Glow */}
            <motion.div 
              className="absolute -inset-1/2 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-2xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />

            <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-secondary transition-all">
              <motion.span 
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_#00E5FF]"
              />
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2 relative z-10">
              {category.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(112,0,255,0.2)", borderColor: "rgba(112,0,255,0.5)", color: "#fff" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="px-3 py-1 text-sm font-medium rounded-full bg-white/5 border border-white/10 text-white/80 transition-colors shadow-sm cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
