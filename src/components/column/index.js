import React from "react";
import styles from "../../styles/module.scss";
export default ({ ...props }) => {
  let subProps = { ...props };
  delete subProps.children;
  return (
    <div
      {...subProps}
      className={[
        `${styles["_ui-col"]}`,
        `grid-column`,
        props.className || ""
      ].join(" ")}
    >
      {props.children}
    </div>
  );
};
