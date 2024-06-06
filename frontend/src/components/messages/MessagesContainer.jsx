import React from "react";
import { TiMessages } from "react-icons/ti";
import Messages from "./subcomponents/Messages";
import MessageInput from "./subcomponents/MessageInput";

const MessagesContainer = () => {
  const isChatSelected = true;
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {isChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-stone-50 px-4 py-5 mb-4 ">
            <span className="label-text font-semibold">To: </span>
            <span className="text-black font-bold"> Naseem Ur Rahman</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessagesContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome Abbas Khan</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

// Starter Code

// import React from "react";
// import { TiMessages } from "react-icons/ti";
// import Messages from "./subcomponents/Messages";
// import MessageInput from "./subcomponents/MessageInput";

// const MessagesContainer = () => {
//   const isChatSelected = true;
//   return (
//     <div className="md:min-w-[450px] flex flex-col">
//       {isChatSelected ? (
//         <NoChatSelected />
//       ) : (
//         <>
//           <div className="bg-stone-50 px-4 py-5 mb-4 ">
//             <span className="label-text font-semibold">To: </span>
//             <span className="text-black font-bold"> Naseem Ur Rahman</span>
//           </div>
//           <Messages />
//           <MessageInput />
//         </>
//       )}
//     </div>
//   );
// };

// export default MessagesContainer;

// const NoChatSelected = () => {
//   return (
//     <div className="flex items-center justify-center w-full h-full">
//       <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
//         <p>Welcome Abbas Khan</p>
//         <p>Select a chat to start messaging</p>
//         <TiMessages className="text-3xl md:text-6xl text-center" />
//       </div>
//     </div>
//   );
// };
