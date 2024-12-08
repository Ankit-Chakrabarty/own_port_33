"use client";
import Link from 'next/link';
import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-screen flex items-center justify-center" // Center content vertically and horizontally
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="w-full h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">

        {/* IMAGE CONTAINER */}
        <div className="h-1/2 sm:h-2/3 lg:h-1/2 lg:w-1/3 relative mb-8 lg:mb-0 rounded-lg overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-800 to-pink-600 opacity-50 rounded-lg"></div>
          <div className="relative w-full h-full">
            <Image
              src="/ankit.png" // Ensure this image is in the 'public' folder
              alt="Ankit's Photo"
              layout="fill"
              objectFit="cover" // Ensures the image covers the container area
              className="rounded-lg"
            />
          </div>
        </div>

        {/* TEXT CONTAINER */}
        <div className="h-1/2 sm:h-1/3 lg:h-full lg:w-2/3 flex flex-col gap-8 items-center justify-center text-center lg:text-left">

          {/* TITLE */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Hi, I&aposm ANKIT
            <br />
            from Odisha
          </h1>

          {/* DESCRIPTION */}

          {/* BUTTONS */}
          <div className="w-full flex gap-4 justify-center lg:justify-start mt-6">
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black bg-white hover:bg-black hover:text-white text-gray-900 transition duration-300">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
