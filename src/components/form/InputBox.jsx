"use client";

const InputBox = ({
  label,
  required,
  type = "text",
  placeholder,
  id,
  className,
  inputClassName,
}) => {
  return (
    <div className={`input-field ${className}`}>
      <label className="block text-paragraphDark text-base mb-1.5" htmlFor={id}>
        {label}
        {required ? <span className="text-red-500 ml-1">*</span> : <></>}
      </label>
      <input
        className={`appearance-none block w-full bg-white text-heading border py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary ${inputClassName}`}
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputBox;
