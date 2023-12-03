// react
import { FC } from "react";

interface LabelInputProps {
  type?: 'text' | 'email';
  labelText: string;
  placeholderText: string;
  textarea?: boolean;
}

const LabelInput: FC<LabelInputProps> = ({ type, labelText, placeholderText, textarea }) => {

  return (
    <div className="flex flex-col gap-1.5 flex-1 w-full">
    <label
    className="text-textPrimary text-base sm:text-lg font-bold"
     htmlFor={placeholderText}
    >
      {labelText}
    </label>
    { textarea ? (
      <textarea
       id={placeholderText}
       rows={9}
       placeholder="please enter your message"
          className="bg-accent rounded-2xl py-4 px-3 text-textPrimary text-base sm:text-lg
         placeholder-textSecondary outline-none resize-none border-[1px]
          border-transparent focus:border-hoverSecondary"
      ></textarea>
    ) : (
      <input 
       type={type}
       id={placeholderText}
       autoComplete="off"
       placeholder={labelText}
       className="bg-accent rounded-2xl py-3 pl-2 text-textPrimary text-base sm:text-lg
          placeholder-textSecondary outline-none resize-none border-[1px] border-transparent
           focus:border-hoverSecondary "
       />
    )}
  </div>
  );
};

export default LabelInput;
