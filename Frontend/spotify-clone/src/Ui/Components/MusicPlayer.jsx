// Icons imports
import { GoUnmute } from "react-icons/go";
import { GoMute } from "react-icons/go";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoRepeat } from "react-icons/io5";
// Components imports
import { Slider } from "@/components/ui/slider";
import { useEffect, useRef, useState } from "react";
// Utils imports
import { formattingTimeFunc } from "../../lib/formattedSongTime.js";
// Contexts imports
import { useContext } from "react";
import { musicContext } from "../../useContext/musicContext.jsx";

const MusicPlayer = () => {
  const [muted, setMuted] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [play, setPlay] = useState(false);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [songDuration, setSongDuration] = useState("0:00");
  const [barProgress, setBarProgress] = useState([0]);
  const audioRef = useRef(null);
  const { openMusicPlayer, songDetails, albumDetails, setSongDetails } =
    useContext(musicContext);

  //--------------------------

  // Functions

  const handleSongTime = (time) => {
    const songDuration = time;
    const newTime = formattingTimeFunc(songDuration);
    setSongDuration(newTime);
  };

  const handleBarProgress = (value) => {
    if (!audioRef.current) return;
    const currentProgressTime = (value[0] / 100) * audioRef.current.duration;
    audioRef.current.currentTime = currentProgressTime;
  };

  const handleVolume = (value) => {
    value[0] === 0 ? setMuted(true) : setMuted(false);
    audioRef.current.volume = value[0] / 100;
  };

  const handlePlay = () => {
    if (!audioRef.current) return;
    setPlay((play) => !play);
    !play ? audioRef.current.play() : audioRef.current.pause();
  };

  const handlePreviousSong = () => {
    if (!audioRef.current || !albumDetails) return;
    const albumLength = albumDetails.songs.length - 1;
    const currentSongIndex = albumDetails.songs.findIndex((song) => {
      return song.songSrc === songDetails.songSrc;
    });
    if (currentSongIndex === -1) return;
    else if (currentSongIndex === 0) {
      setSongDetails(albumDetails.songs[albumLength]);
      return;
    }
    setSongDetails(albumDetails.songs[currentSongIndex - 1]);
  };

  const handleNextSong = () => {
    if (!audioRef.current || !albumDetails) return;

    const albumLength = albumDetails.songs.length - 1;
    const currentSongIndex = albumDetails.songs.findIndex((song) => {
      return song.songSrc === songDetails.songSrc;
    });
    if (currentSongIndex === -1) return;
    if (currentSongIndex === albumLength) {
      setSongDetails(albumDetails.songs[0]);
      return;
    }
    setSongDetails(albumDetails.songs[currentSongIndex + 1]);
  };

  const handleRepeat = () => {
    if (!audioRef.current) return;
    setRepeat(() => !repeat);
    audioRef.current.loop = !repeat;
  };
  //--------------------------
  useEffect(() => {
    const setPlayingSongTime = () => {
      if (!audioRef.current) {
        return;
      }
      //=========
      if (albumDetails && !songDetails) {
        setSongDetails(albumDetails?.songs[0]);
        audioRef.current.src = albumDetails?.songs[0].songSrc;
      } else {
        audioRef.current.src = songDetails?.songSrc;
      }
      //===========

      audioRef.current.addEventListener("timeupdate", () => {
        setCurrentTime(formattingTimeFunc(audioRef.current.currentTime));
        setBarProgress([
          (audioRef.current.currentTime / audioRef.current.duration) * 100,
        ]);
        handleSongTime(audioRef.current.duration);
      });
    };
    setPlayingSongTime();

    return () => {
      audioRef.current?.removeEventListener("timeupdate", setPlayingSongTime);
    };
  }, [audioRef.current, songDetails?.songSrc]);

  useEffect(() => {
    const startAudio = () => {
      if (!audioRef.current) return;
      setPlay(true);
      audioRef.current.play();
    };
    startAudio();
  }, [openMusicPlayer, audioRef.current, songDetails?.songSrc]);

  //--------------------------
  // The Component

  return (
    <section className=" bg-white/5 border-t-2 border-white/20 w-full h-20 px-4 flex items-center justify-center">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <img
            src={songDetails?.cover}
            alt={songDetails?.song_name}
            className="w-12 h-12 rounded-sm shadow-sm shadow-white/40 hidden sm:block"
          />
          <div className="flex-col font-[Spotify] text-white text-[13px] hidden sm:flex">
            <p>{songDetails?.song_name}</p>
            <p className="text-white/50">{songDetails?.artist}</p>
          </div>
        </div>
        {/* //========================================== */}

        <div className="flex flex-col items-center mx-auto w-[90%] sm:w-[70%] md:w-[50%] gap-2">
          <div className="flex items-center gap-4">
            <MdSkipPrevious
              className="hover:text-white text-white/50 text-3xl cursor-pointer"
              onClick={handlePreviousSong}
            />
            {play ? (
              <FaPause
                className="hover:text-white text-white/50 text-xl cursor-pointer"
                onClick={handlePlay}
              />
            ) : (
              <FaPlay
                className="hover:text-white text-white/50 text-xl cursor-pointer"
                onClick={handlePlay}
              />
            )}

            <MdSkipNext
              className="hover:text-white text-white/50 text-3xl cursor-pointer"
              onClick={handleNextSong}
            />
          </div>
          <div className="flex items-center gap-2 w-[100%]">
            <p className="text-white text-[12px] font-[Spotify] w-8">
              {currentTime}
            </p>

            <Slider
              defaultValue={[30]}
              handleChange={handleBarProgress}
              value={barProgress}
              max={100}
              step={1}
              classNameTrack="bg-green-500/40 flex-1"
            />

            <p className="text-white text-[12px] font-[Spotify] w-8">
              {songDuration}
            </p>
          </div>
        </div>
        {/* //========================================== */}
        <div className="items-center w-28 gap-2 hidden md:flex">
          <IoRepeat
            className={`${
              repeat ? "text-[#1ED760]" : "text-white"
            } text-4xl cursor-pointer`}
            onClick={handleRepeat}
          />
          {muted ? (
            <GoMute
              className="text-white text-3xl cursor-pointer"
              onClick={() => setMuted(() => !muted)}
            />
          ) : (
            <GoUnmute
              className="text-white text-3xl cursor-pointer"
              onClick={() => setMuted(() => !muted)}
            />
          )}
          <Slider
            defaultValue={audioRef.current?.volume || muted ? [0] : [10]}
            handleChange={handleVolume}
            max={100}
            step={1}
          />
        </div>
      </div>
      <audio
        ref={audioRef}
        muted={muted}
        loop={repeat}
        onEnded={() => setPlay((play) => !play)}
      />
    </section>
  );
};

export default MusicPlayer;
