import React, { useState } from "react";

import styles from "./custom-checkbox.component.module.css";

export const CustomCheckbox = ({ label, forAttr, handleChecked }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);

    handleChecked(forAttr);
  };

  const handleChangeWithKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleChange();
    }
  };

  return (
    <div className="d-flex items-center pb-2">
      <div
        role="checkbox"
        aria-checked={isChecked}
        className={styles.checkbox}
        type="checkbox"
        id={forAttr}
        checked={isChecked}
        onChange={handleChange}
        onKeyDown={handleChangeWithKey}
        tabIndex={0}
      >
        {label}
      </div>
    </div>
  );
};

export default CustomCheckbox;
