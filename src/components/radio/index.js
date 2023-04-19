import React from "react";
import styles from "../../styles/module.scss";
export default ({ ...props }) => {
  let index = Math.floor(Math.random() * (10000 - 1 + 1)) + 1;
  if (props.name === null || props.name === undefined) {
    throw new Error(`'name' is a mandatory attribute for radio button`);
  }
  if (props.value === null || props.value === undefined) {
    throw new Error(`'value' is a mandatory attribute for radio button`);
  }
  if (typeof props.onChange !== "function") {
    throw new Error(
      `'onChange' is a mandatory attribute for radio button and it needs to be a function`
    );
  }
  return (
    <div
      className={[
        styles["elc_ui-radio-button"],
        "elc_ui-radio-button",
        props.className || "",
        props.disabled ? styles["elc_ui-radio-button-disabled"] : ""
      ].join(" ")}
    >
      <input
        type='radio'
        id={`elc_ui-radio-${index}`}
        name={props.name}
        value={props.value}
        checked={props.checked}
        disabled={props.disabled}
        className={[styles["elc_ui-radio-input"], "elc_ui-radio-input"].join(
          " "
        )}
        onChange={(e) => props.onChange(e.target.value)}
      />
      <label
        htmlFor={`elc_ui-radio-${index}`}
        className={[styles["elc_ui-radio-label"], "elc_ui-radio-label"].join(
          " "
        )}
      >
        {props.label || ""}
      </label>
    </div>
  );
};
