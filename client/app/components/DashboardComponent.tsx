import { FaCalendarAlt } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css"

NProgress.configure({ showSpinner: false });

import Link from "next/link";
export default function DashboardComponent() {
  const router = useRouter();

  const handleClick = () => {
    NProgress.start(); // Start progress bar
    router.push("/add-card").finally(() => {
      NProgress.done(); // End progress bar when navigation is complete
    });
  };
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="flex items-center space-x-2 mb-4">
        <span className="text-gray-600">
          <i className="fas fa-home"></i>
        </span>
        <span className="text-gray-600">Dashboard</span>
      </div>
      <h1 className="text-2xl font-semibold mb-8">
        Welcome Back, Kashif Mehar
      </h1>
      <div className="grid gap-4 md:grid-cols-2">
        <div className=" bg-white text-black rounded-lg border border-black">
          <div className="flex bg-[#1F2A37] py-2 rounded-t-md justify-between items-center mb-4">
            <h2 className="text-lg font-medium pl-4 text-white">My Wallet</h2>
           <Link href="/add-card">
           <button className=" text-white px-3 mr-4 py-1 text-sm  border border-white rounded-full hover:bg-gray-600">
              <i className="fas fa-plus"></i> Add Credit
            </button>
           </Link>
          </div>
          <p className="text-4xl pl-6 font-bold">$0.00</p>
          <a
            href="#"
            className="text-gray-400 float-end pr-5  mt-10 inline-block hover:text-gray-200"
          >
            View Details
          </a>
        </div>
        <div className="bg-white text-black rounded-lg border border-black">
          <div className="flex bg-[#1F2A37] py-2 rounded-t-md justify-between items-center mb-4">
            <h2 className="text-lg pl-3 text-white font-medium">
              My Instructor
            </h2>
            <div className="space-x-2 pr-3 text-white">
              <button className=" px-3 border border-white rounded-full py-1 text-sm  hover:bg-gray-600">
                Change Instructor
              </button>
              <button className="border border-white rounded-full px-3 py-1 text-sm hover:bg-gray-600">
                Book with William
              </button>
            </div>
          </div>
          <div className="flex items-center pl-3 space-x-4">
            <img
              src="/Ellipse9.png"
              alt="Instructor"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="text-xl font-medium">William</h3>
              <a href="#" className="text-gray-400 hover:text-gray-200">
                Check Availability &rarr;
              </a>
              <p className="text-sm mt-1">
                <span className="font-semibold">$71.10 - $79.00/hr</span> • ⭐
                4.9 - 28 Ratings • 292 Completed Lessons
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg border border-black md:col-span-2">
          <div className="flex  bg-[#1F2A37] py-2 rounded-t-md justify-between items-center mb-4">
            <h2 className="text-lg pl-4 text-white font-medium">
              Booking <span className="text-green-500">#01563897</span>  <span className="bg-green-400 px-4 py-1 ml-2 rounded-full">Confrimed</span>
            </h2>
            <button className="bg-gray-800 text-white px-3 py-1 text-sm rounded-md hover:bg-gray-700">
              Modify Booking
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-4 text-gray-600">
            <div className="pl-4">
              <h3 className="text-gray-500 font-medium mb-1">
                Booking Details
              </h3>
              <p className="flex items-center space-x-2">
                <FaCalendarAlt className="w-4 h-4" />
                <span>Wed, 20 Nov 2024</span>
              </p>
              <p className="flex items-center space-x-2">
                <CiClock2 className="w-4 h-4" />
                <span>10:00 am - 11:00 am</span>
              </p>
            </div>
            <div>
              <h3 className="text-gray-500 font-medium mb-1">Lesson Details</h3>
              <p className="flex items-center space-x-2">
                <FaCar className="w-4 h-4" />
                <span>1 Hour Driving Lesson (Auto)</span>
              </p>
              <p className="flex items-center space-x-2">
                <FaLocationDot className="w-4 h-4" />
                <span>16 Oxford St, Maryland 2160 NSW</span>
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="/Ellipse9.png"
                alt="Instructor"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="text-gray-800 font-medium">William</h3>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 text-sm"
                >
                  Check Availability &rarr;
                </a>
              </div>
            </div>
          </div>
          <div className="mt-4 border-t p-4 text-sm text-gray-600">
            <p>Price: $65</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-8 float-right text-gray-500 text-sm">
        <div className="space-x-4">
          <a href="#" className="hover:underline">
            Contact
          </a>
          <a href="#" className="hover:underline">
            Support
          </a>
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
          <a href="#" className="hover:underline">
            Payment Policy
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}
