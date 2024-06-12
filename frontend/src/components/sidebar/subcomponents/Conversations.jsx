import React from "react";
import ConversationUser from "./ConversationUser";
import useGetConversationUsers from "../../../hooks/useGetConversationUsers";

const Conversations = () => {
  const { loading, conversationUsers } = useGetConversationUsers();

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : (
        conversationUsers &&
        conversationUsers.map((users, index) => (
          <ConversationUser
            key={users?._id}
            conversations={users}
            lastindex={index === users.length - 1}
          />
        ))
      )}
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
