import React from "react";

const CustomButton = ({ name, className, icon, image_className }) => {
  return (
    <button
      className={` flex flex-row items-center px-5 hover:scale-105 gap-4 justify-center bg-white  shadow-sm w-full h-11 rounded-3xl transition-all duration-300 font-[Spotify] ${className}`}
    >
      {icon && (
        <img
          src={icon}
          alt="button icon"
          className={`${image_className} w-6 h-6 bg-white p-1 rounded-full`}
        />
      )}
      <p className="">{name}</p>
    </button>
  );
};

export default CustomButton;
