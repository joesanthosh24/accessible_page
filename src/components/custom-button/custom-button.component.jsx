import React from "react";

import styles from "./custom-button.module.css";

const CustomButton = ({ btnText, handleClick, extraAttributes }) => {
  return (
    <button className={styles.btn} {...extraAttributes} onClick={handleClick}>
      {btnText}
    </button>
  );
};

export default CustomButton;
