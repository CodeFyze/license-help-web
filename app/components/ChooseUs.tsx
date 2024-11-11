import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Why Choose Us!</h2>
      </div>
<div className="flex flex-wrap justify-center md:mb-10 gap-4 p-4">
  <div className="bg-white shadow-lg shadow-[#00000040] w-full sm:w-[45%] md:w-auto rounded-full px-6 py-2 flex items-center">
    <span className="text-green-500 mr-2">✔️</span>
    <span className="text-gray-700">24/7 online booking & rescheduling</span>
  </div>
  <div className="bg-white shadow-lg shadow-[#00000040] w-full sm:w-[45%] md:w-auto rounded-full px-6 py-2 flex items-center">
    <span className="text-green-500 mr-2">✔️</span>
    <span className="text-gray-700">100,000+ learners graduated with us</span>
  </div>
  <div className="bg-white shadow-lg shadow-[#00000040] w-full sm:w-[45%] md:w-auto rounded-full px-6 py-2 flex items-center">
    <span className="text-green-500 mr-2">✔️</span>
    <span className="text-gray-700">All instructors are police checked</span>
  </div>
  <div className="bg-white shadow-lg shadow-[#00000040] w-full sm:w-[45%] md:w-auto rounded-full px-6 py-2 flex items-center">
    <span className="text-green-500 mr-2">✔️</span>
    <span className="text-gray-700">Change your instructor anytime</span>
  </div>
  <div className="bg-white shadow-lg shadow-[#00000040] w-full sm:w-[45%] md:w-auto rounded-full px-6 py-2 flex items-center">
    <span className="text-green-500 mr-2">✔️</span>
    <span className="text-gray-700">Choose from 1000+ verified instructors</span>
  </div>
</div>


<div className="grid grid-cols-1 md:grid-cols-12 items-stretch overflow-x-hidden bg-gray-900 text-white p-4 md:p-0">
  
  {/* Left Side Image */}
  <div className="hidden md:flex md:col-span-2">
    <div className="w-full h-full flex items-stretch">
      <Image 
        src="/road.png" // Replace with your left side image path
        alt="Road Arrow"
        layout="responsive"
        width={100}
        height={400}
        className="object-cover h-full"
      />
    </div>
  </div>

  {/* Content and Center Images Section */}
  <div className="col-span-12 md:col-span-8 flex flex-col md:flex-row items-stretch h-full space-y-4 md:space-y-0">
    
    {/* New Image Before Refund Guarantee */}
    <div className="w-full md:w-[300px] md:pr-4 flex items-stretch">
      <Image 
        src="/refund.png" 
        alt="Additional Image"
        layout="responsive"
        width={100}
        height={400}
        className="object-cover h-full"
      />
    </div>
    
    {/* Refund Guarantee Section */}
    <div className="flex flex-col justify-center px-4 md:px-2 rounded-md shadow-md flex-1 h-full">
      <h2 className="text-md font-bold mb-2">Refund Guarantee!</h2>
      <p className="text-sm">
        No lesson, no charge. We will refund any lesson that isn't delivered or cancelled.
      </p>
    </div>

    {/* Drive Image */}
    <div className="w-full md:w-[300px] flex items-stretch">
      <Image 
        src="/drive.png" // Replace with your drive image path
        alt="Drive Image"
        layout="responsive"
        width={100}
        height={400}
        className="object-cover h-full"
      />
    </div>

    {/* Driving Lessons Section */}
    <div className="flex flex-col justify-center px-4 md:px-2 rounded-md shadow-md flex-1 h-full">
      <h2 className="font-bold mb-2">Driving Lessons & test packages</h2>
      <p className="text-sm">
        Buy more lessons & get more discount.
      </p>
    </div>
  </div>

  {/* Right Side Image */}
  <div className="hidden md:flex md:col-span-2">
    <div className="w-full h-full flex items-stretch">
      <Image 
        src="/road.png" // Replace with your right side image path
        alt="Road Arrow"
        layout="responsive"
        width={100}
        height={400}
        className="object-cover h-full"
      />
    </div>
  </div>
</div>






      <div className="text-center mt-6">
        <div className="flex items-center justify-center space-x-2">
          <Image
            src="/SVG.png"
            alt="Google Logo"
            width={30}
            height={30}
          />
          <span className="text-xl font-semibold">4.9</span>
          <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
          <span className="text-gray-600">Reviews 8598</span>
        </div>
      </div>
    </section>
  );
}
