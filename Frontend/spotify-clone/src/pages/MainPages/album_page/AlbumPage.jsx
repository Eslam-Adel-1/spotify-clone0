// images imports
import Spotify_Logo from "../../../assets/images/spotifyLogo.png";
import rotatePhone from "../../../assets/images/rotatePhone.gif";

// Components imports
import AlbumTable from "../../../Ui/Components/AlbumTable";

// react router imports
import { useParams } from "react-router-dom";

// arrays imports
import { popular_albums, random_colors } from "../../../lib/arrays.jsx";

// React imports
import { useEffect, useState } from "react";

const AlbumPage = () => {
  const { id } = useParams();
  const [randomNumber, setRandomNumber] = useState(0);

  let randomColor = random_colors[randomNumber];

  const album = popular_albums.find(
    (album) => album.name.toLowerCase() === id.toLowerCase()
  );

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * random_colors.length));
  }, []);

  return (
    <main
      className="relative h-full w-full z-0 p-6 overflow-y-scroll rounded-md
    [&::-webkit-scrollbar]:w-1
  [&::-webkit-scrollbar-thumb]:bg-white
    [&::-webkit-scrollbar-thumb]:rounded-full"
    >
      <span
        aria-hidden="true"
        className={`absolute top-0 right-0 left-0 bg-gradient-to-b ${randomColor} to-transparent h-[300px] -z-10`}
      ></span>
      <div className="flex flex-col">
        <div className="flex flex-col sm:flex-row gap-5 mb-[30px]">
          <img
            src={album.image}
            alt={album.name}
            className="w-[250px] h-[250px] sm:h-[170px] sm:w-[170px] rounded-sm "
          />
          <div className="flex flex-col gap-1">
            <p className="font-[SpotifyMix] font-thin text-white">Album</p>
            <h1 className="text-4xl text-white font-[SpotifyMix] tracking-tighter md:text-5xl lg:text-6xl">
              {album.name}
            </h1>
            <p className="font-[Spotify] font-thin text-white/60">
              {album.name}. The essential tracks, all in one playlist.
            </p>
            <img src={Spotify_Logo} alt="spotify logo" className="w-16 mt-2" />
          </div>
        </div>
        <div className=" sm:hidden flex flex-col justify-center items-center gap-3">
          <img
            src={rotatePhone}
            alt="rotate phone gif"
            className="w-[250px] "
          />
          <p className="text-white font-[Spotify] text-lg text-center">
            for a better experience, rotate your phone
          </p>
        </div>
        <AlbumTable id={id} songs={album.songs} />
      </div>
    </main>
  );
};

export default AlbumPage;
