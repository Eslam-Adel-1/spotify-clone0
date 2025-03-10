// Components imports
import SingerCard from "../../../Ui/Components/SingerCard";
import AlbumCard from "../../../Ui/Components/AlbumCard";

import {
  singersArray,
  Albums,
  popular_songs,
  popular_albums,
} from "../../../lib/arrays.jsx";

const MainPage = () => {
  return (
    <main
      className="relative h-full w-full z-0 p-6 overflow-y-scroll
      [&::-webkit-scrollbar]:w-1
    [&::-webkit-scrollbar-thumb]:bg-white
      [&::-webkit-scrollbar-thumb]:rounded-full
      overflow-x-hidden
    "
    >
      <span
        aria-hidden="true"
        className="absolute right-0 left-0 top-0 rounded-md w-full h-[250px] bg-gradient-to-b to-transparent via-[#1db954]/50 from-[#1db954]/80 -z-10"
      ></span>
      {/* //=============================== */}
      <h1 className="text-white text-4xl font-bold z-10 font-[Spotify] ">
        Welcome to Spotify
      </h1>
      {/* //=============================== */}

      <section className="mt-10">
        <div className="flex items-center justify-between mb-7">
          <h1 className="text-white font-[Spotify] text-2xl">Popular Songs</h1>
          <p className="hover:underline hover:underline-offset-2 cursor-pointer text-lg text-white font-[Spotify]">
            Show All
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 ">
          {popular_songs.map((song, index) => {
            return (
              <SingerCard
                key={index}
                name={song.song_name}
                image={song.cover}
                title={song.artist}
                songSrc={song.songSrc}
              />
            );
          })}
        </div>
      </section>
      {/* //=============================== */}
      <section className="mt-10">
        <div className="flex items-center justify-between mb-7">
          <h1 className="text-white font-[Spotify] text-2xl">
            Popular Artists
          </h1>
          <p className="hover:underline hover:underline-offset-2 cursor-pointer text-lg text-white font-[Spotify]">
            Show All
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 ">
          {singersArray.map((singer, index) => {
            return (
              <SingerCard
                key={index}
                name={singer.name}
                image={singer.image}
                title={singer.title}
              />
            );
          })}
        </div>
      </section>
      {/* //=============================== */}
      <div aria-hidden="true" className="w-full h-[1px] bg-white/5 my-6"></div>
      {/* //=============================== */}
      <section className="mt-10">
        <div className="flex items-center justify-between mb-7">
          <h1 className="text-white font-[Spotify] text-2xl mb-7">
            Popular Singles and Albums
          </h1>
          <p className="hover:underline hover:underline-offset-2 cursor-pointer text-lg text-white font-[Spotify]">
            Show All
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 ">
          {popular_albums.map((album, index) => {
            return (
              <AlbumCard
                name={album.name}
                image={album.image}
                album={album}
                key={index}
              />
            );
          })}
        </div>
      </section>
      <section className="mt-10">
        <div className="flex items-center justify-between mb-7">
          <h1 className="text-white font-[Spotify] text-2xl mb-7">
            Popular Singles and Albums
          </h1>
          <p className="hover:underline hover:underline-offset-2 cursor-pointer text-lg text-white font-[Spotify]">
            Show All
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 ">
          {Albums.map((singer, index) => {
            return (
              <AlbumCard name={singer.name} image={singer.image} key={index} />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default MainPage;
