import React from "react";

const Button = ({ Text, onClick, Type = "button" }) => {
  return (
    <button className="inline-block px-6 py-2.5 font-medium text-xs leading-tight uppercase rounded shadow-md mt-5 hover:text- hover:shadow-lg border-2 border-black hover:bg-gray-200" type={Type} onClick={onClick}>
      {Text}
    </button>
  );
};

export default Button;