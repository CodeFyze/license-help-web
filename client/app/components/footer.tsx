import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
const Footer: React.FC = () => {
  const sections = [
    {
      title: "Learners Tests Online",
      links: [
        "FREE Practice Learners Test",
        "NSW Driver Knowledge Test",
        "VIC Learner Permit Knowledge Test",
        "QLD Road Rules Test",
        "WA Road Rules Theory Test",
        "SA Learner Theory Test",
        "TAS Driver Knowledge Test",
        "ACT Road Rules Knowledge Test",
      ],
    },
    {
      title: "Resources",
      links: [
        "Support",
        "Blog",
        "Contact",
        "About",
        "Instruct with EzLicence",
        "Become an instructor",
        "Driving Instructor User policies",
        "Learner User policies",
      ],
    },
    {
      title: "Learn to Drive",
      links: [
        "Driving Lessons",
        "Test Packages",
        "Gift Vouchers",
        "Refresher Driving Lessons",
        "International Driver's Licence Conversions",
        "UK Driving Lessons",
      ],
    },
  ];




  const bottomLinks = ["Privacy Policy", "Terms and Conditions"];

  const socialLinks = [
    { icon: <FaFacebook />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
  ];

  return (
   <div>
     <footer className="bg-[#4D5761] text-gray-300 py-8 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <h3 className="text-yellow-400 font-semibold">Your Logo</h3>
            <p className="mt-2 text-gray-400">
              Your name takes the hassle out of choosing a driving school by
              helping learner drivers find, compare and book verified driving
              instructors online.
            </p>
            <p className="mt-4 text-gray-400">
              The your name online platform brings transparency, choice and
              efficiency to booking and managing driving instructors and driving
              lessons in Sydney, Melbourne, Brisbane, Perth, Adelaide, Hobart,
              Gold Coast, Sunshine Coast, Newcastle, Central Coast, Geelong,
              Toowoomba, Wollongong, Cairns, Coffs Harbour, Bendigo, Canberra.
            </p>
          </div>

          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="text-yellow-400 font-semibold">{section.title}</h4>
              <ul className="mt-2 space-y-2 text-gray-400">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
  

 
      </div>
    </footer>
    <div className="flex flex-col md:flex-row items-center justify-between  border-t bg-[#F0B000] border-gray-600 pt-10">
          <p className="text-white pl-28">© Your Company Name 2024</p>
          <div className="flex space-x-4 md:mt-0">
            {bottomLinks.map((text, index) => (
              <a key={index} href="#" className="text-white hover:text-yellow-400">
                {text}
              </a>
            ))}
          </div>
          <div className="flex items-start space-x-4 mt-4  pr-10 md:mt-0">
  {socialLinks.map((social, index) => (
    <a key={index} href={social.link} className="text-white hover:text-yellow-400 text-2xl">
      {social.icon}
    </a>
  ))}
</div>

        </div>
   </div>
  );
};

export default Footer;
