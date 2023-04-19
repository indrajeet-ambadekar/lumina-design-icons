import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/module.scss";
export default ({ ...props }) => {
  var {
    onChange,
    value,
    placeholder,
    label,
    name,
    iconLeft,
    iconRight,
    className,
    type,
    textStyle
  } = props;
  const inputEl = useRef(null);
  let testId = props["data-testid"] || null;
  const [isFocused, setFocused] = useState(false);
  const [inputLabel, setValue] = useState(value || "");
  if (onChange === null || onChange === undefined) {
    onChange = function () {};
  }
  useEffect(() => {
    if (inputLabel !== value) onChange(inputLabel || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputLabel]);

  const _handleOnFocus = (event) => {
    setFocused(true);
    if (typeof props.onFocus === "function") {
      props.onFocus(event);
    }
  };
  const _handleOnBlur = (event) => {
    setFocused(false);
    if (typeof props.onBlur === "function") {
      props.onBlur(event);
    }
  };
  function _handleOnChange(event) {
    const { value, selectionEnd } = event.target;
    const rightCharsCount = value.length - selectionEnd;
    const newPosition = value.length - rightCharsCount;
    setValue(
      processByType(event.target.value, type || "text", textStyle || null)
    );

    setTimeout(() => {
      inputEl.current.setSelectionRange(newPosition, newPosition);
    }, 0);
  }
  return (
    <div
      className={[
        styles["elc_ui-input-wrapper"],
        `${className || ""}`,
        `${props.disabled ? "disabled" : ""}`,
        isFocused ? styles["input-focused"] : ""
      ].join(" ")}
    >
      {label && <label>{label}</label>}

      {type === "mobile" ? (
        <span
          className={[styles["elc_ui-input-icon-left"], "icon-left"].join(" ")}
        >
          <span className={styles["elc_ui-static-icon-left"]}>+91</span>
        </span>
      ) : (
        iconLeft && (
          <span
            className={[styles["elc_ui-input-icon-left"], "icon-left"].join(" ")}
          >
            {iconLeft}
          </span>
        )
      )}

      <input
        type={
          ["text", "password", "email", "mobile"].includes(type) ? type : "text"
        }
        value={value}
        data-testid={testId}
        onChange={_handleOnChange}
        placeholder={placeholder || ""}
        className={styles["elc_ui-input-field"]}
        name={name || label}
        onFocus={_handleOnFocus}
        onBlur={_handleOnBlur}
        onKeyDown={props.onKeyDown}
        onKeyUp={props.onKeyUp}
        onKeyPress={props.onKeyPress}
        autoComplete='new-password'
        autoFocus={false}
        disabled={props.disabled || false}
        maxLength={type === "mobile" ? 10 : props.maxLength || 500000}
        ref={inputEl}
      ></input>
      {iconRight && (
        <span
          className={[styles["elc_ui-input-icon-right"], "icon-right"].join(" ")}
        >
          {iconRight}
        </span>
      )}
    </div>
  );
};
const processByType = (str, type, textCase) => {
  if (type === "number" || type === "mobile") {
    str = str.replace(/[^0-9\.]+/g, "");
  }
  if (type === "text") {
    switch (textCase) {
      case "uppercase":
        str = str.toUpperCase();
        break;
      case "lowercase":
        str = str.toLowerCase();
        break;
      default:
        break;
    }
  }
  return str;
};
