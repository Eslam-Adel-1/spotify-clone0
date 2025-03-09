// Default Image Import
import ProfilePic from "../../assets/images/Default_Image.png";

// useContext Imports
import { useContext } from "react";
import { userContext } from "../../useContext/userContext.jsx";
import { mobNavContext } from "../../useContext/mobNavContext.jsx";

// icons imports
import { GiHamburgerMenu } from "react-icons/gi";

// Components Imports
import ProfileDialog from "./ProfileDialog.jsx";

const ProfileComp = () => {
  const { user } = useContext(userContext);
  const { mobNav, setMobNav } = useContext(mobNavContext);

  return (
    <div className="flex items-center justify-center gap-4">
      <p className="text-white text-md font-[Spotify] hidden sm:block">
        {user?.name}
      </p>

      <ProfileDialog>
        <img
          src={user?.image || ProfilePic}
          alt="profile pic"
          className="w-9 h-9 rounded-full flex-shrink-0"
          loading="lazy"
        />
      </ProfileDialog>
      <GiHamburgerMenu
        className="text-white text-2xl sm:hidden"
        onClick={() => setMobNav(!mobNav)}
      />
    </div>
  );
};

export default ProfileComp;
