import React from "react";

const Custom2Button = ({ children }) => {
  return (
    <button className="relative inline-flex items-center justify-center w-[100px] p-3 px-4 font-medium tracking-wide text-white bg-[#1DB954] rounded-lg transition-all duration-300 ease-in-out hover:scale-105 active:scale-95">
      <span className="relative z-10 text-sm">{children}</span>
    </button>
  );
};

export default Custom2Button;
