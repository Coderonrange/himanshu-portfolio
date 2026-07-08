import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Code, 
  Database, 
  Globe, 
  Layers, 
  Zap, 
  Cloud, 
  Shield, 
  Smartphone, 
  Brush,
  Cpu,
  Rocket
} from 'lucide-react';

const SkillsSection = ({ skills }) => {
  // Icon mapping based on skill category or name
  const getIcon = (skillName) => {
    const name = skillName.toLowerCase();
    if (name.includes('react') || name.includes('vue') || name.includes('angular') || name.includes('frontend')) 
      return <Globe className="w-10 h-10 text-sky-400" />;
    if (name.includes('node') || name.includes('express') || name.includes('backend') || name.includes('api')) 
      return <Code className="w-10 h-10 text-emerald-400" />;
    if (name.includes('sql') || name.includes('mongo') || name.includes('database') || name.includes('postgres')) 
      return <Database className="w-10 h-10 text-amber-400" />;
    if (name.includes('aws') || name.includes('azure') || name.includes('gcp') || name.includes('cloud')) 
      return <Cloud className="w-10 h-10 text-blue-400" />;
    if (name.includes('python') || name.includes('java') || name.includes('c++') || name.includes('programming')) 
      return <Cpu className="w-10 h-10 text-purple-400" />;
    if (name.includes('docker') || name.includes('kubernetes') || name.includes('devops')) 
      return <Rocket className="w-10 h-10 text-red-400" />;
    if (name.includes('security') || name.includes('auth') || name.includes('encryption')) 
      return <Shield className="w-10 h-10 text-green-400" />;
    if (name.includes('mobile') || name.includes('android') || name.includes('ios')) 
      return <Smartphone className="w-10 h-10 text-pink-400" />;
    if (name.includes('design') || name.includes('ui') || name.includes('figma')) 
      return <Brush className="w-10 h-10 text-orange-400" />;
    if (name.includes('fast') || name.includes('optimization') || name.includes('performance')) 
      return <Zap className="w-10 h-10 text-yellow-400" />;
    return <Layers className="w-10 h-10 text-sky-400" />;
  };

  // Get level color
  const getLevelColor = (level) => {
    if (level >= 80) return 'from-emerald-500 to-cyan-500';
    if (level >= 60) return 'from-sky-500 to-blue-500';
    if (level >= 40) return 'from-amber-500 to-orange-500';
    return 'from-purple-500 to-pink-500';
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-gradient-to-b from-slate-900 to-slate-950">
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
            <Lightbulb className="w-8 h-8 text-purple-400" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500">
            Skills & Technologies
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group relative bg-slate-800/50 p-6 rounded-2xl shadow-xl text-center flex flex-col items-center border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Icon container with pulse animation */}
              <div className="relative mb-4">
                <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-3 rounded-full bg-slate-800/80 border border-slate-700/50 group-hover:border-purple-500/50 transition-all duration-300">
                  {getIcon(skill.name)}
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-3 text-slate-200 group-hover:text-white transition-colors">
                {skill.name}
              </h3>

              {/* Progress bar with percentage */}
              <div className="w-full">
                <div className="flex justify-between text-xs text-slate-500 mb-1">
                  <span>Proficiency</span>
                  <span className="font-mono text-slate-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-2.5 overflow-hidden">
                  <motion.div
                    className={`bg-gradient-to-r ${getLevelColor(skill.level)} h-2.5 rounded-full shadow-lg shadow-purple-500/20`}
                    style={{ width: `${skill.level}%` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2 + index * 0.08, ease: "easeOut" }}
                  />
                </div>
              </div>

              {/* Level indicator */}
              <div className="mt-3">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  skill.level >= 80 ? 'bg-emerald-500/20 text-emerald-400' :
                  skill.level >= 60 ? 'bg-sky-500/20 text-sky-400' :
                  skill.level >= 40 ? 'bg-amber-500/20 text-amber-400' :
                  'bg-purple-500/20 text-purple-400'
                }`}>
                  {skill.level >= 80 ? 'Expert' :
                   skill.level >= 60 ? 'Advanced' :
                   skill.level >= 40 ? 'Intermediate' : 'Beginner'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          <div className="text-center p-4 rounded-xl bg-slate-800/30 border border-slate-700/30">
            <div className="text-3xl font-bold text-sky-400">{skills.length}</div>
            <div className="text-sm text-slate-400">Technologies</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-slate-800/30 border border-slate-700/30">
            <div className="text-3xl font-bold text-purple-400">
              {Math.round(skills.reduce((acc, s) => acc + s.level, 0) / skills.length)}%
            </div>
            <div className="text-sm text-slate-400">Avg Proficiency</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-slate-800/30 border border-slate-700/30">
            <div className="text-3xl font-bold text-emerald-400">
              {skills.filter(s => s.level >= 80).length}
            </div>
            <div className="text-sm text-slate-400">Expert Level</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-slate-800/30 border border-slate-700/30">
            <div className="text-3xl font-bold text-amber-400">✨</div>
            <div className="text-sm text-slate-400">Always Learning</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;