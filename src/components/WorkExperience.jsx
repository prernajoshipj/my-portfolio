import React from "react";
import Masonry from "react-masonry-css";
import { FaBriefcase } from "react-icons/fa";
import ParticlesBackground from "../components/ParticlesBackground";

export default function WorkExperience() {
  const experiences = [
    {
      company: "University of Texas at Arlington",
      type: "On-Campus Part-time",
      location: "Arlington, TX",
      roles: [
        {
          title: "Graduate Teaching Assistant",
          duration: "Jan 2025 - Present",
          details:
            "Assisting in teaching Design and Analysis of Algorithms. Helping students with problem-solving techniques and grading assignments.",
            achievements: [
              "Designed and presented Power BI dashboards to analyze runtime complexity, space efficiency, and algorithm performance, resulting in a 35% improvement in student comprehension and a 40% increase in engagement.",
             ]
        },
        {
          title: "Resident Assistant",
          duration: "Feb 2024 - Dec 2024",
          details:
            "Managed student housing, organized events, and provided leadership support for Campus Living Villages.",
        },
      ],
    },
    {
      company: "Tata Consultancy Services",
      type: "Full-time",
      location: "Kolkata, IND",
      roles: [
        {
          title: "Systems Engineer",
          duration: "Aug 2020 - Jun 2023",
          details:
            "At Tata Consultancy Services, I worked with a leading US-based greeting card company, where I played a pivotal role in optimizing business processes, reducing technical debt, and enhancing system efficiency through SAP-driven solutions.",
          achievements: [
            "Reduced technical debt by 12% by decommissioning SAP MDM and migrating its functionality into SAP ECC, integrating legacy applications via OData services to streamline data access.",
            "Enhanced e-commerce operations by optimizing SAP ABAP and SAP PI/PO workflows, leading to a 15% faster order processing time, a 27% increase in transaction efficiency, and a 5.6% boost in revenue.",
            "Future-proofed SAP ECC applications by upgrading them per S/4HANA migration guidelines, ensuring long-term scalability and a seamless transition."
          ]
        },
      ],
    },
  ];

  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 1
  };

  return (
    <>
      <ParticlesBackground />
      <section
        id="work-experience"
        className="mt-12 text-center py-10 shadow-lg rounded-3xl"
      >
        <h2 className="text-5xl font-extrabold border-b-4 border-purple-500 pb-4 mb-12 text-white uppercase tracking-wide">
          Work Experience
        </h2>
        <div className="max-w-6xl  mx-auto px-6">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex -ml-4"
            columnClassName="pl-4"
          >
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 border border-gray-700 backdrop-blur-lg bg-opacity-40 bg-gray-800 relative overflow-hidden"
              >
                <h3 className="text-3xl font-bold text-white flex items-center">
                  <FaBriefcase className="mr-3 text-blue-400" /> {exp.company}
                </h3>
                <p className="text-lg font-semibold text-green-400 italic">{exp.location}, {exp.type}</p>
                <div className="mt-6 space-y-6 border-l-4 border-blue-400 pl-6">
                  {exp.roles.map((role, idx) => (
                    <div key={idx} className="transition transform hover:scale-105">
                      <h4 className="text-2xl font-bold text-yellow-400">{role.title}</h4>
                      <p className="text-md font-semibold text-purple-300 italic">{role.duration}</p>
                      <p className="mt-4 text-green-500 leading-relaxed">{role.details}</p>
                      {role.achievements && (
                        <ul className="mt-4 space-y-2 text-white-300">
                          {role.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-center">
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Masonry>
        </div>
      </section>
    </>
  );
}
