import React from "react";
import Image from "next/image";
import { FaStar, FaCarSide } from "react-icons/fa";

const instructors = [
  {
    name: "Noah",
    rating: 5.0,
    reviews: 77,
    lessons: 826,
    price: "$76 / hr",
    transmission: "Auto",
    profileImage: "/Ellipse7.png",
  },
  {
    name: "Emma",
    rating: 5.0,
    reviews: 77,
    lessons: 826,
    price: "$76 / hr",
    transmission: "Auto",
    profileImage: "/Ellipse7.png",
  },
  {
    name: "Liam",
    rating: 5.0,
    reviews: 77,
    lessons: 826,
    price: "$76 / hr",
    transmission: "Auto",
    profileImage: "/Ellipse7.png",
  },
  {
    name: "Sophia",
    rating: 5.0,
    reviews: 77,
    lessons: 826,
    price: "$76 / hr",
    transmission: "Manual",
    profileImage: "/Ellipse7.png",
  },
];

const DrivingInstructors: React.FC = () => {
  return (
    <section className="relative bg-white mb-10">
      {/* Header with road images */}
      <div className="relative max-w-7xl mx-auto text-center mb-12">
        <div className="flex items-center bg-[#1F2A37] justify-between">
          <Image src="/road.png" alt="Left Road" width={200} height={40} className="hidden sm:block" />
          <div className="flex-1">
            <h2 className="text-xl mx-2 md:mx-0 sm:text-3xl md:text-2xl font-semibold text-white">
              Driving instructors in New South Wales
            </h2>
            <p className="text-white mt-2">
              Your name has connected 20,000 learners to experienced instructors in Sydney.
            </p>
          </div>
          <Image src="/road.png" alt="Right Road" width={200} height={40} className="hidden sm:block" />
        </div>
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap items-center  justify-center space-x-2 mb-8">
        {["Top Rated", "Next Available", "Lowest Price", "Female Instructors", "Auto Profile", "Manual Profile"].map((filter, index) => (
          <button
            key={index}
            className="bg-white text-gray-700 px-4 py-1 rounded-full border border-gray-300 hover:bg-[#F0B000] text-sm font-medium"
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Instructors grid */}
      <div className="grid grid-cols-1 mx-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  md:mx-10 gap-8 max-w-6xl">
        {instructors.map((instructor, index) => (
          <div
            key={index}
            className="bg-[#F1F1F1] shadow-md rounded-lg p-4 flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 mb-4">
              <Image
                src={instructor.profileImage}
                alt={instructor.name}
                width={96}
                height={96}
                className="rounded-full object-cover"
              />
            </div>
            {/* Name and Rating */}
            <div className="flex items-center justify-center mt-2">
              <h3 className="text-lg font-semibold mr-2">{instructor.name}</h3>
              <div className="flex items-center text-yellow-500">
                <FaStar />
                <span className="ml-1 text-gray-800 font-medium">{instructor.rating}</span>
                <span className="text-gray-500 ml-2">({instructor.reviews})</span>
              </div>
            </div>
            <p className="text-gray-600 mt-2">{instructor.lessons} lessons completed</p>
            
            {/* Transmission and Price */}
            <div className="flex items-center justify-center mt-4 space-x-2">
              <div className="flex items-center bg-white px-3 py-1 rounded-full border border-gray-300">
                <FaCarSide className="text-gray-500" />
                <span className="ml-2 text-sm font-medium">{instructor.transmission}</span>
              </div>
              <p className="text-gray-800 font-semibold">{instructor.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DrivingInstructors;
