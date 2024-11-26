"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("Auto");

  return (
    <section className="relative flex w-full bg-[#F1F1F1] overflow-x-hidden rounded-bl-[100px] rounded-br-[100px] md:rounded-bl-[50px] md:rounded-br-[50px] md:h-[500px] flex-col items-center text-center h-[500px] ">
      <motion.div
        className="max-w-3xl px-4 pt-10 md:pt-20 lg:pt-24"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex items-center justify-center md:space-x-2">
          <motion.h1
            className="text-md px-44 md:ml-0 md:text-3xl lg:text-5xl font-extrabold text-gray-800 leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="whitespace-nowrap">
              Choose from <span className="text-yellow-500">1000+</span> Driving Instructors
            </div>
            <div className="whitespace-nowrap">
              start your{" "}
              <span className="inline-flex items-center text-yellow-500">
                <motion.img
                  src="sign-arrow.png"
                  className="mx-1 w-4 h-4 md:w-12 md:h-12 object-contain"
                  alt="Arrow Icon"
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                />{" "}
                journey
              </span>{" "}
              with <span className="text-yellow-500">us today</span>
            </div>
          </motion.h1>
        </div>
        <motion.p
          className="mt-4 text-gray-600 md:px-0 px-44 text-sm md:text-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          With user-friendly tools, clear guidelines, and dedicated support,
          we're here to help you hit the road with confidence. Drive with ease.
        </motion.p>
        <div className="mt-6 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <motion.img
            src="sign-route.png"
            className="ml-3 absolute -left-3 top-72 md:top-52 lg:top-56 lg:left-28 w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36"
            alt="Route Icon"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
          <button
            onClick={() => setSelectedOption("Auto")}
            className={`relative px-20 md:px-8 py-1 rounded-full border flex items-center justify-center space-x-2 ${
              selectedOption === "Auto"
                ? "bg-white text-black"
                : "bg-white text-gray-700"
            }`}
          >
            <GiCheckMark className="text-[#039855]" />
            <span>Auto</span>
            <motion.img
              src="sign-attention.png"
              className="absolute left-56 ml-2 w-16 h-16 md:left-[700px] lg:left-[800px] lg:w-[130px] lg:h-[130px] md:w-[100px] md:h-[100px] md:-top-48"
              alt="Attention Icon"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            />
          </button>
          <button
            onClick={() => setSelectedOption("Manual")}
            className={`px-20 md:px-8 py-1 rounded-full border flex items-center justify-center space-x-2 ${
              selectedOption === "Manual"
                ? "bg-black text-white"
                : "bg-black text-white"
            }`}
          >
            <GiCheckMark className="text-[#039855]" />
            <span>Manual</span>
          </button>
          <motion.div
            className="flex items-center border rounded-full bg-white px-4 md:px-8 py-1 w-52 md:w-auto"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <input
              type="text"
              placeholder="Enter your suburb"
              className="outline-none bg-transparent flex-grow text-gray-700 placeholder-gray-500 pr-1"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <FaSearch className="bg-yellow-500 text-black p-2 w-8 h-8 md:w-10 md:h-10 rounded-full" />
          </motion.div>
        </div>
      </motion.div>
      <div className="w-full h-[100px] md:h-full mt-8 flex justify-center relative">
        <motion.div
          className="absolute inset-0 w-full h-full mx-auto rounded-bl-[150px] rounded-br-[150px] overflow-hidden md:rounded-bl-[50px] md:rounded-br-[50px]"
          style={{
            backgroundImage: "url('/background.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        ></motion.div>
        <div
          className="absolute inset-0 w-full h-full mx-auto bg-[#F1F1F1] rounded-bl-[150px] rounded-br-[150px] md:rounded-bl-[50px] md:rounded-br-[50px]"
          style={{ opacity: 0.5 }}
        ></div>
      </div>
    </section>
  );
};

export default HeroSection;
