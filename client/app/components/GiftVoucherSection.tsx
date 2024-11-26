import React from "react";
import Image from "next/image";
import { FaGift } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const GiftVoucherSection: React.FC = () => {
  return (
    <section className="bg-[#F0B000] text-gray-800 mb-10 relative">
      <div className="w-full">
        <Image
          src="/stripe.png"
          alt="Top Border"
          width={2048}
          height={30}
          className="w-full absolute md:-mt-5 block"
        />
      </div>

      <div className="max-w-8xl mx-auto py-10 px-6 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
        <div className="flex justify-center">
          <img
            src="/surprise-012.png"
            alt="Gift Image"
            className="w-48 lg:w-64 object-cover"
          />
        </div>

        <div className="flex flex-col items-center text-center lg:col-span-2 lg:text-left">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl mb-4">
            The gift of lifelong skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {/* Pick a voucher box */}
            <div className="flex items-stretch overflow-hidden shadow-lg m-2">
              <div className="bg-gray-800 px-4 py-6 sm:py-5 lg:py-8 flex items-center justify-center h-full">
                <FaGift className="text-3xl text-white" />
              </div>
              <div className="bg-white text-gray-800 p-3 sm:p-4 md:p-5 lg:p-6 w-full h-full">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                  Send your gift
                </h3>
                <p className="text-xs sm:text-sm md:text-sm lg:text-sm lg:whitespace-nowrap">
                  Enter the recipient’s info and the gift is on the way.
                </p>
              </div>
            </div>

            <div className="flex items-stretch overflow-hidden shadow-lg m-2">
              <div className="bg-gray-800 px-4 py-6 sm:py-5 lg:py-8 flex items-center justify-center h-full">
                <FaGift className="text-3xl text-white" />
              </div>
              <div className="bg-white text-gray-800 p-3 sm:p-4 md:p-5 lg:p-6 w-full h-full">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                  Send your gift
                </h3>
                <p className="text-xs sm:text-sm md:text-sm lg:text-sm lg:whitespace-nowrap">
                  Enter the recipient’s info and the gift is on the way.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-start mt-6">
            <button className="bg-transparent border-2 border-gray-800 text-gray-800 font-semibold py-2 px-4 rounded-md hover:bg-gray-800 hover:text-white transition duration-200">
              <div className="flex items-center">
                Buy a Gift Voucher
                <span className="ml-2 flex items-center">
                  <IoIosArrowForward />
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftVoucherSection;
