// Components Imports
import SenderBubble, { ReceiverBubble } from "./ChatBubbles";

const ChatScreen = ({ messages, selectedUser, user }) => {
  return (
    <>
      {messages &&
        messages.map((message) => {
          return message.senderEmail === user.email ? (
            <SenderBubble
              key={message.id}
              name={message.receiverName}
              image={user.image}
              message={message.content}
            />
          ) : (
            // <></>
            <ReceiverBubble
              key={message.id}
              name={message.senderName}
              image={selectedUser.image}
              message={message.content}
            />
          );
        })}
    </>
  );
};

export default ChatScreen;
