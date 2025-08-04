import React, { forwardRef } from "react";
import "../../index.css";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { MdMarkEmailUnread } from "react-icons/md";
import {
  parseEducation,
  parseInternships,
  parseLineData,
} from "../../utils/parseUtils";

const TemplateFive = forwardRef(({ data }, ref) => {
  const {
    name,
    email,
    gitHub,
    linkedIn,
    phone,
    skills,
    strengths,
    education,
    internships,
    profile,
    certificates,
    languages,
  } = data;

  return (
    <div
      ref={ref}
      className="flex flex-col w-full max-w-4xl p-6 mx-auto space-y-6 text-black bg-white rounded-lg shadow-md sm:flex-row sm:space-y-0 sm:space-x-6"
    >
      {/* Sidebar */}
      <div className="space-y-6 sm:w-1/3">
        <div>
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="flex items-center gap-1 mt-1 text-sm text-gray-700">
            <MdMarkEmailUnread />
            {email}
          </p>
          <p className="flex items-center gap-1 mt-1 text-sm text-gray-700">
            <FaGithub />
            {gitHub}
          </p>
          <p className="flex items-center gap-1 mt-1 text-sm text-gray-700">
            <ImLinkedin />
            {linkedIn}
          </p>
          <p className="text-sm text-gray-700">📞 {phone}</p>
        </div>

        {/* Skills */}
        <div>
          <h2 className="pb-1 mb-2 text-lg font-semibold border-b">
            🛠️ Skills
          </h2>
          <ul className="text-sm text-gray-800 list-disc list-inside">
            {(Array.isArray(skills) ? skills.join(",") : skills)
              .split(",")
              .map(
                (skill, idx) =>
                  skill.trim() && <li key={idx}>{skill.trim()}</li>
              )}
          </ul>
        </div>

        {/* Strengths */}
        <div>
          <h2 className="pb-1 mb-2 text-lg font-semibold border-b">
            💪 Strengths
          </h2>
          <ul className="text-sm text-gray-800 list-disc list-inside">
            {(Array.isArray(strengths) ? strengths : strengths.split(",")).map(
              (s, idx) => s.trim() && <li key={idx}>{s.trim()}</li>
            )}
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-6 sm:w-2/3">
        {/* Profile Summary */}
        <section>
          <h2 className="pb-1 mb-2 text-lg font-semibold border-b">
            🧾 Profile Summary
          </h2>
          <p className="text-sm text-gray-700">{profile}</p>
        </section>

        {/* Education */}
        <section>
          <h2 className="pb-1 mb-2 text-lg font-semibold border-b">
            🎓 Education
          </h2>
          <ul className="space-y-3 text-sm text-gray-800">
            {parseEducation(education).map((edu, idx) => (
              <li key={idx}>
                <p className="font-semibold">{edu.degree}</p>
                <p>
                  {edu.institute} — {edu.year}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Experience */}
        <section>
          <h2 className="pb-1 mb-2 text-lg font-semibold border-b">
            💼 Internships
          </h2>
          <ul className="space-y-3 text-sm text-gray-800">
            {parseInternships(internships).map((exp, idx) => (
              <li key={idx}>
                <p className="font-semibold">
                  {exp.role} @ {exp.company}
                </p>
                <p className="text-gray-600">{exp.description}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Languages */}
        <section>
          <h2 className="pb-1 mb-2 text-lg font-semibold border-b">
            🌐 Languages
          </h2>
          <ul className="text-sm text-gray-800 list-disc list-inside">
            {(Array.isArray(languages) ? languages : languages.split(",")).map(
              (lang, idx) => lang.trim() && <li key={idx}>{lang.trim()}</li>
            )}
          </ul>
        </section>

        {/* Certificates */}
        <section>
          <h2 className="pb-1 mb-2 text-lg font-semibold border-b">
            📜 Certificates
          </h2>
          <ul className="space-y-2 text-sm text-gray-800">
            {parseLineData(certificates).map((cert, idx) => (
              <li key={idx}>
                <span className="font-semibold">{cert.name}</span>:{" "}
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
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
});

export default TemplateFive;
