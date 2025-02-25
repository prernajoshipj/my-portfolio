import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import CertificationsAwards from "./components/certifications";
import WorkExperience from "./components/WorkExperience";
import Contact from "./components/Contact";
import ParticlesBackground from "./components/ParticlesBackground";

export default function Portfolio() {
  return (
    <>
      {/* Make sure particles are ABOVE everything but in the background */}
      <ParticlesBackground />

      {/* Main content wrapped separately */}
      <div className="relative z-10 min-h-auto text-white font-sans">
      <ParticlesBackground />
        <Header />
        <HeroSection />
        <AboutMe />
        <Skills />
        <Projects />
        <WorkExperience />
        <Education />
        <CertificationsAwards />
        <Contact />

        <footer className="mt-16 text-center text-sm text-gray-400">
          <p>&copy; 2025 Prerna Joshi. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
