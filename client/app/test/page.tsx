import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from 'react-icons/io';
import DrivingTestOptions from "../components/DrivingTestOptions";

export default function Test() {
  return (
    <div>
    <section
      className="relative text-white py-12 bg-cover bg-center"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="mt-10 md:mt-20 rounded-3xl md:rounded-[100px] flex flex-col md:flex-row items-center bg-[#F0B000] p-6 sm:p-8 md:p-16 lg:p-24 space-y-10 md:space-y-0 md:h-[500px]">
          
          {/* Left Section - Image with Price */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <div className="relative rounded-lg overflow-hidden md:pl-0 lg:pl-10 shadow-lg max-w-md md:max-w-lg lg:max-w-xl">
              <Image 
                src="/test-driver.png" 
                alt="Driving test" 
                width={600} // Adjusted width
                height={600} // Adjusted height
                className="rounded-lg object-cover lg:w-full lg:h-[300px] xl:w-full xl:h-[380px] md:w-full md:h-[280px]"
              />
            </div>
          </div>

          {/* Right Section - Content */}
          <div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-6 lg:px-10">
            <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-4xl 2xl:text-5xl font-bold mb-4">Driving Test Package</h2>
            <p className="text-gray-300 mb-6 text-sm sm:text-base md:text-md lg:text-lg leading-relaxed md:pr-10">
              Pick-up 1hr prior to test start time, 45 min pre-test warm-up, use of
              instructor’s vehicle to sit the test, and drop-off after receiving the test result.
            </p>
           
          </div>

          {/* Decorative Images */}
          <div className="absolute top-4 right-4 md:top-24 md:right-20 sm:top-5 lg:top-10 lg:right-20 sm:right-20 2xl:top-10 2xl:right-32 xl:top-10 w-12 h-12 md:w-20 md:h-20 lg:w-44 lg:h-44">
            <Image
              src="/stop-sign.png"
              alt="Stop Sign"
              fill // Use fill for responsive positioning with Tailwind
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-4 right-4 md:bottom-1 md:right-20 sm:right-12 lg:top-[500px] w-16 h-16 md:w-32 md:h-32 lg:w-56 lg:h-56">
            <Image
              src="/barieer.png"
              alt="Barricade"
              fill // Use fill for responsive positioning with Tailwind
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>

<DrivingTestOptions />
</div>
  );
}
