import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [userName , setUserName] = useState("");
  const [password, setPassword] = useState("");
   
  const {loading, login} = useLogin();
  const handleSubmit  = async (e)=>{
    e.preventDefault();
    // console.log("Login Data", userName,password)
    await login(userName,password)
  }
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white bg-opacity-80 rounded-3xl shadow-xl p-10 w-96 transform transition duration-500 ">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-2">
            Welcome Back to <span className="text-red-500 ">YES_UP</span>
          </h2>
          <p className="text-red-500 mb-10">Please signin to your account</p>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="relative mb-10">
            <label htmlFor="userName" className=" text-gray-400 label-text ">
              User Name
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              className=" mt-2 peer w-full px-2 py-2  rounded-lg focus:border-gray-800 focus:outline-none bg-gray-50 transition duration-300"
              placeholder=" "
              value={userName}
              onChange={(e) =>
                setUserName(  e.target.value )
              }
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="password" className=" text-gray-400 label-text">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-2  peer w-full px-2 py-2  rounded-lg focus:border-gray-800 focus:outline-none bg-gray-50 transition duration-300"
              placeholder=" "
              value={password}
              onChange={(e) =>
                setPassword( e.target.value )
              }
            />
          </div>
          <Link
            to="/signup"
            className="text-sm hover:underline text-gray-950 mt-3 inline-block mb-4"
          >
            Don't have an account?
          </Link>
          <div className="flex items-center justify-between">
            <button
             disabled={loading}
              type="submit"
              className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition duration-300"
            >
             {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
            <a href="#" className="text-red-500 hover:underline">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

// Starter Code For Login

// const Login = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <div className="bg-white bg-opacity-80 rounded-3xl shadow-xl p-10 w-96 transform transition duration-500 ">
//         <div className="text-center mb-6">
//           <h2 className="text-2xl font-extrabold text-gray-800 mb-2">
//             Welcome Back to <span className="text-red-500 ">YES_UP</span>
//           </h2>
//           <p className="text-red-500 mb-10">Please signin to your account</p>
//         </div>
//         <form>
//           <div className="relative mb-10">
//             <input
//               type="text"
//               id="userName"
//               name="userName"
//               className="peer w-full px-2 py-2  rounded-lg focus:border-gray-800 focus:outline-none bg-gray-50 transition duration-300"
//               placeholder=" "
//             />
//             <label
//               htmlFor="userName"
//               className="absolute left-1 top-2 text-gray-400 pointer-events-none transition duration-300 transform peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-90 peer-focus:-translate-y-10 peer-focus:scale-80 peer-focus:text-gray-900"
//             >
//               User Name
//             </label>
//           </div>
//           <div className="relative mb-1">
//             <input
//               type="password"
//               id="password"
//               name="password"
//               className="peer w-full px-2 py-2  rounded-lg focus:border-gray-800 focus:outline-none bg-gray-50 transition duration-300"
//               placeholder=" "
//             />
//             <label
//               htmlFor="password"
//               className="absolute left-1 top-2 text-gray-400 pointer-events-none transition duration-300 transform peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-90 peer-focus:-translate-y-10 peer-focus:scale-80 peer-focus:text-gray-900"
//             >
//               Password
//             </label>
//           </div>
//           <a className="text-sm hover:underline text-gray-950 mt-2 inline-block mb-6">
//             Don't have an account?
//           </a>
//           <div className="flex items-center justify-between">
//             <button
//               type="submit"
//               className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition duration-300"
//             >
//               Login
//             </button>
//             <a href="#" className="text-red-500 hover:underline">
//               Forgot Password?
//             </a>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
