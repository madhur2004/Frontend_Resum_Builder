import React from "react";
import "../../index.css";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { MdMarkEmailUnread } from "react-icons/md";
import {
  parseLineData,
  parseInternships,
  parseEducation,
} from "../../utils/parseUtils";

const TemplateTwo = ({ data }) => {
  const {
    name,
    title,
    email,
    gitHub,
    linkedIn,
    phone,
    profile,
    skills,
    strengths,
    education,
    internships,
    projects,
    certificates,
    languages,
  } = data;

  return (
    <div className="max-w-4xl p-6 mx-auto font-sans text-gray-900 bg-white border border-gray-300 rounded-md shadow-md">
      {/* Header */}
      <div className="pb-4 mb-4 text-center border-b-2 border-blue-400">
        <h1 className="text-4xl font-extrabold tracking-wide text-blue-800">
          {name}
        </h1>
        <p className="text-lg italic text-blue-600">{title}</p>
        <div className="flex flex-wrap justify-center gap-4 mt-2 text-sm text-gray-700">
          <span className="flex items-center gap-1 text-blue-800">
            <MdMarkEmailUnread /> {email}
          </span>
          <span className="flex items-center gap-1 text-blue-800">
            {" "}
            <FaGithub />
            {gitHub}
          </span>
          <span className="flex items-center gap-1 text-blue-800">
            <ImLinkedin />
            {linkedIn}
          </span>
          <span>📞 {phone}</span>
        </div>
      </div>

      {/* Profile Summary */}
      <section className="mb-5 avoid-break">
        <h2 className="pl-2 mb-2 text-xl font-bold text-blue-700 border-l-4 border-blue-400">
          🧾 Profile Summary
        </h2>
        <p className="text-sm text-gray-800 sm:text-base">{profile}</p>
      </section>

      {/* Skills & Strengths */}
      <div className="grid grid-cols-1 gap-6 mb-5 sm:grid-cols-2 avoid-break">
        <div>
          <h2 className="pl-2 mb-2 text-lg font-semibold text-blue-700 border-l-4 border-blue-400">
            💡 Technical Skills
          </h2>
          <ul className="text-sm list-disc list-inside sm:text-base">
            {(Array.isArray(skills) ? skills.join(",") : skills)
              .split(",")
              .map((skill, i) => (
                <li key={i}>{skill.trim()}</li>
              ))}
          </ul>
        </div>
        <div>
          <h2 className="pl-2 mb-2 text-lg font-semibold text-blue-700 border-l-4 border-blue-400">
            🚀 Strengths
          </h2>
          <ul className="text-sm list-disc list-inside sm:text-base">
            {(Array.isArray(strengths) ? strengths : strengths.split(",")).map(
              (s, i) => (
                <li key={i}>{s.trim()}</li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* Education */}
      <section className="mb-5 avoid-break">
        <h2 className="mb-2 text-lg font-semibold text-blue-700 border-b">
          🎓 Education
        </h2>
        {parseEducation(education).map((edu, i) => (
          <div key={i} className="mb-2">
            <p className="text-base font-semibold">
              {edu.degree} | {edu.institute}
            </p>
            <p className="text-sm text-gray-700">{edu.year}</p>
          </div>
        ))}
      </section>

      {/* Internships */}
      <section className="mb-5 avoid-break">
        <h2 className="mb-2 text-lg font-semibold text-blue-700 border-b">
          💼 Internships
        </h2>
        {parseInternships(internships).map((intern, i) => (
          <div key={i} className="mb-2">
            <p className="font-semibold">
              {intern.company} — {intern.role}
            </p>
            <p className="text-sm text-gray-700">{intern.description}</p>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className="mb-5 avoid-break">
        <h2 className="mb-2 text-lg font-semibold text-blue-700 border-b">
          📂 Projects
        </h2>
        {parseLineData(projects).map((project, i) => (
          <div key={i} className="mb-2">
            <p className="font-semibold">{project.name}</p>
            <p className="text-sm text-gray-700">
              {project.description}{" "}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  {project.link}
                </a>
              )}
            </p>
          </div>
        ))}
      </section>

      {/* Certificates */}
      <section className="mb-5 avoid-break">
        <h2 className="mb-2 text-lg font-semibold text-blue-700 border-b">
          📜 Certificates
        </h2>
        {parseLineData(certificates).map((cert, i) => (
          <div key={i} className="mb-2">
            <p className="font-semibold">{cert.name}</p>
            <p className="text-sm text-gray-700">
              {cert.description}{" "}
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  {cert.link}
                </a>
              )}
            </p>
          </div>
        ))}
      </section>

      {/* Languages */}
      <section className="mb-2 avoid-break">
        <h2 className="mb-2 text-lg font-semibold text-blue-700 border-b">
          🌐 Languages
        </h2>
        <ul className="text-sm list-disc list-inside sm:text-base">
          {(Array.isArray(languages) ? languages : languages.split(",")).map(
            (lang, i) => (
              <li key={i}>{lang.trim()}</li>
            )
          )}
        </ul>
      </section>
    </div>
  );
};

export default TemplateTwo;
