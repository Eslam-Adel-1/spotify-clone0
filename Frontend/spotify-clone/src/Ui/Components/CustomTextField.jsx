import React from "react";
import { MdReportGmailerrorred } from "react-icons/md";

const CustomTextField = ({ label, type, icon, register, errors }) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <label className="font-[Spotify] text-white" htmlFor={type}>
        {label}
      </label>
      <div className="flex items-center  w-full h-11 bg-white/5 placeholder:text-white/70 text-white text-sm border border-white rounded-sm px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-300 hover:border-slate-300 shadow-sm focus:shadow">
        {icon}
        <input
          {...register}
          id={type}
          name={type}
          className="w-full placeholder:text-white/70 text-white text-sm px-3 py-2 bg-transparent outline-none "
          placeholder={label}
        />
      </div>
      {errors?.message && (
        <p className="text-red-500 flex items-center gap-2 ">
          <MdReportGmailerrorred className="w-5 h-5" />
          {errors?.message}
        </p>
      )}
    </div>
  );
};

export default CustomTextField;
