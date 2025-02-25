import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaBriefcase,
  FaGraduationCap,
  FaEnvelope,
  FaCertificate,
} from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", icon: <FaHome />, link: "#home" },
    { name: "About Me", icon: <FaUser />, link: "#about" },
    { name: "Skills", icon: <FaCode />, link: "#skills" },
    { name: "Projects", icon: <FaProjectDiagram />, link: "#projects" },
    { name: "Experience", icon: <FaBriefcase />, link: "#work-experience" },
    { name: "Education", icon: <FaGraduationCap />, link: "#education" },
    { name: "Achievements", icon: <FaCertificate />, link: "#certifications-awards" },
    { name: "Let's Connect", icon: <FaEnvelope />, link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent px-4 py-3 flex justify-between items-center z-50">
      {/* Left Side - Name (Visible Only on Desktop, With Animation) */}
      <h1 className="hidden md:block text-lg md:text-xl font-bold text-white transition duration-300 hover:scale-110 animate-glow">
        Prerna Joshi
      </h1>

      {/* Right Side - Hamburger Menu */}
      <button
        onClick={() => setMenuOpen(true)}
        className="text-2xl text-neon-green focus:outline-none"
      >
        <FaBars />
      </button>

      {/* Sidebar Menu - Full Width on Mobile, 1/4 Width on Desktop */}
      <div
        className={`fixed top-0 right-0 h-full bg-black bg-opacity-90 backdrop-blur-lg text-white flex flex-col items-start pt-16 shadow-lg transition-transform duration-500
        ${menuOpen ? "translate-x-0" : "translate-x-full"}
        w-full md:w-1/4`}
      >
        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-6 text-3xl text-white hover:text-neon-blue transition"
        >
          <FaTimes />
        </button>

        {/* Menu Items with Icons */}
        <ul className="mt-10 space-y-6 text-lg px-10 w-full">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center space-x-4 py-2 px-4 hover:bg-gray-800 w-full transition-all duration-300 rounded-lg"
            >
              <span className="text-neon-blue text-xl">{item.icon}</span>
              <a
                href={item.link}
                className="w-full hover:text-neon-blue transition"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Adding Custom Animation for Name */}
      <style jsx>{`
        @keyframes glow {
          0% {
            text-shadow: 0 0 5px #00f7ff, 0 0 10px #00f7ff, 0 0 15px #00f7ff;
          }
          50% {
            text-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff;
          }
          100% {
            text-shadow: 0 0 5px #00f7ff, 0 0 10px #00f7ff, 0 0 15px #00f7ff;
          }
        }

        .animate-glow {
          animation: glow 2s infinite alternate;
        }
      `}</style>
    </nav>
  );
}
