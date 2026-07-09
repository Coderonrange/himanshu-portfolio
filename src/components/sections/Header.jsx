import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code, Home, User, Briefcase, Lightbulb, Mail, ExternalLink } from 'lucide-react';

const Header = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      let current = 'home';
      sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(id);
    setIsOpen(false);
  };

  const getNavIcon = (item) => {
    const icons = {
      'Home': <Home className="w-4 h-4" />,
      'About': <User className="w-4 h-4" />,
      'Projects': <Briefcase className="w-4 h-4" />,
      'Skills': <Lightbulb className="w-4 h-4" />,
      'Contact': <Mail className="w-4 h-4" />
    };
    return icons[item] || <ExternalLink className="w-4 h-4" />;
  };

  const menuVariants = {
    closed: { 
      opacity: 0, 
      y: -20,
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    },
    open: { 
      opacity: 1, 
      y: 0,
      transition: { staggerChildren: 0.07, delayChildren: 0.1 }
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-transparent backdrop-blur-xl shadow-2xl border-b border-slate-800/20' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
          className="flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Code className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-sky-400" />
          <span className="hidden sm:inline">Himanshu</span>
          <span className="text-white hidden sm:inline">.</span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.toLowerCase();
            return (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.toLowerCase()); }}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  isActive 
                    ? 'text-white bg-gradient-to-r from-sky-500/20 to-purple-500/20' 
                    : 'text-slate-400 hover:text-sky-400 hover:bg-slate-800/30'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {getNavIcon(item)}
                {item}
                
                {/* ✅ FIXED: Full width indicator centered */}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 w-full h-0.5 bg-gradient-to-r from-sky-400 to-purple-500 rounded-full"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.a>
            );
          })}
          
          {/* Hire Me Button */}
          <motion.a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            className="ml-4 px-4 py-2 bg-gradient-to-r from-sky-500 to-purple-600 text-white rounded-xl text-sm font-medium shadow-lg shadow-purple-500/25 hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <motion.a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            className="px-3 py-1.5 text-xs bg-gradient-to-r from-sky-500 to-purple-600 text-white rounded-lg font-medium shadow-lg shadow-purple-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.a>
          
          <button 
            onClick={toggleMenu} 
            className={`p-2 rounded-xl transition-all duration-300 focus:outline-none ${
              isOpen 
                ? 'bg-sky-500/20 text-sky-400' 
                : 'text-slate-300 hover:text-sky-400 hover:bg-slate-800/30'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden absolute top-full left-0 right-0 bg-slate-900/80 backdrop-blur-xl shadow-2xl border-b border-slate-800/20 py-6 max-h-[calc(100vh-70px)] overflow-y-auto"
          >
            <ul className="flex flex-col items-center gap-2 px-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.toLowerCase();
                return (
                  <motion.li 
                    key={item} 
                    variants={itemVariants}
                    className="w-full"
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={(e) => { e.preventDefault(); scrollToSection(item.toLowerCase()); }}
                      className={`flex items-center justify-center gap-3 w-full py-3 px-6 rounded-xl text-base font-medium transition-all duration-300 ${
                        isActive 
                          ? 'text-white bg-gradient-to-r from-sky-500/20 to-purple-500/20 border border-sky-500/20' 
                          : 'text-slate-400 hover:text-sky-400 hover:bg-slate-800/30'
                      }`}
                    >
                      {getNavIcon(item)}
                      {item}
                      {isActive && (
                        <motion.div
                          layoutId="mobileActiveIndicator"
                          className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-sky-400 to-purple-500"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </a>
                  </motion.li>
                );
              })}
              
              {/* Mobile Social Links */}
              <motion.li 
                variants={itemVariants}
                className="w-full mt-4 pt-4 border-t border-slate-800/30"
              >
                <div className="flex justify-center gap-3">
                  <motion.a
                    href="https://github.com/Coderonrange"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-800/30 text-slate-400 hover:text-purple-400 hover:bg-slate-700/30 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/himanshu-pal-ab99342a2/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-800/30 text-slate-400 hover:text-sky-400 hover:bg-slate-700/30 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/himanshu_pal_rk?igsh=MThzdm1mdWx6ZXJvbA%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-800/30 text-slate-400 hover:text-pink-400 hover:bg-slate-700/30 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </motion.a>
                </div>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;