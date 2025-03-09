// Components Imports
import ChatScreen from "./ChatScreen";
import { ChatLoader } from "../Components/Loaders.jsx";
import SpotifySignIn from "../Components/SpotifySignIn.jsx";

//React Toastify
import { toast } from "react-hot-toast";

// React Imports
import { useEffect, useState, useContext } from "react";

// Icons Imports
import { LuSend } from "react-icons/lu";
import { IoArrowBackCircleSharp } from "react-icons/io5";

// Socket Io Imports
import { socket } from "../../socket.js";

// Api calls
import { getMessagesApi } from "../../lib/getMessagesApiCalls.js";

// uuid Imports
import { v4 as uuidv4 } from "uuid";

// Default Image Import
import ProfilePic from "../../assets/images/Default_Image.png";

// useContext Imports
import { userContext } from "../../useContext/userContext.jsx";

const ChatSidebar = () => {
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [connectedUsers, setConnectedUsers] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const { user } = useContext(userContext);

  //===========================================================================

  useEffect(() => {
    console.log("mounted");
    if (socket) {
      socket.connect();
      socket.on("connect", () => {
        console.log(socket.id);
      });

      socket.emit("user_info", user);

      socket.on("list_users", (data) => {
        const filtered = data.filter(
          (filtered) => filtered.email !== user.email
        );
        setConnectedUsers(filtered);
      });

      socket.on("receive_message", (data) => {
        setMessages((prevMessages) => [...prevMessages, data]);
      });

      return () => {
        socket.off("connect");
        socket.off("list_users");
        socket.off("receive_message");
        socket.disconnect();
      };
    } else {
      console.log("the socket is not initialized yet ");
    }
  }, [socket, user]);

  //====================================

  useEffect(() => {
    const handleMessage = async () => {
      if (selectedUser?.email && user?.email) {
        setLoading(true);
        try {
          const messages = await getMessagesApi(user.email, selectedUser.email);
          setMessages((prevMessages) => [...prevMessages, ...messages]);
          // console.log("messages fetched");
        } catch (err) {
          toast.error(err.message);
        } finally {
          setLoading(false);
        }
      }
    };

    handleMessage();
  }, [selectedUser]);

  //===========================================================================

  const handleSendingMessage = () => {
    if (input.length > 0) {
      const data = {
        senderEmail: user.email,
        senderName: user.name,
        receiverName: selectedUser.name,
        receiverEmail: selectedUser.email,
        content: input,
        id: uuidv4(),
      };
      socket.emit("send_message", data);
      setMessages((prevMessages) => [...prevMessages, data]);
      setInput("");
    }
  };

  //===========================================================================

  return (
    <>
      {selectedUser ? (
        <aside className="relative flex flex-col h-full w-full px-3">
          <div className="flex items-center mb-2 pb-1 border-b border-white/10 gap-2 mt-2">
            <IoArrowBackCircleSharp
              className="w-7 h-7 text-white cursor-pointer hover:text-[#1db954]"
              onClick={() => setSelectedUser(null)}
            />
            <h1 className="text-white font-[Spotify] text-2xl">
              {selectedUser?.name}
            </h1>
          </div>
          <div
            className="flex flex-col gap-2 h-full w-full overflow-y-scroll 
            [&::-webkit-scrollbar]:w-1
            [&::-webkit-scrollbar-thumb]:bg-white
            [&::-webkit-scrollbar-thumb]:rounded-full
            "
          >
            {loading ? (
              <ChatLoader />
            ) : (
              <ChatScreen
                selectedUser={selectedUser}
                messages={messages}
                user={user}
              />
            )}
          </div>
          <div className="flex items-center justify-center border-t border-white/10 gap-2 my-2">
            <input
              type="text"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              className="flex-1 outline-none bg-transparent placeholder:text-white/70 text-white text-sm px-3 py-2"
            />
            <button disabled={!input} onClick={handleSendingMessage}>
              <LuSend
                className={`w-6 h-6 text-white  ${
                  input && "hover:text-[#1db954] cursor-pointer"
                } `}
              />
            </button>
          </div>
        </aside>
      ) : (
        //=====================================================
        <aside className="flex flex-col h-full w-full  py-4 px-3">
          <h1 className="text-white font-[Spotify] text-2xl mx-3 mb-2">
            Chat Messages
          </h1>
          {connectedUsers?.map((connectedUser, index) => {
            return (
              <div
                className="flex items-center w-full hover:bg-[#1db954]/10 cursor-pointer duration-300 p-3 gap-3 border-b border-white/10 group rounded-sm"
                key={index}
                onClick={() => setSelectedUser(connectedUser)}
              >
                <img
                  src={connectedUser.image || ProfilePic}
                  alt="Profile Pic"
                  className="w-12 h-12 rounded-full duration-300 filter saturate-0 group-hover:scale-110 group-hover:saturate-100"
                />
                <div>
                  <p className="text-white/20 font-[Spotify] text-md group-hover:text-white duration-200">
                    {connectedUser.name}
                  </p>
                  <p className="text-white/50 font-bold text-[12px] ">
                    start a conversation
                  </p>
                </div>
              </div>
            );
          })}
          {connectedUsers === null ? (
            <SpotifySignIn />
          ) : (
            connectedUsers.length === 0 && <SpotifySignIn />
          )}
        </aside>
      )}
    </>
  );
};

export default ChatSidebar;
