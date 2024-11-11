import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start p-6 max-w-8xl mx-auto h-auto lg:h-screen relative">
      {/* Left Section: Text and Features */}
      <div className="text-section p-6 rounded-lg lg:w-1/2">
        <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">Why choose Your company</h2>
        <p className="text-gray-600 mb-6 text-center lg:text-left">
          To <span className="font-bold">find, compare and book verified driving instructors online.</span> The platform
          brings transparency, choice, and efficiency to the selection of a driving instructor and the ongoing management of driving lessons.
        </p>
        <div className="features grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Choose your own private driving instructor",
            "Manage your driving lesson bookings online",
            "Licensed and accredited driving instructors",
            "Your very own private driving instructor",
            "Auto & manual cars available",
            "Largest choice of driving instructors in Australia",
            "Change your driving instructor online",
            "Eligible for bonus log book hours (1 hr = 3 hrs)",
            "Review all of the driving schools in your area",
            "Book driving lessons with flexibility",
            "Book driving lessons online in real-time",
            "International driver’s licence conversions",
            "Driving instructor cars dual controlled",
            "Patient & friendly male & female driving instructors",
            "Driving instructor profiles, ratings & reviews",
          ].map((feature, index) => (
            <div key={index} className="flex items-center text-sm">
              <span className="text-yellow-500 mr-2">✔️</span> {feature}
            </div>
          ))}
        </div>
      </div>

      {/* Right Section: Image, Stats */}
      <div className="stats-section flex flex-col items-center lg:w-1/2 mt-10 lg:mt-0 lg:ml-6">
        <div className="flex justify-center w-full lg:w-auto">
          <img
            src="/road4-011(1).png"
            alt="Driving Instructor Statistics"
            className="w-full h-auto lg:max-w-[600px] object-contain"
          />
        </div>
      </div>

      {/* Centered Button */}
      <div className="absolute inset-x-0 -bottom-10 md:-bottom-0 flex justify-center">
        <button className="cta-button bg-gray-900   text-white px-6 py-3 rounded-lg hover:bg-gray-700">
          Book a driving school today
        </button>
      </div>
    </div>
  );
};

export default WhyChooseUs;
