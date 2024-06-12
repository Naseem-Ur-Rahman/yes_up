import React from "react";
import SearchInput from "./subcomponents/SearchInput";
import Conversations from "./subcomponents/Conversations";
import Footer from "./subcomponents/Footer";

const Sidebar = () => {
  return (
    <div className="border-r border-red-300 p-4 flex-col ">
      <SearchInput />
      <div className="divider divide-red-300 px-3"></div>
      <div className="min-h-96">
        <Conversations />
      </div>

      <Footer />
    </div>
  );
};

export default Sidebar;

// Starter Chat
// import React from 'react'
// import SearchInput from './subcomponents/SearchInput'
// import Conversations from './subcomponents/Conversations'
// import LogoutButton from './subcomponents/LogoutButton'

// const Sidebar = () => {
//   return (
//     <div className='border-r border-red-300 p-4 flex-col'>
//       <SearchInput />
//       <div className="divider divide-red-300 px-3"></div>
//       <Conversations />
//       <LogoutButton />
//     </div>
//   )
// }

// export default Sidebar
