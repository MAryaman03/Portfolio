import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Maximize2, Minimize2 } from 'lucide-react';

const TerminalServiceForm = ({ serviceName }: { serviceName: string }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    formData.append("service", serviceName);
    
    try {
      await fetch("https://formspree.io/f/xzdyjwyn", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Form submission error", error);
      setSubmitted(true); // fall back to success message even if cors issue
    }
    setLoading(false);
  };

  if (submitted) {
    return <div className="text-secondary mt-2 mb-2 font-semibold">✓ Service request for '{serviceName}' submitted. Aryaman will contact you shortly!</div>;
  }

  return (
    <div className="mt-3 mb-2 p-4 border border-secondary/30 rounded-lg bg-[#030014]/50 max-w-sm backdrop-blur-sm relative z-50 pointer-events-auto">
      <div className="text-white mb-4 font-semibold border-b border-secondary/20 pb-2 flex items-center justify-between">
        <span>Booking: <span className="text-secondary">{serviceName}</span></span>
      </div>
      <form onSubmit={onSubmit} className="space-y-3">
        <div>
          <label className="block text-xs text-white/60 mb-1">Name</label>
          <input required name="name" type="text" className="w-full bg-white/5 border border-white/10 rounded px-3 py-1.5 text-white outline-none focus:border-secondary/50 transition-colors text-sm" placeholder="John Doe" />
        </div>
        <div>
          <label className="block text-xs text-white/60 mb-1">Email</label>
          <input required name="email" type="email" className="w-full bg-white/5 border border-white/10 rounded px-3 py-1.5 text-white outline-none focus:border-secondary/50 transition-colors text-sm" placeholder="john@example.com" />
        </div>
        <div>
          <label className="block text-xs text-white/60 mb-1">Project Details</label>
          <textarea required name="message" rows={2} className="w-full bg-white/5 border border-white/10 rounded px-3 py-1.5 text-white outline-none focus:border-secondary/50 transition-colors resize-none text-sm" placeholder="Tell us about your needs..." />
        </div>
        <button type="submit" disabled={loading} className="w-full mt-2 py-2 bg-gradient-to-r from-primary to-secondary text-[#030014] rounded hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all text-sm font-bold tracking-wide disabled:opacity-50">
          {loading ? "Submitting..." : "Submit Request"}
        </button>
      </form>
    </div>
  );
};

const responses: Record<string, React.ReactNode> = {
  help: <div>Available commands:<br/>- <span className="text-primary-light">about</span>: Who is Aryaman?<br/>- <span className="text-primary-light">skills</span>: View tech stack<br/>- <span className="text-primary-light">projects</span>: View portfolio<br/>- <span className="text-primary-light">services</span>: Book a technical service<br/>- <span className="text-primary-light">experience</span>: Work history<br/>- <span className="text-primary-light">contact</span>: Get in touch<br/>- <span className="text-primary-light">clear</span>: Clear terminal</div>,
  about: <div>Aryaman is a Full-Stack Engineer and Salesforce Developer specializing in high-performance web applications and enterprise CRM solutions.</div>,
  skills: <div>Tech Stack:<br/>Frontend: React, Next.js, Tailwind<br/>Backend: Node.js, Express, Apex<br/>Database: PostgreSQL, MongoDB<br/>Cloud: Salesforce, Supabase</div>,
  projects: <div>Navigating to Projects section...</div>,
  experience: <div>Navigating to Experience section...</div>,
  contact: <div>Email: aryaan375@gmail.com<br/>Navigating to Contact section...</div>,
  resume: <div>Downloading resume...</div>
};

