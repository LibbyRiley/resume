import React, { useState } from "react";

const OpenToWorkButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative inline-block w-full">
      <a
        href="https://www.linkedin.com/in/libbyriley/"
        className="fixed lg:relative left-0 top-0 lg:mt-8 text-sm flex w-full justify-center pb-6 pt-8 lg:rounded-xl lg:border lg:bg-green lg:p-4 transition-colors hover:border-green-600 hover:bg-green-600"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="font-mono">Open for work, connect on LinkedIn</span>
        <span className="ml-2 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </a>

      {isHovered && (
        <div
          className="absolute hidden lg:block top-6 left-full ml-4 w-full z-20 bg-white shadow-md rounded mt-2 p-1"
          style={{
            background:
              "linear-gradient(to right, #FFD700, #FF7F50, #FF69B4, #9370DB, #40E0D0)",
          }}
        >
          <div className="bg-green-900 p-4">
            <h3 className="text-lg font-semibold p-2 ">
              What I'm Looking For:
            </h3>
            <ul className="list-disc text-sm px-4 py-2 grid gap-2">
              <li>Remote/hybrid roles</li>
              <li>Positive, and inclusive team culture</li>
              <li>A strong culture of designer and developer collaboration</li>
              <li>Learning & professional development</li>
              <li>The opportunity to work alongside other senior developers</li>
            </ul>{" "}
          </div>
        </div>
      )}
    </div>
  );
};

export default OpenToWorkButton;
