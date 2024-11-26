import React from "react";
import Image from "next/image";
import { FaClock, FaUsers, FaCogs, FaChartBar, FaMapMarkerAlt } from "react-icons/fa";

const YourLogoAdvantage: React.FC = () => {
  return (
    <section className="bg-gray-100 py-8 sm:py-10 mt-20  md:py-14 rounded-t-[30px] sm:rounded-t-[50px] md:rounded-t-[100px] relative">
      {/* Title */}
      <div className="text-center mb-6 sm:mb-8 md:mb-10 px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
          The YourLogo Advantage
        </h2>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-10 md:gap-12 px-4 mb-8 sm:mb-10 md:mb-14">
        {[
          { src: "/wheel.png", text: "The widest range of driving instructors", icon: <FaClock /> },
          { src: "/wheel.png", text: "Experienced driving instructors", icon: <FaUsers /> },
          { src: "/wheel.png", text: "More control over your bookings", icon: <FaCogs /> },
          { src: "/wheel.png", text: "Your online dashboard", icon: <FaChartBar /> },
          { src: "/wheel.png", text: "Servicing YOUR area", icon: <FaMapMarkerAlt /> },
        ].map((feature, index) => (
          <div key={index} className="text-center relative flex flex-col items-center">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-44 md:h-44 lg:w-56 lg:h-56">
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
              <div className="absolute bottom-10 sm:bottom-14 md:top-20 md:bottom-14 inset-x-0 flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8">
                <p className="text-center text-black text-xs sm:text-xs md:text-xs lg:text-md font-medium max-w-[70%]">
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
        <div className="absolute -top-20 sm:-top-12 md:-top-16 right-20 sm:right-20 md:right-20 lg:right-28 transform translate-x-1/2">
          <Image
            src="/sign-road.png"
            alt="Top Right Icon"
            width={100}
            height={100}
            className="w-36 h-36 sm:w-36 sm:h-36 md:w-36 md:h-36 lg:w-44 lg:h-44"
          />
        </div>
      </div>

      {/* Description */}
      <div className="bg-gray-800 text-white py-6 sm:py-8 md:py-10 px-4 sm:px-6 lg:px-12 mt-6 sm:mt-8 rounded-b-[30px] sm:rounded-b-[50px] md:rounded-b-[100px]">
        <p className="max-w-4xl mx-auto mb-6 mt-20 sm:mb-8 md:mb-10 text-left leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl">
          At EzLicence, we understand that getting your driver’s licence is both
          exciting and daunting. Before you’re out on the wide open roads, you
          need to navigate booking driving lessons with an instructor that you
          feel comfortable with. And they’ll need to live close to you. <br />
          <br />
          Then there’s scheduling lesson times that suit your lifestyle – and
          theirs. All of this can make the journey to getting your full driver’s
          licence feel overwhelming. So, we’ve set out to change the process for
          the better.
          <br />
          <br />
          If you’re ready for learner driver lessons, you’re likely to be asking
          yourself: “who’s the best driving instructor near me?” Our online
          platform, EzLicence, makes booking driving lessons and passing your
          driving test easier than ever!
        </p>

        <div className="max-w-4xl mx-auto text-center space-y-3 sm:space-y-4">
          {[
            "How do I find private driving instructors near me?",
            "EzLicence: Driving Lessons, Your Way.",
            "Why We’re a Leading Learner Platform in Australia",
            "Driving Instructors & Driving Schools You Can Rely On",
          ].map((faq, index) => (
            <p
              key={index}
              className="text-white text-left text-xs sm:text-sm md:text-base lg:text-lg font-medium cursor-pointer hover:text-yellow-300 transition duration-200 border-b border-white pb-2"
            >
              {faq}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YourLogoAdvantage;
