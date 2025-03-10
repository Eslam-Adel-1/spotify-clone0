// Icons Imports
import { FaPlay, FaPause } from "react-icons/fa";
// Contexts imports
import { useContext, useEffect, useState } from "react";
import { musicContext } from "../../useContext/musicContext.jsx";

const SingerCard = ({ image, name, title, songSrc }) => {
  const {
    setOpenMusicPlayer,
    setSongDetails,
    setAlbumDetails,
    songDetails,
    openMusicPlayer,
  } = useContext(musicContext);
  const [playing, setPlaying] = useState(false);

  //==============================

  useEffect(() => {
    if (!songDetails) return;
    if (songSrc === songDetails.songSrc) {
      setPlaying(true);
    }
    if (songSrc !== songDetails.songSrc) {
      setPlaying(false);
    }
  }, [songDetails?.songSrc]);

  //==============================

  const handlePlay = () => {
    setAlbumDetails(null);
    setPlaying(true);
    if (!openMusicPlayer) {
      setOpenMusicPlayer(true);
    }
    setSongDetails({
      song_name: name,
      artist: title,
      songSrc: songSrc,
      cover: image,
    });
  };

  //==============================

  return (
    <div className="flex flex-col w-full items-start hover:bg-gradient-to-t from-white/5 via-white/5 to-transparent p-3 rounded-lg hover:cursor-pointer">
      <div className="relative w-full h-full bg-white/5 rounded-full group/div">
        <img
          src={image}
          alt={name}
          className="min-w-[200px] min-h-[200px] max-h-[250px] max-w-[250px] md:min-w-0 md:min-h-0 w-full h-full rounded-full shadow-lg md:shadow-md shadow-black/30"
          loading="lazy"
        />
        <span className="absolute hidden shadow-black shadow-xl bottom-5 right-0 bg-green-500 rounded-full group-hover/div:flex hover:bg-green-400 group/span items-center justify-center w-[30%] h-[30%] cursor-pointer">
          {playing ? (
            <FaPause
              className="h-[30%] w-[30%] group-hover/span:h-4 group-hover/span:w-4  ease transition-all"
              onClick={handlePlay}
            />
          ) : (
            <FaPlay
              className="h-[30%] w-[30%] group-hover/span:h-4 group-hover/span:w-4  ease transition-all"
              onClick={handlePlay}
            />
          )}
        </span>
      </div>
      <p className="text-white text-md font-[Spotify] mt-2 hover:underline cursor-pointer ">
        {name}
      </p>
      <p className="text-white text-sm font-[Spotify]">{title}</p>
    </div>
  );
};

export default SingerCard;
