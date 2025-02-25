import React from "react";
import Masonry from "react-masonry-css";
import { FaGithub, FaRocket } from "react-icons/fa";

const projects = [
  {
    title: "A/B Testing for Mobile Game Retention",
    description:
      "Conducted an A/B test on a mobile game to evaluate the impact of a new feature on player retention. Used statistical tests like Chi-Square and t-Tests to determine significance, and built a logistic regression model to predict retention trends.",
    image: require("../assets/images/abtesting.jpg"),
    skills: ["A/B Testing", "Statistical Analysis", "Python", "Experimentation", "Predictive Modeling", "Chi-Square Test", "t-Test", "Logistic Regression"],
    github: "https://github.com/prernajoshipj/AB-Testing",
  },
  {
    title: "Customer Churn Prediction",
    description:
      "A Streamlit-powered ML app that predicts telecom customer churn using XGBoost & Random Forest. Provides churn probability & feature impact analysis using SHAP to help businesses improve customer retention.",
    image: require("../assets/images/customerchurn.png"),
    skills: ["Machine Learning", "Churn Prediction", "Python", "XGBoost", "Random Forest", "Feature Engineering", "Predictive Analytics", "SHAP Analysis", "Streamlit", "Data Visualization", "Matplotlib", "Seaborn"],
    github: "https://github.com/prernajoshipj/customer-churn-prediction",
    tryapp: "https://customer-churn-prediction-ehnsxvpezgusoupzfhappvj.streamlit.app/",

  },
 {
      title: "TF-IDF Search Engine",
      description:
        "Implemented a TF-IDF-based search engine to retrieve relevant documents from a corpus of US Inaugural Addresses, utilizing tokenization, stemming, and cosine similarity for ranking results.",
      image: require("../assets/images/query.png"),
      skills: ["TF-IDF", "Natural Language Processing", "Search Engine", "Python", "Cosine Similarity", "NLTK"],
      github: "https://github.com/prernajoshipj/TFIDF-Search-Engine",
    },
  {
    title: "Computer Vision Techniques",
    description:
      "Implemented various computer vision algorithms such as SIFT, Harris Corner Detection, and Canny Edge Detection to enhance image feature extraction and processing.",
    image: require("../assets/images/computervision.jpg"),
    skills: ["Computer Vision", "SIFT", "Harris Corner Detection", "Canny Edge Detection", "OpenCV"],
    github: "https://github.com/prernajoshipj/Computer-Vision",
},
{
  title: "PDF Summarization Tool",
  description:
    "Building a custom NLP-based model for summarizing PDFs, extracting key insights, and generating word clouds for visualization.",
  image: require("../assets/images/pdfAI.png"),
  skills: ["NLP", "Summarization", "Python", "Machine Learning", "Text Analysis"],
  status: "Work in Progress",
},
{
  title: "Real-Time ETL Pipeline",
  description:
    "Developing a real-time ETL pipeline to extract, transform, and load streaming data using Kafka, Spark, and PostgreSQL for scalable data processing.",
  image: require("../assets/images/etl.jpg"),
  skills: ["ETL", "Real-Time Data Processing", "Kafka", "Spark", "PostgreSQL", "Python"],
  status: "Coming Soon",
},
];


export default function Projects() {
  const breakpointColumns = {
    default: 3, // 3 columns on large screens
    1100: 2,    // 2 columns on medium screens
    700: 1,     // 1 column on small screens
  };

  return (
    <section id="projects" className="relative py-12 px-6 text-white z-10">
    {/* Adjusted Transparent Overlay */}
    <div className="absolute inset-0 pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto">

        <h2 className="text-5xl font-extrabold border-b-4 border-purple-500 pb-4 mb-12 text-white text-center uppercase tracking-wide animate-bounce">
      Projects
      </h2>

        {/* Masonry Grid */}
        <Masonry breakpointCols={breakpointColumns} className="flex space-x-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-blue-400 transform hover:scale-105 transition duration-300"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover rounded-lg mb-4"
              />

              {/* Project Title */}
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <p className="text-gray-300 text-sm mt-4">{project.description}</p>
              <div className="flex space-x-4 mt-4">
              {project.github ? (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-black text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition transform hover:bg-gray-900">
                  <FaGithub className="mr-2 text-xl" />
                  GitHub →
                </a>
              ) : (
                <p className="text-green-400 text-sm font-bold mt-2">{project.status}</p>
              )}
                {project.tryapp && (
                  <a
                    href={project.tryapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-black text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition transform hover:bg-gray-900"
                  >
                    <FaRocket className="mr-2 text-xl" />
                    Try App →
                  </a>
                )}
              </div>
            </div>
          ))}
        </Masonry>

      </div>
    </section>
  );
}
