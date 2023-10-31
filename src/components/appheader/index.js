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
      //
      if (!e.target.closest(".elc_ui-header-hamburger-btn")) {
        toggleMenu(!menuOpen);
      }
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
        styles["elc_ui-header-wrapper"],
        "elc_ui-header-wrapper",
        props.className || ""
      ].join(" ")}
      id={props.id || null}
      style={props.style || {}}
    >
      <div
        className={[
          styles["elc_ui-header-app-logo"],
          "elc_ui-header-app-logo"
        ].join(" ")}
      >
        {props.children && (
          <button
            className={[
              styles["elc_ui-header-hamburger-btn"],
              "elc_ui-header-hamburger-btn"
            ].join(" ")}
            onClick={() => {
              toggleMenu(!menuOpen);
            }}
          >
            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`} />
          </button>
        )}
        {props.logo && (
          // <img
          //   src={props.logo ? props.logo : LogoBase64} //'https://s3.amazonaws.com/static.elysium-cloud.com/images/logo.png'
          //   alt='Elysium Cloud'
          //   className={[
          //     styles["elc_ui-header-app-logo-img"],
          //     "elc_ui-header-app-logo-img"
          //   ].join(" ")}
          //   onClick={_handleLogoClick}
          // />
          <div
            className={[
              styles["elc_ui-header-app-logo-wrapper"],
              "elc_ui-header-logo-wrapper"
            ].join(" ")}
          >
            {props.logo}
          </div>
        )}
        {props.secondaryIcon}
      </div>
      <div
        className={[
          styles["elc_ui-header-nav-cntnr"],
          "elc_ui-header-nav-cntnr"
        ].join(" ")}
      >
        {props.children}
      </div>
      <div
        className={[
          styles["elc_ui-header-profile-wrapper"],
          "elc_ui-header-profile-wrapper"
        ].join(" ")}
      >
        {props.profileIcon}
      </div>
      {menuOpen ? (
        <div
          className={[
            styles["elc_ui-header-hamburger-menu"],
            "elc_ui-header-hamburger-menu"
          ].join(" ")}
        >
          {props.children}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
