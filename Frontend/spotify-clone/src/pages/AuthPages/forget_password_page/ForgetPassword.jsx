import { useState } from "react";
import spotifyBWlogo from "../../../assets/images/spotifyBWlogo.png";
import CustomTextField from "../../../Ui/Components/CustomTextField";
import { MdAlternateEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import CustomButton from "../../../Ui/Components/CustomButton";
import { useScrollUp } from "../../../Custom Hooks/useScrollUp";
import { set, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgetPasswordSchema } from "../../../lib/zodSchemas";
import { authApiCall } from "../../../lib/authApiCalls";

const ForgetPassword = () => {
  const scrollUp = useScrollUp();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(forgetPasswordSchema) });

  //-----------------------------------
  const onSubmit = async (data, e) => {
    e.preventDefault;
    setLoading(true);
    try {
      const result = await authApiCall(data);
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  //-----------------------------------

  return (
    <div className="w-full md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[35%] max-w-[1000px]">
      <div className="w-full md:p-10 md:bg-gradient-to-b md:from-white/5 md:to-[#b3b3b3]/5 md:shadow-md md:shadow-black-500 rounded-xl flex items-center justify-center min-h-[680px]">
        <div className="flex flex-col items-center justify-center w-[80%] sm:w-[90%] md:w-[80%] lg:w-[75%] xl:w-[60%]">
          <div className="flex flex-col items-center justify-center gap-4 ">
            <img
              className="w-[65px]"
              src={spotifyBWlogo}
              alt="spotify logo"
              loading="lazy"
            />
            <div className="flex flex-col items-center justify-center text-white w-fit">
              <h1 className="text-3xl md:text-4xl text-center font-bold font-[Spotify]">
                Reset Password
              </h1>
            </div>
          </div>
          {/* //====================================================== */}
          <form
            className="flex flex-col items-start justify-start w-full my-6 gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <CustomTextField
              label="Email Address"
              type="email"
              errors={errors.email}
              register={register("email")}
              icon={<MdAlternateEmail className="w-5 h-5 flex-shrink-0" />}
            />

            <CustomButton name="Reset Password" />
          </form>
        </div>
      </div>

      {/* //====================================================== */}

      <div className="flex  items-center justify-center pt-10 px-10 gap-2">
        <span className="w-full h-[1px] bg-white my-4"></span>
      </div>

      <p className="flex items-center justify-center font-[Spotify] text-md text-white">
        Don't have an account?
        <Link to="/register" className="underline ml-1">
          Register here
        </Link>
      </p>
    </div>
  );
};

export default ForgetPassword;
