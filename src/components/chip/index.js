import React from "react";
import styles from "../../styles/module.scss";
export default ({ ...props }) => {
  const { className, id, onClose, icon, children, dismissable, color, style } =
    props;
  return (
    <div
      className={[
        "_ui-chip",
        styles["_ui-chip"],
        styles[`_ui-chip-${color}`],
        className || ""
      ].join(" ")}
      id={id || null}
      style={style || {}}
    >
      {icon ? (
        <span className={[styles["_ui-chip-icon"], "_ui-chip-icon"].join(" ")}>
          {icon}
        </span>
      ) : (
        ""
      )}
      <span className={[styles["_ui-chip-label"], "_ui-chip-label"].join(" ")}>
        {children}
      </span>
      {dismissable ? (
        <span
          className={[styles["_ui-chip-close-btn"], "_ui-chip-close-btn"].join(
            " "
          )}
          onClick={onClose}
        >
          &times;
        </span>
      ) : (
        ""
      )}
    </div>
  );
};
