import React from "react";

const CustomInput = ({
  label,
  forAttr,
  handleChange,
  val,
  type,
  required,
  otherAttributes,
  handleError,
  name,
}) => {
  return (
    <div className="d-flex items-center pb-2">
      <label htmlFor={forAttr} className="mr-2">
        {label}
      </label>
      <input
        type={type ? type : "text"}
        className=""
        id={forAttr}
        onChange={handleChange}
        value={val}
        required={required ? true : false}
        {...otherAttributes}
        onInvalid={handleError}
        name={name}
      />
    </div>
  );
};

export default CustomInput;
