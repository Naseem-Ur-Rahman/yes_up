import React from "react";
import ConversationUser from "./ConversationUser";

const Conversations = () => {
  return (
    <div className="py-2 flex flex-col overflow-auto">
      <ConversationUser />
      <ConversationUser />
      <ConversationUser />
      <ConversationUser />
      <ConversationUser />
      <ConversationUser />
    </div>
  );
};

export default Conversations;

// Starter Code
// import React from 'react'
// import ConversationUser from './ConversationUser'

// const Conversations = () => {
//   return (
//     <div className='py-2 flex flex-col overflow-auto'>
//       <ConversationUser/>
//       <ConversationUser/>
//       <ConversationUser/>
//       <ConversationUser/>
//       <ConversationUser/>
//       <ConversationUser/>
//     </div>
//   )
// }

// export default Conversations
