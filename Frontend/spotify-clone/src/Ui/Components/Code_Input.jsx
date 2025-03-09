// React Imports
import { useState, useContext } from "react";
import { userContext } from "../../useContext/userContext.jsx";

// OTP input
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "../../components/ui/input-otp.jsx";

// Images Imports
import spotifyBlack from "../../assets/images/spotifyBlack.png";

// React Router Imports
import { useNavigate } from "react-router-dom";

// Login/Register Api Calls
import { verificationCodeApi } from "../../lib/authApiCalls.js";

// Components Imports
import Custom2Button from "../../Ui/Components/Custom2Button.jsx";
import toast from "react-hot-toast";

//--------------------------------

function CodeInput({ email, setShowModal }) {
  const { setUser } = useContext(userContext);
  const [codeValue, setCodeValue] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      verificationCode: codeValue,
      email: email,
    };
    try {
      const result = await verificationCodeApi(
        `${import.meta.env.VITE_API_URL}verifyAccount`,
        data
      );
      setShowModal(false);
      toast.success(result.message);
      setUser(result.user);
      navigate("/home");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  //--------------------------------

  return (
    <div className="flex flex-col items-center justify-center">
      <img src={spotifyBlack} alt="spotify logo" className="w-[65px]" />
      <h1 className="font-[Spotify] font-bold text-2xl text-center my-2">
        Enter Your Verification Code
      </h1>
      <form
        className="flex flex-col gap-4 items-center justify-center"
        onSubmit={(e) => onSubmit(e)}
      >
        <div className=" border border-black rounded-md">
          <InputOTP
            maxLength={6}
            value={codeValue}
            onChange={(value) => setCodeValue(value)}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <Custom2Button>
          {loading ? (
            <div
              className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-black rounded-full dark:text-black"
              role="status"
              aria-label="loading"
            >
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <p>Submit</p>
          )}
        </Custom2Button>
        <div className="text-center text-sm">
          {codeValue === "" ? (
            <>Enter your one-time password.</>
          ) : (
            <>You entered: {codeValue}</>
          )}
        </div>
        <div className="text-center text-sm"></div>
      </form>
    </div>
  );
}

export default CodeInput;
