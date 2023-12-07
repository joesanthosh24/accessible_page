import React, { useEffect, useRef } from "react";

import styles from "./message.module.css";

const Message = ({ message }) => {
  const containerRef = useRef();

  useEffect(() => {
    if (message) {
      containerRef.current.focus();
    }
  }, [message]);

  return (
    <div
      tabIndex={0}
      ref={containerRef}
      hidden={!message}
      aria-hidden={!message}
      className={`${styles.thankYouMessageContainer} container ph-2 pt-2 mb-5`}
    >
      <p>{message}</p>
    </div>
  );
};

export default Message;
