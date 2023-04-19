import React from "react";
import styles from "../../styles/module.scss";
export const BottomNavigation = ({ ...props }) => {
  return (
    <div
      className={[
        styles["elc_ui-bottom-navigation"],
        "elc_ui-bottom-navigation",
        props.className || ""
      ].join(" ")}
      style={props.style || {}}
      id={props.id || null}
    >
      {props.children}
    </div>
  );
};

export const BottomNavItem = ({ ...props }) => {
  return (
    <div
      className={[
        props.type === "center"
          ? styles["elc_ui-nav-center-item"]
          : styles["elc_ui-nav-item"],
        props.active ? styles["elc_ui-nav-item-active"] : "",

        props.className || ""
      ].join(" ")}
      style={props.style || {}}
      id={props.id || null}
      onClick={props.onClick}
    >
      {props.icon && (
        <div className={styles["elc_ui-nav-item-icon"]}>{props.icon}</div>
      )}
      {props.type !== "center" && <span>{props.children}</span>}
    </div>
  );
};
