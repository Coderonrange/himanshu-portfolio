import React from "react";
import { motion } from "framer-motion";
import {
  UserCircle,
  MapPin,
  Briefcase,
  GraduationCap,
  Code,
  Rocket,
  Award,
  Calendar,
  Mail,
  Phone,
  Linkedin,
  Github,
  Instagram,
  Heart,
  Star,
  Users,
  Zap,
  ExternalLink,
  MessageCircle,
  Waves,
  Sparkles,
} from "lucide-react";
import img2 from "../../../public/img2.jpg";

const AboutSection = () => {
  // Animated counter for stats
  const StatCard = ({ icon: Icon, value, label, color, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 group"
    >
      <div
        className={`${color} mb-3 p-3 rounded-xl bg-opacity-10 inline-block group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className={`w-6 h-6 ${color}`} />
      </div>
      <h4 className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">
        {value}
      </h4>
      <p className="text-slate-400 text-sm">{label}</p>
    </motion.div>
  );

  const InfoCard = ({ icon: Icon, label, value, color, href, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-slate-800/50 p-5 rounded-xl border border-slate-700/50 hover:border-sky-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10 group cursor-pointer"
    >
      <div className="flex items-center gap-4">
        <div
          className={`${color} p-2 rounded-lg bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className={`w-5 h-5 ${color}`} />
        </div>
        <div>
          <p className="text-slate-400 text-xs uppercase tracking-wider">
            {label}
          </p>
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:text-sky-400 transition-colors flex items-center gap-1"
            >
              {value}
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ) : (
            <p className="text-white font-semibold">{value}</p>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            className="inline-block p-3 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4"
          >
            <UserCircle className="w-8 h-8 text-purple-400" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500">
            About Me
          </h2>
          <p className="text-slate-400 mt-4 text-lg max-w-2xl mx-auto">
            Get to know more about me and my journey as a developer
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image with enhanced styling - LARGER */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative group">
              {/* Animated gradient border */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 opacity-30 group-hover:opacity-70 blur-2xl transition-opacity duration-700 animate-pulse" />

              {/* Image container with border glow - LARGER */}
              <div className="relative p-1.5 rounded-3xl bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500">
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src={img2}
                    alt="Himanshu Pal"
                    className="w-[350px] md:w-[400px] lg:w-[450px] rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Badge overlay */}
                  <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-slate-900/90 backdrop-blur-sm rounded-xl px-5 py-3 border border-slate-700/50 shadow-xl">
                      <p className="text-white text-sm font-medium flex items-center">
                        <Heart className="w-4 h-4 text-rose-500 mr-2 animate-pulse" />
                        Passionate Developer
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge with SVG */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-4 -right-4 bg-gradient-to-r from-sky-500 to-purple-500 text-white px-4 py-2 rounded-xl shadow-lg text-xs font-semibold flex items-center gap-1.5"
              >
                <Rocket className="w-3.5 h-3.5" />
                1+ Year
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-5 flex items-center gap-3">
              <span>Hi, I'm</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500">
                Himanshu Pal
              </span>
              <motion.span
                animate={{ rotate: [0, 20, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block"
              >
                <Waves className="w-8 h-8 text-sky-400" />
              </motion.span>
            </h3>

            <p className="text-slate-300 leading-8 text-lg mb-4">
              I'm a passionate{" "}
              <span className="text-sky-400 font-semibold">
                Frontend Developer{" "}
              </span>
               with{" "}
              <span className="text-purple-400 font-semibold">
                1+ years of professional experience{" "}
              </span>
              creating modern, responsive, and high-performance web
              applications. I love transforming ideas into interactive digital
              experiences using React.js and modern frontend technologies.
            </p>

            <p className="text-slate-400 leading-8 mb-6">
              Currently working at{" "}
              <span className="text-white font-semibold">
                {" "}Xeco Tect Pvt. Ltd.
              </span>
              , where I build scalable web applications using React.js,
              JavaScript, Tailwind CSS, Bootstrap, HTML5, CSS3, REST APIs, Git,
              and GitHub. I enjoy writing clean, reusable code and continuously
              learning new technologies.
            </p>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <InfoCard
                icon={MapPin}
                label="Location"
                value="Haridwar, Uttarakhand"
                color="text-sky-400"
                delay={0.1}
              />
              <InfoCard
                icon={Briefcase}
                label="Experience"
                value="1+ Years"
                color="text-purple-400"
                delay={0.2}
              />
              <InfoCard
                icon={GraduationCap}
                label="Education"
                value="B.Tech CSE"
                color="text-emerald-400"
                delay={0.3}
              />
              <InfoCard
                icon={Code}
                label="Specialization"
                value="Frontend Developer"
                color="text-amber-400"
                delay={0.4}
              />
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <StatCard
                icon={Rocket}
                value="10+"
                label="Projects Completed"
                color="text-sky-400"
                delay={0.1}
              />
              <StatCard
                icon={Users}
                value="5+"
                label="Happy Clients"
                color="text-purple-400"
                delay={0.2}
              />
              <StatCard
                icon={Award}
                value="3"
                label="Certifications"
                color="text-amber-400"
                delay={0.3}
              />
              <StatCard
                icon={Zap}
                value="100+"
                label="Commits"
                color="text-emerald-400"
                delay={0.4}
              />
            </div>

            {/* Contact & Social Links - Updated with real info */}
            <div className="flex flex-wrap gap-3">
              <motion.a
                href="mailto:himanshupal9788@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-4 h-4" />
                Hire Me
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/himanshu-pal-ab99342a2/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 bg-slate-800/50 text-slate-300 rounded-xl border border-slate-700/50 hover:border-sky-500/50 hover:text-sky-400 transition-all duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="https://github.com/Coderonrange"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 bg-slate-800/50 text-slate-300 rounded-xl border border-slate-700/50 hover:border-purple-500/50 hover:text-purple-400 transition-all duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="https://www.instagram.com/himanshu_pal_rk?igsh=MThzdm1mdWx6ZXJvbA%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 bg-slate-800/50 text-slate-300 rounded-xl border border-slate-700/50 hover:border-pink-500/50 hover:text-pink-400 transition-all duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Instagram className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="https://wa.me/917457057945"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 bg-slate-800/50 text-slate-300 rounded-xl border border-slate-700/50 hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
