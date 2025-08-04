import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
    },
  }),
};

const Services = () => {
  const services = [
    {
      title: "Resume Builder",
      description:
        "Build your professional resume with ease. Choose from a variety of templates, fill in your details, and get your customized resume in minutes.",
    },
    {
      title: "Template Selection",
      description:
        "Choose from a wide range of resume templates that suit your style and profession. Preview them before making your final choice.",
    },
    {
      title: "Download & Share",
      description:
        "Once you have completed your resume, download it in PDF format and share it directly with potential employers.",
    },
  ];

  return (
    <div className="min-h-screen px-4 py-16 bg-gradient-to-br from-blue-100 to-purple-200">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-4xl font-bold text-center text-gray-800"
      >
        Our Services
      </motion.h1>

      <div className="grid max-w-6xl gap-10 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="p-6 transition duration-300 bg-white shadow-lg rounded-xl hover:shadow-2xl"
          >
            <h3 className="mb-4 text-xl font-semibold text-gray-800">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="max-w-2xl mx-auto mt-16 text-center"
      >
        <p className="text-lg text-gray-700">
          Our goal is to make your resume building process as simple and
          efficient as possible. We offer personalized templates, easy-to-use
          tools, and fast download options.
        </p>
      </motion.div>
    </div>
  );
};

export default Services;
