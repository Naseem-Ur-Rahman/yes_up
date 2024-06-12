import React from "react";

const GenderCheckBox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex space-x-4">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGender==='male' ? "selected" :""}`}>
          <span className="label-text text-gray-800">Male</span>
          <input
            type="checkbox"
            className="checkbox border-gray-800 bg-white checked:bg-black checked:border-black focus:ring-black"
            style={{ width: "1.4rem", height: "1.3rem" }}
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGender==='female' ? "selected" :""}`}>
          <span className="label-text text-gray-800">Female</span>
          <input
            type="checkbox"
            className="checkbox border-gray-800 bg-white checked:bg-black checked:border-black focus:ring-black"
            style={{ width: "1.4rem", height: "1.3rem" }}
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;

// Starter Code for this

// import React from "react";

// const GenderCheckBox = () => {
//   return (
//     <div className="flex space-x-4">
//       <div className="form-control">
//         <label className="label gap-2 cursor-pointer">
//           <span className="label-text text-gray-800">Male</span>
//           <input
//             type="checkbox"
//             className="checkbox border-gray-800 bg-white checked:bg-black checked:border-black focus:ring-black"
//             style={{ width: "1.4rem", height: "1.3rem" }}
//           />
//         </label>
//       </div>
//       <div className="form-control">
//         <label className="label gap-2 cursor-pointer">
//           <span className="label-text text-gray-800">Female</span>
//           <input
//             type="checkbox"
//             className="checkbox border-gray-800 bg-white checked:bg-black checked:border-black focus:ring-black"
//             style={{ width: "1.4rem", height: "1.3rem" }}
//           />
//         </label>
//       </div>
//     </div>
//   );
// };

// export default GenderCheckBox;
