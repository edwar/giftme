import React from "react";
type InputProps = {
  label: string;
};
const Input = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > &
    InputProps
) => {
  return (
    <div className="relative">
      <input
        {...props}
        className="
          cursor-text
          peer 
          h-12
          w-full 
          border-[0.5px]
          border-gray-300 
          rounded-lg 
          text-gray-900 
          placeholder-transparent
          focus:outline-none 
          focus:border-black
          px-2
          font-poppins
        "
      />
      <label
        htmlFor={props.id}
        className="
          cursor-text
          absolute 
          left-2
          -top-[0px]
          text-gray-600 
          text-xs
          transition-all
          peer-placeholder-shown:text-base 
          peer-placeholder-shown:text-gray-400
          peer-placeholder-shown:top-3
          peer-focus:-top-[0px]
          peer-focus:text-gray-600
          peer-focus:text-xs
          font-poppins
          
        "
      >
        {props.label}
      </label>
    </div>
  );
};

export default Input;
