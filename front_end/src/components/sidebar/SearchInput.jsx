import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No such user found!");
  };
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">

      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
     

<div className="mb-3 md:w-96 relative flex items-stretch">
  <input
    type="search"
    id="default-search"
    className="m-0 block w-full min-w-0 font-inter flex-auto rounded-l border border-solid border-gray-300 bg-transparent bg-clip-padding px-3 py-0.25 text-base font-normal leading-6 text-black text-opacity-85 outline-none transition duration-200 ease-in-out "
    placeholder="Search"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    required
  />
  
  <button
    type="submit"
    className="flex items-center rounded-r bg-[#000000] bg-opacity-30 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path
        fillRule="evenodd"
        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
        clipRule="evenodd"
      />
    </svg>
  </button>
</div>
    </form>
  );
};
export default SearchInput;


