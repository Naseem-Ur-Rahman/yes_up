import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessagesContainer from "../../components/messages/MessagesContainer";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar />
      <MessagesContainer />
    </div>
  );
};

export default Home;

// Starter Code
// import React from "react";
// import Sidebar from "../../components/sidebar/Sidebar";
// import MessagesContainer from "../../components/messages/MessagesContainer";

// const Home = () => {
//   return (
//     <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//       <Sidebar />
//       <MessagesContainer />
//     </div>
//   );
// };

// export default Home;