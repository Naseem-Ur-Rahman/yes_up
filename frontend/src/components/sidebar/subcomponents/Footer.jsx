import React from "react";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../../hooks/useLogout";
import { useContext } from "react";
import { AuthContext, useAuthContext } from "../../../context/AuthContext";
const Footer = () => {
  const { loading, logout } = useLogout();
  const {authUser}  = useAuthContext(AuthContext)
  return (
    <div className=" flex items-center justify-between mt-auto">
      <div>
      {!loading ? (
        <BiLogOut
          className="w-6 h-6 text-white cursor-pointer"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
      </div>
      <div className="avatar online">
          <div className="w-8 rounded-full">
            <img src={authUser?.profilePic} alt="user avatar" />
          </div>
        </div>
    </div>
  );
};

export default Footer;

// Starter Chat
// import React from 'react'
// import {BiLogOut} from 'react-icons/bi'
// const LogoutButton = () => {
//   return (
//     <div className='mt-auto'>
//       <BiLogOut className="w-6 h-6 text-white cursor-pointer" />
//     </div>
//   )
// }

// export default LogoutButton
