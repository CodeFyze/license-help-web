import { FaCalendarAlt, FaCar, FaDollarSign, FaTag, FaPlus } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import Link from "next/link";

export default function AddCard() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="flex items-center space-x-2 mb-4 text-gray-600">
        <span>
          <i className="fas fa-home"></i>
        </span>
        <span>| My Wallet | Add Credit</span>
      </div>

      {/* Main Title */}
      <h1 className="text-2xl font-semibold mb-2">Choose Tour Amount</h1>
      <p className="text-gray-600 mb-4">
        Buy more and save! Get your unused credit back anytime.{" "}
        <a href="#" className="underline">
          T&Cs apply.
        </a>
      </p>

      {/* Progress Bar */}


      <div className="grid md:grid-cols-3 gap-6">
        {/* Left Section - Booking Credit and Driving Test Package */}
        <div className="col-span-2 space-y-6">
          {/* Booking Credit Section */}
          <div className="bg-white border border-black text-black rounded-lg shadow-lg">
  <div className="bg-gray-800 text-white rounded-t-lg p-6 flex justify-between items-center">
    <div>
      <h2 className="text-xl font-semibold mb-2">Booking Credit</h2>
      <p className="text-gray-400 mt-2">This instructor offers 1 hour and 2 hour lessons.</p>
    </div>
    <div className="bg-white py-1 px-4 rounded-full flex items-center space-x-5">
      <button className="bg-yellow-400 text-white p-2 rounded-full">
        <FaMinus className="text-black" />
      </button>
      <span className="text-black">10</span>
      <button className="bg-yellow-400 text-white p-2 rounded-full">
        <FaPlus className="text-black" />
      </button>
    </div>
  </div>
  <div className="p-6">
    <div className="flex items-center">
      <img src="/Ellipse9.png" alt="Instructor" className="w-12 h-12 rounded-full mr-4" />
      <div>
        <h3 className="text-lg font-semibold">William</h3>
        <p className="text-sm text-gray-400">$71.10 - $79.00/hr</p>
        <p className="text-sm text-gray-400">Toyota Corolla 2021 (Auto) | 4.9 - 28 Ratings</p>
      </div>
    </div>
  </div>
</div>


          {/* Driving Test Package Section */}
          <div className="rounded-lg   border border-black shadow-lg overflow-hidden">
  {/* Header */}
  <div className="bg-gray-800 text-white p-2">
  <div className="flex justify-between items-center">
    <h2 className="text-xl font-semibold pl-4">Driving Test Package</h2>
    <p className="text-lg font-semibold">$225</p>
  </div>
  <p className="text-white mt-2 pl-4">This instructor offers a 2.5 hour Test Package.</p>
</div>

  
  {/* Body */}
  <div className="bg-white text-gray-800 p-6">
    <div className="flex items-center mb-4">
      <img src="/Ellipse9.png" alt="Instructor" className="w-12 h-12 rounded-full mr-4" />
      <div>
        <h3 className="text-lg font-semibold">William</h3>
      </div>
      <button className="ml-auto border border-black text-black px-4 py-2 rounded-lg">
        Add to Driving Test Package
      </button>
    </div>
    <ul className="text-gray-600 ml-6 list-disc space-y-1">
      <li>Pick up & Drop off</li>
      <li>Pre-test warm-up lesson before your test</li>
      <li>Use of your driving instructor’s vehicle for test</li>
    </ul>
  </div>
</div>


          {/* Review Section */}
          <div className="bg-white   border border-black rounded-lg shadow-lg p-6">
  <div className="flex justify-between items-start">
    <h2 className="text-lg font-semibold">Barbara <span className="text-yellow-400">⭐⭐⭐⭐⭐</span></h2>
    <p className="text-green-500 font-semibold">Verified Learner</p>
  </div>
  <p className="text-gray-600 mt-2">
    William made me feel super comfortable and was able to calm my nerves quickly. He is very thorough and explains everything with a stress-free and detailed approach. I would highly recommend his services.
  </p>
</div>

<div className="rounded-lg border border-gray-300 shadow-lg overflow-hidden w-full max-w-4xl mx-auto">
  {/* Header */}
  <div className="bg-gray-800 text-white px-4 py-3">
    <h2 className="text-lg font-semibold">Book Driving Lesson</h2>
  </div>

  {/* Body */}
  <div className="bg-white text-gray-800 p-6 space-y-6">
    {/* Tabs for Lesson Types */}
    <div className="flex items-center space-x-4">
      <button className="px-14 py-2 rounded-md bg-gray-800 text-white">1-Hour Lesson</button>
      <button className="px-14 py-2 rounded-md border border-gray-300 text-gray-800">2-Hour Lesson</button>
      <button className="px-14 py-2 rounded-md border border-gray-300 text-gray-800">Driving Test Package</button>
    </div>

    {/* Available Dates */}
    <div>
      <p className="text-sm font-medium text-gray-700">Available Dates</p>
      <div className="flex space-x-4 mt-2">
        <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-gray-500">
          <option>Select a date</option>
        </select>
        <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-gray-500">
          <option>Select a time</option>
        </select>
      </div>
    </div>

    {/* Pick-Up Location */}
    <div>
      <p className="text-sm font-medium text-gray-700">Lesson Pick up Location</p>
      <div className="mt-2 space-y-4">
        <input
          type="text"
          placeholder="Enter a location"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-gray-500"
        />
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Enter a suburb"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-gray-500"
          />
          <input
            type="text"
            placeholder="Enter a state"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-gray-500"
          />
        </div>
      </div>
    </div>
  </div>

  {/* Footer */}
  <div className="bg-gray-100 px-6 py-4 flex justify-between">
    <button className="px-4 py-2 rounded-md border border-gray-300 text-gray-800">Cancel</button>
    <button className="px-4 py-2 rounded-md bg-gray-800 text-white">Save</button>
  </div>
