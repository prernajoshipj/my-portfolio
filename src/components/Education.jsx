import React from "react";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  const educationHistory = [
    {
      institution: "University of Texas at Arlington",
      location: "Texas, USA",
      degree: "Master of Science in Computer Science",
      duration: "Aug 2023 - May 2025",
      gpa: "GPA: 3.9/4.0",
      details: "Coursework includes Data Mining, Neural Networks, Machine Learning, Artificial Intelligence, Computer Vision, Data Analysis & Modelling Techniques, Big Data & Cloud Computing. Worked on projects focusing on deep learning applications."
    },
    {
      institution: "Techno Main, Salt Lake",
      location: "Kolkata, IND",
      degree: "Bachelor of Information Technology",
      duration: "Aug 2016 - Jun 2020",
      gpa: "GPA: 8.44/10",
      details: "Built a strong foundation in Software Development, Data Structures, and Algorithms. Developed a healthcare app and a cardiovascular disease predictive model."
    }
  ];

  return (
    <section id="education" className="mt-12 h-auto text-center py-10 shadow-lg bg-glassmorphism">
      <h2 className="text-5xl font-extrabold border-b-4 border-purple-500 pb-4 mb-12 text-white uppercase tracking-wide">
        Education
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {educationHistory.map((edu, index) => (
          <div
            key={index}
            className="p-6 bg-gray-900 rounded-lg shadow-md border-l-4 border-blue-500 flex flex-col items-center text-center"
          >
            <FaGraduationCap className="text-blue-400 text-3xl mb-3" />
            <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
            <p className="text-sm italic text-green-400">{edu.location}</p>
            <h4 className="text-lg font-semibold text-yellow-400 mt-2">{edu.degree}</h4>
            <p className="text-sm text-purple-300 italic">{edu.duration}</p>
            <p className="text-sm text-gray-300 font-bold">{edu.gpa}</p>
            <p className="text-sm text-gray-300 mt-2">{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
