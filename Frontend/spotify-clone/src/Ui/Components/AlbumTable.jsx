import { FiClock } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { useContext } from "react";
import { musicContext } from "../../useContext/musicContext.jsx";

const AlbumTable = ({ songs }) => {
  const { setOpenMusicPlayer, setSongDetails } = useContext(musicContext);

  const handleSongClick = (song) => {
    setOpenMusicPlayer(true);
    setSongDetails({
      song_name: song.song_name,
      artist: song.artist,
      songSrc: song.songSrc,
      cover: song.cover,
    });
  };
  return (
    <table className="hidden sm:table w-full text-white my-5 text-sm">
      <tbody>
        {/* // rows header cells */}

        <tr className="text-left border-b border-white/20 ">
          <th className=" px-4 py-2 flex items-center gap-2">
            <span className="text-lg">#</span> Title
          </th>
          <th className="px-4 py-2">Artist</th>
          <th className="px-4 py-2">
            <FiClock />
          </th>
        </tr>

        {/* // rows cells */}

        {songs.map((song, index) => {
          return (
            <tr
              className="hover:cursor-pointer hover:bg-white/5 group transition-all duration-200"
              key={index}
              onClick={() => {
                handleSongClick(song);
              }}
            >
              <td className="px-4 py-5 flex items-center">
                <span className="mr-2 font-[Spotify] group-hover:hidden w-6">
                  {`0${index + 1}`}{" "}
                </span>
                <span className="hidden mr-2 font-[Spotify] group-hover:inline-block w-6">
                  <FaPlay />
                </span>
                <img
                  src={song.cover}
                  className="w-14 h-14 rounded-sm mr-3"
                  alt=""
                />
                <div>
                  <p className="hover:underline hover:underline-offset-2">
                    {song.song_name}
                  </p>
                  <p className="text-white/50">released 2022</p>
                </div>
              </td>
              <td className="px-4 py-5">{song.artist}</td>
              <td className="px-4 py-5">{song.duration}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default AlbumTable;
