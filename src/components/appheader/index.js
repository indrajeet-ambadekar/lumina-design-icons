import React, { useState, useEffect } from "react";
import styles from "../../styles/module.scss";
export default ({ ...props }) => {
  const [menuOpen, toggleMenu] = useState(false);
  const _handleLogoClick = () => {
    if (typeof props.onIconClick === "function") {
      props.onIconClick();
    }
  };
  useEffect(() => {
    const pageClickEvent = (e) => {
      // If the active element exists and is clicked outside of
      toggleMenu(!menuOpen);
    };
    if (menuOpen) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [menuOpen]);
  return (
    <div
      className={[
        styles["_ui-header-wrapper"],
        "_ui-header-wrapper",
        props.className || ""
      ].join(" ")}
      id={props.id || null}
      style={props.style || {}}
    >
      <div className={styles["_ui-header-app-logo"]}>
        {props.children && (
          <button
            className={styles["_ui-header-hamburger-btn"]}
            onClick={() => {
              toggleMenu(!menuOpen);
            }}
          >
            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`} />
          </button>
        )}
        <img
          src='https://static.elysium-cloud.com/images/logo.png' //'https://instainsure.hdfclife.com/static/media/26075_14.f38e95e8.svg'
          alt='Elysium Cloud'
          className={styles["_ui-header-app-logo-img"]}
          onClick={_handleLogoClick}
        />
        {props.secondaryIcon}
      </div>
      <div className={styles["_ui-header-nav-cntnr"]}>{props.children}</div>
      <div className={styles["_ui-header-profile-wrapper"]}>
        {props.profileIcon}
      </div>
      {menuOpen ? (
        <div className={styles["_ui-header-hamburger-menu"]}>
          {props.children}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
