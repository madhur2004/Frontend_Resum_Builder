// ✅ Corrected & Cleaned Up
import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import html2pdf from "html2pdf.js";

import {
  saveResume,
  fetchSingleResume,
  updateResume,
} from "../redux/resumeSlice";

import TemplateOne from "../components/templates/TemplateOne";
import TemplateTwo from "../components/templates/TemplateTwo";
import TemplateThree from "../components/templates/TemplateThree";
import TemplateFour from "../components/templates/TemplateFour";
import TemplateFive from "../components/templates/TemplateFive";

const DownloadPage = () => {
  const { templateId, resumeId } = useParams();
  const dispatch = useDispatch();
  const printRef = useRef();

  const resumeData = useSelector((state) => {
    if (resumeId) {
      return state.resume.allResumes.find((res) => res._id === resumeId);
    }
    return state.resume.data;
  });

  useEffect(() => {
    if (resumeId && !resumeData) {
      dispatch(fetchSingleResume(resumeId));
    }
  }, [dispatch, resumeId, resumeData]);

  const generatePDF = () => {
    const element = printRef.current;
    if (!element) {
      alert("Resume not ready yet");
      return;
    }

    if (resumeData) {
      const userId = localStorage.getItem("userId");
      console.log("User ID from localStorage:", userId);

      if (!userId) {
        console.warn("⚠️ User ID not found in localStorage.");
        return;
      }

      const opt = {
        margin: 0,
        filename: "resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
        },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        pagebreak: { mode: ["avoid-all", "css", "legacy"] },
      };

      const downloadPDF = () => {
        setTimeout(() => {
          html2pdf().set(opt).from(element).save();
        }, 300);
      };

      if (resumeId) {
        dispatch(updateResume({ resumeId, updatedData: resumeData }))
          .then((action) => {
            if (action.payload) {
              downloadPDF();
            } else {
              console.warn("⚠️ Resume update failed.");
            }
          })
          .catch((err) => {
            console.error("❌ Error updating resume:", err);
          });
      } else {
        const { _id, ...cleanData } = resumeData;

        // ✅ FIX: Pass userId separately instead of inside resumeData
        dispatch(saveResume({ resumeData: cleanData, userId }))
          .then((action) => {
            if (action.payload && action.payload._id) {
              console.log("✅ Resume saved:", action.payload);
              window.history.replaceState(
                null,
                "",
                `/download/template1/${action.payload._id}`
              );
              downloadPDF();
            } else {
              console.warn("⚠️ Resume save failed.");
            }
          })
          .catch((err) => {
            console.error("❌ Error saving resume:", err);
          });
      }
    }
  };

  const renderTemplate = () => {
    switch (templateId) {
      case "template1":
        return <TemplateOne data={resumeData} />;
      case "template2":
        return <TemplateTwo data={resumeData} />;
      case "template3":
        return <TemplateThree data={resumeData} />;
      case "template4":
        return <TemplateFour data={resumeData} />;
      case "template5":
        return <TemplateFive data={resumeData} />;
      default:
        return <p className="text-center text-red-500">Template not found</p>;
    }
  };

  if (!resumeData) {
    return (
      <div className="flex justify-center mt-20">
        <div className="px-6 py-4 bg-white border border-red-300 rounded-lg shadow-md">
          <p className="text-base font-medium text-center text-red-600 sm:text-lg">
            Resume data not found
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="mb-4 text-2xl font-bold text-center no-print">
        Resume Preview
      </h1>

      <div
        ref={printRef}
        className="bg-white p-8 max-w-[794px] mx-auto shadow-lg text-black text-[12pt] leading-6"
      >
        {renderTemplate()}
      </div>

      <div className="mt-6 text-center no-print">
        <button
          onClick={generatePDF}
          className="px-6 py-2 text-white bg-green-600 rounded hover:bg-green-700"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default DownloadPage;
