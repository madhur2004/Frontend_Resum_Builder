import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="px-6 mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-800">
            About Us
          </h1>
          <p className="text-lg text-gray-600">
            We are here to make the resume building process fast, easy, and
            professional.
          </p>
        </motion.div>

        {/* About Us Section */}
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-2xl font-semibold text-blue-700">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Our goal is to help individuals create professional, job-winning
              resumes. With our intuitive and easy-to-use platform, you can
              build a resume in no time! Whether you're a recent graduate or a
              professional looking to level up your career, ResumeBuilder helps
              you showcase your skills, experience, and achievements.
            </p>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-2xl font-semibold text-purple-700">
              About Me
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Hi, I’m <span className="font-bold text-purple-800">Madhur</span>,
              the creator behind ResumeBuilder. With a passion for technology
              and design, I developed this platform to help job seekers present
              their qualifications in the best possible way. This platform is
              the result of years of coding, learning, and dedication.
            </p>
          </motion.div>
        </div>

        {/* My Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <img
            src="/madhur.jpg"
            alt="Madhur"
            className="w-48 h-48 mx-auto mb-4 transition-transform duration-300 rounded-full shadow-lg hover:scale-105"
          />
          <h3 className="text-xl font-semibold text-gray-800">Madhur</h3>
          <p className="text-sm text-gray-500">Creator & Developer</p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
