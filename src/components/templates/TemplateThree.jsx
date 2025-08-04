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

const TemplateThree = forwardRef(({ data }, ref) => {
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
    <div
      ref={ref}
      className="flex max-w-4xl mx-auto font-sans text-gray-800 bg-white shadow-lg"
    >
      {/* Sidebar */}
      <div className="w-1/3 p-5 space-y-6 text-white bg-blue-900 avoid-break">
        {/* Basic Info */}
        <div className="w-full max-w-full">
          <h1 className="text-2xl font-bold leading-tight break-words">
            {name}
          </h1>

          <p className="flex flex-wrap items-center gap-1 mt-2 text-sm text-white">
            <MdMarkEmailUnread />
            <span className="break-all">{email}</span>
          </p>

          <p className="flex flex-wrap items-center gap-1 mt-1 text-sm text-white">
            <FaGithub />
            <span className="break-all">{gitHub}</span>
          </p>

          <p className="flex flex-wrap items-center gap-1 mt-1 text-sm text-white">
            <ImLinkedin />
            <span className="break-all">{linkedIn}</span>
          </p>

          <p className="mt-1 text-sm text-white">📞 {phone}</p>

          <p className="mt-1 text-sm italic text-white break-words">{title}</p>
        </div>

        {/* Skills */}
        <div>
          <h2 className="pb-1 text-lg font-semibold border-b border-blue-300">
            🛠️ Skills
          </h2>
          <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
            {(Array.isArray(skills) ? skills.join(",") : skills)
              .split(",")
              .map(
                (skill, i) => skill?.trim() && <li key={i}>{skill.trim()}</li>
              )}
          </ul>
        </div>

        {/* Strengths */}
        <div>
          <h2 className="pb-1 text-lg font-semibold border-b border-blue-300">
            💪 Strengths
          </h2>
          <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
            {(Array.isArray(strengths) ? strengths.join(",") : strengths)
              .split(",")
              .map(
                (strength, i) =>
                  strength?.trim() && <li key={i}>{strength.trim()}</li>
              )}
          </ul>
        </div>

        {/* Languages */}
        <div>
          <h2 className="pb-1 text-lg font-semibold border-b border-blue-300">
            🌐 Languages
          </h2>
          <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
            {(Array.isArray(languages) ? languages : languages.split(",")).map(
              (lang, i) => lang?.trim() && <li key={i}>{lang.trim()}</li>
            )}
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-2/3 p-6 space-y-6 avoid-break">
        {/* Profile Summary */}
        <section>
          <h2 className="pb-1 text-lg font-semibold text-blue-800 border-b">
            🧾 Profile Summary
          </h2>
          <p className="mt-2 text-sm">{profile}</p>
        </section>

        {/* Education */}
        <section>
          <h2 className="pb-1 text-lg font-semibold text-blue-800 border-b">
            🎓 Education
          </h2>
          {parseEducation(education).map((edu, i) => (
            <div key={i} className="mb-3">
              <p className="font-semibold">{edu.degree}</p>
              <p className="text-sm">
                {edu.institute} | {edu.year}
              </p>
            </div>
          ))}
        </section>

        {/* Internships */}
        <section>
          <h2 className="pb-1 text-lg font-semibold text-blue-800 border-b">
            💼 Experience
          </h2>
          {parseInternships(internships).map((intern, i) => (
            <div key={i} className="mb-3">
              <p className="font-semibold">
                {intern.company} — {intern.role}
              </p>
              <p className="text-sm text-gray-600">{intern.description}</p>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section>
          <h2 className="pb-1 text-lg font-semibold text-blue-800 border-b">
            📂 Projects
          </h2>
          {parseLineData(projects).map((project, i) => (
            <div key={i} className="mb-3">
              <p className="font-semibold">{project.name}</p>
              <p className="text-sm text-gray-600">
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
        <section>
          <h2 className="pb-1 text-lg font-semibold text-blue-800 border-b">
            📜 Certificates
          </h2>
          {parseLineData(certificates).map((cert, i) => (
            <div key={i} className="mb-3">
              <p className="font-semibold">{cert.name}</p>
              <p className="text-sm text-gray-600">
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
      </div>
    </div>
  );
});

export default TemplateThree;
