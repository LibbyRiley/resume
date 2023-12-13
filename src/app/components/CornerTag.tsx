import * as React from "react";

const CornerTag: React.FC = () => {
  return (
    <div className="group z-20 fixed lg:top-4 lg:right-4 hidden lg:block ">
      <div className="relative">
        <p className="absolute rounded right-12 top-0 w-[max-content] px-2 py-2 bg-green-900 opacity-0 transition-all duration-300 -translate-y-full  group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
          This page is built with NextJS, TypeScript, and TailwindCSS
        </p>
        <button className="relative p-2 bg-green-700 rounded cursor-pointer hover:bg-green-600">{`</>`}</button>
      </div>
    </div>
  );
};

export default CornerTag;
