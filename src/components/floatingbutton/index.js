import React from "react";
import styles from "../../styles/module.scss";
export default ({ ...props }) => {
  let { className, style, id, color, size, icon, children, onClick } = props;
  return (
    <div
      className={[
        styles["_ui-flbtn"],
        styles[`_ui-flbtn-${color || "red"}`],
        styles[`_ui-flbtn-${size || "small"}`],
        "_ui-flbtn",
        className || ""
      ].join(" ")}
      id={id || null}
      style={{ ...style }}
      onClick={onClick}
      tabIndex={-1}
    >
      {icon ? <span className={styles["_ui-flbtn-icon"]}>{icon}</span> : ""}
      {children ? (
        <div className={styles["_ui-flbtn-label"]}>{children}</div>
      ) : (
        ""
      )}
    </div>
  );
};
