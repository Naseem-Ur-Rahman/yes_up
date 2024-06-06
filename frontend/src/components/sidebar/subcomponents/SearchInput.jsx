import React from "react";
import { IoSearchSharp } from "react-icons/io5";
const SearchInput = () => {
  return (
    <form action="" className="flex items-center gap-2">
      <input
        type="text"
        id="search"
        name="search"
        className="peer w-full px-2 py-3 rounded-lg focus:border-gray-800 focus:outline-none bg-gray-50 transition duration-300"
        placeholder="Search "
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
