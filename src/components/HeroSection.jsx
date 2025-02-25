import React, { useState, useEffect } from "react";
import { FaBriefcase, FaDownload, FaLightbulb, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import ParticlesBackground from "../components/ParticlesBackground";

export default function HeroSection() {
  const roles = [
    "Software Developer",
    "Python Developer",
    "Data Scientist",
    "Machine Learning Engineer",
    "AI/Deep Learning Specialist",
    "Data Engineer",
    "Business Intelligence (BI) Analyst",
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 130;
  const deletingSpeed = 70;

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[roleIndex];
      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    };
    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  const handleAboutClick = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResumeDownload = () => {
    window.open('https://drive.google.com/file/d/1luuiO9Oqso0GoSF5wDIZ-6MGdLPJ-Zc8/view?usp=sharing', '_blank');
  };

  const handleProjectClick = () => {
    const projectSection = document.getElementById("projects");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleExperienceClick = () => {
    const experienceSection = document.getElementById("work-experience");
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
    <ParticlesBackground/>
    <div className="relative w-full h-auto">
    <section id="home" className="h-auto flex flex-col justify-center items-center text-center py-6 px-6 relative">
    
      <p className="text-lg font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 drop-shadow-lg animate-fadeIn leading-snug mt-16">
        Solving Real-World Problems at the Intersection of AI, Cloud, and Data
      </p>
      
      <h1 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-300 neon-text animate-fadeInSlow font-orbitron">
        Hi, I'm <span className="text-white">Prerna Joshi</span>.
      </h1>
      
      <p className="text-lg text-yellow-400 mt-2 uppercase tracking-wider animate-fadeIn font-orbitron">Aspiring</p>
      
      <p className="text-2xl font-semibold text-cyan-400 neon-glow transition-all tracking-wide uppercase">
        {text}|
      </p>
      
      <div className="flex space-x-6 mt-6 ">
        <a href="https://www.linkedin.com/in/joshi-prerna/" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-3xl hover:text-blue-600 transition-all duration-300">
          <FaLinkedin />
        </a>
        <a href="https://github.com/prernajoshipj" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-3xl hover:text-gray-600 transition-all duration-300">
          <FaGithub />
        </a>
        <a href="mailto:prernajoshi100596@gmail.com" className="text-green-400 text-3xl hover:text-green-600 transition-all duration-300">
          <FaEnvelope />
        </a>
      </div>
      
      <button onClick={handleAboutClick} className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-xl hover:shadow-neon transition-all duration-300">
        About Me
      </button>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
        <div onClick = {handleExperienceClick} className="p-6 bg-black rounded-lg shadow-lg border border-purple-500 text-center hover:shadow-purple-500 transition-all duration-300">
          <FaBriefcase className="text-purple-400 text-4xl mx-auto mb-4 animate-pulse" />
          <h3 className="text-xl font-bold text-white">3+ Years of Experience</h3>
          <p className="text-gray-300 text-sm">Systems Engineer | Data Integration Analyst | SAP ABAP Developer</p>
        </div>
        
        <div onClick={handleResumeDownload} className="p-6 bg-black rounded-lg shadow-lg border border-green-500 text-center hover:shadow-green-500 transition-all duration-300">
          <FaDownload className="text-green-400 text-4xl mx-auto mb-4 animate-pulse" />
          <h3 className="text-xl font-bold text-white">Download Resume</h3>
          <p className="text-gray-300 text-sm">{roles[roleIndex]}</p>
        </div>
        
        <div onClick = {handleProjectClick} className="p-6 bg-black rounded-lg shadow-lg border border-yellow-500 text-center hover:shadow-yellow-500 transition-all duration-300">
          <FaLightbulb className="text-yellow-400 text-4xl mx-auto mb-4 animate-pulse" />
          <h3 className="text-xl font-bold text-white">10+ Projects Completed</h3>
          <p className="text-gray-300 text-sm">Read More</p>
        </div>
      </div>
    </section>
    
    </div>
    </>
  );
}
