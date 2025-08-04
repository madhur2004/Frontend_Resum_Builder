import React, { useState } from "react";
import TemplateOne from "../components/templates/TemplateOne";
import TemplateTwo from "../components/templates/TemplateTwo";
import TemplateThree from "../components/templates/TemplateThree";
import TemplateFour from "../components/templates/TemplateFour";
import TemplateFive from "../components/templates/TemplateFive";
import { useNavigate } from "react-router-dom";

const TemplateSelector = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const resumeData = {
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    gitHub: "https//:github.com/johndoe",
    linkedIn: "https//:linkedin.com/in/johndoe",
    profile:
      "A passionate full-stack developer with 2+ years of experience in MERN stack, focused on building scalable, responsive applications.",
    skills: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    strengths: [
      "Problem Solving",
      "Team Collaboration",
      "Performance Optimization",
    ],
    education:
      "B.Tech,IIMT College of Engineering,2026-2027,Diploma,ABC Institute,2023-2024,Mtech,IImt College of engineering,2028-2030",
    internships:
      "Tender Heart NGO,Web Developer,Worked on NGO website July-2025 to August-2025 | ABC Tech,Frontend Intern,Built UI in React July-2024 to Dec-2024",
    projects: [
      {
        name: "E-Commerce App",
        description:
          "Developed a fully functional e-commerce web app using React, Redux, and Node.js.",
        link: "https://example.com/ecommerce",
      },
      {
        name: "Portfolio Website",
        description:
          "A personal portfolio site built with React and Tailwind CSS.",
        link: "https://example.com/portfolio",
      },
    ],
    certificates: [
      {
        name: "React Developer Certification",
        description:
          "Certified in React.js and Redux with a project-based assessment.",
        link: "https://cert.example.com/react",
      },
      {
        name: "Backend Bootcamp",
        description:
          "Completed Node.js, Express, and MongoDB training with hands-on API building.",
        link: "https://cert.example.com/backend",
      },
    ],
    languages: ["English – Fluent", "Hindi – Native"],
  };

  const handleDownload = () => {
    navigate(`/download/${selected}`);
  };

  // ✅ Toggle logic: same template click = close
  const toggleTemplate = (template) => {
    setSelected((prev) => (prev === template ? null : template));
  };

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold text-center text-gray-800">
        Choose a Resume Template
      </h1>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        <button
          className={`px-4 py-2 rounded shadow-lg transition duration-200 ${
            selected === "template1"
              ? "bg-blue-700 text-white"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          onClick={() => toggleTemplate("template1")}
        >
          {selected === "template1" ? "Hide Template 1" : "Preview Template 1"}
        </button>

        <button
          className={`px-4 py-2 rounded shadow-lg transition duration-200 ${
            selected === "template2"
              ? "bg-green-700 text-white"
              : "bg-green-500 text-white hover:bg-green-600"
          }`}
          onClick={() => toggleTemplate("template2")}
        >
          {selected === "template2" ? "Hide Template 2" : "Preview Template 2"}
        </button>

        <button
          className={`px-4 py-2 rounded shadow-lg transition duration-200 ${
            selected === "template3"
              ? "bg-blue-700 text-white"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          onClick={() => toggleTemplate("template3")}
        >
          {selected === "template3" ? "Hide Template 3" : "Preview Template 3"}
        </button>

        <button
          className={`px-4 py-2 rounded shadow-lg transition duration-200 ${
            selected === "template4"
              ? "bg-green-700 text-white"
              : "bg-green-500 text-white hover:bg-green-600"
          }`}
          onClick={() => toggleTemplate("template4")}
        >
          {selected === "template4" ? "Hide Template 4" : "Preview Template 4"}
        </button>
        <button
          className={`px-4 py-2 rounded shadow-lg transition duration-200 ${
            selected === "template5"
              ? "bg-blue-700 text-white"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          onClick={() => toggleTemplate("template5")}
        >
          {selected === "template5" ? "Hide Template 5" : "Preview Template 5"}
        </button>
      </div>

      {/* Preview Container */}
      <div className="mt-8 rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.1),inset_0_0_10px_rgba(0,0,0,0.05)] p-4 bg-white transition-all duration-300">
        {selected === "template1" && <TemplateOne data={resumeData} />}
        {selected === "template2" && <TemplateTwo data={resumeData} />}
        {selected === "template3" && <TemplateThree data={resumeData} />}
        {selected === "template4" && <TemplateFour data={resumeData} />}
        {selected === "template5" && <TemplateFive data={resumeData} />}
      </div>

      {selected && (
        <div className="mt-6 text-center">
          <button
            className="px-6 py-2 text-white transition bg-black rounded shadow-md hover:bg-gray-800"
            onClick={handleDownload}
          >
            Download Resume
          </button>
        </div>
      )}
    </div>
  );
};

export default TemplateSelector;
