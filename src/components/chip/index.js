import React from "react";
import styles from "../../styles/module.scss";
export default ({ ...props }) => {
  const { className, id, onClose, icon, children, dismissable, color, style } =
    props;
  return (
    <div
      className={[
        "elc_ui-chip",
        styles["elc_ui-chip"],
        styles[`elc_ui-chip-${color}`],
        className || ""
      ].join(" ")}
      id={id || null}
      style={style || {}}
    >
      {icon ? (
        <span
          className={[styles["elc_ui-chip-icon"], "elc_ui-chip-icon"].join(" ")}
        >
          {icon}
        </span>
      ) : (
        ""
      )}
      <span
        className={[styles["elc_ui-chip-label"], "elc_ui-chip-label"].join(" ")}
      >
        {children}
      </span>
      {dismissable ? (
        <span
          className={[
            styles["elc_ui-chip-close-btn"],
            "elc_ui-chip-close-btn"
          ].join(" ")}
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
