import React, { useEffect, useState } from "react";
import styles from "../../styles/module.scss";
const MenuDropdown = ({ ...props }) => {
  const [menuItems, setMenuItems] = useState(props.children);
  const [isMenuVisible, setMenuVisible] = useState(false);
  if (!props.label) {
    throw new Error(`Label attribute is required for MenuDropdown`);
  }

  const listenToClick = (el) => {
    if (
      (el.target && el.target.closest("._ui-menu-dropdown-wrapper") === null) ||
      (el.target && el.target.closest("._ui-menu-item") !== null)
    ) {
      setMenuVisible(false);
    }
  };
  useEffect(() => {
    let _child = props.children.filter((x) => typeof x?.type === "function");
    setMenuItems(_child);
    window.addEventListener("click", listenToClick);
    return () => {
      window.removeEventListener("click", listenToClick);
    };
  }, []);
  return (
    <div
      className={[
        styles["_ui-menu-dropdown-wrapper"],
        "_ui-menu-dropdown-wrapper",
        props?.className || ""
      ].join(" ")}
    >
      <div className={styles["_ui-menu-container"]}>
        <button
          className={[
            styles["_ui-menu-dropdown-button"],
            props?.buttonClassName || ""
          ].join(" ")}
          onClick={() => setMenuVisible(!isMenuVisible)}
        >
          {props.label}
        </button>
        {isMenuVisible && (
          <div
            className={[
              styles["_ui-menu-dropdown"],
              props?.alignMenu === "right"
                ? styles["_ui-menu-dropdown-right"]
                : "",
              props?.menuClassName || ""
            ].join(" ")}
          >
            {menuItems}
          </div>
        )}
      </div>
    </div>
  );
};

const MenuItem = ({ ...props }) => {
  return (
    <div
      className={[
        styles["_ui-menu-item"],
        "_ui-menu-item",
        props.className || ""
      ].join(" ")}
      style={props.style || {}}
      id={props.id || null}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export { MenuDropdown, MenuItem };
