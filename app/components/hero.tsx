"use client"
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";

const HeroSection: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("Auto");

  return (
    <section className="relative flex bg-[#F1F1F1]  flex-col items-center text-center h-[800px] ">
      <div className="max-w-2xl px-4 pt-10 md:pt-20 lg:pt-24">
        <div className="flex items-center  justify-center md:space-x-2">
          <h1 className="text-md px-44 ml-10 md:ml-0 md:text-5xl font-extrabold text-gray-800 leading-tight">
            <div className="whitespace-nowrap">
              Choose from <span className="text-yellow-500">1000+</span> Driving Instructors
            </div>
            <div className="whitespace-nowrap">
              start your{" "}
              <span className="inline-flex items-center text-yellow-500">
                <img src="sign-arrow.png" className="mx-1 w-4 h-4 md:w-5 md:h-5 object-contain" alt="Arrow Icon" />{" "}
                journey
              </span>{" "}
              with <span className="text-yellow-500">us today</span>
            </div>
          </h1>
        </div>
        <p className="mt-4 text-gray-600 md:px-0 px-44 text-sm md:text-lg">
          With user-friendly tools, clear guidelines, and dedicated support,
          we're here to help you hit the road with confidence. Drive with ease
        </p>
        <div className="mt-6 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <img
            src="sign-route.png"
            className="ml-3 absolute -left-3 top-72 md:top-56 md:left-28 w-20 h-20 md:w-36 md:h-36"
            alt="Route Icon"
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
            <img
              src="sign-attention.png"
              className="absolute left-56 ml-2 w-16 h-16 md:w-[350px] md:h-[130px] md:left-[800px] md:-top-48"
              alt="Attention Icon"
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
          <div className="flex items-center border rounded-full bg-white px-4 md:px-8 py-1 w-52 md:w-auto">
            <input
              type="text"
              placeholder="Enter your suburb"
              className="outline-none bg-transparent flex-grow text-gray-700 placeholder-gray-500 pr-1"
            />
          </div>
          <div>
            <FaSearch className="bg-yellow-500 text-black p-2 w-8 h-8 md:w-10 md:h-10 rounded-full" />
          </div>
        </div>
      </div>
      <div className="w-full h-full mt-8 flex justify-center relative">
        <div
          className="absolute inset-0 w-full h-1/2 mx-auto rounded-bl-[150px] rounded-br-[150px] overflow-hidden md:rounded-bl-[50px] md:rounded-br-[50px]
          "
          style={{
            backgroundImage: "url('/background.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            // boxShadow: '0 -10px 15px -3px rgba(6, 182, 212, 0.5)' ,
          }}
        ></div>
        <div
          className="absolute inset-0 w-full h-1/2 mx-auto bg-[#F1F1F1] rounded-bl-[150px] rounded-br-[150px] md:rounded-bl-[50px] md:rounded-br-[50px]"
          style={{ opacity: 0.5 }}
        ></div>
      </div>
    </section>
  );
};

export default HeroSection;
