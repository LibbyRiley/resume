import React, { useState, useRef } from "react";
import { PersonalDetails } from "../data";

interface BusinessCardProps {
  details: PersonalDetails;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ details }) => {
  const { email, location } = details;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="business-card relative left-0  p-0 mt-8 border-top transition-all transform lg:hover:border-green-400 lg:hover:rounded-lg lg:hover:bg-green-900 lg:hover:scale-105 lg:hover:shadow-custom lg:hover:p-8 lg:hover:-left-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="font-bold text-lg ">
        {isHovered ? "Libby Riley" : "Contact Details"}
      </h2>
      {isHovered && (
        <p className="mt-2 font-mono text-lg ">Front-end Developer</p>
      )}
      {isHovered && <p className="mt-4 font-mono text-sm ">{location}</p>}
      <p className="mt-2 font-mono text-sm ">
        <a
          href="{personalDetails.linkedIn}"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          www.linkedin.com/in/libbyriley/
        </a>
      </p>
      <p className="mt-2 font-mono text-sm ">{email}</p>
    </div>
  );
};

export default BusinessCard;
