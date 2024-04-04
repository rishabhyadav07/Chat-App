import { TiMessages } from "react-icons/ti";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import useConversation from "../../zustand/useConversation";
import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useSocketContext } from "../../context/SocketContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(selectedConversation?._id);

  useEffect(() => {
    // cleanup function (unmounts)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="w-[100%] flex flex-col no-scroll">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-white px-4 py-2 mb-2 gap-x-4 flex flex-row">
            <div>
              <div className="w-12 rounded-full">
                <img src={selectedConversation.profilePic} alt="user avatar" />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <span
                className="text-black font-inter text-opacity-85 leading-4 text-base
             font-bold"
              >
                {selectedConversation.fullName}
              </span>
              <span
                className={
                  isOnline
                    ? "text-green-600"
                    : "text-gray-500" + "font-semibold font-inter text-[14px]"
                }
              >
                {isOnline ? "Online" : "Offline"}
              </span>
            </div>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-black font-semibold font-inter flex flex-col items-center gap-2">
        <p className="text-2xl md:text-4xl font-inter">
          Welcome {authUser.fullName} 
        </p>
        <p className="text-sm font-inter">Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
