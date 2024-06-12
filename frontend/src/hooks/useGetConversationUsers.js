import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversationUsers = () => {
  const [loading, setLoading] = useState(false);
  const [conversationUsers, setConversationUsers] = useState([]);

  useEffect(() => {
    const getConversationUsers = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/users");
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setConversationUsers(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getConversationUsers();
  }, []);
  return { loading, conversationUsers };
};

export default useGetConversationUsers;
