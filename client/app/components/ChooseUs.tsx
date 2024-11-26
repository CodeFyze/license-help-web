"use client";
import Image from "next/image";
import { GiCheckMark } from "react-icons/gi";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function WhyChooseUs() {
  const slideInFromLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  };

  const slideInFromRight = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  };

  // Create refs for each section
  const headingRef = useRef(null);
  const featuresRef = useRef(null);
  const contentRef = useRef(null);
  const ratingRef = useRef(null);

  // Use the in-view hook to trigger animations when elements enter the viewport
  const isHeadingInView = useInView(headingRef, { once: true });
  const isFeaturesInView = useInView(featuresRef, { once: true });
  const isContentInView = useInView(contentRef, { once: true });
  const isRatingInView = useInView(ratingRef, { once: true });

  return (
    <section className="bg-white py-10">
      {/* Heading Section */}
      <div className="text-center mb-8" ref={headingRef}>
        <motion.h2
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Why Choose Us!
        </motion.h2>
      </div>

      {/* Features Section */}
      <div className="flex flex-wrap justify-center md:mb-10 gap-4 p-4" ref={featuresRef}>
        {[
          "24/7 online booking & rescheduling",
          "100,000+ learners graduated with us",
          "All instructors are police checked",
          "Change your instructor anytime",
          "Choose from 1000+ verified instructors",
        ].map((text, index) => (
          <motion.div
            key={text}
            className="bg-white shadow-lg shadow-[#00000040] w-full sm:w-[45%] md:w-auto rounded-full px-6 py-2 flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <span className="mr-2">
              <GiCheckMark className="text-[#039855]" />
            </span>
            <span className="text-gray-700">{text}</span>
          </motion.div>
        ))}
      </div>

      {/* Content and Images Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 items-stretch overflow-x-hidden bg-gray-900 text-white p-4 md:p-0" ref={contentRef}>
        {/* Left Side Image */}
        <motion.div
          className="hidden md:flex md:col-span-2"
          initial={{ opacity: 0, x: -50 }}
          animate={isContentInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-full h-full flex items-stretch">
            <Image
              src="/road.png"
              alt="Road Arrow"
              layout="responsive"
              width={100}
              height={400}
              className="object-cover h-full"
            />
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="col-span-12 md:col-span-8 flex flex-col md:flex-row items-stretch h-full space-y-4 md:space-y-0">
          {/* Refund Guarantee Image */}
          <motion.div
            className="w-full md:w-[300px] md:pr-4 flex items-stretch"
            initial={{ opacity: 0, x: -50 }}
            animate={isContentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Image
              src="/refund.png"
              alt="Refund Guarantee Image"
              layout="responsive"
              width={100}
              height={400}
              className="object-cover h-full"
            />
          </motion.div>

          {/* Refund Guarantee Section */}
          <motion.div
            className="flex flex-col justify-center px-4 md:px-2 rounded-md shadow-md flex-1 h-full"
            initial={{ opacity: 0, x: 50 }}
            animate={isContentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-md font-bold mb-2">Refund Guarantee!</h2>
            <p className="text-sm">
              No lesson, no charge. We will refund any lesson that isn't delivered or cancelled.
            </p>
          </motion.div>

          {/* Drive Image */}
          <motion.div
            className="w-full md:w-[300px] flex items-stretch"
            initial={{ opacity: 0, x: 50 }}
            animate={isContentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Image
              src="/drive.png"
              alt="Drive Image"
              layout="responsive"
              width={100}
              height={400}
              className="object-cover h-full"
            />
          </motion.div>

          {/* Driving Lessons Section */}
          <motion.div
            className="flex flex-col justify-center px-4 md:px-2 rounded-md shadow-md flex-1 h-full"
            initial={{ opacity: 0, x: -50 }}
            animate={isContentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="font-bold mb-2">Driving Lessons & test packages</h2>
            <p className="text-sm">Buy more lessons & get more discount.</p>
          </motion.div>
        </div>

        {/* Right Side Image */}
        <motion.div
          className="hidden md:flex md:col-span-2"
          initial={{ opacity: 0, x: 50 }}
          animate={isContentInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="w-full h-full flex items-stretch">
            <Image
              src="/road.png"
              alt="Road Arrow"
              layout="responsive"
              width={100}
              height={400}
              className="object-cover h-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Rating Section */}
      <div className="text-center mt-6" ref={ratingRef}>
        <motion.div
          className="flex items-center justify-center space-x-2"
          initial={{ opacity: 0, y: 30 }}
          animate={isRatingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Image src="/SVG.png" alt="Google Logo" width={30} height={30} />
          <span className="text-xl font-semibold">4.9</span>
          <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
          <span className="text-gray-600">Reviews 8598</span>
        </motion.div>
      </div>
    </section>
  );
}
