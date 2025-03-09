import spotifyBWlogo from "../../assets/images/spotifyBWlogo.png";

const SpotifySignIn = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-full gap-6">
      {/* //================================== */}
      <div className="relative flex items-center justify-center gap-4">
        <img src={spotifyBWlogo} alt="Spotify Logo" className="h-16 w-16" />
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-white/5 rounded-full animate-ping"
        />
      </div>
      {/* //================================== */}
      <div className="flex flex-col items-center justify-center gap-1">
        <h1 className="font-[Spotify] text-white">No Users Connected yet </h1>
        <p className="font-[Spotify] text-zinc-400 text-[12px] w-52 text-center ">
          wait for your friends to join
        </p>
      </div>
      {/* //================================== */}
      {/* <button className="w-[75%] h-10 rounded-full bg-[#1DB954] text-white font-[Spotify] hover:scale-105 transition-all duration-300 ease active:scale-95   ">
        Sign In
      </button> */}
    </section>
  );
};

export default SpotifySignIn;
