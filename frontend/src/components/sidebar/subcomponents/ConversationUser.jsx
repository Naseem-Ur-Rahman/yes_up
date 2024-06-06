import React from "react";

const ConversationUser = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-red-500 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="user avatar"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-2 justify-between">
            <p className="font-bold text-gray-200">Abbas Khan</p>
            <span className="text-xs text-gray-50"> time</span>
          </div>
        </div>
      </div>
      <div className="divide-x divide-red-400  my-0 py-0 h-1"></div>
    </>
  );
};

export default ConversationUser;

// Starter Code

// import React from "react";

// const ConversationUser = () => {
//   return (
//     <>
//       <div className="flex gap-2 items-center hover:bg-red-500 rounded p-2 py-1 cursor-pointer">
//         <div className="avatar online">
//           <div className="w-12 rounded-full">
//             <img
//               src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
//               alt="user avatar"
//             />
//           </div>
//         </div>

//         <div className="flex flex-col flex-1">
//           <div className="flex gap-2 justify-between">
//             <p className="font-bold text-gray-200">Abbas Khan</p>
//             <span className="text-xs text-gray-50">  time</span>
//           </div>
//         </div>
//       </div>
//       <div className="divide-x divide-red-400  my-0 py-0 h-1"></div>
//     </>
//   );
// };

// export default ConversationUser;
