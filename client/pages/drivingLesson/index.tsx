"use client";
import { FaSearch } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GiCheckMark } from "react-icons/gi";
import Image from "next/image";

const DrivingLesson = () => {
  return (
    <section className="bg-[#1B2A38] text-white py-8 mb-20 px-4 sm:px-6 md:px-16 rounded-[40px] lg:rounded-[80px] relative max-w-screen-lg mx-auto mt-10">
      {/* Breadcrumb */}
      <div className="text-xs sm:text-sm text-center text-gray-400 mb-4 px-2">
        <span>Home &gt; Driving School, Driving Lessons & Instructors &gt; New South Wales &gt; </span>
        <span className="text-yellow-500 font-semibold">Sydney</span>
      </div>

      {/* Title */}
      <h2 className="text-xl sm:text-2xl md:text-3xl text-center font-semibold px-4">
        Driving lessons in <span className="text-yellow-500">Sydney</span>
      </h2>
      <p className="text-gray-400 text-center mt-2 mb-6 text-sm sm:text-base px-4">
        Find and book certified driving instructors on your name
      </p>

      {/* Search and Filter Options */}
      <div className="mt-6 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
        {/* Auto Button */}
        <button
          className="relative w-full sm:w-auto px-16 sm:px-8 py-3 md:py-1 rounded-full border flex items-center justify-center space-x-2"
        >
          <GiCheckMark className="text-[#039855]" />
          <span className="text-sm sm:text-base">Auto</span>
        </button>
        
        {/* Manual Button */}
        <button
          className="w-full sm:w-auto px-16 sm:px-8 py-3 md:py-1 bg-yellow-500 rounded-full flex items-center justify-center space-x-2"
        >
          <GiCheckMark className="text-[#039855]" />
          <span className="text-black text-sm sm:text-base">Manual</span>
        </button>
        
        {/* Search Bar and Icon */}
        <div className="flex items-center w-full sm:w-64 md:w-auto space-x-2">
          <div className="flex items-center border rounded-full bg-white px-4 py-3 md:py-1 flex-grow">
            <input
              type="text"
              placeholder="Enter your suburb"
              className="outline-none bg-transparent flex-grow text-gray-700 placeholder-gray-500 text-xs sm:text-sm pr-1"
            />
          </div>
          <FaSearch className="bg-yellow-500 text-black p-2 w-8 h-8 md:w-10 md:h-10 rounded-full" />
        </div>
      </div>

      {/* Google Review and Rating */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-6 text-xs sm:text-sm">
        <FcGoogle className="w-6 h-6 sm:w-8 sm:h-8" />
        <p className="text-gray-400 flex items-center gap-1">
          Google Review 
          <span className="bg-white text-black rounded-full px-2 py-0.5 ml-1">4.9</span>
          <span className="text-yellow-400">★★★★★</span>
          <span className="ml-2">8598 reviews</span>
        </p>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 right-5 md:right-10 transform translate-y-1/2 md:translate-y-1/3 translate-x-1/4 w-20 h-20 sm:w-32 sm:h-32 md:w-44 md:h-44">
        <Image
          src="/barieer.png"
          alt="Barricade"
          width={200}
          height={200}
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
};

export default DrivingLesson;
