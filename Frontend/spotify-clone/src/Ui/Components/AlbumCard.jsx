import { FaPlay, FaPause } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { musicContext } from "../../useContext/musicContext.jsx";

const AlbumCard = ({ image, name, artist, album }) => {
  const navigate = useNavigate();
  const {
    setAlbumDetails,
    setOpenMusicPlayer,
    setSongDetails,
    openMusicPlayer,
    songDetails,
  } = useContext(musicContext);
  const [play, setPlay] = useState(false);

  //==============================

  const handlePlayAlbum = () => {
    setSongDetails(null);
    setPlay(true);
    if (!openMusicPlayer) {
      setOpenMusicPlayer(true);
    }
    setAlbumDetails(album);
  };

  //==============================

  return (
    <div className="flex flex-col w-full hover:bg-white/5 p-3 rounded-md hover:cursor-pointer">
      <div className="relative w-full h-full bg-white/5 rounded-lg group/div">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="min-w-[200px] min-h-[200px] max-h-[250px] max-w-[250px] md:min-w-0 md:min-h-0 w-full h-full  rounded-md shadow-lg md:shadow-sm shadow-black"
          onClick={() => navigate(`/album/${name}`)}
        />
        <span className="absolute hidden shadow-black shadow-xl bottom-5 right-0 bg-green-500 rounded-full group-hover/div:flex hover:bg-green-400 group/span items-center justify-center w-[30%] h-[30%] cursor-pointer">
          {play ? (
            <FaPause
              className="h-[30%] w-[30%] group-hover/span:h-4 group-hover/span:w-4  ease transition-all"
              onClick={handlePlayAlbum}
            />
          ) : (
            <FaPlay
              className="h-[30%] w-[30%] group-hover/span:h-4 group-hover/span:w-4  ease transition-all"
              onClick={handlePlayAlbum}
            />
          )}
        </span>
      </div>
      <p className="text-white text-md font-[Spotify] mt-2">{name}</p>
      <p className="text-white text-sm font-[Spotify]">{artist}</p>
    </div>
  );
};

export default AlbumCard;