</div>


<div className="rounded-lg border border-gray-300 shadow-lg overflow-hidden w-full max-w-4xl mx-auto">
  {/* Header */}
  <div className="bg-gray-800 text-white px-4 py-3">
    <h2 className="text-lg font-semibold">Book Driving Lesson</h2>
  </div>

  {/* Payment Options */}
  <div className="bg-white p-6 space-y-6">
    {/* Payment Method Selection */}
    <div>
      <label className="block text-gray-800 font-medium">Payment Method</label>
      <div className="flex flex-col mt-2 space-y-2">
        <label className="flex items-center border border-gray-300 rounded-md px-4 py-2 cursor-pointer">
          <input type="radio" name="payment" className="mr-3" />
          <span className="font-medium">Credit Card</span>
          <div className="ml-auto flex space-x-2">
            <img src="/visa.png" alt="Visa" className="w-8 h-6" />
            <img src="/mastercard.png" alt="MasterCard" className="w-8 h-6" />
          </div>
        </label>
        <label className="flex items-center border border-gray-300 rounded-md px-4 py-2 cursor-pointer">
          <input type="radio" name="payment" className="mr-3" />
          <span className="font-medium">PayPal</span>
          <img src="/paypal.png" alt="PayPal" className="ml-auto w-20 h-6" />
        </label>
      </div>
    </div>

    {/* Billing Details */}
    <div className="border border-gray-300 rounded-md p-4">
      <h3 className="text-lg font-medium text-gray-800">Billing Details</h3>
      <div className="mt-4 space-y-4">
        <div>
          <label className="block text-gray-600 text-sm">Billing Name</label>
          <input
            type="text"
            value="Kashif Mahar"
            className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-gray-800 focus:ring-2 focus:ring-gray-500"
          />
        </div>
        <div>
          <label className="block text-gray-600 text-sm">Billing Address</label>
          <input
            type="text"
            value="16 Oxford St"
            className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-gray-800 focus:ring-2 focus:ring-gray-500"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600 text-sm">Suburb</label>
            <input
              type="text"
              value="Merrylands, 2160"
              className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-gray-800 focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm">State</label>
            <input
              type="text"
              value="New South Wales"
              className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-gray-800 focus:ring-2 focus:ring-gray-500"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Warning Section */}
  <div className="bg-yellow-100 p-4 flex items-center space-x-4">
    <div className="bg-yellow-400 w-10 h-10 rounded-full flex items-center justify-center">
      <span className="text-white font-bold">!</span>
    </div>
    <p className="text-gray-800 text-sm">
      To protect your payment, never transfer money or communicate about lesson payments outside of the EzLicence website.
    </p>
  </div>
</div>



</div>



        {/* Right Section - Order Summary */}
        <div className="space-y-6">
          {/* Order Summary */}
          <div className="rounded-lg shadow-lg">
  {/* Header */}
  <div className="bg-gray-800 text-white rounded-t-lg p-4">
    <h2 className="text-xl font-semibold">Order Summary</h2>
  </div>
  
  {/* Body */}
  <div className="bg-white text-gray-800 p-3 border border-black rounded-b-lg">
    <div className="flex justify-between border-b border-black p-3 mb-2">
      <p>Booking Credit</p>
      <p>$0.00</p>
    </div>
    <div className="flex justify-between border-b border-black p-3 mb-2">
      <p>Subtotal</p>
      <p>$0.00</p>
    </div>
    <div className="flex justify-between border-b border-black p-3 mb-2">
      <p>
        Discount 10% <span className="bg-yellow-200 px-2 rounded text-yellow-700">@Save10</span>
      </p>
      <p className="text-green-500">-$0.00</p>
    </div>
    <div className="flex justify-between border-b p-3 border-black font-bold mb-4">
      <p>Total Payment Due</p>
      <p>$0.00</p>
    </div>
    <button className="w-full bg-gray-800 text-white py-2 rounded-lg">Continue</button>
  </div>
</div>


          {/* Additional Info Boxes */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-black text-gray-600 space-y-4">
  <div>
    <h3 className="font-semibold">Money Back Guarantee</h3>
    <p>Purchase with confidence. Our refund policy is hassle-free.</p>
  </div>
  
  <hr className="border-gray-300" /> {/* Divider between sections */}
  
  <div>
    <h3 className="font-semibold">Manage your Lesson Online</h3>
    <p>24/7 access. Manage your account. Switch your instructor at no cost.</p>
  </div>
  
  <hr className="border-gray-300" /> {/* Divider between sections */}
  
  <div>
    <h3 className="font-semibold">Secure Payments</h3>
    <p>We use the latest encryption to provide you with a simple and safe experience.</p>
  </div>
</div>



        </div>
      </div>

      

      {/* Footer Links */}
      <div className="flex justify-center mt-8 text-gray-500 text-sm space-x-4">
        <Link href="#" className="hover:underline">Contact</Link>
        <Link href="#" className="hover:underline">Support</Link>
        <Link href="#" className="hover:underline">Terms & Conditions</Link>
        <Link href="#" className="hover:underline">Payment Policy</Link>
        <Link href="#" className="hover:underline">Privacy Policy</Link>
      </div>
    </div>
  );
}
