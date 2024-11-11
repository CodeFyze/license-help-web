
import React from "react";
import Image from "next/image";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { PiSteeringWheelLight } from "react-icons/pi";
import { IoIosArrowForward } from 'react-icons/io';
import { LuGlobe2 } from "react-icons/lu";

const DrivingLessons: React.FC = () => {
  return (
    <section className="py-10">

<div className="flex items-center justify-center  mb-8">
  <div className="">
    {/* <img src="/sign1.png" className=" w-28 h-28 absolute md:-mt-20 left-96" alt="" /> */}
  </div>
  <div>
    <h2 className="text-2xl font-semibold ml-20 text-gray-800">Ready for driving lessons?</h2>
    <p className="text-gray-600 ml-6">EzLicence connects learner drivers with the best driving schools</p>
  </div>
</div>


<div className="flex flex-col items-center text-center lg:text-center lg:ml-6 px-4">
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 w-full max-w-8xl">
    {/* Voucher Box 1 */}
    <div className="flex items-center rounded-full border border-black overflow-hidden shadow-lg w-full">
      {/* Gray Icon Container */}
      <div className="bg-gray-800 px-4 py-9 flex items-center justify-center">
        <LuGlobe2 className="text-3xl text-[#F0B000]" />
      </div>
      
      {/* White Text Container */}
      <div className="bg-white text-gray-800 p-[15px] flex-1 flex flex-col justify-center">
        <h3 className="md:text-lg text-left font-semibold">International conversions</h3>
        <p className="text-sm">
          Choose the number of lessons that you want to purchase.
        </p>
      </div>
    </div>

    {/* Voucher Box 2 */}
    <div className="flex items-center rounded-full border border-black overflow-hidden shadow-lg w-full">
      <div className="bg-gray-800 px-4 py-9 flex items-center justify-center">
        <LuGlobe2 className="text-3xl text-[#F0B000]" />
      </div>
      <div className="bg-white text-gray-800 p-[15px] flex-1 flex flex-col justify-center">
        <h3 className="text-lg text-left font-semibold">Pick a voucher</h3>
        <p className="text-sm">
          Choose the number of lessons that you want to purchase.
        </p>
      </div>
    </div>

    {/* Voucher Box 3 */}
    <div className="flex items-center rounded-full border  border-black overflow-hidden shadow-lg w-full">
      <div className="bg-gray-800 px-4 py-9 flex items-center justify-center">
        <LuGlobe2 className="text-3xl text-[#F0B000]" />
      </div>
      <div className="bg-white text-gray-800 p-[15px] flex-1 flex flex-col justify-center">
        <h3 className="text-lg text-left font-semibold">Send your gift</h3>
        <p className="text-sm">
          Enter the recipient’s info and the gift is on the way.
        </p>
      </div>
    </div>
  </div>
</div>








     

      {/* FAQ and Featured Blogs Section */}
      <div className="flex flex-col lg:flex-row mt-12  space-y-6 lg:space-y-0 lg:space-x-6">
        {/* FAQ Section with Striped Border */}
        <div className="relative lg:w-2/3 p-[70px]   rounded-tr-[80px] rounded-br-[80px] shadow-lg">
          <Image
            src="/outline-021.png" 
            alt="Striped Border"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 rounded-lg"
          />
          <div className="relative z-10 p-6 ">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Top Frequently Asked Questions</h3>
            <div className="space-y-2">
              {[
                "How Much Do Driving Lessons Cost?",
                "Do You Offer Any Special Lessons to Prepare for the Driving Test?",
                "How Many Driving Lessons Do I Need?",
                "Can I get the bonus logbook hours if I take lessons from an EzLicence Driving Instructor?",
                "What if There Are No Available Driving Instructors in My Area?",
                "Can I Take Refresher Driving Lessons?",
                "Can I Change Instructors?",
                "Is EzLicence a Driving School?",
                "Can I Book Driving Lessons to Learn How to Drive Manual?",
              ].map((question, index) => (
                <p key={index} className="text-gray-700 border-b pb-2 cursor-pointer hover:text-gray-900 transition">
                  {question}
                </p>
              ))}
            </div>
            <div className="mt-4">
              <button className="bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-gray-700 transition duration-200">
                Read More FAQs
              </button>
            </div>
          </div>
        </div>


      <div className="bg-gray-900 text-white rounded-l-[60px] p-12 lg:w-1/3 space-y-6">
      <h3 className="text-xl font-semibold">Featured Blogs</h3>
      <div className="space-y-4">
        {[
          {
            title: "28 Reasons Why You Might NOT Pass Your Driving Test",
            image: "/Rectangle18.png", // Replace with the actual image path
          },
          {
            title: "11 Tips for Choosing a Good Driving Instructor",
            image: "/Rectangle18.png", // Replace with the actual image path
          },
        ].map((blog, index) => (
          <div key={index} className="bg-white text-gray-900 rounded-lg overflow-hidden shadow-md">
            <div className="relative w-full h-40">
              <Image src={blog.image} alt={blog.title} layout="fill" objectFit="cover" />
            </div>
            <div className="p-4 flex justify-between items-center">
              <h4 className="text-sm font-semibold">{blog.title}</h4>
              <button className="bg-yellow-400 text-black text-xs font-semibold py-1 px-3 rounded-full hover:bg-yellow-500 transition duration-200">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  
      </div>
    </section>
  );
};

export default DrivingLessons;
