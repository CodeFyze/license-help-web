import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Browse Our Trusted Driving Instructors",
      description:
        "Choose from a wide variety of instructors in your area. Check ratings & reviews from real learners.",
      icon: "sign-arrow.png",
    },
    {
      title: "Book Lessons In Under 5 Mins",
      description:
        "Book online with instant confirmation. Easily manage your lesson schedule via our online dashboard.",
      icon: "sign-arrow.png",
    },
    {
      title: "Get Your Licence",
      description:
        "Let our trusted and verified instructors help you pass the test and gain independence.",
      icon: "sign-arrow.png",
    },
  ];

  return (
    <div className="bg-yellow-500 flex flex-col md:flex-row items-center justify-center  px-6 md:px-20 py-10"
    style={{ boxShadow: '0 -10px 15px -3px rgba(0, 0, 0, 0.3), 0 10px 15px -3px rgba(0, 0, 0, 0.3)' }}
    >
      <div className="text-center md:text-left max-w-lg md:mr-10">
        <h2 className="text-3xl font-bold mb-2 text-gray-900">
          How <span className="text-gray-800">Yourlogo name</span> works
        </h2>
        <p className="text-gray-700 mb-6">
          Simple, Trusted & Flexible Booking System
        </p>
        <ul className="space-y-4">
          {steps.map((step, index) => (
            <li key={index} className="flex items-start">
              <span className="text-red-500 text-lg mr-2">
                <img src={step.icon} alt="" />
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <button className="mt-6 bg-gray-900 text-white py-2  mb-10 px-4 rounded-full shadow-md hover:bg-gray-700">
          Start learning to drive now →
        </button>
      </div>

      <div className="bg-white h-96 w-full rounded-xl flex items-center justify-center relative">
        {/* Video Player */}
        <div className="bg-white h-96 w-full rounded-xl flex items-center justify-center p-2">
          <iframe
            className="rounded-xl bg-white"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <img
          src="/sign-traffic-arrows.png"
          alt="Overlay"
          className="absolute bottom-4 top-72 -right-8 w-64"
        />
      </div>
    </div>
  );
}
