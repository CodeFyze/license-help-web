import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { reviews } from "../data";

const CustomerReviews: React.FC = () => {
  return (
    <div className="bg-[#F1F1F1] py-12 px-4 md:px-10 lg:px-20 shadow-[#00000080] shadow-lg">
      <div className="relative flex flex-col items-center">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold md:text-center text-left mb-10 md:mb-20">
          Our Customers Reviews
        </h2>
        <img
          src="/sign.png"
          alt="Signature"
          className="absolute  right-[2%] md:right-[25%] xl:right:[25%] lg:right-[25%] md:translate-x-[50%] 2xl:right-[35%] md:-top-5 -top-2 w-12 md:w-16 lg:w-20 h-auto"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 px-4 md:px-10 lg:px-36">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 relative flex flex-col items-start"
          >
            {/* Decorative Arrow Icons */}
            <IoIosArrowForward className="w-4 h-4 md:w-5 md:h-5 text-black absolute -top-2 right-10" />
            <IoIosArrowForward className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 absolute -top-2 right-8" />
            <IoIosArrowForward className="w-4 h-4 md:w-5 md:h-5 text-black absolute -top-2 right-6" />
            <IoIosArrowForward className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 absolute -top-2 right-4" />

            {/* Reviewer Image */}
            <img
              src={review.image}
              alt={`${review.name}'s picture`}
              className="w-12 h-12 md:w-16 md:h-16  rounded-full absolute -top-6 md:-top-8 border-4 border-white"
            />
            <div className="mt-10 md:mt-12 flex flex-col items-start">
              <div className="flex items-center mb-4 gap-1">
                <BiSolidQuoteAltLeft className="text-[#1F2A37CC] w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                <div className="text-left ml-2">
                  <h3 className="font-semibold text-black text-base md:text-lg">{review.name}</h3>
                  <div className="flex">
                    {Array(review.rating)
                      .fill(null)
                      .map((_, i) => (
                        <span key={i} className="text-yellow-500">
                          <FaStar />
                        </span>
                      ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm md:text-base text-left">“{review.review}”</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
