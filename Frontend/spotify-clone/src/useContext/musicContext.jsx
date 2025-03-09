import { useState, createContext } from "react";
export const musicContext = createContext(null);

const MusicPlayerContext = ({ children }) => {
  const [openMusicPlayer, setOpenMusicPlayer] = useState(false);
  const [songDetails, setSongDetails] = useState(null);
  const [albumDetails, setAlbumDetails] = useState(null);

  return (
    <musicContext.Provider
      value={{
        openMusicPlayer,
        setOpenMusicPlayer,
        songDetails,
        setSongDetails,
        albumDetails,
        setAlbumDetails,
      }}
    >
      {children}
    </musicContext.Provider>
  );
};

export default MusicPlayerContext;
