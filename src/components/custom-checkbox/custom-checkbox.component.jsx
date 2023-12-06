import React, { useState } from "react";

import styles from "./custom-checkbox.component.module.css";

export const CustomCheckbox = ({ label, forAttr, handleChecked }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);

    handleChecked(forAttr);
  };

  return (
    <div className="d-flex items-center pb-2">
      <input
        className={styles.checkbox}
        type="checkbox"
        id={forAttr}
        checked={isChecked}
        onChange={handleChange}
      />
      <label htmlFor={forAttr}>{label}</label>
    </div>
  );
};

export default CustomCheckbox;
