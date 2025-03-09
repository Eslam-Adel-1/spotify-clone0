import ProfilePic from "../../assets/images/Default_Image.png";
import { useEffect, useRef } from "react";

const SenderBubble = ({ message, image }) => {
  //======================================

  const ref = useRef(null);
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  //======================================

  return (
    <div className="flex items-end gap-2" ref={ref}>
      <div className="ml-auto flex max-w-[70%] flex-col gap-2 rounded-lg rounded-br-none bg-[#1db954]/50 p-4 text-sm text-white md:max-w-[60%] dark:bg-primary-dark dark:text-on-primary-dark">
        {message}
        <span className="ml-auto text-xs font-[Spotify]">11:34 AM</span>
      </div>
      <img
        className="flex size-8 items-center justify-center overflow-hidden rounded-full border border-outline bg-surface-alt text-sm font-bold tracking-wider text-on-surface dark:border-outline-dark dark:bg-surface-dark-alt dark:text-on-surface-dark"
        src={image || ProfilePic}
        alt="profile pic"
      />
    </div>
  );
};

export default SenderBubble;

export const ReceiverBubble = ({ message, name, image }) => {
  //======================================

  const ref = useRef(null);
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  //======================================

  return (
    <div className="flex items-end gap-2" ref={ref}>
      <img
        className="size-8 rounded-full object-cover"
        src={image || ProfilePic}
        alt="avatar"
      />
      <div className="mr-auto flex max-w-[70%] flex-col gap-2 rounded-lg rounded-bl-none bg-zinc-700 p-4 text-white md:max-w-[60%] dark:bg-surface-dark-alt dark:text-on-surface-dark">
        <span className="font-semibold font-[Spotify] text-on-surface-strong dark:text-on-surface-dark-strong">
          {name}
        </span>
        <div className="text-sm ">{message}</div>
        <span className="ml-auto text-xs font-[Spotify]">11:32 AM</span>
      </div>
    </div>
  );
};
