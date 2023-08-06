import React, { ReactNode } from "react";
type InputProps = {
  label: string;
  center?: boolean;
  action?: ReactNode;
  blocked?: boolean;
};
const Input = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > &
    InputProps
) => {
  return (
    <div className="flex relative w-full">
      <input
        {...props}
        className={`
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
          text-sm
          ${props.action && 'pr-7'}
          ${props.center && 'text-center'}
          ${props.disabled ? 'bg-gray-50 cursor-not-allowed' : ''}
          ${props.blocked ? 'bg-gray-50 cursor-pointer' : ''}
        `}
      />
      <label
        htmlFor={props.id}
        className={`
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
          ${props.disabled ? 'cursor-not-allowed' : ''}
          ${props.blocked ? 'cursor-pointer' : ''}
        `}
      >
        {props.label}
      </label>
      {props.action && (
        <div className="absolute right-1 h-12 flex justify-center items-center">
          {props.action}
        </div>
      )}
    </div>
  );
};

export default Input;
