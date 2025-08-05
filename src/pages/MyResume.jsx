import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserResumes, deleteResume } from "../redux/resumeSlice";
import { useNavigate } from "react-router-dom";

const MyResume = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((state) => state.user.userId);
  const resumes = useSelector((state) => state.resume.allResumes);
  //// console..log(resumes);
  const loading = useSelector((state) => state.resume.status === "loading");
  console.log("Resumes:", resumes);

  const handleDelete = (resumeId) => {
    if (window.confirm("Are you sure you want to delete this resume?")) {
      dispatch(deleteResume(resumeId));
    }
  };

  const handleEdit = (resumeId) => {
    navigate(`/edit/${resumeId}`);
  };

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserResumes(userId));
      console.log("Fetching resumes for user:", userId);
    }
  }, [dispatch, userId]);

  return (
    <div className="max-w-5xl p-4 mx-auto sm:p-6">
      <h1 className="mb-6 text-2xl font-bold text-center sm:text-3xl">
        My Resumes
      </h1>

      {loading && <p className="text-center text-gray-500">Loading...</p>}

      {!loading && resumes.length === 0 && (
        <p className="text-center text-gray-500">No resumes found.</p>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {!loading &&
          resumes.map((resume) => (
            <div
              key={resume._id}
              className="flex flex-col justify-between p-4 transition bg-white border shadow-md rounded-2xl hover:shadow-lg"
            >
              <div>
                <h2 className="mb-2 text-xl font-semibold text-blue-800">
                  {resume.name}
                </h2>
                <p className="text-sm text-gray-600">
                  <strong>Email:</strong> {resume.email}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>GitHub:</strong> {resume.gitHub}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>LinkedIn:</strong> {resume.linkedIn}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Phone:</strong> {resume.phone}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Profile:</strong> {resume.profile}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Skills:</strong> {resume.skills}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Strengths:</strong> {resume.strengths}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Education:</strong> {resume.education}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Internships:</strong> {resume.internships}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Projects:</strong> {resume.projects}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Certificates:</strong> {resume.certificates}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Languages:</strong> {resume.languages}
                </p>

                <p className="mt-2 text-xs text-gray-400">
                  Created: {new Date(resume.createdAt).toLocaleString()}
                </p>
              </div>

              <div className="flex justify-between gap-2 mt-4">
                <button
                  onClick={() => handleEdit(resume._id)}
                  className="flex-1 px-3 py-1 text-white bg-blue-600 rounded hover:bg-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(resume._id)}
                  className="flex-1 px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyResume;
