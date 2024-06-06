import React from "react";
import GenderCheckBox from "./GenderCheckBox";

const Signup = () => {
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
        <form>
          <div className="relative mb-10">
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="peer w-full px-2 py-2  rounded-lg focus:border-gray-800 focus:outline-none bg-gray-50 transition duration-300"
              placeholder=" "
            />
            <label
              htmlFor="fullName"
              className="absolute left-1 top-2 text-gray-400 pointer-events-none transition duration-300 transform peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-90 peer-focus:-translate-y-10 peer-focus:scale-80 peer-focus:text-gray-900"
            >
              Full Name
            </label>
          </div>
          <div className="relative mb-10">
            <input
              type="text"
              id="userName"
              name="userName"
              className="peer w-full px-2 py-2  rounded-lg focus:border-gray-800 focus:outline-none bg-gray-50 transition duration-300"
              placeholder=" "
            />
            <label
              htmlFor="userName"
              className="absolute left-1 top-2 text-gray-400 pointer-events-none transition duration-300 transform peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-90 peer-focus:-translate-y-10 peer-focus:scale-80 peer-focus:text-gray-900"
            >
              User Name
            </label>
          </div>
          <div className="relative mb-10">
            <input
              type="password"
              id="password"
              name="password"
              className="peer w-full px-2 py-2  rounded-lg focus:border-gray-800 focus:outline-none bg-gray-50 transition duration-300"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="absolute left-1 top-2 text-gray-400 pointer-events-none transition duration-300 transform peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-90 peer-focus:-translate-y-10 peer-focus:scale-80 peer-focus:text-gray-900"
            >
              Password
            </label>
          </div>
          <div className="relative mb-4">
            <input
              type="Password"
              id="confirmPassword"
              name="confirmPassword"
              className="peer w-full px-2 py-2  rounded-lg focus:border-gray-800 focus:outline-none bg-gray-50 transition duration-300"
              placeholder=" "
            />
            <label
              htmlFor="confirmPassword"
              className="absolute left-1 top-2 text-gray-400 pointer-events-none transition duration-300 transform peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-90 peer-focus:-translate-y-10 peer-focus:scale-80 peer-focus:text-gray-900"
            >
              Confirm Password
            </label>
          </div>
          <GenderCheckBox />
          <a
            href="#"
            className="text-sm hover:underline text-gray-950 mt-6 inline-block mb-4"
          >
            Already have an account?
          </a>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition duration-300"
            >
              Signup
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
