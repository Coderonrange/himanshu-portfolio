import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Github, 
  Linkedin, 
  Instagram,
  ArrowDown,
  Code,
  Rocket,
  Briefcase,
  Star,
  Sparkles,
  Award,
  Users,
  Zap,
  Download,
  FileText
} from "lucide-react";

// Import your profile image
import img2 from "../../../public/img2.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleDownloadResume = () => {
    // Replace with your actual resume file path
    const resumeUrl = "../../../public/resuma.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Himanshu_Pal_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Professional Floating Particles
  const FloatingParticles = () => {
    const particles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 25 + 15,
      delay: Math.random() * 15,
      color: ['#6366f1', '#8b5cf6', '#06b6d4', '#ec4899', '#10b981'][Math.floor(Math.random() * 5)]
    }));

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
              backgroundColor: p.color,
              boxShadow: `0 0 20px ${p.color}40`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, 30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  };

  // Professional Stats Card Component
  const StatsCard = ({ icon: Icon, value, label, color }) => (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-slate-800/40 backdrop-blur-sm p-4 rounded-xl border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 group"
    >
      <div className={`flex items-center justify-center gap-2 ${color} mb-1`}>
        <Icon className="w-4 h-4" />
        <span className="text-2xl font-bold">{value}</span>
      </div>
      <div className="text-xs text-slate-400">{label}</div>
    </motion.div>
  );

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Professional Background Effects */}
      <div className="absolute inset-0 bg-grid-slate-800/[0.05] bg-[size:50px_50px] pointer-events-none" />
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      {/* Floating Particles */}
      <FloatingParticles />

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Professional Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
            className="relative mb-10 group"
          >
            {/* Advanced gradient ring */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 opacity-30 blur-2xl group-hover:opacity-60 transition-opacity duration-700 animate-pulse" />
            
            {/* Rotating gradient ring */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 opacity-50 animate-spin-slow" />
            
            {/* Inner ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 opacity-75" />

            {/* Image */}
            <div className="relative p-1 rounded-full bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500">
              <img
                src={img2}
                alt="Himanshu Pal"
                className="w-44 h-44 md:w-52 md:h-52 rounded-full object-cover border-4 border-slate-900 shadow-2xl relative z-10 transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Professional status badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-2 -right-2 z-20 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full px-3 py-1.5 border-2 border-slate-900 shadow-lg"
            >
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-300"></span>
                </span>
                <span className="text-[10px] font-medium text-white tracking-wider">AVAILABLE</span>
              </div>
            </motion.div>

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -top-2 -left-2 z-20 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full px-3 py-1.5 border-2 border-slate-900 shadow-lg"
            >
              <span className="text-[10px] font-medium text-white tracking-wider">⚡ 1+ YEAR</span>
            </motion.div>
          </motion.div>

          {/* Professional Title Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 mb-4"
            >
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span className="text-xs font-medium text-sky-400 tracking-wider">OPEN TO WORK</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-3">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400">
                Himanshu Pal
              </span>
            </h1>
            
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-sky-400" />
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-sky-400" />
                <span className="text-lg md:text-xl text-slate-300 font-medium">
                  Frontend Developer
                </span>
                <Rocket className="w-5 h-5 text-purple-400" />
              </div>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-purple-400" />
            </div>
          </motion.div>

          {/* Professional Description */}
          <motion.p
            className="text-base md:text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Crafting exceptional digital experiences with 
            <span className="text-sky-400 font-medium"> React.js</span>,
            <span className="text-purple-400 font-medium"> Frontend Developer</span>, and
            <span className="text-pink-400 font-medium"> modern web technologies</span>.
            Turning complex problems into elegant solutions.
          </motion.p>

          {/* Professional Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-2xl mb-10"
          >
            <StatsCard icon={Briefcase} value="10+" label="Projects" color="text-sky-400" />
            <StatsCard icon={Users} value="5+" label="Clients" color="text-purple-400" />
            <StatsCard icon={Award} value="1+" label="Experience" color="text-emerald-400" />
            <StatsCard icon={Zap} value="100+" label="Commits" color="text-amber-400" />
          </motion.div>

          {/* Professional CTA Buttons - FIXED */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-10 flex-wrap justify-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 hover:from-sky-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-6 rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 group"
              onClick={scrollToContact}
            >
              <Mail className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              Let's Connect
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:border-sky-500 hover:text-sky-400 font-semibold px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105 group"
              onClick={scrollToProjects}
            >
              <Briefcase className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              View Portfolio
            </Button>

            {/* Download Resume Button - FIXED */}
            <Button
              size="lg"
              variant="outline"
              className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 font-semibold px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105 group bg-slate-800/30"
              onClick={handleDownloadResume}
            >
              <Download className="mr-2 w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              Download Resume
            </Button>
          </motion.div>

          {/* Professional Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex gap-3"
          >
            {[
              { icon: Github, href: "https://github.com/Coderonrange", label: "GitHub", color: "hover:text-purple-400" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/himanshu-pal-ab99342a2/", label: "LinkedIn", color: "hover:text-sky-400" },
              { icon: Instagram, href: "https://www.instagram.com/himanshu_pal_rk?igsh=MThzdm1mdWx6ZXJvbA%3D%3D", label: "Instagram", color: "hover:text-pink-400" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`p-3 rounded-xl bg-slate-800/40 text-slate-400 border border-slate-700/30 ${social.color} hover:border-current transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Professional Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex flex-col items-center gap-2 group cursor-pointer"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {/* <span className="text-[10px] font-medium text-slate-500 uppercase tracking-widest group-hover:text-sky-400 transition-colors">
            Scroll Down
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-slate-600 group-hover:border-sky-400 transition-colors flex justify-center pt-2">
            <motion.div
              className="w-1 h-2 rounded-full bg-sky-400"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div> */}
        </motion.a>
      </motion.div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        .bg-grid-slate-800\/\[0\.05\] {
          background-image: linear-gradient(rgba(30, 27, 75, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30, 27, 75, 0.05) 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
};

export default HeroSection;