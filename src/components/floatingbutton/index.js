import React from "react";
import styles from "../../styles/module.scss";
export default ({ ...props }) => {
  let { className, style, id, color, size, icon, children, onClick } = props;
  return (
    <div
      className={[
        styles["elc_ui-flbtn"],
        styles[`elc_ui-flbtn-${color || "orange"}`],
        styles[`elc_ui-flbtn-${size || "S"}`],
        "elc_ui-flbtn",
        className || ""
      ].join(" ")}
      id={id || null}
      style={{ ...style }}
      onClick={onClick}
      tabIndex={-1}
    >
      {icon ? (
        <span className={`${styles["elc_ui-flbtn-icon"]} elc_ui-flbtn-icon`}>
          {icon}
        </span>
      ) : (
        ""
      )}
      {children ? (
        <div className={`${styles["elc_ui-flbtn-label"]} elc_ui-flbtn-label`}>
          {children}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
