import React from "react";
type TextAreaProps = {
  label: string;
  rows?: number;
};
const TextArea = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > &
    TextAreaProps
) => {
  return (
    <div className="flex relative w-full">
      <textarea
        {...props}
        className="
          pt-3
          cursor-text
          peer
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

export default TextArea;
