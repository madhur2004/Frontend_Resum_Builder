import React from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-6 py-12 bg-gradient-to-br from-blue-100 to-purple-200">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl p-8 space-y-6 bg-white shadow-2xl rounded-2xl"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold text-center text-blue-800"
        >
          Contact Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center text-gray-700"
        >
          I’m Madhur, a passionate full-stack web developer. Feel free to reach
          out to me directly for collaborations, freelance projects, or any
          tech-related queries.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="space-y-4 text-center"
        >
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Email</h3>
            <a
              href="mailto:madhurchaturvedi04@gmail.com"
              className="text-blue-600 hover:underline"
            >
              madhurchaturvedi04@gmail.com
            </a>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
            <a
              href="tel:+919996805163"
              className="text-blue-600 hover:underline"
            >
              +91 999 680 5163
            </a>
          </div>

          <div className="flex justify-center gap-4 pt-4">
            <a
              href="mailto:madhurchaturvedi04@gmail.com"
              className="px-5 py-2 text-white transition duration-300 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
            >
              Mail Me
            </a>
            <a
              href="tel:+919996805163"
              className="px-5 py-2 text-white transition duration-300 bg-green-600 rounded-lg shadow-md hover:bg-green-700"
            >
              Call Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="pt-6 text-sm text-center text-gray-500 border-t"
        >
          &copy; {new Date().getFullYear()} Madhur | ResumeBuilder. All rights
          reserved.
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
