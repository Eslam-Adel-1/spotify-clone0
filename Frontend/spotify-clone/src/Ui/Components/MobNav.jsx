import { IoCloseCircleOutline } from "react-icons/io5";
import SpotifyLogo from "../../assets/images/spotifyLogo.png";

// contexts imports
import { useContext } from "react";
import { mobNavContext } from "../../useContext/mobNavContext.jsx";
const MobNav = () => {
  const { setMobNav, setCurrentTab } = useContext(mobNavContext);
  return (
    <main className="bg-black p-2 fixed top-0 left-0 right-0 bottom-0 z-30">
      <img
        src={SpotifyLogo}
        alt="spotify-logo"
        className="h-7 fixed top-5 left-5 cursor-pointer"
        loading="lazy"
      />
      <IoCloseCircleOutline
        className="h-8 w-8 fixed top-5 right-5 cursor-pointer text-white"
        loading="lazy"
        onClick={() => setMobNav(false)}
      />

      <div className="h-full w-full flex items-center justify-center my-10">
        <ul className="flex flex-col gap-5 text-white font-[Spotify] text-2xl">
          <li
            onClick={() => {
              setCurrentTab("chats");
              setMobNav(false);
            }}
          >
            {" "}
            Chats{" "}
          </li>
          <li
            onClick={() => {
              setCurrentTab("menu");
              setMobNav(false);
            }}
          >
            {" "}
            Menu{" "}
          </li>
          <li
            onClick={() => {
              setCurrentTab("music");
              setMobNav(false);
            }}
          >
            {" "}
            Music{" "}
          </li>
        </ul>
      </div>
    </main>
  );
};

export default MobNav;
