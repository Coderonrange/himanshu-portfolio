import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Heart, 
  Code, 
  Rocket,
  Instagram,
  Phone,
  MapPin,
  MessageCircle
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const SocialLink = ({ icon: Icon, href, label, color, hoverColor }) => (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-3 rounded-xl bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:border-current transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      whileHover={{ scale: 1.1, color: hoverColor }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon size={22} />
    </motion.a>
  );

  const FooterLink = ({ href, label }) => (
    <motion.a
      href={href}
      className="text-slate-400 hover:text-sky-400 transition-colors text-sm"
      whileHover={{ x: 3 }}
    >
      {label}
    </motion.a>
  );

  return (
    <footer className="py-12 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800/50">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-1"
          >
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-purple-500 mb-3">
              Himanshu Pal
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Frontend Developer crafting modern, responsive, and high-performance web experiences.
            </p>
            <div className="flex items-center gap-2 mt-3 text-xs text-slate-500">
              <Code className="w-4 h-4 text-sky-400" />
              <span>React.js • Tailwind CSS • JavaScript</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-1"
          >
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><FooterLink href="#home" label="Home" /></li>
              <li><FooterLink href="#about" label="About" /></li>
              <li><FooterLink href="#projects" label="Projects" /></li>
              <li><FooterLink href="#skills" label="Skills" /></li>
              <li><FooterLink href="#contact" label="Contact" /></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1"
          >
            <h4 className="text-white font-semibold mb-3">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-slate-400">
                <Mail className="w-4 h-4 text-sky-400" />
                <a href="mailto:himanshupal9788@gmail.com" className="hover:text-sky-400 transition-colors">
                  himanshupal9788@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <Phone className="w-4 h-4 text-purple-400" />
                <a href="tel:+917457057945" className="hover:text-sky-400 transition-colors">
                  +91 7457057945
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Haridwar, Uttarakhand</span>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-1"
          >
            <h4 className="text-white font-semibold mb-3">Follow Me</h4>
            <div className="flex flex-wrap gap-3">
              <SocialLink 
                icon={Github} 
                href="https://github.com/Coderonrange" 
                label="GitHub"
                hoverColor="#a855f7"
              />
              <SocialLink 
                icon={Linkedin} 
                href="https://www.linkedin.com/in/himanshu-pal-ab99342a2/" 
                label="LinkedIn"
                hoverColor="#0A66C2"
              />
              <SocialLink 
                icon={Mail} 
                href="mailto:himanshupal9788@gmail.com" 
                label="Email"
                hoverColor="#EA4335"
              />
              <SocialLink 
                icon={Instagram} 
                href="https://www.instagram.com/himanshu_pal_rk?igsh=MThzdm1mdWx6ZXJvbA%3D%3D" 
                label="Instagram"
                hoverColor="#E4405F"
              />
              <SocialLink 
                icon={MessageCircle} 
                href="https://wa.me/917457057945" 
                label="WhatsApp"
                hoverColor="#25D366"
              />
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-slate-800/50 pt-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-slate-400">
              &copy; {currentYear} <span className="text-white font-semibold">Himanshu Pal</span>. All rights reserved.
            </p>

            {/* Built with love */}
            <div className="flex items-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                Built with
                {/* <Heart className="w-3 h-3 text-rose-500 animate-pulse" /> */}{" "}
                using
              </span>
              <span className="flex items-center gap-1">
                <Code className="w-3 h-3 text-sky-400" />
                React
              </span>
              <span className="flex items-center gap-1">
                <Rocket className="w-3 h-3 text-purple-400" />
                TailwindCSS
              </span>
            </div>

            {/* Back to top */}
            <motion.a
              href="#home"
              className="text-sm text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-1"
              whileHover={{ y: -3 }}
            >
              <Rocket className="w-4 h-4" />
              Back to Top
            </motion.a>
          </div>

          {/* Additional footer text */}
          <p className="text-center text-xs text-slate-600 mt-4">
            Designed & Developed with by Himanshu Pal
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;