/* ************************** Import Packages *************************** **/
import React, { useState, useEffect } from "react";

/* ************************** Import CSS *************************** **/
import styles from "./button.module.css";

const Button = (props) => {
  const {
    text,
    type,
    //  color,
    className,
    onClick,
  } = props;
  const [customClass, setCustomClass] = useState("");

  useEffect(() => {
    switch (type) {
      case "primary":
        setCustomClass(`${styles.primaryButton}`);
        break;
      case "secondary":
        setCustomClass(`${styles.secondaryButton}`);
        break;

      default:
        setCustomClass(`${styles.secondaryButton}`);
        break;
    }
  }, [type]);
  return (
    <button
      type={type === "primary" ? "submit" : null}
      className={`${styles.customButton} rounded ${customClass} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default Button;
