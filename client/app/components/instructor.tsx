"use client"
import { AiOutlineCalendar, AiOutlineRight, AiOutlineCheckCircle, AiFillStar } from 'react-icons/ai';
import { FaDollarSign, FaCheck } from 'react-icons/fa';
import Image from 'next/image';
import { cardData } from "../data";
import { useState } from 'react';
import 'tailwindcss/tailwind.css';

export default function Card() {
  const [selectedTime, setSelectedTime] = useState('AM');
  const [selectedDay, setSelectedDay] = useState('Today - Sat');

  return (
    <div>
      <div className="flex flex-col items-center gap-6 py-10 px-4">
        <p className="text-center text-gray-800 text-sm sm:text-base">
          We have <span className="font-semibold">19 auto instructors</span> available in <span className="font-semibold">Melbourne, 3000</span>.
          Lesson prices in Melbourne start from <span className="font-semibold">$67.50/hr</span>.
        </p>
        <div className="flex items-center gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-gray-700 text-sm font-medium">Time</span>
            {['AM', 'PM'].map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`flex items-center justify-center w-16 h-10 px-3 py-1 text-sm rounded-full border ${
                  selectedTime === time ? 'bg-gray-800 text-white' : 'bg-white text-gray-700 border-gray-300'
                }`}
              >
                {selectedTime === time && <FaCheck className="mr-1" size={12} />}
                {time}
              </button>
            ))}
          </div>

          {/* Day Selection */}
          <div className="flex items-center space-x-2">
            <span className="text-gray-700 text-sm font-medium">Day</span>
            {['Today - Sat', 'Sun - Wed', 'Custom'].map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`flex items-center justify-center w-28 h-10 px-3 py-1 text-sm rounded-full border ${
                  selectedDay === day ? 'bg-gray-800 text-white' : 'bg-white text-gray-700 border-gray-300'
                }`}
              >
                {selectedDay === day && <FaCheck className="mr-1" size={12} />}
                {day}
              </button>
            ))}
          </div>
        </div>
        <div className='md:text-3xl sm:text-3xl text-2xl lg:text-4xl font-bold mt-10'>
        <h1>Instructor available in the next 7 days</h1>
        </div>
      </div>

      {/* Card Display Section */}
      <div className="flex flex-wrap gap-4 justify-center p-6 sm:p-8 md:p-10 lg:p-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-5xl">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="card bg-[#F1F1F1] flex items-center gap-4 p-4 rounded-2xl shadow-md w-full"
            >
              <div className="profile flex-shrink-0">
                <Image
                  src="/Ellipse9.png"
                  width={80}
                  height={80}
                  alt={`Picture of ${card.name}`}
                  className="profile-image rounded-full"
                />
              </div>
              <div className="flex flex-col justify-center w-full">
                <div className="text-lg font-bold text-gray-900">{card.name}</div>
                <div className="mt-2 flex gap-2 flex-wrap">
                  <span className="text-xs text-[#1F2A37] border border-[#1F2A37] py-1 px-3 rounded-2xl">
                    View Profile
                  </span>
                  <span className="text-xs text-[#1F2A37] border border-[#1F2A37] py-1 px-3 rounded-2xl">
                    Book Online Now
                  </span>
                </div>
                <div className="mt-4 flex items-center">
                  <AiOutlineCalendar className="text-[#1F2A37]" size={16} />
                  <span className="text-lg font-semibold text-[#1F2A37] ml-2 underline flex">
                    Check Availability
                    <AiOutlineRight className="ml-1" size={16} />
                  </span>
                </div>
                <div className="mt-4 flex flex-col gap-1">
                  <div className="text-sm flex items-center text-zinc-600">
                    <FaDollarSign size={16} />
                    <span className="ml-2">{card.price}</span>
                  </div>
                  <div className="text-sm flex items-center text-zinc-600">
                    <AiFillStar color="#f6d32d" size={16} />
                    <span className="ml-2">{card.rating}</span>
                  </div>
                  <div className="text-sm flex items-center text-zinc-600">
                    <AiOutlineCheckCircle size={16} />
                    <span className="ml-2">{card.lessons}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
