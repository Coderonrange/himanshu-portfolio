import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Linkedin,
  Github,
  Instagram,
  MessageCircle,
  CheckCircle,
  Sparkles
} from 'lucide-react';

const ContactSection = () => {
  const ContactInfo = ({ icon: Icon, label, value, href }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-sky-500/50 transition-all duration-300 group cursor-pointer"
    >
      <div className="p-3 rounded-lg bg-sky-500/10 text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="text-xs text-slate-400 uppercase tracking-wider">{label}</p>
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-sky-400 transition-colors">
            {value}
          </a>
        ) : (
          <p className="text-slate-200">{value}</p>
        )}
      </div>
    </motion.div>
  );

  const SocialLink = ({ icon: Icon, href, label, color }) => (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 ${color} hover:border-current transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="w-5 h-5" />
    </motion.a>
  );

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-slate-900/50 to-slate-950/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            className="inline-block p-4 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4"
          >
            <Mail className="w-8 h-8 text-purple-400" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500">
            Let's Connect
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-slate-800/50 p-8 md:p-10 rounded-2xl border border-slate-700/50 shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ContactInfo 
                icon={Mail} 
                label="Email" 
                value="himanshupal9788@gmail.com" 
                href="mailto:himanshupal9788@gmail.com"
              />
              <ContactInfo 
                icon={Phone} 
                label="Phone" 
                value="+91 7457057945" 
                href="tel:+917457057945"
              />
              <ContactInfo 
                icon={MapPin} 
                label="Location" 
                value="Haridwar, Uttarakhand" 
              />
              <ContactInfo 
                icon={Clock} 
                label="Working Hours" 
                value="Mon-Fri: 9:00 AM - 6:00 PM" 
              />
            </div>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-700/50"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-slate-800/50 px-4 text-xs text-slate-400">OR</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center">
              <p className="text-sm text-slate-400 mb-4">Connect with me on social media</p>
              <div className="flex flex-wrap justify-center gap-3">
                <SocialLink 
                  icon={Linkedin} 
                  href="https://www.linkedin.com/in/himanshu-pal-ab99342a2/" 
                  label="LinkedIn"
                  color="text-sky-400 hover:text-sky-400 hover:border-sky-400/50"
                />
                <SocialLink 
                  icon={Github} 
                  href="https://github.com/Coderonrange" 
                  label="GitHub"
                  color="text-purple-400 hover:text-purple-400 hover:border-purple-400/50"
                />
                <SocialLink 
                  icon={Instagram} 
                  href="https://www.instagram.com/himanshu_pal_rk?igsh=MThzdm1mdWx6ZXJvbA%3D%3D" 
                  label="Instagram"
                  color="text-pink-500 hover:text-pink-500 hover:border-pink-500/50"
                />
                <SocialLink 
                  icon={MessageCircle} 
                  href="https://wa.me/917457057945" 
                  label="WhatsApp"
                  color="text-emerald-400 hover:text-emerald-400 hover:border-emerald-400/50"
                />
              </div>
            </div>
          </motion.div>

          {/* Availability & Response Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/20 text-center">
              <div className="flex items-center justify-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-400 font-medium">Available for work</span>
              </div>
            </div>
            <div className="bg-sky-500/10 p-4 rounded-xl border border-sky-500/20 text-center">
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span className="text-sky-400 font-medium">Response within 24 hours</span>
              </div>
            </div>
          </motion.div>

          {/* Footer Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center text-xs text-slate-500 mt-6 flex items-center justify-center gap-1"
          >
            <CheckCircle className="w-3 h-3 text-emerald-400" />
            Looking forward to hearing from you!
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;