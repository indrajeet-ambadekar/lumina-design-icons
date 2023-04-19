import React, { useEffect, useState } from "react";
import styles from "../../styles/module.scss";
import { isType } from "../../utils";
export default ({ ...props }) => {
  const { name, className, id, onChange, label, children, value } = props;
  if (props === undefined) {
    return false;
  }
  if (!isType("Array", children)) {
    throw new Error(
      `Children to SelectDropDown are required in the form of an array`
    );
  }
  if (value === null || value === undefined) {
    throw new Error(`Value of SelectDropDown is a required attribute`);
  }
  let invalid_child = children.filter((x) => x.type !== "option");
  if (invalid_child.length > 0) {
    throw new Error(
      `Children to SelectDropDown need to consist of 'option' tag only`
    );
  }
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(children);
  const [selectedItem, setSelectedItem] = useState(props?.value || null);
  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (item) => {
    selectedItem == item?.props?.value
      ? setSelectedItem(null)
      : setSelectedItem(item?.props?.value);
    setOpen(false);
    onChange(item?.props?.value);
  };
  const [isFocused, setFocused] = useState(false);
  const _handleOnFocus = () => {
    setFocused(true);
  };
  const _handleOnBlur = () => {
    setFocused(false);
    setOpen(false);
  };
  let displayValue = selectedItem
    ? items.find((item) => item?.props?.value == selectedItem)
    : label;
  if (
    displayValue != undefined &&
    displayValue != null &&
    displayValue != label
  ) {
    displayValue = displayValue?.props?.children;
  } else {
    displayValue = label;
  }
  return (
    <div
      className={["elc_ui-select-field", className || ""].join(" ")}
      id={id || null}
    >
      <div
        className={[
          styles["elc_ui-dropdown"],
          isFocused ? styles["elc_ui-dropdown-focused"] : ""
        ].join(" ")}
        tabIndex='0'
        onFocus={_handleOnFocus}
        onBlur={_handleOnBlur}
      >
        <div
          className={[
            styles["elc_ui-select-label"],
            displayValue !== label ? styles["elc_ui-select-label-visible"] : ""
          ].join(" ")}
        >
          {label}
        </div>
        <div
          className={styles["elc_ui-dropdown-header"]}
          onClick={toggleDropdown}
        >
          {displayValue}
          <i
            className={[
              `fa`,
              `fa-chevron-down`,
              `${styles["elc_ui-dropdown-icon"]}`,
              `${isOpen ? styles["elc_ui-dropdown-icon-open"] : ""}`
            ].join(" ")}
          ></i>
        </div>
        <div
          className={[
            `${styles["elc_ui-dropdown-body"]}`,
            `${isOpen ? styles["elc_ui-dropdown-body-open"] : ""}`
          ].join(" ")}
        >
          {items.map((item, i) => (
            <div
              className={[
                styles["elc_ui-dropdown-item"],
                item.props.value === selectedItem
                  ? styles["elc_ui-dropdown-item-selected"]
                  : ""
              ].join(" ")}
              onClick={(e) => handleItemClick(item)}
              id={item.props.value}
              key={i}
            >
              <span
                className={[
                  `${styles["elc_ui-dropdown-item-dot"]}`,
                  `${
                    item.props.value == selectedItem &&
                    styles["elc_ui-dropdown-item-dot-selected"]
                  }`
                ].join(" ")}
              >
                •{" "}
              </span>
              {item.props.children}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
