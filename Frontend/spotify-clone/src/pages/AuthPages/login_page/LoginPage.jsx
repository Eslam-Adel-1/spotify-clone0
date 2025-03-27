// React Imports
import { useState, useContext } from "react";

// Images Imports
import spotifyBWlogo from "../../../assets/images/spotifyBWlogo.png";
import google_icon from "../../../assets/images/google_icon.png";

// Components Imports
import CustomPasswordInput from "../../../Ui/Components/CustomPasswordInput";
import CustomTextField from "../../../Ui/Components/CustomTextField";
import CustomButton from "../../../Ui/Components/CustomButton";

// Icons Imports
import { MdAlternateEmail } from "react-icons/md";

// Custom Hooks Imports
import { useScrollUp } from "../../../Custom Hooks/useScrollUp";

// React Hook Form Imports
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../../lib/zodSchemas";

// Login/Register Api Calls
import { authApiCall } from "../../../lib/authApiCalls";

// React Router Imports
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

// user useContext Imports
import { userContext } from "../../../useContext/userContext.jsx";

//==========================================

const LoginPage = () => {
  const { setUser } = useContext(userContext);
  const scrollUp = useScrollUp();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

  //-----------------------------------
  const onSubmit = async (data, e) => {
    e.preventDefault;
    setLoading(true);
    try {
      const result = await authApiCall(
        `${import.meta.env.VITE_API_URL}login`,
        data
      );
      toast.success(result.message);
      setUser(result.user);
      navigate("/home");
    } catch (err) {
      toast.error(err.message);
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
              className="w-[65px] "
              src={spotifyBWlogo}
              alt="spotify logo"
              loading="lazy"
            />
            <div className="text-gray-400 font-mono ">
              <p className="text-red-600 bg-white/40 p-2 rounded-md text-center">
                Our BackEnd is down at the moment you can go to * /home * to
                take a look at the app until we fix the problem unexpected
                behavior and errors might occur
              </p>
              <p className="text-center">* Demo Account *</p>
              <p>Email : eslam1231992@hotmail.com</p>
              <p>Password : Wwww@123</p>
            </div>
            <div className="flex flex-col items-center justify-center text-white w-fit">
              <h1 className="text-3xl md:text-4xl text-center font-bold font-[Spotify]">
                Login to Spotify
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

            <div className="w-full flex flex-col gap-2">
              <label className="font-[Spotify] text-white" htmlFor="password">
                Password
              </label>

              <CustomPasswordInput
                register={register("password")}
                errors={errors.password}
              />
            </div>
            {loading ? (
              <div
                className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-black rounded-full dark:text-black"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <CustomButton name="Login" />
            )}
          </form>
        </div>
      </div>
      {/* //====================================================== */}

      <div className="flex items-center justify-center p-10">
        <span className="w-1/2 h-[1px] bg-white"></span>
        <h6 className="text-white font-[Spotify] mx-4 text-sm">OR</h6>
        <span className="w-1/2 h-[1px] bg-white"></span>
      </div>

      {/* //====================================================== */}

      <div className="flex items-center justify-center px-4 sm:px-20 md:px-28 gap-2">
        <CustomButton
          name="Login with Google"
          icon={google_icon}
          className="bg-opacity-0 text-white border border-white"
        />
      </div>
      <div className="flex  items-center justify-center pt-10 px-10 gap-2">
        <span className="w-full h-[1px] bg-white my-4"></span>
      </div>

      <p className="flex items-center justify-center font-[Spotify] text-md text-white">
        Don't have an account?
        <Link to="/register" className="underline ml-1">
          Register here
        </Link>
      </p>
      <p className="flex items-center justify-center font-[Spotify] text-md text-white">
        <Link to="/ForgotPassword" className="underline ml-1">
          Forgot your password ?
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
