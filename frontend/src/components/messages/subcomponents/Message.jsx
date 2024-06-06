import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-8 rounded-full">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="Chat Bubbel Avatar"
          />
        </div>
      </div>

      <div className={`chat-bubble  text-white bg-red-500`}>HI! wHAT'S uP</div>
      <div className="chat-footer text-white opacity-50 text-xs flex gap-1 items-center">
        11:00 Am
      </div>
    </div>
  );
};

export default Message;

// Starter Code

// import React from "react";

// const Message = () => {
//   return (
//     <div className="chat chat-end">
//       <div className="chat-image avatar">
//         <div className="w-8 rounded-full">
//           <img
//             src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
//             alt="Chat Bubbel Avatar"
//           />
//         </div>
//       </div>

//       <div className={`chat-bubble  text-white bg-red-500`}>HI! wHAT'S uP</div>
//       <div className='chat-footer text-white opacity-50 text-xs flex gap-1 items-center'>
//         11:00 Am
//       </div>
//     </div>
//   );
// };

// export default Message;
