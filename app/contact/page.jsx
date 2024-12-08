"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false); // state for showing modal
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          setShowModal(true); // Show success modal
          form.current.reset();
        },
        () => {
          setError(true);
          setShowModal(true); // Show error modal
        }
      );
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-4xl sm:text-5xl lg:text-6xl font-bold text-white shadow-md">
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 0.1,
            }}
          >
            Say Hello 😊
          </motion.span>
        </div>

        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="w-full max-w-sm mx-auto bg-white rounded-xl text-xl flex flex-col gap-6 justify-center p-6 sm:p-8 lg:p-12 shadow-2xl"
        >
          <label htmlFor="user_name" className="text-lg font-medium text-gray-700">Your Name</label>
          <input
            name="user_name"
            type="text"
            className="bg-transparent border-b-2 border-b-gray-300 outline-none mb-4 py-2 px-4 text-gray-800 placeholder-gray-400 focus:border-purple-500 transition duration-300"
            placeholder="Enter your name"
          />

          <label htmlFor="user_email" className="text-lg font-medium text-gray-700">Your Email</label>
          <input
            name="user_email"
            type="email"
            className="bg-transparent border-b-2 border-b-gray-300 outline-none mb-4 py-2 px-4 text-gray-800 placeholder-gray-400 focus:border-purple-500 transition duration-300"
            placeholder="Enter your email"
          />

          <label htmlFor="user_message" className="text-lg font-medium text-gray-700">Your Message</label>
          <textarea
            name="user_message"
            rows={5}
            className="bg-transparent border-b-2 border-b-gray-300 outline-none mb-4 py-2 px-4 text-gray-800 placeholder-gray-400 resize-none focus:border-purple-500 transition duration-300"
            placeholder="Write your message here"
          />

          <button
            type="submit"
            className="bg-purple-600 text-white rounded-full font-semibold py-3 px-6 mt-4 hover:bg-purple-700 transition duration-300 transform hover:scale-105 self-center"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Modal for Success or Error */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg p-8 w-96 text-center"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
          >
            <h3 className="text-2xl font-semibold mb-4">
              {success ? "Success!" : "Error!"}
            </h3>
            <p className="text-lg">
              {success
                ? "Your message has been sent successfully! 🎉"
                : "Something went wrong! Please try again later. 😞"}
            </p>
            <button
              className="mt-4 bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-700 transition duration-300"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ContactPage;
