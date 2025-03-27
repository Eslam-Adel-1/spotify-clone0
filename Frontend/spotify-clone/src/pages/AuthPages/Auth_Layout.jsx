// Images imports
import spotifyLogo from "../../assets/images/spotifyLogo.png";

// Components imports
import Footer from "../../Ui/Components/Footer.jsx";
import PageLoader from "../../Ui/Components/Loaders.jsx";

// CSS imports
import "../../App.css";

// react router imports
import { Outlet, useNavigate } from "react-router-dom";

// Api Calls
import { handleUserSession } from "../../lib/userApiCalls.js";

// React imports
import { useContext, useEffect, useState } from "react";

// useContext imports
import { userContext } from "../../useContext/userContext.jsx";

// = = = = = = = = = = = = = = = = = = = = = = = = = = =

const Auth_Layout = () => {
  // = = = = = = = = = = = = = = = = = = = = = = = = = = =
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(userContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const userData = await handleUserSession();
        if (userData) {
          setUser(userData);
          navigate("/home");
        }
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  // = = = = = = = = = = = = = = = = = = = = = = = = = = =

  return (
    <main className="relative min-h-screen py-24 box-border bg-gradient-to-b to-[#1db954] from-black/95 flex items-center justify-center">
      <img
        className="h-10 absolute top-4 left-4 xl:h-12"
        src={spotifyLogo}
        alt="spotify logo"
      />
      {loading ? (
        <PageLoader />
      ) : (
        <>
          <Outlet />
          <Footer />
        </>
      )}
    </main>
  );
};

export default Auth_Layout;
