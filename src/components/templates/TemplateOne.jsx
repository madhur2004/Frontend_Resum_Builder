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

const TemplateOne = ({ data }) => {
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
    <div className="max-w-4xl p-6 mx-auto font-sans text-black bg-white shadow-lg">
      {/* Header */}
      <div className="pb-4 mb-4 text-center border-b border-black">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="text-lg">{title}</p>
        <div className="flex flex-wrap justify-center gap-4 mt-2 text-sm text-gray-700">
          <span className="flex items-center gap-1 text-blue-800">
            <MdMarkEmailUnread /> {email}
          </span>
          <span className="flex items-center gap-1 text-blue-800">
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
      <section className="pb-2 mb-4 border-b border-black avoid-break">
        <h2 className="mb-2 text-xl font-semibold border-b">Profile Summary</h2>
        <p className="text-gray-800">{profile}</p>
      </section>

      {/* Skills */}
      <h2 className="mt-4 mb-2 text-xl font-semibold border-b">
        Technical Skills
      </h2>
      <div className="grid grid-cols-3 pb-2 mb-4 text-base break-words border-b border-black gap-x-4 gap-y-2 avoid-break">
        {(Array.isArray(skills) ? skills.join(",") : skills)
          .split(",")
          .map((skill, i) => (
            <div key={i} className="whitespace-normal">
              {skill.trim()}
            </div>
          ))}
      </div>

      {/* Strengths */}
      <h2 className="mt-4 mb-2 text-xl font-semibold border-b">Strengths</h2>
      <div className="grid grid-cols-3 pb-2 mb-4 text-base break-words border-b border-black gap-x-4 gap-y-2 avoid-break">
        {(Array.isArray(strengths) ? strengths.join(",") : strengths)
          .split(",")
          .map((strength, i) => (
            <div key={i} className="whitespace-normal">
              {strength.trim()}
            </div>
          ))}
      </div>

      {/* Education */}
      <div className="avoid-break">
        <section className="pb-2 mb-4 border-b border-black">
          <h2 className="mb-2 text-xl font-semibold border-b">Education</h2>
          <div className="space-y-2">
            {parseEducation(education).map((edu, i) => (
              <div key={i} className="flex justify-between text-sm text-black">
                <span>
                  <span className="font-semibold">{edu.degree}</span> —{" "}
                  {edu.institute}
                </span>
                <span className="text-gray-700">{edu.year}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Internships */}
      <div className="avoid-break">
        <section className="pb-2 mb-4 border-b border-black">
          <h2 className="mb-2 text-xl font-semibold border-b">Internships</h2>
          <div className="space-y-4">
            {parseInternships(internships).map((intern, i) => (
              <div key={i}>
                <p className="font-semibold text-black">
                  {intern.company} — {intern.role}
                </p>
                <p className="text-sm text-gray-700">{intern.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Projects */}
      <div className="avoid-break">
        <section className="pb-2 mb-4 border-b border-black">
          <h2 className="mb-2 text-xl font-semibold border-b">Projects</h2>
          <div className="space-y-3">
            {parseLineData(projects).map((project, i) => (
              <div key={i} className="text-gray-800">
                <p className="flex flex-wrap gap-x-2">
                  <span className="font-semibold whitespace-nowrap">
                    {project.name}:
                  </span>
                  <span className="flex-1 break-words">
                    {project.description}
                    {project.link && (
                      <>
                        {" "}
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          {project.link}
                        </a>
                      </>
                    )}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Certificates */}
      <div className="avoid-break">
        <section className="pb-2 mb-4 border-b border-black">
          <h2 className="mb-2 text-xl font-semibold border-b">Certificates</h2>
          <div className="space-y-3">
            {parseLineData(certificates).map((cert, i) => (
              <div key={i} className="text-gray-800">
                <p className="flex flex-wrap gap-x-2">
                  <span className="font-semibold whitespace-nowrap">
                    {cert.name}:
                  </span>
                  <span className="flex-1 break-words">
                    {cert.description}
                    {cert.link && (
                      <>
                        {" "}
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 "
                        >
                          {cert.link}
                        </a>
                      </>
                    )}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Languages */}
      <section>
        <h2 className="mb-2 text-xl font-semibold border-b">Languages</h2>
        <ul className="list-disc list-inside">
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

export default TemplateOne;
