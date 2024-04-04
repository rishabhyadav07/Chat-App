import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";

// const Conversations = () => {
//   const { loading, conversations } = useGetConversations();
//   return (
//     <div className="py-2 flex flex-col overflow-auto no-scrollbar">
//       {conversations.map((conversation, idx) => (
//         <Conversation
//           key={conversation._id}
//           conversation={conversation}
//           // emoji={getRandomEmoji()}
//           lastIdx={idx === conversations.length - 1}
//         />
//       ))}

//       {loading ? (
//         <span className="loading loading-spinner mx-auto"></span>
//       ) : null}
//     </div>
//   );
// };
// export default Conversations;

const Conversations = () => {
	const { loading, conversations } = useGetConversations();
  
	// Sort conversations by last message time in descending order
	const sortedConversations = conversations.slice().sort((a, b) => {
	  const timeA = new Date(a.lastMessageTime).getTime();
	  const timeB = new Date(b.lastMessageTime).getTime();
	  return timeB - timeA;
	});
  
	return (
	  <div className="py-2 flex flex-col overflow-auto no-scrollbar">
		{sortedConversations.map((conversation, idx) => (
		  <Conversation
			key={conversation._id}
			conversation={conversation}
			lastIdx={idx === sortedConversations.length - 1}
		  />
		))}
  
		{loading ? (
		  <span className="loading loading-spinner mx-auto"></span>
		) : null}
	  </div>
	);
  };
  
  export default Conversations;
  

//STARTER CODE
// const Conversations = () => {
// 	return (
// 		<div className='py-2 flex flex-col overflow-auto'>
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 		</div>
// 	);
// };
// export default Conversations;
