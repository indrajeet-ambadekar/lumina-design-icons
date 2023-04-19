import React from "react";
import styles from "../../styles/module.scss";
import { isType } from "../../utils";
export default ({ ...props }) => {
  const { crumbs, className, crumbClassName, style, id } = props;
  if (!isType("Array", crumbs)) {
    throw new Error(
      `Crumbs to Breadcrumb are required in the form of an array`
    );
  }
  return (
    <div
      className={[
        styles["elc_ui-breadcrumb"],
        "elc_ui-breadcrumb",
        className || ""
      ].join(" ")}
      id={id || null}
      style={style || {}}
    >
      {crumbs.map((crumb, i) => (
        <div
          key={i}
          className={[
            styles["elc_ui-breadcrumb-crumb"],
            "elc_ui-breadcrumb-crumb",
            crumbClassName || ""
          ].join(" ")}
          onClick={crumb.onClick}
        >
          <span className={styles["elc_ui-breadcrumb-label"]}>
            <span>{crumb.label}</span>
          </span>
          <span className={styles["elc_ui-breadcrumb-chevron"]}>
            {i < crumbs.length - 1 ? (
              <i className='fas fa-chevron-right' />
            ) : (
              ""
            )}
          </span>
        </div>
      ))}
    </div>
  );
};
