import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setResumeData, updateResume } from "../redux/resumeSlice";
import { useNavigate, useParams } from "react-router-dom";

const ResumeForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id: resumeId } = useParams();
  const allResumes = useSelector((state) => state.resume.allResumes || []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gitHub: "",
    linkedIn: "",
    phone: "",
    profile: "",
    skills: "",
    strengths: "",
    education: "",
    internships: "",
    projects: "",
    certificates: "",
    languages: "",
  });

  useEffect(() => {
    if (resumeId) {
      const resumeToEdit = allResumes.find((res) => res._id === resumeId);
      if (resumeToEdit) {
        setFormData(resumeToEdit);
      }
    }
  }, [resumeId, allResumes]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (resumeId) {
      dispatch(updateResume({ resumeId, updatedData: formData })).then(
        (action) => {
          if (action.payload) {
            dispatch(setResumeData(action.payload));
            alert("Resume updated successfully!");
            //// console..log("Updated Resume Data:", action.payload);
            navigate("/templates");
          }
        }
      );
    } else {
      dispatch(setResumeData(formData));
      navigate("/templates");
    }
  };

  const inputClass =
    "w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400";

  return (
    <div className="max-w-3xl px-4 py-6 mx-auto bg-white border border-gray-300 rounded-lg shadow-md">
      <h2 className="mb-6 text-2xl font-bold text-center md:text-3xl">
        {resumeId ? "Edit Resume" : "Resume Form"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {[
          {
            name: "name",
            placeholder: "Full Name",
            example: "Madhur Chaturvedi",
            type: "text",
          },
          {
            name: "email",
            placeholder: "Email",
            example: "madhur@gmail.com",
            type: "email",
          },
          {
            name: "gitHub",
            placeholder: "GitHub Profile",
            example: "https://github.com/madhur__2004",
            type: "text",
          },
          {
            name: "linkedIn",
            placeholder: "LinkedIn Profile",
            example: "https://linkedin.com/in/your-profile",
            type: "text",
          },
          {
            name: "phone",
            placeholder: "Phone",
            example: "123-456-7890",
            type: "text",
          },
        ].map(({ name, placeholder, example, type }) => (
          <div key={name} className="w-full">
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              className={inputClass}
              value={formData[name]}
              onChange={handleChange}
              required
            />
            <p className="mt-1 text-xs text-gray-500">Example: {example}</p>
          </div>
        ))}

        <div className="w-full">
          <textarea
            name="profile"
            placeholder="Profile Summary"
            className={inputClass}
            value={formData.profile}
            onChange={handleChange}
          ></textarea>
          <p className="mt-1 text-xs text-gray-500">
            Example: I am Madhur, a B.Tech 2nd-year student specializing in
            Computer Science and passionate about web development.
          </p>
        </div>

        {[
          {
            name: "skills",
            placeholder: "Technical Skills (comma-separated)",
            example: "HTML, CSS, JavaScript, React.js",
          },
          {
            name: "strengths",
            placeholder: "Strengths (comma-separated)",
            example:
              "Quick Learner, Problem-Solving Skills, Team Player, Adaptability",
          },
          {
            name: "education",
            placeholder: "Education (mention degree, college, year)",
            example:
              "B.Tech, IIMT College of Engineering, 2026-2027 | Diploma, ABC Institute, 2023-2024",
          },
          {
            name: "internships",
            placeholder: "Internships (mention company and role)",
            example:
              "Tender Heart NGO, Web Developer, July-2025 to Aug-2025 | ABC Tech, Frontend Intern, July-2024 to Dec-2024",
          },
          {
            name: "projects",
            placeholder: "Projects (describe and add links | )",
            example:
              "Tic-tac-toe:- Created a game in JS, https://game.com | Weather App:- Shows temperature using API, openweather.com",
          },
          {
            name: "certificates",
            placeholder: "Certificates (name, description, link | )",
            example:
              "ReactJS:- Learned from YouTube, https://youtube.com/certificate | Python:- Certified from NPTEL, https://nptel.com/python",
          },
          {
            name: "languages",
            placeholder: "Languages (e.g. Hindi – Native, English – Fluent)",
            example: "Hindi – Native, English – Fluent",
          },
        ].map(({ name, placeholder, example }) => (
          <div key={name} className="w-full">
            <textarea
              name={name}
              placeholder={placeholder}
              className={inputClass}
              value={formData[name]}
              onChange={handleChange}
            ></textarea>
            <p className="mt-1 text-xs text-gray-500">Example: {example}</p>
          </div>
        ))}

        <button
          type="submit"
          className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          {resumeId ? "Update & Save Resume" : "Submit & Preview Resume"}
        </button>
      </form>
    </div>
  );
};

export default ResumeForm;
