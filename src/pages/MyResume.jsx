import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllResumes } from "../redux/resumeSlice";
import { Link } from "react-router-dom";

const MyResume = () => {
  const dispatch = useDispatch();
  const { allResumes } = useSelector((state) => state.resume);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      dispatch(fetchAllResumes(userId));
    }
  }, [dispatch]);

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h2 className="mb-6 text-2xl font-bold text-center">My Resumes</h2>

      {allResumes.length === 0 ? (
        <div className="text-center text-gray-500">No resumes found</div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {allResumes.map((resume) => (
            <div
              key={resume._id}
              className="p-4 transition bg-white rounded-lg shadow-md hover:shadow-lg"
            >
              <h3 className="mb-2 text-lg font-semibold">
                {resume.personalInfo?.name || "Unnamed Resume"}
              </h3>
              <p className="mb-4 text-sm text-gray-600">
                {resume.personalInfo?.email}
              </p>
              <Link
                to={`/download/template1/${resume._id}`}
                className="inline-block px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                View / Download
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyResume;
