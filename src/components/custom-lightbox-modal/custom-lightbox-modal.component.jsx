import React, { useRef, useEffect } from "react";

import styles from "./custom-lightbox-modal.module.css";

import CustomButton from "../custom-button/custom-button.component";

const CustomLightboxModal = ({
  labelledBy,
  headingText,
  children,
  closeModal,
  describedBy,
  isOpen,
}) => {
  const firstFocusableElementRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Tab") {
        event.preventDefault();
        firstFocusableElementRef.current.focus();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      firstFocusableElementRef.current.focus();

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen]);

  return (
    <>
      <div className={styles.overlay}></div>
      <div
        role="dialog"
        id="empower-dialog"
        aria-labelledby={labelledBy}
        aria-modal="true"
        className={`${styles.dialog}`}
        aria-describedby={describedBy}
      >
        <h2 id={labelledBy} className={styles.dialog_label}>
          {headingText}
        </h2>
        <div className={styles.dialogContent} id={describedBy}>
          {children}
        </div>
        <div className={styles.closeBtnContainer}>
          <CustomButton
            btnText="Close"
            extraAttributes={{
              title: "Close Modal Buton",
              ref: firstFocusableElementRef,
            }}
            handleClick={closeModal}
          />
        </div>
      </div>
    </>
  );
};

export default CustomLightboxModal;
