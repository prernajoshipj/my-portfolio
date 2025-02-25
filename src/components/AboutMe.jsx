import React from "react";
import prernaPhoto from "../assets/images/prerna-photo.jpg";

export default function AboutMe() {
  return (
    <section id="about" className="relative h-auto flex flex-col justify-center items-center text-center px-8 py-16">
      
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black via-gray-900 to-black opacity-50 z-0"></div>

      {/* About Me Heading */}
      <h2 className="text-5xl font-extrabold border-b-4 border-purple-500 pb-4 mb-12 text-white uppercase tracking-wide animate-pulse">
        About Me
      </h2>       
      <p className="text-3xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent leading-snug animate-pulse">
            Hi, I’m Prerna Joshi, a visionary problem solver passionate about transforming business challenges into tech-driven innovations.
      </p>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">

        {/* Profile Image */}
        <div className="relative w-80 h-80 flex justify-center items-center group mt-[-30px]">

          <div className="absolute w-72 h-72 rounded-xl bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400 opacity-50 blur-[60px] transition-all duration-500 group-hover:blur-[90px]"></div>
          <div className="relative w-72 h-80 rounded-xl bg-gray-800 shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">

            <img 
              src={prernaPhoto}
              alt="Prerna Joshi" 
              className="w-full h-full object-cover rounded-xl opacity-90"
            />
          </div>
        </div>

        {/* About Me Content */}
        <div className="w-full md:w-2/3 text-left mt-8 md:mt-0 px-10">


          <p className="text-lg text-gray-100 mb-4 leading-relaxed">
            🚀 <span className="text-teal-300 font-semibold">Bridging Business & Technology</span>: I bridge the gap between business strategy and technology, designing solutions that optimize workflows, reduce costs, and drive efficiency by transforming business needs into scalable, data-driven tech solutions.
          </p>
          
          <p className="text-gray-300 mb-6 leading-relaxed">
            💼 <span className="text-yellow-300 font-semibold">Industry Experience</span>: At Tata Consultancy Services, I optimized SAP ERP systems, enhanced e-commerce platforms, and prepared applications for S/4HANA migration. This journey led me to pursue a Master’s in Computer Science to deepen my knowledge in AI, data analytics, and scalable tech solutions.
          </p>

          <p className="text-lg text-gray-100 mb-6 leading-relaxed">
            🎯 <span className="text-pink-300 font-semibold">Passionate Innovator</span>: The IT industry is an ever-expanding ecosystem, constantly evolving with new innovations. To stay relevant and thrive, one must continuously upskill and adapt to emerging technologies. I specialize in Python, SQL, Machine Learning, and SAP (ABAP) to build intelligent, scalable, and impact-driven solutions. If you’re looking for someone who not only codes but also understands the “why” behind the process—let’s connect!
          </p>

          {/* Call-To-Actions */}
          <div className="flex space-x-6 mt-8">
            <a href="#projects" className="relative bg-gradient-to-br from-red-500 via-pink-500 to-purple-600 text-white px-6 py-6 rounded-xl font-bold text-lg shadow-lg transform transition duration-500 hover:scale-110 hover:shadow-2xl">
              Explore My Projects
            </a>
            <a href="#skills" className="relative bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 text-white px-6 py-6 rounded-xl font-bold text-lg shadow-lg transform transition duration-500 hover:scale-110 hover:shadow-2xl">
              See My Skills
            </a>
            <a href="https://www.linkedin.com/in/joshi-prerna" target="_blank" rel="noopener noreferrer" className="relative bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 text-white px-6 py-6 rounded-xl font-bold text-lg shadow-lg transform transition duration-500 hover:scale-110 hover:shadow-2xl">
              Connect with Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
