import React, { useState } from "react";
import GenderCheckBox from "./GenderCheckBox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [input, setInputs] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const { loading, signup } = useSignup();
  const handleChangeCheckBox = (gender) => {
    setInputs({ ...input, gender });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Inputs Data", input);
    await signup(input);
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div
        className="bg-white bg-opacity-80 rounded-3xl shadow-xl p-8  transform transition duration-500 "
        style={{ width: "28rem" }}
      >
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-2">
            Welcome to <span className="text-red-500 ">YES_UP</span>
          </h2>
          <p className="text-red-500 mb-10">Please signup to your account</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="relative mb-10">
            <label htmlFor="fullName" className=" text-gray-400 label-text ">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className=" mt-2 peer w-full px-2 py-2  rounded-lg focus:border-gray-800 focus:outline-none bg-gray-50 transition duration-300"
              placeholder=" "
              value={input.fullName}
              onChange={(e) =>
                setInputs({ ...input, fullName: e.target.value })
              }
            />
          </div>
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
              value={input.userName}
              onChange={(e) =>
                setInputs({ ...input, userName: e.target.value })
              }
            />
          </div>

          <div className="relative mb-10">
            <label htmlFor="password" className=" text-gray-400 label-text">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-2  peer w-full px-2 py-2  rounded-lg focus:border-gray-800 focus:outline-none bg-gray-50 transition duration-300"
              placeholder=" "
              value={input.password}
              onChange={(e) =>
                setInputs({ ...input, password: e.target.value })
              }
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="confirmPassword"
              className=" text-gray-400 label-text"
            >
              Confirm Password
            </label>
            <input
              type="Password"
              id="confirmPassword"
              name="confirmPassword"
              className="mt-2 peer w-full px-2 py-2  rounded-lg focus:border-gray-800 focus:outline-none bg-gray-50 transition duration-300"
              placeholder=" "
              value={input.confirmPassword}
              onChange={(e) =>
                setInputs({ ...input, confirmPassword: e.target.value })
              }
            />
          </div>
          <GenderCheckBox
            onCheckboxChange={handleChangeCheckBox}
            selectedGender={input.gender}
          />
          <Link
            to="/login"
            className="text-sm hover:underline text-gray-950 mt-6 inline-block mb-4"
          >
            Already have an account?
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
                "Sign Up"
              )}
            </button>
            <a href="#" className="text-red-500 hover:underline"></a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

// Starter Code For this

// const Signup = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <div
//         className="bg-white bg-opacity-80 rounded-3xl shadow-xl p-8  transform transition duration-500 "
//         style={{ width: "28rem" }}
//       >
//         <div className="text-center mb-6">
//           <h2 className="text-3xl font-extrabold text-gray-800 mb-2">
//             Welcome to <span className="text-red-500 ">YES_UP</span>
//           </h2>
//           <p className="text-red-500 mb-10">Please signup to your account</p>
//         </div>
//         <form>
//           <div className="relative mb-10">
//             <input
//               type="text"
//               id="fullName"
//               name="fullName"
//               className="peer w-full px-2 py-2  rounded-lg focus:border-gray-800 focus:outline-none bg-gray-50 transition duration-300"
//               placeholder=" "
//             />
//             <label
//               htmlFor="fullName"
//               className="absolute left-1 top-2 text-gray-400 pointer-events-none transition duration-300 transform peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-90 peer-focus:-translate-y-10 peer-focus:scale-80 peer-focus:text-gray-900"
//             >
//               Full Name
//             </label>
//           </div>
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
//           <div className="relative mb-10">
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
//           <div className="relative mb-4">
//             <input
//               type="Password"
//               id="confirmPassword"
//               name="confirmPassword"
//               className="peer w-full px-2 py-2  rounded-lg focus:border-gray-800 focus:outline-none bg-gray-50 transition duration-300"
//               placeholder=" "
//             />
//             <label
//               htmlFor="confirmPassword"
//               className="absolute left-1 top-2 text-gray-400 pointer-events-none transition duration-300 transform peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-90 peer-focus:-translate-y-10 peer-focus:scale-80 peer-focus:text-gray-900"
//             >
//               Confirm Password
//             </label>
//           </div>
//           <GenderCheckBox />
//           <a
//             href="#"
//             className="text-sm hover:underline text-gray-950 mt-6 inline-block mb-4"
//           >
//             Already have an account?
//           </a>

//           <div className="flex items-center justify-between">
//             <button
//               type="submit"
//               className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition duration-300"
//             >
//               Signup
//             </button>
//             <a href="#" className="text-red-500 hover:underline"></a>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;
