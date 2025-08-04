import "./App.css"; // Importing your custom CSS file

import Header from "./components/Header"; // Import Header component
import React from "react";
import { Routes, Route } from "react-router-dom"; // Importing Routes and Route for routing
import Login from "./pages/Login"; // Importing Login page
import Signup from "./pages/SignUP"; // Importing Signup page
import Home from "./pages/Home"; // Importing Home page
import Dashboard from "./pages/Dashboard"; // Importing Dashboard page
import TemplateSelector from "./pages/templateSelector"; // Importing TemplateSelector page
import DownloadPage from "./pages/DownloadPage"; // Importing DownloadPage page
import MyResume from "./pages/MyResume"; // Importing MyResume page
import ResumeForm from "./components/ResumeForm"; // Importing ResumeForm component
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs"; // Importing AboutUs page
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home route */}
            <Route path="/login" element={<Login />} /> {/* Login route */}
            <Route path="/signup" element={<Signup />} /> {/* Signup route */}
            <Route path="/myresume" element={<MyResume />} />{" "}
            {/* MyResume route */}
            <Route path="/dashboard" element={<Dashboard />} />{" "}
            {/* Dashboard route */}
            <Route path="/templates" element={<TemplateSelector />} />{" "}
            {/* TemplateSelector route */}
            <Route
              path="/download/:templateId/:resumeId?"
              element={<DownloadPage />}
            />
            {/* DownloadPage route with templateId parameter */}
            <Route path="/edit/:id" element={<ResumeForm />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        {/* Footer (optional) */}
        {/* You can add a footer component here if needed */}
        <Footer />
      </div>
    </>
  );
}

export default App;