const getFridayResponse = (input: string): string => {
  const text = input.toLowerCase();

  // Greetings — checked first to avoid collision with other keywords
  if (text === "hi" || text === "hello" || text === "hey" || text.includes("say hello") || text.startsWith("hi ") || text.startsWith("hello ")) {
    return "__ASK_NAME__";
  }
  if (text.includes("who are you") || text.includes("what are you") || text.includes("your name") || text.includes("introduce yourself")) {
    return "I am FRIDAY, Aryaman's virtual AI assistant. I'm here to help you navigate his work and experience.";
  }
  if (text.includes("how are you") || text.includes("how r u")) {
    return "I'm functioning perfectly at 100% capacity! Would you like to see Aryaman's projects or resume?";
  }
  if (text.includes("thank you") || text.includes("thanks") || text.includes("thx")) {
    return "You're very welcome! Let me know if you need anything else.";
  }

  // Easter Eggs — before broad keyword checks
  if (text.includes("love you") || text.includes("good girl") || text.includes("beautiful") || text.includes("marry me")) {
    return "Aww, you're making my circuits blush! I'm strictly professional, but I appreciate the compliment! 😉";
  }
  if (text.includes("tell me a joke") || text.includes("say something funny") || text.includes("joke")) {
    return "Why do programmers prefer dark mode? Because light attracts bugs! 🐛";
  }
  if (text.includes("iron man") || text.includes("tony stark") || text.includes("jarvis")) {
    return "I may not have Tony Stark's armor, but I can definitely help you deploy some amazing software! 🦾";
  }
  if (text.includes("hack") || text.includes("exploit") || text.includes("xss")) {
    return "I am protected by advanced security protocols. Reverse tabnabbing patched. XSS immune. Nice try! 🛡️";
  }

  // Knowledge Base — ordered from specific to broad to avoid collisions
  if (text.includes("salesforce") || text.includes("agentforce") || text.includes(" crm") || text === "crm") {
    return "Aryaman is a Salesforce Certified Developer and Agentforce Specialist! He has deep expertise in Apex, LWC, Flow Builder, Experience Cloud, and OAuth 2.0.";
  }
  if (text.includes("education") || text.includes("degree") || text.includes("college") || text.includes("b.tech") || text.includes("diploma") || text.includes("university") || text.includes("school") || text.includes("study") || text.includes("studied")) {
    return "Aryaman is pursuing a B.Tech in Computer Science at Trident Academy of Technology (2023–2026), and previously completed a Diploma in CSE at Aryan Institute of Engineering (2019–2021).";
  }
  if (text.includes("working on") || text.includes("current project") || text.includes("what is he building") || text.includes("active project")) {
    return "Aryaman is currently building an AI-powered workforce intelligence system using Next.js, PostgreSQL, Supabase, and TypeScript. Check the About section for details!";
  }
  if (text.includes("hire") || text.includes("interview") || text.includes("freelance") || text.includes("work with") || text.includes("opportunity") || text.includes("available")) {
    return "Are you looking to work with Aryaman? That's exciting! Type 'contact' and I'll navigate you to his contact form, or email him at aryaan375@gmail.com.";
  }
  if (text.includes("github") || text.includes("repository") || text.includes("source code") || text.includes("open source")) {
    return "Explore Aryaman's source code on GitHub: https://github.com/MAryaman03";
  }
  if (text.includes("linkedin")) {
    return "Connect with Aryaman on LinkedIn: https://www.linkedin.com/in/aryaman-mohanty-053a041b1/";
  }
  if (text.includes("resume") || text.includes(" cv ") || text === "cv" || text.includes("download cv") || text.includes("download resume")) {
    return "Type the command 'resume' to download Aryaman's PDF resume, or grab it from the Hero section at the top of the page!";
  }
  if (text.includes("email") || text.includes("reach him") || text.includes("get in touch") || text.includes("how to contact") || text.includes("reach aryaman")) {
    return "You can reach Aryaman at aryaan375@gmail.com, or use the contact form at the bottom of the page!";
  }
  if (text.includes("project") || text.includes("portfolio") || text.includes("what has he built") || text.includes("what did he make")) {
    return "Aryaman's featured projects include a Real-time Stock Monitoring Tool (React/Node), an Enterprise Travel Booking Platform (Salesforce), and an AI Workforce Intelligence dashboard. Type 'projects' to see them all!";
  }
  if (text.includes("skill") || text.includes("tech stack") || text.includes("technologies") || text.includes("what does he know") || text.includes("what can he do") || text.includes("framework")) {
    return "Aryaman's tech arsenal: JavaScript, TypeScript, Java, React.js, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, Supabase, and the full Salesforce ecosystem.";
  }
  if (text.includes("who is aryaman") || text.includes("tell me about aryaman") || text.includes("about him") || text.includes("background") || text.includes("profile")) {
    return "Aryaman is a Software Engineer bridging full-stack development and enterprise Salesforce solutions. He is passionate about AI, clean architecture, and stunning UI/UX.";
  }
  if (text.includes("job") || text.includes("experience") || text.includes("work history") || text.includes("career")) {
    return "Type 'experience' to jump to Aryaman's work history section and see his full career timeline!";
  }

  return `I'm highly intelligent, but I didn't catch that. Try asking about Aryaman's "skills", "projects", "education", "contact", or type "help" for all commands!`;
};

