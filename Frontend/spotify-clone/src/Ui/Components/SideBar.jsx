import { sidbarItems, library, playlists } from "../../lib/arrays.jsx";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <aside
      className="text-white w-full h-full overflow-y-scroll py-4 
    [&::-webkit-scrollbar]:w-[3px]
    [&::-webkit-scrollbar-track]:bg-transparent
    
    [&::-webkit-scrollbar-thumb]:rounded-full
     "
    >
      <ul className="flex flex-col box-border">
        {sidbarItems.map(({ name, Icon }, index) => {
          return (
            <li
              key={index}
              className="flex items-center gap-5 px-5 py-2 hover:bg-gradient-to-r from-white/25  to-transparent border-r-4 rounded-sm rounded-tr-none rounded-br-none cursor-pointer border-[#1db954] border-opacity-0 hover:border-opacity-100"
              onClick={() => navigate("/" + name)}
            >
              {Icon}
              <p className="font-[Spotify] font-semibold text-[12px] tracking-[0.5px]">
                {name}
              </p>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col py-4 my-2 box-border">
        <p className="text-white/30 font-bold text-sm tracking-wide font-[Spotify] ml-2">
          LIBRARY
        </p>
        {library.map(({ name, Icon }, index) => {
          return (
            <li
              key={index}
              className="flex items-center gap-5 px-5 py-2 hover:bg-gradient-to-r from-white/25  to-transparent border-r-4 rounded-sm rounded-tr-none rounded-br-none cursor-pointer border-[#1db954] border-opacity-0 hover:border-opacity-100"
            >
              {Icon}
              <p className="font-[Spotify] font-semibold text-[12px] tracking-[0.5px]">
                {name}
              </p>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col py-4 my-2 box-border">
        <p className="text-white/30 font-bold text-sm tracking-wide font-[Spotify] ml-2">
          YOUR PLAYLISTS
        </p>
        {playlists.map(({ name, Icon }, index) => {
          return (
            <li
              key={index}
              className="flex items-center gap-5 px-5 py-2 hover:bg-gradient-to-r from-white/25  to-transparent border-r-4 rounded-sm rounded-tr-none rounded-br-none cursor-pointer border-[#1db954] border-opacity-0 hover:border-opacity-100"
            >
              {Icon}
              <p className="font-[Spotify] font-semibold text-[12px] tracking-[0.5px]">
                {name}
              </p>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default SideBar;
