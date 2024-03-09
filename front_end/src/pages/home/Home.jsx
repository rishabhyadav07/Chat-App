
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex h-[100%] w-[100%] overflow-hidden bg-[#FAFAFA]'>
			<Sidebar />
      <MessageContainer/>
			
		</div>
	);
};
export default Home;