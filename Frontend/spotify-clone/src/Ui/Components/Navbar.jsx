// Components Imports
import ProfileComp from "./ProfileComp";
import SearchBar from "./SearchBar";

// Images Imports
import SpotifyLogo from "../../assets/images/spotifyLogo.png";

// Icons Imports
import { IoMdNotifications } from "react-icons/io";
import { RiMusicAiFill } from "react-icons/ri";

// react router imports
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="h-12 w-full bg-white/5 flex items-center justify-between px-6 rounded-sm">
      <div className="flex items-center justify-center">
        <img
          src={SpotifyLogo}
          alt="Spotify Logo"
          className="h-7 mr-10 cursor-pointer"
          onClick={() => navigate("/home")}
        />
        <SearchBar />
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className="hidden sm:block relative hover:bg-[#212121]  p-2 box-content rounded-full cursor-pointer">
          <RiMusicAiFill className="text-white text-xl" />
        </div>
        <div className="hidden sm:block relative hover:bg-[#212121]  p-2 box-content rounded-full cursor-pointer">
          <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full"></span>
          <IoMdNotifications className="text-white text-xl" />
        </div>
        <ProfileComp />
      </div>
    </nav>
  );
};

export default Navbar;
