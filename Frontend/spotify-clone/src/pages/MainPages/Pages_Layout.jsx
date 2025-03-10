// React imports
import { useEffect, useState, useRef } from "react";

// ShadCn Imports
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../../components/ui/resizable.jsx";

// React Router Imports
import { Outlet } from "react-router-dom";

// Components Imports
import Navbar from "../../Ui/Components/Navbar.jsx";
import SideBar from "../../Ui/Components/SideBar.jsx";
import MusicPlayer from "../../Ui/Components/MusicPlayer.jsx";
import ChatSidebar from "../../Ui/Components/ChatSidebar.jsx";
import MobNav from "../../Ui/Components/MobNav.jsx";

// Contexts Imports
import { useContext } from "react";
import { musicContext } from "../../useContext/musicContext.jsx";
import { mobNavContext } from "../../useContext/mobNavContext.jsx";

// = = = == = = = = = == = = = = = = = == =

const PagesLayout = () => {
  const { openMusicPlayer } = useContext(musicContext);
  const { currentTab, mobNav } = useContext(mobNavContext);
  const [windowWidth] = useState(window.innerWidth);

  // a function to calculate the panel sizes
  const calculatePanelSizes = () => {
    if (windowWidth > 1000) {
      // Desktop: Use larger sizes
      return [19, 58, 23]; // Example proportions
    } else if (windowWidth <= 1000) {
      // Mobile/Tablet: Adjust sizes for smaller screens
      return [20, 60, 20]; // Your original proportions
    }
  };

  const panelSizes = calculatePanelSizes();

  // = = = == = = = = = == = = = = = = = == =
  return (
    <main className="relative h-screen flex flex-col items-center bg-black p-[5px]">
      <Navbar />
      {mobNav && <MobNav />}
      <ResizablePanelGroup className="flex-1" direction="horizontal">
        <ResizablePanel
          defaultSize={panelSizes[0]}
          maxSize={panelSizes[0]}
          className={`bg-gradient-to-l from-white/5 to-black rounded-md mt-1 ${
            currentTab !== "menu" ? "hidden" : "flex"
          } sm:flex`}
        >
          <SideBar />
        </ResizablePanel>

        {/* Handle */}
        <ResizableHandle className="bg-transparent hover:bg-white/50 my-1 rounded-md" />

        <ResizablePanel
          defaultSize={panelSizes[1]}
          minSize={panelSizes[1]}
          className={`bg-gradient-to-t from-white/[7%] via-transparent to-transparent p-1 rounded-md mx-1 mt-1 ${
            currentTab === "music"
              ? "flex"
              : currentTab === null
              ? "flex"
              : "hidden"
          }`}
        >
          <Outlet />
        </ResizablePanel>

        {/* Handle */}
        <ResizableHandle className="bg-transparent hover:bg-white/50 my-1 rounded-md" />

        <ResizablePanel
          defaultSize={panelSizes[2]}
          minSize={panelSizes[2]}
          className={`bg-white/5 rounded-md mt-1 ${
            currentTab !== "chats" ? "hidden" : "flex"
          } lg:flex`}
        >
          <ChatSidebar />
        </ResizablePanel>
      </ResizablePanelGroup>
      {openMusicPlayer && <MusicPlayer />}
    </main>
  );
};

export default PagesLayout;
