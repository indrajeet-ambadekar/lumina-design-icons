import React from "react";
import styles from "../../styles/module.scss";
export default ({ ...props }) => {
  let subProps = { ...props };
  delete subProps.children;
  let icon = props.icon;
  delete subProps.icon;
  return (
    <button
      {...subProps}
      className={[
        `${styles["elc_ui-button"]}`,
        "oneelc_ui-button",
        `${props.className || ""}`
      ].join(" ")}
    >
      {props.children}
      {icon ? (
        <span className={`${styles["elc_ui-button-icon"]}`}>{icon}</span>
      ) : (
        ""
      )}
    </button>
  );
};
