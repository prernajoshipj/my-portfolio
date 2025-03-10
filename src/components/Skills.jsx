import React from "react";
import {
  FaCommentDots, FaDatabase, FaChartBar, FaCloud, FaCode, FaBrain, FaServer, FaCogs, FaLaptopCode
} from "react-icons/fa";

const skills = [
  {
    category: "Programming Languages",
    icon: <FaCode />,
    color: "from-green-400 to-green-600",
    backColor: "bg-gradient-to-br from-green-200 to-green-400",
    textColor: "text-green-900",
    items: ["Python", "ABAP", "SQL", "Scala", "JavaScript"],
    description: "Proficient in Python, SQL, Scala, and ABAP with experience in backend, AI, and SAP development."
  },
  {
    category: "Machine Learning & AI",
    icon: <FaBrain />,
    color: "from-blue-400 to-blue-600",
    backColor: "bg-gradient-to-br from-blue-200 to-blue-400",
    textColor: "text-blue-900",
    items: [
      "TensorFlow", "PyTorch", "Scikit-Learn", "Deep Learning", 
      "Explainable AI (SHAP, LIME)", "Multilayer Neural Networks (MLP)"
    ],
    description: "Hands-on experience in deep learning, NLP, predictive modeling, and explainable AI."
  },
  {
    category: "NLP & LLMs",
    icon: <FaCommentDots />,
    color: "from-teal-400 to-teal-600",
    backColor: "bg-gradient-to-br from-teal-200 to-teal-400",
    textColor: "text-teal-900",
    items: ["TF-IDF", "Cosine Similarity", "Text Summarization", "Transformers (BERT, GPT)"],
    description: "Expertise in NLP techniques, text analytics, and large language models."
  },
  {
    category: "Cloud & DevOps",
    icon: <FaCloud />,
    color: "from-purple-400 to-purple-600",
    backColor: "bg-gradient-to-br from-purple-200 to-purple-400",
    textColor: "text-purple-900",
    items: ["AWS", "Oracle Cloud (OCI)", "CI/CD Pipelines", "Docker", "Kubernetes", "Jenkins", "GitHub Actions"],
    description: "Skilled in cloud computing, DevOps automation, containerization, and CI/CD pipelines."
  },
  {
    category: "Databases & Big Data",
    icon: <FaDatabase />,
    color: "from-yellow-400 to-yellow-600",
    backColor: "bg-gradient-to-br from-yellow-200 to-yellow-400",
    textColor: "text-yellow-900",
    items: [
      "MySQL", "PostgreSQL", "MongoDB", "Spark", "Hadoop", 
      "Data Modeling", "ETL", "Data Warehousing"
    ],
    description: "Experience in SQL/NoSQL databases, big data processing, and data pipeline development."
  },
  {
    category: "SAP & Enterprise Solutions",
    icon: <FaServer />,
    color: "from-orange-400 to-orange-600",
    backColor: "bg-gradient-to-br from-orange-200 to-orange-400",
    textColor: "text-orange-900",
    items: [
      "ABAP Development (SAP ERP)", "Data Dictionary (DDIC)", "IDocs", "OData Services",
      "SAP PI/PO", "SAP SD", "SAP S/4HANA Migration"
    ],
    description: "Expertise in SAP ERP, ABAP development, integration, and migration solutions."
  },
  {
    category: "Data Analysis & Visualization",
    icon: <FaChartBar />,
    color: "from-indigo-400 to-indigo-600",
    backColor: "bg-gradient-to-br from-indigo-200 to-indigo-400",
    textColor: "text-indigo-900",
    items: [
      "Feature Engineering", "A/B Testing",
      "Matplotlib", "Seaborn", "Streamlit", "Power BI", "Tableau"
    ],
    description: "Skilled in exploratory data analysis, hypothesis testing, and data visualization."
  },
  {
    category: "Software Development",
    icon: <FaLaptopCode />,
    color: "from-cyan-400 to-cyan-600",
    backColor: "bg-gradient-to-br from-cyan-200 to-cyan-400",
    textColor: "text-cyan-900",
    items: [
      "Git", "Agile Methodology", "Jira"
    ],
    description: "Familiar with backend development concepts, API design, and microservices architecture, with hands-on learning in progress."
},
{
  category: "Business Process & Integration",
  icon: <FaCogs />,
  color: "from-red-400 to-red-600",
  backColor: "bg-gradient-to-br from-red-200 to-red-400",
  textColor: "text-red-900",
  items: [
    "API Design & Integration", "E-commerce Enhancements", "Master Data Transition",
    "Business Process Optimization", "Integration Issue Resolution",
    "Performance Optimization", "Transaction Efficiency Improvement", "Data Validation & Cost Reduction"
  ],
  description: "Strong background in API integration, business process automation, and system optimization."
},

];


export default function Skills() {
  return (
    <section id="skills" className="relative h-auto flex flex-col justify-center items-center text-center px-8 py-16 min-h-screen">
      
      {/* Background Effect */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black via-gray-900 to-black opacity-50 z-0"></div>

      {/* Heading */}
      <h2 className="text-5xl font-extrabold border-b-4 border-purple-500 pb-4 mb-12 text-white uppercase tracking-wide animate-bounce">
      Skills
      </h2>     

      {/* Skills Grid with Flip Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full mini-h-screen max-w-6xl mx-auto relative z-10">
        {skills.map((skill, index) => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              
              {/* Front Side */}
              <div className={`flip-card-front bg-gradient-to-br ${skill.color} text-white shadow-lg rounded-xl flex flex-col justify-center items-center cursor-pointer`}>
                <span className="text-4xl">{skill.icon}</span>
                <h3 className="text-xl font-bold mt-4">{skill.category}</h3>
                <p className="text-sm mt-2">(Hover to flip)</p>
              </div>

              {/* Back Side */}
              <div className={`flip-card-back ${skill.backColor} ${skill.textColor} shadow-lg rounded-xl flex flex-col justify-center items-center h-auto`}>
                <h3 className="text-lg font-bold">{skill.category}</h3>
                <p className="text-md font-semibold mt-2 text-center">{skill.description}</p>
                <ul className="grid grid-cols-2 gap-2 mt-4 text-center">
                  {skill.items.map((item, i) => (
                    <li key={i} className="bg-opacity-50 bg-white px-3 py-1 rounded-md text-sm font-bold">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Custom CSS for Flip Effect */}
      <style jsx>{`
        .flip-card {
          width: 100%;
          min-height: 260px;
          max-height: auto;
          perspective: 1000px;
          z-index: 10;
        }

        .flip-card-inner {
          width: 100%;
          height: 100%;
          position: auto;
          transform-style: preserve-3d;
          transition: transform 0.6s;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front, .flip-card-back {
          width: 100%;
          height: auto;
          min-height: 260px;
          padding: 20px;
          position: absolute;
          backface-visibility: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
