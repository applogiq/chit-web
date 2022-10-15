/* ************************** Import Packages *************************** **/
import React from "react";

/* ************************** Import CSS *************************** **/
import styles from "./popup.module.css";

/* ************************** Import Components *************************** **/
import Button from "../Button";
import ButtonLoader from "../ButtonLoader";

const Popup = (props) => {
  const {
    handleHideModal,
    handleSaveModal,
    title,
    className,
    show,
    TitleClassName,
    ModelClassName,
    CancelText,
    SubmitText,
    SubmitColor,
    CloseForm,
    loading,
  } = props;

  // const ClearForm = () => {
  //     setTimeout(
  //         () => handleHideModal(),
  //         2000
  //     );
  // };

  return (
    <div
      className={`${show ? `${styles.customModal}` : "d-none"} ${className}`}
      tabIndex="-1"
      // onClick={handleHideModal}
    >
      <div className={`${styles.customPopupContent}`}>
        <div
          className={`rounded p-3 ${styles.customPopupHeaderContainer} ${ModelClassName}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={`${styles.customPopupHeader} ${TitleClassName}`}>
            <header className={`${styles.titletxt}`}>{title}</header>
          </div>
          <hr />
          {props.children}
          <footer className="d-flex justify-content-end">
            <Button
              text={`${CancelText || "Cancel"}`}
              onClick={() => {
                handleHideModal(), CloseForm();
              }}
            />
            <Button
              text={loading ? <ButtonLoader /> : `${SubmitText || "Join"}`}
              type={`${SubmitColor || "primary"}`}
              onClick={() => handleSaveModal()}
            />
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Popup;
