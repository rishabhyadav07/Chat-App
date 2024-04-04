import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };
  return (
    <div className="w-full bg-white">
      <form
        className="px-4 my-3 w-full flex flex-row relative gap-x-6 "
        onSubmit={handleSubmit}
      >
        <div className="grow flex flex-row ">
          <input
            type="text"
            className=" text-sm text-black bg-[#FAFAFA] bg-opacity-50  block w-full px-4 py-2 focus:border-0 focus:outline-none focus:border-none font-inter border-0 rounded-[12px]"
            placeholder="Send a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button type="submit" className="flex items-center pe-3">
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <BsSend
              size="24px"
              className="hover:scale-110 transition-transform duration-100 "
              color="green"
            />
          )}
        </button>
      </form>
    </div>
  );
};
export default MessageInput;

//STARTER CODE
// import { BsSend } from "react-icons/bs";

// const MessageInput = () => {
// 	return (
// 		<form className='px-4 my-3'>
// 			<div className='w-full'>
// 				<input
// 					type='text'
// 					className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
// 					placeholder='Send a message'
// 				/>
// 				<button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
// 					<BsSend />
// 				</button>
// 			</div>
// 		</form>
// 	);
// };
// export default MessageInput;
