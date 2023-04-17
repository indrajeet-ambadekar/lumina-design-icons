import React from "react";
import styles from "../../styles/module.scss";
export const BottomNavigation = ({ ...props }) => {
  return (
    <div
      className={[
        styles["_ui-bottom-navigation"],
        "_ui-bottom-navigation",
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
          ? styles["_ui-nav-center-item"]
          : styles["_ui-nav-item"],
        props.active ? styles["_ui-nav-item-active"] : "",

        props.className || ""
      ].join(" ")}
      style={props.style || {}}
      id={props.id || null}
      onClick={props.onClick}
    >
      {props.icon && (
        <div className={styles["_ui-nav-item-icon"]}>{props.icon}</div>
      )}
      {props.type !== "center" && <span>{props.children}</span>}
    </div>
  );
};
