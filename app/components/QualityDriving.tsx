import React from "react";
import Image from "next/image";

const QualityDriving: React.FC = () => {
  return (
    <div className="">
    <img
          src="/sign-traffic-arrows.png"
          alt="Overlay"
          className="absolute mt-5 left-20  w-64"
        />
    <div className="bg-gray-800 mb-20 text-white py-6 sm:py-8 md:py-10 px-4 sm:px-6 lg:px-12 mt-6 sm:mt-8 rounded-b-[30px] sm:rounded-[50px] md:rounded-[100px]">
      {/* Heading */}
      <h2 className="text-center mt-20 text-xl sm:text-2xl md:text-3xl font-semibold mb-4 ">
        Quality Driving Lessons in Sydney NSW
      </h2>
      
      {/* Subheading Paragraph */}
      <p className="text-center max-w-4xl mx-auto mb-6 text-sm sm:text-base md:text-md lg:text-md leading-relaxed">
      Sydney, renowned for its iconic landmarks and bustling city life, offers an ideal setting for learning to drive. Our driving lessons  in Sydney are designed to prepare you for your practical driving test quickly while ensuring you become a safe and confident driver. practical driving test quickly while ensuring you become a safe and confident driver.
      </p>

         {/* Heading */}
         <h2 className="text-center text-[#F0B000] text-xl sm:text-2xl md:text-3xl font-semibold mb-4 mt-4">
         Embrace the Driving Experience in Sydney
      </h2>
      
      {/* Subheading Paragraph */}
      <p className="text-center max-w-4xl mx-auto mb-6 text-sm sm:text-base md:text-md lg:text-md leading-relaxed">
      Learning to drive in Sydney means navigating a variety of roads and traffic conditions, preparing you well for real-world driving. With expert instructors available at your
      fingertips, you’ll be ready to handle any driving scenario with confidence.
      </p>

      <p className="text-center max-w-4xl mx-auto mb-6 text-sm sm:text-base md:text-md lg:text-md leading-relaxed">
      Learning to drive in Sydney means navigating a variety of roads and traffic conditions, preparing you well for real-world driving. With expert instructors available at your
      fingertips, you’ll be ready to handle any driving scenario with confidence.
      </p>


         {/* Heading */}
         <h2 className="text-center text-[#F0B000] text-xl sm:text-2xl md:text-3xl font-semibold mb-4 mt-4">
         Why Choose Us?
      </h2>
      
      {/* Subheading Paragraph */}
      <p className="text-center max-w-4xl mx-auto mb-6 text-sm sm:text-base md:text-md lg:text-md leading-relaxed">
      Sydney, renowned for its iconic landmarks and bustling city life, offers an ideal setting for learning to drive. Our driving lessons  in Sydney are designed to prepare you for your practical driving test quickly while ensuring you become a safe and confident driver. practical driving test quickly while ensuring you become a safe and confident driver.
      </p>



         {/* Heading */}
         <h2 className="text-center text-[#F0B000] text-xl sm:text-2xl md:text-3xl font-semibold mb-4 mt-4">
         Expert Driving Instruction
      </h2>
      
      {/* Subheading Paragraph */}
      <p className="text-center max-w-4xl mx-auto mb-6 text-sm sm:text-base md:text-md lg:text-md leading-relaxed">
      Sydney, renowned for its iconic landmarks and bustling city life, offers an ideal setting for learning to drive. Our driving lessons  in Sydney are designed to prepare you for your practical driving test quickly while ensuring you become a safe and confident driver. practical driving test quickly while ensuring you become a safe and confident driver.
      </p>

      </div>
      <Image
            src="/sign-road.png"
            alt="Top Right Icon"
            width={100}
            height={100}
            className="w-36 h-36 sm:w-36 absolute -bottom-[3550px] right-20 sm:h-36 md:w-36 md:h-36 lg:w-44 lg:h-44"
          />
    </div>
  );
};

export default QualityDriving;
