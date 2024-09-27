"use client";

const TextAreaBox = ({ label, required, type, placeholder, id, className }) => {
  return (
    <div className="">
      <label className="block text-paragraphDark text-base mb-1.5" htmlFor={id}>
        {label}
        {required ? <span className="text-red-500 ml-1">*</span> : <></>}
      </label>
      <textarea
        className={`appearance-none block w-full bg-white text-heading border rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary ${className}`}
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextAreaBox;
