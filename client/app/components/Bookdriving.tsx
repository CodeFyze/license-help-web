import React from 'react';
import { CiStar } from 'react-icons/ci'; 
import { IoMdRepeat } from "react-icons/io";
import { BiSolidCarGarage } from "react-icons/bi";
import { LuMessagesSquare } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  dark?: boolean;
};

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-10 px-4">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          Book driving lessons with confidence
        </h2>
        <p className="text-gray-600">
          Choose a driving instructor you can trust
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <FeatureCard
          title="Instructor ratings"
          description="Access peer reviews & find an instructor who has consistently provided a great learning experience."
          icon={<CiStar />} 
        />
        <FeatureCard
          title="Accredited"
          description="We obtain up to date copies of relevant instructor accreditations & verify their working with children credentials."
          icon={<IoMdRepeat />} 
        />
        <FeatureCard
          title="Vehicle safety"
          description="Gain access to instructor vehicle make, model, year & safety rating."
          icon={<BiSolidCarGarage />} 
          dark
        />
        <FeatureCard
          title="Always your choice"
          description="Don’t like your current instructor? Select a new instructor via our online portal, no questions asked."
          icon={<LuMessagesSquare />} 
        />
      </div>

      <div className="flex justify-center mt-8">
        <button className="flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-[#F0B000] font-semibold py-3 px-6 rounded-full transition duration-200">
          Book driving lessons now
          <IoIosArrowForward className="ml-2" />
        </button>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, dark = false }) => {
  return (
    <div
      className={`p-6 rounded-lg shadow-md min-h-[250px] ${
        dark ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      } border border-black`}
    >
      <div className="flex justify-center items-center text-5xl text-yellow-500 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>
      <p className="text-sm text-center">{description}</p>
    </div>
  );
};

export default FeaturesSection;
