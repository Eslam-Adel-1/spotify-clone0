import { TbPasswordMobilePhone } from "react-icons/tb";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { MdReportGmailerrorred } from "react-icons/md";
import { useState } from "react";

function CustomPasswordInput({ register, errors }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center w-full h-11 bg-white/5 placeholder:text-white/70 text-white text-sm border border-white rounded-sm px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-300 hover:border-slate-300 shadow-sm focus:shadow">
        <TbPasswordMobilePhone className="w-5 h-5 flex-shrink-0" />
        <input
          {...register}
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          className="w-full placeholder:text-white/70 text-white text-sm px-3 py-2 bg-transparent outline-none"
          placeholder="Password"
        />
        {showPassword ? (
          <MdVisibility
            className="w-5 h-5 cursor-pointer flex-shrink-0"
            onClick={() => setShowPassword(!showPassword)}
          />
        ) : (
          <MdVisibilityOff
            className="w-5 h-5 cursor-pointer flex-shrink-0"
            onClick={() => setShowPassword(!showPassword)}
          />
        )}
      </div>
      {errors?.message && (
        <p className="text-red-500 flex items-center gap-2">
          <MdReportGmailerrorred className="w-5 h-5" />
          {errors?.message}
        </p>
      )}
    </>
  );
}

export default CustomPasswordInput;
