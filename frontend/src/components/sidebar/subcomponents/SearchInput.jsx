import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../../zustand/useConversation";
import useGetConversationUsers from "../../../hooks/useGetConversationUsers";
import toast from "react-hot-toast";
const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversationUsers } = useGetConversationUsers();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;

    if (search?.length < 3) {
      return toast.error("Search Term Must be atleat 3 char long");
    }
    const conversation = conversationUsers?.find((con) =>
      con?.fullName?.toLowerCase().includes(search.toLocaleLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No User Found");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        id="search"
        name="search"
        className="peer w-full px-2 py-3 rounded-lg focus:border-gray-800 focus:outline-none bg-gray-50 transition duration-300"
        placeholder="Search "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button type="submit" className="btn btn-circle bg-red-500 text-white">
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;

// Starter Code

// import React from "react";
// import {IoSearchSharp} from "react-icons/io5"
// const SearchInput = () => {
//   return (
//     <form action="" className="flex items-center gap-2">
//       <input
//         type="text"
//         id="search"
//         name="search"
//         className="peer w-full px-2 py-3 rounded-lg focus:border-gray-800 focus:outline-none bg-gray-50 transition duration-300"
//         placeholder="Search "
//       />

//       <button type="submit" className="btn btn-circle bg-red-500 text-white">
//         <IoSearchSharp className="w-6 h-6 outline-none" />
//       </button>
//     </form>
//   );
// };

// export default SearchInput;
