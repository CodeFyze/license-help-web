import React from "react";
import Image from "next/image";
import { FaExclamationTriangle } from "react-icons/fa";

const suburbs = [
  ["Wollstonecraft", "Queens Park", "Rushcutters Bay", "Cremorne", "Kensington", "Redfern", "Drummoyne", "Dover Heights", "Mascot Park", "Enmore", "Annandale", "Chippendale", "Pyrmont", "Woollahra", "Elizabeth Bay", "Lindfield", "Daring Point", "Bondi Junction"],
  ["Randwick", "Mc Mahons Point", "Neutral Bay", "Alexandria", "Moore Park", "Dawes Point", "Cammaray", "Cammeray Point", "Balmain", "Glebe", "Camperdown", "Darlington", "Millers Point", "Lisson Grove", "Forest Lodge", "Rose Bay", "Kirribilli"],
  ["Greenwich", "Zetland", "Waterloo", "Rosebery", "Hunters Hill", "Five Dock", "Erskineville", "Birchgrove", "North Sydney", "Edgecliff", "Ultimo", "Newtown", "Double Bay", "Lavender Bay", "The Rocks", "Haymarket", "Stanmore", "Surry Hills"],
  ["Centennial Park", "Rozelle", "St Peters", "Potts Point", "Woolwich", "Cremorne", "Millers Point", "Leichhardt", "Neutral Bay", "Uffreed", "Paddington", "Woolloomooloo", "Kurraba Point"]
];

const SurroundingSuburbs: React.FC = () => {
  return (
    <section className="relative bg-cover bg-center py-16 px-4 md:px-8" style={{ backgroundImage: "url('/Group529.png')" }}>
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <div className="flex items-center justify-center text-gray-800 mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Looking for lessons in a specific suburb
          </h2>
          <FaExclamationTriangle className="ml-3 text-yellow-500 text-2xl md:text-3xl" />
        </div>
        <p className="text-gray-700 mb-12 text-sm md:text-base">
          We’ve got you! Explore surrounding suburbs
        </p>

        {/* Suburbs list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-gray-800">
          {suburbs.map((column, columnIndex) => (
            <ul key={columnIndex} className="space-y-2 text-sm md:text-base">
              {column.map((suburb, suburbIndex) => (
                <li key={suburbIndex} className="flex items-center">
                  <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                  {suburb}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SurroundingSuburbs;
