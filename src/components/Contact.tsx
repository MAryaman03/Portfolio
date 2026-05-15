import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xzdyjwyn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Form submission error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Section id="contact" title="Get In Touch" subtitle="Contact">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", bounce: 0.4, duration: 1 }}
          className="relative z-10"
        >
          <h3 className="text-3xl font-bold text-white mb-6">Let's build something <span className="text-gradient">amazing</span> together.</h3>
          <p className="text-white/60 mb-10 text-lg">
            Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-6">
            <motion.a 
              href="mailto:aryaan375@gmail.com" 
              whileHover={{ x: 10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex items-center gap-4 group p-4 rounded-xl glass-card border border-white/5 hover:border-secondary/30 transition-all relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/70 group-hover:text-secondary group-hover:scale-110 transition-all relative z-10 shadow-inner group-hover:shadow-[0_0_15px_rgba(0,229,255,0.3)]">
                <Mail className="w-6 h-6" />
              </div>
              <div className="relative z-10">
                <p className="text-sm text-white/50 mb-1">Email</p>
                <p className="text-white font-medium group-hover:text-secondary transition-colors">aryaan375@gmail.com</p>
              </div>
            </motion.a>

            <motion.a 
              href="https://www.linkedin.com/in/aryaman-mohanty-053a041b1/" target="_blank" rel="noopener noreferrer" 
              whileHover={{ x: 10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex items-center gap-4 group p-4 rounded-xl glass-card border border-white/5 hover:border-[#0A66C2]/30 transition-all relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A66C2]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/70 group-hover:text-[#0A66C2] group-hover:scale-110 transition-all relative z-10 shadow-inner group-hover:shadow-[0_0_15px_rgba(10,102,194,0.3)]">
                <Linkedin className="w-6 h-6" />
              </div>
              <div className="relative z-10">
                <p className="text-sm text-white/50 mb-1">LinkedIn</p>
                <p className="text-white font-medium group-hover:text-[#0A66C2] transition-colors">Connect professionally</p>
              </div>
            </motion.a>

            <motion.a 
              href="https://github.com/MAryaman03" target="_blank" rel="noopener noreferrer" 
              whileHover={{ x: 10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex items-center gap-4 group p-4 rounded-xl glass-card border border-white/5 hover:border-white/30 transition-all relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/70 group-hover:text-white group-hover:scale-110 transition-all relative z-10 shadow-inner group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                <Github className="w-6 h-6" />
              </div>
              <div className="relative z-10">
                <p className="text-sm text-white/50 mb-1">GitHub</p>
                <p className="text-white font-medium group-hover:text-white transition-colors">Explore my code</p>
              </div>
            </motion.a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", bounce: 0.4, duration: 1, delay: 0.2 }}
          className="relative z-10"
        >
          {/* Ambient Glow */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" 
          />
          <motion.form 
            onSubmit={handleSubmit} 
            whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="glass-card p-8 rounded-2xl flex flex-col gap-6 relative group will-change-transform"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-white/70">Name</label>
              <motion.input
                whileHover={{ y: -2, backgroundColor: "rgba(255,255,255,0.03)" }}
                whileFocus={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                type="text"
                id="name"
                name="name"
                required
                value={formState.name}
                onChange={handleChange}
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors shadow-inner"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-white/70">Email</label>
              <motion.input
                whileHover={{ y: -2, backgroundColor: "rgba(255,255,255,0.03)" }}
                whileFocus={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                type="email"
                id="email"
                name="email"
                required
                value={formState.email}
                onChange={handleChange}
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors shadow-inner"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-white/70">Message</label>
              <motion.textarea
                whileHover={{ y: -2, backgroundColor: "rgba(255,255,255,0.03)" }}
                whileFocus={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                id="message"
                name="message"
                required
                rows={5}
                value={formState.message}
                onChange={handleChange}
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none shadow-inner"
                placeholder="Your message here..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-lg bg-gradient-to-r from-primary to-primary-light text-white font-medium hover:shadow-[0_0_20px_rgba(112,0,255,0.4)] transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed border border-white/10"
            >
              {isSubmitting ? (
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : isSubmitted ? (
                <motion.span 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-green-300 font-bold"
                >
                  Message Sent Successfully!
                </motion.span>
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </Section>
  );
}
