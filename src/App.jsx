import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

// Import project images (create these images or use placeholders)
import project1 from '../public/project1.png';
import project2 from '../public/project2.png';
import project3 from '../public/project3.png';

const App = () => {
 const projects = [
  {
    id: 1,
    title: "Zepfinn Stock Search Platform",
    description:
      "Built a comprehensive stock search platform using React.js, CSS, and REST APIs. Implemented live stock prices, drag-and-drop functionality, and optimized search performance through caching.",
    tags: ["React.js", "JavaScript", "REST API", "CSS", "Zepfinn"],
    liveLink: "https://zepfinn.cloud",
    sourceLink: "https://github.com/yourusername/zepfinn",
    image:project3 ,
    type: "Full Stack",
    status: "Live",
    stars: "4.8",
    views: "2.3K",
    lines: "5.2K"
  },
  {
    id: 2,
    title: "24x7 Parcels",
    description:
      "Developed a responsive logistics landing page using HTML, CSS, and JavaScript with a mobile-first design for better performance and user engagement.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive"],
    liveLink: "https://24x7parcels.com",
    sourceLink: "https://github.com/yourusername/24x7parcels",
    image: project1,
    type: "Frontend",
    status: "Live",
    stars: "4.5",
    views: "1.8K",
    lines: "2.8K"
  },
  {
    id: 3,
    title: "Yatra Safar",
    description:
      "A comprehensive travel and tourism platform built with modern web technologies. Features include tour packages, hotel booking, and travel guides.",
    tags: ["React.js", "TailwindCSS", "REST API", "Responsive"],
    liveLink: "https://yatrasafar.in/",  // ✅ YOUR LINK
    sourceLink: "https://github.com/yourusername/yatrasafar",  // ✅ UPDATE IF AVAILABLE
    image: project2,  // ✅ ADD IMAGE
    type: "Full Stack",
    status: "Live",
    stars: "4.6",
    views: "1.5K",
    lines: "4.2K"
  },
];

  const skills = [
    { name: 'Html', level: 70 },
    { name: 'Css', level: 80 },
    { name: 'JavaScript', level: 90 },
    { name: 'React.js', level: 85 },
    { name: 'TailwindCSS', level: 95 },
    { name: 'Bootstrap', level: 75 },
    
  ];
  // In your parent component
const skillsData = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 88 },
  { name: "React.js", level: 85 },
  { name: 'TailwindCSS', level: 95 },
  { name: 'Bootstrap', level: 75 },
  { name: "Node.js", level: 75 },
  { name: "MongoDB", level: 70 },
  { name: "MySQl", level: 70 },
  { name: "Python", level: 80 },
  ,
];
const toolsData = [
  { name: "VS Code", experience: "3 years" },
  { name: "Postman", experience: "1 years" },
  { name: "GitHub", experience: "1.6 years" },
  { name: "Git", experience: "1.6 years" },
  { name: "Figma", experience: "2 years" },
   { name: "Wordpress", experience: "1 years" },
];
// Use it like this:
  
  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-slate-100 font-sans antialiased">
      <Toaster />
      <Header navItems={navItems} />
      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <ProjectsSection projects={projects} />
        {/* <SkillsSection skills={skills} /> */}
        <SkillsSection skills={skillsData} tools={toolsData} />

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;