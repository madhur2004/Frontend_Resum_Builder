import React, { forwardRef } from "react";
import "../../index.css";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { MdMarkEmailUnread } from "react-icons/md";
import {
  parseEducation,
  parseLineData,
  parseInternships,
} from "../../utils/parseUtils";

const TemplateFour = forwardRef(({ data }, ref) => {
  const {
    name,
    title,
    email,
    gitHub,
    linkedIn,
    phone,
    profile,
    education,
    experience,
    skills,
    strengths,
    languages,
    certificates,
  } = data;
  console.log("TemplateFour data:", data);

  return (
    <div
      ref={ref}
      className="w-full max-w-4xl p-4 mx-auto font-sans text-black bg-white sm:p-6"
    >
      {/* Header */}
      <div className="pb-4 mb-6 border-b border-gray-300">
        <h1 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
          {name}
        </h1>
        <p className="text-sm text-gray-600 sm:text-base">{title}</p>
        <p className="flex flex-col gap-1 text-sm text-gray-600 md:flex-row md:items-center md:text-base">
          <span className="flex items-center gap-1 md:text-sm">
            <MdMarkEmailUnread /> {email}
          </span>
          <span className="flex items-center gap-1 md:text-sm ">
            📞 {phone}
          </span>
          <span className="flex items-center gap-1 md:text-sm">
            <FaGithub /> {gitHub}
          </span>
          <span className="flex items-center gap-1 md:text-sm">
            <ImLinkedin /> {linkedIn}
          </span>
        </p>
      </div>

      {/* Profile Summary */}
      <section className="mb-6 avoid-break">
        <h2 className="mb-1 text-lg font-semibold text-gray-800 sm:text-xl">
          🔍 Profile Summary
        </h2>
        <p className="text-sm text-gray-700 sm:text-base">{profile}</p>
      </section>

      {/* Experience */}
      <section className="mb-6 avoid-break">
        <h2 className="mb-2 text-lg font-semibold text-gray-800 sm:text-xl">
          💼 Experience
        </h2>
        <ul className="space-y-3 text-sm text-gray-700 sm:text-base">
          {parseInternships(experience || data.internships).map((job, idx) => (
            <li key={idx}>
              <p className="font-semibold">
                {job.role} @ {job.company}
              </p>
              <p className="italic text-gray-500">{job.duration || ""}</p>
              <p className="text-gray-600">{job.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Education */}
      <section className="mb-6 avoid-break">
        <h2 className="mb-2 text-lg font-semibold text-gray-800 sm:text-xl">
          🎓 Education
        </h2>
        <ul className="space-y-3 text-sm text-gray-700 sm:text-base">
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

      {/* Technical Skills & Strengths in one row */}
      <section className="grid gap-6 mb-6 avoid-break sm:grid-cols-2">
        {/* Skills */}
        <div>
          <h2 className="mb-2 text-lg font-semibold text-gray-800 sm:text-xl">
            🛠️ Technical Skills
          </h2>
          <ul className="text-sm text-gray-700 list-disc list-inside sm:text-base">
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
          <h2 className="mb-2 text-lg font-semibold text-gray-800 sm:text-xl">
            💪 Strengths
          </h2>
          <ul className="text-sm text-gray-700 list-disc list-inside sm:text-base">
            {(Array.isArray(strengths) ? strengths : strengths.split(",")).map(
              (s, idx) => s.trim() && <li key={idx}>{s.trim()}</li>
            )}
          </ul>
        </div>
      </section>

      {/* Certifications */}
      <section className="avoid-break">
        <h2 className="mb-2 text-lg font-semibold text-gray-800 sm:text-xl">
          📜 Certifications
        </h2>
        <ul className="space-y-2 text-sm text-gray-700 sm:text-base">
          {parseLineData(certificates).map((cert, idx) => (
            <li key={idx}>
              <span className="font-medium">{cert.name}</span>:{" "}
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
      {/* Languages */}
      <section className="mb-6 avoid-break">
        <h2 className="mb-2 text-lg font-semibold text-gray-800 sm:text-xl">
          🌐 Languages
        </h2>
        <ul className="text-sm text-gray-700 list-disc list-inside sm:text-base">
          {(Array.isArray(languages) ? languages : languages.split(",")).map(
            (lang, i) => (
              <li key={i}>{lang.trim()}</li>
            )
          )}
        </ul>
      </section>
    </div>
  );
});

export default TemplateFour;
