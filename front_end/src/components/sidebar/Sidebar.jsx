import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className=" p-4 flex w-[450px] flex-col gap-2 bg-white">
      <span className="text-[#000000] opacity-90 font-inter text-[22px] tracking-wide  font-bold">
        Messages
      </span>
      <SearchInput />
      <Conversations />
      <LogoutButton />
    </div>
  );
};
export default Sidebar;

