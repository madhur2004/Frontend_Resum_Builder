import ResumeForm from "../components/ResumeForm";
import TemplateSelector from "./templateSelector";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
        Build Your Resume
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Card: Resume Form */}
        <div
          className="bg-white rounded-2xl overflow-hidden p-6 max-h-[70vh] overflow-y-auto 
          shadow-[inset_0_0_10px_rgba(0,0,0,0.1),0_8px_20px_rgba(0,0,0,0.15)] 
          transition-transform duration-300 hover:scale-[1.01]
          scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100"
        >
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Fill Your Details
          </h3>
          <ResumeForm />
        </div>

        {/* Right Card: Template Selector */}
        <div
          className="bg-white rounded-2xl overflow-hidden p-6 max-h-[70vh] overflow-y-auto 
          shadow-[inset_0_0_10px_rgba(0,0,0,0.1),0_8px_20px_rgba(0,0,0,0.15)] 
          transition-transform duration-300 hover:scale-[1.01]
          scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-purple-100"
        >
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Choose a Template
          </h3>
          <TemplateSelector />
        </div>
      </div>
    </div>
  );
}
