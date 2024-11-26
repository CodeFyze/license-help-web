import { FaClock, FaUserEdit, FaCalendarAlt } from "react-icons/fa";

const cards = [
  {
    id: 1,
    number: "20,000",
    description: "Sydney learners have trusted us to get them road ready",
  },
  {
    id: 2,
    number: "105,000",
    description: "Lessons delivered in Sydney",
  },
  {
    id: 3,
    number: "$81.00",
    description: "The average price per lesson hour in Sydney",
  },
  {
    id: 4,
    icon: <FaClock className="mx-auto text-3xl md:text-4xl" />,
    description: "Book lessons 24/7 online, in real-time",
    highlight: true, // Mark as highlighted to apply a different style
  },
  {
    id: 5,
    icon: <FaUserEdit className="mx-auto text-3xl md:text-4xl text-gray-800" />,
    description: "Change your instructor anytime",
  },
  {
    id: 6,
    icon: <FaCalendarAlt className="mx-auto text-3xl md:text-4xl text-gray-800" />,
    description: "Manage your lesson bookings online",
  },
];

const BookingPlatformSection = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 max-w-screen-xl mx-auto text-center">
      {/* Section Heading */}
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-8">
        We are Australia&apos;s <span className="text-yellow-500">#1 booking platform</span> for driving lessons
      </h2>

      {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`border p-4 md:p-6 rounded-lg border border-black shadow-sm ${
              card.highlight ? "bg-yellow-500 text-white" : ""
            }`}
          >
            {card.number ? (
              <p className="text-2xl md:text-3xl font-semibold text-gray-800">
                {card.number}
              </p>
            ) : (
              card.icon
            )}
            <p
              className={`text-sm md:text-base mt-2 ${
                card.highlight ? "text-white" : "text-gray-500"
              }`}
            >
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookingPlatformSection;
