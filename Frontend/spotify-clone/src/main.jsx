import "./index.css";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
// Contexts Imports
import UserContextWrapper from "./useContext/userContext.jsx";
import MusicPlayerContext from "./useContext/musicContext.jsx";
import MobileNavbarContext from "./useContext/mobNavContext.jsx";

createRoot(document.getElementById("root")).render(
  <UserContextWrapper>
    <MobileNavbarContext>
      <MusicPlayerContext>
        <Toaster />
        <App />
      </MusicPlayerContext>
    </MobileNavbarContext>
  </UserContextWrapper>
);
