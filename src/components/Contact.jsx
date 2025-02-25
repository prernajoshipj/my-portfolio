import React from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="mt-12 text-center  py-16 shadow-2xl animate-fade-in rounded-xl mx-6">
      <h2 className="text-5xl font-extrabold border-b-4 border-purple-500 pb-4 mb-12 text-white uppercase tracking-wide animate-bounce">
        Let's Connect
      </h2>
      
      <p className="text-green-400 text-xl mb-10 px-6 italic">
        I'm always open to discussing new opportunities, collaborations, or just chatting about tech! Feel free to reach out via email or connect with me on social media.
      </p>
      
      {/* Contact Details */}
      <div className="text-gray-300 flex flex-col items-center space-y-6 text-lg">
        <p className="flex items-center space-x-4 bg-gray-800 p-3 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
          <FaMapMarkerAlt className="text-blue-400 text-2xl" /> 
          <span className="text-purple-400 font-medium">Located in TX, USA | Willing to Relocate for Opportunities</span>
        </p>
        <p className="flex items-center space-x-4 bg-gray-800 p-3 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
          <FaEnvelope className="text-green-400 text-2xl" /> 
          <a href="mailto:prernajoshi100596@gmail.com" className="hover:underline hover:text-purple-300 transition duration-300 text-white font-medium text-lg">
            Send me an email
          </a>
        </p>
      </div>

      {/* Social Media Section (Enhanced) */}
      <h3 className="text-white text-2xl font-semibold mt-10 animate-fade-in">Connect with me:</h3>
      <div className="flex justify-center items-center space-x-6 mt-6">
        <hr className="border-t border-white w-24 opacity-50" />
        <a href="https://linkedin.com/in/joshi-prerna" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-blue-400 transition duration-300 transform hover:scale-125 animate-pulse">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/pjjoshi.prerna/?igsh=Z3Yxbnk5cWd2cWl1&utm_source=qr#" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-pink-400 transition duration-300 transform hover:scale-125 animate-pulse">
          <FaInstagram />
        </a>
        <a href="https://github.com/prernajoshipj" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-gray-400 transition duration-300 transform hover:scale-125 animate-pulse">
          <FaGithub />
        </a>
        <hr className="border-t border-white w-24 opacity-50" />
      </div>
      <p className="text-purple-300 text-sm mt-4 italic animate-fade-in">Feel free to drop a message or follow me for updates!</p>
    </section>
  );
}