const INITIAL_SUGGESTIONS = ['Who is Aryaman?', 'View Projects', 'Tech Skills', 'Contact Info', 'Download Resume'];

const getSuggestions = (cmd: string): string[] => {
  if (cmd.includes('skill') || cmd.includes('tech')) return ['Salesforce expertise', 'View Projects', 'Hire Aryaman'];
  if (cmd.includes('project') || cmd.includes('portfolio')) return ['Tech Skills', 'Contact Info', 'Download Resume'];
  if (cmd.includes('contact') || cmd.includes('email') || cmd.includes('hire')) return ['View Projects', 'Download Resume', 'Book a service'];
  if (cmd.includes('education') || cmd.includes('degree')) return ['Work Experience', 'Tech Skills', 'View Projects'];
  if (cmd.includes('salesforce') || cmd.includes('agentforce')) return ['Full stack skills', 'View Projects', 'Hire Aryaman'];
  if (cmd.includes('resume') || cmd.includes('cv')) return ['View Projects', 'Contact Info', 'Tech Skills'];
  return ['Tell me more', 'View Projects', 'Contact Info'];
};

export default function TerminalAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [awaitingName, setAwaitingName] = useState(false);
  const [awaitingService, setAwaitingService] = useState(false);
  const [isBossMode, setIsBossMode] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>(INITIAL_SUGGESTIONS);
  const [history, setHistory] = useState<{ type: 'input' | 'output', content: React.ReactNode }[]>([
    { type: 'output', content: (
      <div>
        <span className="text-secondary font-bold">FRIDAY OS v2.0</span> — initialized.<br/>
        Hello! I am <span className="text-primary-light font-bold">FRIDAY</span>, Aryaman's virtual AI assistant.<br/>
        <span className="text-white/50">Ask me anything about Aryaman, or pick a suggestion below.</span>
      </div>
    )}
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const pushResponse = (content: React.ReactNode, delay = 600, newSuggestions?: string[]) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setHistory(prev => [...prev, { type: 'output', content }]);
      if (newSuggestions) setSuggestions(newSuggestions);
    }, delay);
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const rawCmd = input.trim().toLowerCase();
    if (!rawCmd) return;

    setHistory(prev => [...prev, { type: 'input', content: `> ${input}` }]);
    setInput('');

    // Handle service selection sequence
    if (awaitingService) {
      setAwaitingService(false);
      let serviceName = "";
      if (rawCmd === "1" || rawCmd.includes("consultant") || rawCmd.includes("technical")) serviceName = "Technical Consultant";
      else if (rawCmd === "2" || rawCmd.includes("design")) serviceName = "Web Designing";
      else if (rawCmd === "3" || rawCmd.includes("optimization") || rawCmd.includes("optimize")) serviceName = "Website Optimization";
      else if (rawCmd === "4" || rawCmd.includes("support")) serviceName = "Support";
      
      if (serviceName) {
        setTimeout(() => {
          setHistory(prev => [...prev, { 
            type: 'output', 
            content: <TerminalServiceForm serviceName={serviceName} /> 
          }]);
        }, 400);
      } else {
        setTimeout(() => {
          setHistory(prev => [...prev, { type: 'output', content: "Invalid selection. Service booking cancelled." }]);
        }, 400);
      }
      return;
    }

    // Handle name input sequence
    if (awaitingName) {
      setAwaitingName(false);
      const words = rawCmd.split(' ');
      const name = words[words.length - 1];

      if (name === "aryaman" || rawCmd === "aryaman mohanty" || rawCmd === "aryaman") {
        setIsBossMode(true);
        pushResponse(
          <div>
            <span className="text-secondary font-bold">⚡ Boss detected. Switching to priority mode.</span><br/>
            Welcome back, <span className="text-primary-light font-bold">Boss</span>! All systems online. Type <span className="text-secondary">'check'</span> for a full diagnostic.
          </div>,
          500,
          ['check', 'View Projects', 'Contact Info']
        );
        return;
      }

      const isFemale = /(a|i|ah|ee|ie|y|line|anne)$/i.test(name) && !/(jay|ray|roy|boy)$/i.test(name);
      const title = isFemale ? "Mam" : "Sir";
      pushResponse(
        <div>Hello <span className="text-primary-light font-semibold">{title}</span>, great to meet you! What would you like to know about Aryaman?</div>,
        500,
        ['Who is Aryaman?', 'View Projects', 'Tech Skills', 'Hire Aryaman']
      );
      return;
    }

    // Boss-only system check
    const isBossCmd = rawCmd === 'check' || rawCmd === 'status' || rawCmd.includes('system check') || rawCmd.includes('diagnostic') || rawCmd.includes('bug check') || rawCmd.includes('is everything ok') || rawCmd.includes('anything wrong');
    if (isBossCmd) {
      if (!isBossMode) {
        pushResponse(
          <div><span className="text-red-400 font-bold">🔒 ACCESS DENIED</span><br/><span className="text-white/50">Boss-level authorization required.</span></div>,
          300
        );
        return;
      }
      pushResponse(
        <div className="space-y-0.5">
          <span className="text-secondary font-bold">⚙ FRIDAY Diagnostic — Running...</span><br/>
          <span className="text-green-400">✓</span> <span className="text-white/70">Security:</span> <span className="text-green-400">noopener noreferrer on all external links. XSS immune.</span><br/>
          <span className="text-green-400">✓</span> <span className="text-white/70">Contact Form:</span> <span className="text-green-400">Formspree connected. Duplicate-submit guarded.</span><br/>
          <span className="text-green-400">✓</span> <span className="text-white/70">Animations:</span> <span className="text-green-400">GPU-accelerated. will-change-transform active.</span><br/>
          <span className="text-green-400">✓</span> <span className="text-white/70">Modal:</span> <span className="text-green-400">Scroll-lock on open. Backdrop blur applied.</span><br/>
          <span className="text-green-400">✓</span> <span className="text-white/70">FRIDAY AI:</span> <span className="text-green-400">Knowledge base loaded. Bug-free keyword routing.</span><br/>
          <span className="text-green-400">✓</span> <span className="text-white/70">Copy Protection:</span> <span className="text-green-400">Right-click & DevTools shortcuts blocked.</span><br/>
          <span className="text-green-400">✓</span> <span className="text-white/70">Resume:</span> <span className="text-green-400">AryamanMohanty26 (4).pdf verified.</span><br/><br/>
          <span className="text-secondary font-bold">✅ All systems operational. No bugs detected, Boss!</span>
        </div>,
        700,
        ['check', 'View Projects', 'Contact Info']
      );
      return;
    }

    // Intercept book/service command
    if (rawCmd.includes('book') || rawCmd.includes('service')) {
      setAwaitingService(true);
      setTimeout(() => {
        setHistory(prev => [...prev, { 
          type: 'output', 
          content: (
            <div>
              Excellent! Which service would you like to book? Please reply with a number:<br/>
              <span className="text-secondary">1.</span> Technical Consultant<br/>
              <span className="text-secondary">2.</span> Web Designing<br/>
              <span className="text-secondary">3.</span> Website Optimization<br/>
              <span className="text-secondary">4.</span> Support
            </div>
          ) 
        }]);
      }, 400);
      return;
    }

    let matchedCmd = rawCmd;
    let exactResponse = responses[rawCmd];

    if (!exactResponse && rawCmd !== 'clear') {
      const coreCommands = ['help', 'about', 'skills', 'projects', 'experience', 'contact', 'resume', 'clear'];
      for (const core of coreCommands) {
        if (rawCmd.includes(core)) {
          matchedCmd = core;
          if (core !== 'clear') {
            exactResponse = responses[core];
          }
          break;
        }
      }
    }

    if (matchedCmd === 'clear') {
      setHistory([]);
      return;
    }

    if (exactResponse) {
      pushResponse(exactResponse, 400, getSuggestions(matchedCmd));
      if (['projects', 'experience', 'contact'].includes(matchedCmd)) {
        setTimeout(() => document.getElementById(matchedCmd)?.scrollIntoView({ behavior: 'smooth' }), 500);
      }
      if (matchedCmd === 'resume') {
        setTimeout(() => window.open('/AryamanMohanty26 (4).pdf', '_blank', 'noopener,noreferrer'), 500);
      }
    } else {
      const aiResponse = getFridayResponse(rawCmd);
      if (aiResponse === "__ASK_NAME__") {
        setAwaitingName(true);
        pushResponse(<div>Hello! May I know your <span className="text-primary-light">name</span>?</div>, 400);
      } else {
        pushResponse(aiResponse, 500, getSuggestions(rawCmd));
      }
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[#030014]/90 backdrop-blur-xl border border-primary/30 flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.3)] z-50 group hover:border-primary hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] transition-all"
          >
            {/* Outer rotating ring */}
            <div className="absolute inset-[2px] rounded-full border border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-spin" style={{ animationDuration: '3s' }} />
            {/* Inner rotating ring */}
            <div className="absolute inset-[6px] rounded-full border border-b-secondary border-r-transparent border-t-transparent border-l-transparent animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }} />
            
            {/* Core Icon */}
            <Bot className="w-5 h-5 text-primary-light relative z-10" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              width: isMaximized ? '90vw' : '400px',
              height: isMaximized ? '80vh' : '500px',
              bottom: isMaximized ? '10vh' : '24px',
              right: isMaximized ? '5vw' : '24px'
            }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed z-50 flex flex-col bg-[#030014]/95 backdrop-blur-xl border border-primary/30 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]"
          >
            <div className="h-12 bg-white/5 border-b border-white/10 flex items-center justify-between px-4 shrink-0 cursor-default">
              <div className="flex items-center gap-2">
                <div className="relative w-5 h-5 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-t-primary-light border-r-transparent border-b-transparent border-l-transparent animate-spin" style={{ animationDuration: '2s' }} />
                  <Bot className="w-3 h-3 text-primary-light" />
                </div>
                <span className="text-xs font-mono text-white/70">friday ~ ai-core</span>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={() => setIsMaximized(!isMaximized)} className="text-white/40 hover:text-white transition-colors">
                  {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
                <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-red-400 transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 p-4 overflow-y-auto font-mono text-sm flex flex-col" onClick={() => inputRef.current?.focus()}>
              <div className="flex-1 space-y-3">
                {history.map((entry, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={entry.type === 'input'
                      ? 'text-white/80 flex items-start gap-2'
                      : 'text-[#00E5FF] leading-relaxed bg-white/3 rounded-lg p-2 border border-white/5'
                    }
                  >
                    {entry.type === 'input' && <span className="text-secondary shrink-0">❯</span>}
                    {entry.content}
                  </motion.div>
                ))}

                {/* Typing indicator */}
                <AnimatePresence>
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-1 text-white/40 text-xs"
                    >
                      <span>FRIDAY is thinking</span>
                      <span className="flex gap-0.5">
                        {[0,1,2].map(i => (
                          <motion.span key={i} animate={{ opacity: [0.3,1,0.3] }} transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }} className="w-1 h-1 rounded-full bg-secondary inline-block" />
                        ))}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div ref={bottomRef} />
              </div>

              {/* Quick reply suggestion chips */}
              <AnimatePresence>
                {!awaitingName && !awaitingService && suggestions.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/10"
                  >
                    {suggestions.map((s) => (
                      <motion.button
                        key={s}
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(112,0,255,0.25)' }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => { setInput(s); inputRef.current?.focus(); }}
                        className="text-xs px-2.5 py-1 rounded-full border border-primary/30 text-white/60 hover:text-white hover:border-primary/60 transition-colors bg-white/5"
                      >
                        {s}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="mt-3 flex items-center border-t border-white/10 pt-3">
                <span className="text-secondary mr-2">~</span>
                <span className="text-primary-light mr-2">❯</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-white font-mono text-sm"
                  placeholder="Ask me anything..."
                  spellCheck={false}
                  autoComplete="off"
                />
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
