import { motion } from 'framer-motion';
import Section from './Section';
import { Award, CheckCircle2 } from 'lucide-react';

export default function Certifications() {
  return (
    <Section id="certifications" title="Credentials" subtitle="Certifications">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-1 relative overflow-hidden group"
        >
          {/* Animated border gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-[spin-slow_4s_linear_infinite] opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="bg-background/95 backdrop-blur-xl rounded-[23px] p-8 md:p-10 relative h-full flex flex-col md:flex-row gap-8 items-center">
            
            {/* Badge Icon */}
            <div className="relative w-32 h-32 flex-shrink-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full" />
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#00A1E0] to-[#005A8C] p-1 shadow-xl">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center border border-white/10">
                   <Award className="w-10 h-10 text-[#00A1E0]" />
                </div>
              </div>
              <motion.div 
                className="absolute -bottom-2 -right-2 bg-green-500 text-background rounded-full p-1 border-2 border-background"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.5 }}
              >
                <CheckCircle2 className="w-6 h-6" />
              </motion.div>
            </div>
            
            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Salesforce Certified Agentforce Specialist
              </h3>
              <p className="text-secondary font-medium mb-6">Salesforce Trailhead</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-white/70">
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-light" />
                  <span>AI-driven agent deployment</span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-light" />
                  <span>Prompt engineering</span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-light" />
                  <span>Agentforce architecture</span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-light" />
                  <span>Deployment lifecycle</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
