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
        `${styles["_ui-button"]}`,
        "one_ui-button",
        `${props.className || ""}`
      ].join(" ")}
    >
      {props.children}
      {icon ? (
        <span className={`${styles["_ui-button-icon"]}`}>{icon}</span>
      ) : (
        ""
      )}
    </button>
  );
};
