import Image from 'next/image';
import tireImage from '../../public/wheel-021.png';

export default function DrivingTestOptions() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-white">
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
        <Image src={tireImage} alt="Tire" width={100} height={100} className="w-20 h-auto" />
      </div>
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          Select from the two options below
        </h2>
        <div className="flex justify-center space-x-4">
          <button className="px-4 py-2 rounded-full bg-gray-800 text-white font-medium">
            <span className="mr-2">🚗</span> Driving test package with driving lessons
          </button>
          <button className="px-4 py-2 rounded-full border border-gray-800 text-gray-800 font-medium">
            <span className="mr-2">🚗</span> Stand alone driving test package
          </button>
        </div>
        <p className="text-gray-600">
          Please select your pickup suburb & transmission type. You can then review our instructors in your area & book online.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <button className="px-4 py-2 rounded-full bg-green-500 text-white font-medium">
            Auto
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-800 text-white font-medium">
            Manual
          </button>
          <input
            type="text"
            placeholder="Enter your suburb"
            className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-3 py-2 bg-yellow-500 rounded-full text-white">
            🔍
          </button>
        </div>
      </div>
      
      {/* Right Tire Image */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <Image src={tireImage} alt="Tire" width={100} height={100} className="w-20 h-auto" />
      </div>
    </div>
  );
}
