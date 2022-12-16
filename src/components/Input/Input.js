import React from "react";

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      className="mt-2 min-w-[18em] h-9 px-3 text-lg bg-[#f3f3f3] border-0 rounded-[4px] mb-8 focus:outline-none focus:shadow-md"
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
