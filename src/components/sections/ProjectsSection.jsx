import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Briefcase, 
  ExternalLink, 
  Github, 
  Star, 
  Eye, 
  Code2,
  Rocket,
  Globe,
  Smartphone,
  Database,
  Cloud,
  Shield,
  Zap,
  Layers,
  Cpu
} from 'lucide-react';

// SVG Icons component
const Icons = {
  Briefcase: Briefcase,
  ExternalLink: ExternalLink,
  Github: Github,
  Star: Star,
  Eye: Eye,
  Code2: Code2,
  Rocket: Rocket,
  Globe: Globe,
  Smartphone: Smartphone,
  Database: Database,
  Cloud: Cloud,
  Shield: Shield,
  Zap: Zap,
  Layers: Layers,
  Cpu: Cpu
};

const ProjectsSection = ({ projects }) => {
  // Get icon based on project type
  const getProjectIcon = (type) => {
    const typeMap = {
      'Full Stack': <Icons.Layers className="w-4 h-4 mr-1" />,
      'Frontend': <Icons.Globe className="w-4 h-4 mr-1" />,
      'Backend': <Icons.Database className="w-4 h-4 mr-1" />,
      'Mobile': <Icons.Smartphone className="w-4 h-4 mr-1" />,
      'DevOps': <Icons.Cloud className="w-4 h-4 mr-1" />,
      'Security': <Icons.Shield className="w-4 h-4 mr-1" />,
      'Performance': <Icons.Zap className="w-4 h-4 mr-1" />,
      'AI/ML': <Icons.Cpu className="w-4 h-4 mr-1" />,
      'CMS': <Icons.Rocket className="w-4 h-4 mr-1" />,
    };
    return typeMap[type] || <Icons.Rocket className="w-4 h-4 mr-1" />;
  };

  // Get icon color based on project type
  const getIconColor = (type) => {
    const colorMap = {
      'Full Stack': 'text-purple-400',
      'Frontend': 'text-sky-400',
      'Backend': 'text-emerald-400',
      'Mobile': 'text-pink-400',
      'DevOps': 'text-blue-400',
      'Security': 'text-green-400',
      'Performance': 'text-amber-400',
      'AI/ML': 'text-red-400',
      'CMS': 'text-orange-400',
    };
    return colorMap[type] || 'text-slate-400';
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-gradient-to-b from-slate-900/50 to-slate-950/50">
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
            <Icons.Briefcase className="w-8 h-8 text-purple-400" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500">
            My Projects
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Some of the projects I've built to solve real-world problems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative bg-slate-800/50 rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 border border-slate-700/50 hover:border-purple-500/50"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 200 }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Image container with overlay */}
              <div className="relative overflow-hidden">
                <img 
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={project.title}
                  src={project.image || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Project type badge with icon */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1.5 rounded-full bg-purple-500/80 backdrop-blur-sm text-white text-xs font-medium flex items-center ${getIconColor(project.type)}`}>
                    {getProjectIcon(project.type)}
                    {project.type || 'Project'}
                  </span>
                </div>

                {/* Project status badge (optional) */}
                {project.status && (
                  <div className="absolute bottom-4 left-4">
                    <span className={`px-3 py-1 rounded-full backdrop-blur-sm text-xs font-medium flex items-center ${
                      project.status === 'Live' ? 'bg-emerald-500/80 text-emerald-100' :
                      project.status === 'In Development' ? 'bg-amber-500/80 text-amber-100' :
                      'bg-slate-500/80 text-slate-100'
                    }`}>
                      <span className={`w-2 h-2 rounded-full mr-1.5 ${
                        project.status === 'Live' ? 'bg-emerald-300 animate-pulse' :
                        project.status === 'In Development' ? 'bg-amber-300 animate-pulse' :
                        'bg-slate-300'
                      }`} />
                      {project.status}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6 relative">
                <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tags with SVG icons */}
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => {
                    const tagIcon = {
                      'React.js': <Icons.Rocket className="w-3 h-3 mr-1 text-sky-400" />,
                      'JavaScript': <Icons.Cpu className="w-3 h-3 mr-1 text-yellow-400" />,
                      'REST API': <Icons.Globe className="w-3 h-3 mr-1 text-emerald-400" />,
                      'CSS': <Icons.Layers className="w-3 h-3 mr-1 text-purple-400" />,
                      'HTML5': <Icons.Globe className="w-3 h-3 mr-1 text-orange-400" />,
                      'CSS3': <Icons.Layers className="w-3 h-3 mr-1 text-blue-400" />,
                      'Responsive': <Icons.Smartphone className="w-3 h-3 mr-1 text-pink-400" />,
                      'WordPress': <Icons.Rocket className="w-3 h-3 mr-1 text-blue-400" />,
                      'SEO': <Icons.Shield className="w-3 h-3 mr-1 text-amber-400" />,
                      'TailwindCSS': <Icons.Zap className="w-3 h-3 mr-1 text-sky-400" />,
                      'Bootstrap': <Icons.Layers className="w-3 h-3 mr-1 text-purple-400" />,
                      'Zepfinn': <Icons.Rocket className="w-3 h-3 mr-1 text-purple-400" />,
                    };
                    return (
                      <span 
                        key={tag} 
                        className="inline-flex items-center bg-slate-700/50 text-slate-300 text-xs px-3 py-1.5 rounded-full border border-slate-600/50 backdrop-blur-sm"
                      >
                        {tagIcon[tag] || <Icons.Code2 className="w-3 h-3 mr-1 text-slate-400" />}
                        {tag}
                      </span>
                    );
                  })}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild 
                    className="border-sky-500/50 text-sky-400 hover:bg-sky-500 hover:text-white transition-all duration-300 group/btn"
                  >
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <Icons.ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    asChild 
                    className="text-slate-400 hover:text-sky-400 transition-all duration-300 group/btn"
                  >
                    <a href={project.sourceLink} target="_blank" rel="noopener noreferrer">
                      <Icons.Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      Source Code
                    </a>
                  </Button>
                </div>

                {/* Stats footer with SVG icons */}
                <div className="mt-4 pt-4 border-t border-slate-700/50 flex justify-between text-xs text-slate-500">
                  <span className="flex items-center">
                    <Icons.Star className="w-3 h-3 mr-1 text-amber-400" />
                    {project.stars || '4.5'}
                  </span>
                  <span className="flex items-center">
                    <Icons.Eye className="w-3 h-3 mr-1 text-sky-400" />
                    {project.views || '1.2K'}
                  </span>
                  <span className="flex items-center">
                    <Icons.Code2 className="w-3 h-3 mr-1 text-purple-400" />
                    {project.lines || '3.5K'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all projects button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button 
            variant="outline" 
            size="lg" 
            className="border-purple-500/50 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 group/btn"
            onClick={() => window.location.href = '/projects'}
          >
            View All Projects
            <Icons.ExternalLink className="w-4 h-4 ml-2 group-hover/btn:rotate-12 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;