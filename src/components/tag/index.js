import React, { useEffect, useState } from "react";
import styles from "../../styles/module.scss";
/*
TAG TYPE ENUM:

*/
export default ({ ...props }) => {
  if (
    ![
      "default",
      "success",
      "warn",
      "error",
      "inprogress",
      "pending",
      "info",
      "unavailable"
    ].includes((props?.type || "").toLowerCase())
  ) {
    throw new Error(
      `'type' attribute should have one of the values: "default","success","warn","error","inprogress","pending","info","unavailable"`
    );
  }
  return (
    <div
      id={props.id || null}
      onClick={props?.onClick}
      className={[
        styles["elc_ui-tag"],
        props.mode === "dark"
          ? styles[`elc_ui-tag-${props.type.toLowerCase()}-dark`]
          : styles[`elc_ui-tag-${props.type.toLowerCase()}`],
        props.className || ""
      ].join(" ")}
      style={props.style || {}}
    >
      {props.children}
    </div>
  );
};
