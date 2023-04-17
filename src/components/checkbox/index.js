import React from "react";
import styles from "../../styles/module.scss";
export default ({ ...props }) => {
  let index = Math.floor(Math.random() * (10000 - 1 + 1)) + 1;

  return (
    <div
      id={props.id || null}
      className={[
        `${styles["_ui-checkbox"]}`,
        "oneui-checkbox",
        `${props.className || ""}`,
        props.disabled ? styles["_ui-checkbox-disabled"] : ""
      ].join(" ")}
    >
      <div
        className={[
          `${styles["checkbox-round"]}`,
          "checkbox",
          props.disabled ? styles["checkbox-round-disabled"] : ""
        ].join(" ")}
      >
        <input
          type='checkbox'
          id={`checkbox-${index}`}
          onChange={(event) => props.onChange(event.target.checked)}
          checked={props.checked}
          disabled={props.disabled}
        />
        <label htmlFor={`checkbox-${index}`}></label>
      </div>
      {props.label && (
        <div className={`${styles["_ui-checkbox-label"]}`}>
          {props.label || ""}
        </div>
      )}
    </div>
  );
};
