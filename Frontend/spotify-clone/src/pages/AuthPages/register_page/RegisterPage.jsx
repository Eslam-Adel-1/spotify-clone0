// React Imports
import { useState } from "react";

// Images Imports
import spotifyBWlogo from "../../../assets/images/spotifyBWlogo.png";
import google_icon from "../../../assets/images/google_icon.png";

// Components Imports
import CustomPasswordInput from "../../../Ui/Components/CustomPasswordInput";
import CustomModal from "../../../Ui/Components/CustomModal.jsx";
import CustomTextField from "../../../Ui/Components/CustomTextField";
import CustomButton from "../../../Ui/Components/CustomButton";
import CodeInput from "../../../Ui/Components/Code_Input.jsx";

// Icons Imports
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

// Custom Hooks Imports
import { useScrollUp } from "../../../Custom Hooks/useScrollUp";

// React Hook Form Imports
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../../lib/zodSchemas.js";

// Login/Register Api Calls
import { authApiCall } from "../../../lib/authApiCalls.js";
import toast from "react-hot-toast";

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const RegisterPage = () => {
  const scrollUp = useScrollUp();
  const [email, setEmail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerSchema) });

  // -----------------
  const onSubmit = async (data, e) => {
    e.preventDefault;
    setLoading(true);
    try {
      const result = await authApiCall(
        `${import.meta.env.VITE_API_URL}register`,
        data
      );
      setEmail(data.email);
      toast.success(result.message);
      setShowModal(true);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  // -----------------

  return (
    <>
      <div className="w-full md:w-[60%] lg:w-[50%]">
        <div className="w-full md:p-10 md:bg-gradient-to-b md:from-white/5 md:to-[#b3b3b3]/5 md:shadow-md md:shadow-black-500 rounded-xl flex items-center justify-center">
          <div className="flex flex-col  items-center justify-center w-[80%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[50%]">
            <div className="flex flex-col items-center justify-center gap-4 ">
              <img
                className="w-[65px]"
                src={spotifyBWlogo}
                alt="spotify logo"
                loading="lazy"
              />
              <div className="flex flex-col items-center justify-center text-white w-fit">
                <h1 className="text-3xl md:text-4xl text-center font-bold font-[Spotify]">
                  Sign up to
                </h1>
                <h1 className="text-3xl md:text-4xl text-center font-bold font-[Spotify] mt-3">
                  start listening
                </h1>
              </div>
            </div>
            {/* //====================================================== */}
            <form
              className="flex flex-col items-start justify-start w-full my-6 gap-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <CustomTextField
                label="Name"
                type="name"
                errors={errors.name}
                register={register("name")}
                icon={<CgProfile className="w-5 h-5" />}
              />

              <CustomTextField
                label="Email Address"
                type="email"
                errors={errors.email}
                register={register("email")}
                icon={<MdAlternateEmail className="w-5 h-5" />}
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
                <CustomButton name="Sign up" />
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
            name="Sign up with Google"
            icon={google_icon}
            className="bg-opacity-0 text-white border border-white"
          />
        </div>
        <div className="flex  items-center justify-center pt-10 px-10 gap-2">
          <span className="w-full h-[1px] bg-white my-4"></span>
        </div>

        <p className="flex items-center justify-center font-[Spotify] text-md text-white">
          Already have an account?{" "}
          <Link to="/login" className="underline ml-1">
            Log in here.
          </Link>
        </p>
      </div>
      {showModal && (
        <CustomModal>
          <CodeInput email={email} setShowModal={setShowModal} />
        </CustomModal>
      )}
    </>
  );
};

export default RegisterPage;
