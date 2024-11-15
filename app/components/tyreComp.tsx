import React from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import {
  FaClock,
  FaUsers,
  FaCogs,
} from "react-icons/fa";

const YourAdvantage: React.FC = () => {
  return (
    <section className="bg-gray-100 py-8 sm:py-10 mt-20 mb-10  md:py-14 rounded-t-[30px] sm:rounded-[50px] md:rounded-[100px] relative"
    style={{
      boxShadow: '0 -10px 15px -3px rgba(0, 0, 0, 0.3), 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 -10px 15px -3px rgba(0, 0, 0, 0.3)',
    }}
    >
      {/* Title */}
      <div className="text-center mb-6 sm:mb-8 md:mb-10 px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
          How your name works
        </h2>
        <p>
          We connect you with the best driving instructors in New South Wales
        </p>
      </div>
      <div className="max-w-6xl mx-auto  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-10 md:gap-12 px-4 mb-8 sm:mb-10 md:mb-14">
        {[
          {
            src: "/wheel.png",
            heading: "Wide Variety of Instructors",
            text: "Choose from a wide variety of instructors in your area.Check rating & reviews fromreal learners.",
            icon: <FaClock />,
          },
          {
            src: "/wheel.png",
            heading: "Wide Variety of Instructors",
            text: "Book your driving lessons, driving testpackages,  driving lessons online with instant confirmation.",
            icon: <FaUsers />,
          },
          {
            src: "/wheel.png",
            heading: "Wide Variety of Instructors",
            text: "Your instructor picks you up from your chosen address and you're on your way.",
            icon: <FaCogs />,
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="text-center flex flex-col justify-center items-center justify-self-center"
          >
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-44 md:h-44 lg:w-72 lg:h-72 flex justify-center items-center">
              <Image
                src={feature.src}
                alt="Tire"
                layout="fill"
                objectFit="contain"
              />
              <div className="absolute top-[20%] sm:top-[25%] inset-x-0 flex items-center justify-center">
                <div className="bg-black rounded-full p-1 sm:p-2 lg:p-3">
                  <span className="text-yellow-500 text-xs sm:text-sm lg:text-base">
                    {feature.icon}
                  </span>
                </div>
              </div>
              {/* <h3 className="text-sm sm:text-md font-semibold mt-4">{feature.heading}</h3> */}
              <div className="absolute bottom-10 sm:bottom-14 md:top-20 md:bottom-14 inset-x-0 flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8">
                <p className="text-center text-black text-xs sm:text-xs md:text-xs lg:text-xs font-medium max-w-[70%]">
                  {feature.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative w-full">
        <Image
          src="/stripe.png"
          alt="Striped Divider"
          width={2048}
          height={30}
          className="w-full absolute -mt-1 sm:-mt-2 md:-mt-4"
        />
      </div>

      {/* Description */}
      <div className="bg-[#F0B000] py-6 sm:py-8 md:py-10 px-4 sm:px-6 lg:px-12 mt-6 sm:mt-8 rounded-b-[30px] sm:rounded-b-[50px] md:rounded-b-[100px]">
        <h2 className="text-xl mt-20 sm:text-2xl text-black md:text-3xl text-center font-semibold px-4">
          Search driving instructors in your suburb
        </h2>
        <p className=" text-black text-center mt-2 mb-6 text-sm sm:text-base px-4">
          Discover local driving instructors; convenient, hassle-free, search in
          your suburb
        </p>

        {/* Search and Filter Options */}
        <div className=" flex flex-col mb-10  md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          {/* Auto Button */}
          <button className="relative w-full sm:w-auto px-16 sm:px-8 py-1 bg-white rounded-full border flex items-center justify-center space-x-2">
            <GiCheckMark className="text-[#039855]" />
            <span className="text-sm sm:text-base text-black">Auto</span>
          </button>

          {/* Manual Button */}
          <button className="w-full sm:w-auto px-16 sm:px-8 py-1 bg-[#1F2A37] rounded-full flex items-center justify-center space-x-2">
            <GiCheckMark className="text-[#039855]" />
            <span className="text-white text-sm sm:text-base">Manual</span>
          </button>

          {/* Search Bar */}
          <div className="flex items-center border rounded-full bg-white px-4 py-1 w-full sm:w-64 md:w-auto">
            <input
              type="text"
              placeholder="Enter your suburb"
              className="outline-none bg-transparent flex-grow text-gray-700 placeholder-gray-500 text-xs sm:text-sm pr-1"
            />
          </div>

          {/* Search Icon */}
          <div>
            <FaSearch className="bg-yellow-500 text-black p-2 w-8 h-8 md:w-10 md:h-10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourAdvantage;
