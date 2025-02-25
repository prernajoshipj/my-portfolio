import React from "react";
import Masonry from "react-masonry-css";
import { FaTrophy } from "react-icons/fa";
import OciGenAi from "../assets/images/ocigenai.png";
import GoogleDA from "../assets/images/googleda.png";
import INAE from "../assets/images/inae.png";

export default function CertificationsAwards() {
  const certificationsAwards = [
    {
      title: "Oracle OCI GenAI Professional",
      year: "2024",
      type: "Certification",
      image: OciGenAi,
      details: "Certified in Oracle Cloud Infrastructure (OCI) specializing in Generative AI."
    },
    {
      title: "Google Data Analytics Certificate",
      year: "2024",
      type: "Certification",
      image: GoogleDA,
      details: "Completed Google’s Data Analytics program, covering SQL, visualization, and data-driven decision-making."
    },
    {
      title: "INAE 3rd Winner - Health Care App",
      year: "2018",
      type: "Award",
      image: INAE,
      details: "Secured 3rd place in the Indian National Academy of Engineering competition for developing a healthcare app."
    }
  ];

  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <section id="certifications-awards" className="mt-12 text-center py-10 shadow-lg animate-fade-in">
      {/* Section Title */}
      <h2 className="text-5xl font-extrabold border-b-4 border-purple-500 pb-4 mb-12 text-white text-center uppercase tracking-wide">
        ACHIEVEMENTS
      </h2>

      {/* Achievement Cards in Masonry Layout */}
      <Masonry breakpointCols={breakpointColumns} className="flex space-x-6">
        {certificationsAwards.map((item, index) => (
          <div 
            key={index} 
            className="p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 border border-gray-700 backdrop-blur-lg bg-opacity-40 bg-gray-800 relative overflow-hidden"
          >
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-30 rounded-xl"></div>

            {/* Certificate Image with Fallback */}
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-44 object-cover rounded-lg mb-4 border border-gray-600"
              onError={(e) => (e.target.src = "./assets/images/placeholder.jpg")}
            />

            {/* Title with Trophy Icon for Awards */}
            <h3 className="text-lg font-semibold text-white flex items-center justify-center relative z-10">
              {item.type === "Award" && <FaTrophy className="mr-2 text-yellow-400" />}
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm font-light text-gray-300 mt-2 italic relative z-10">{item.details}</p>
          </div>
        ))}
      </Masonry>

      {/* Redirect to LinkedIn for More Achievements */}
      <button
        onClick={() => window.open("https://www.linkedin.com/in/joshi-prerna", "_blank")}
        className="mt-6 px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition duration-300 shadow-lg hover:scale-105"
      >
        View More on LinkedIn
      </button>
    </section>
  );
}
