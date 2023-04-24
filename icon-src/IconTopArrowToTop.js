import * as React from "react";
const SvgIconTopArrowToTop = ({ title, titleId, ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 24 24'
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#000'
      d='M12.71 6.29a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21l-4 4a1.003 1.003 0 1 0 1.42 1.42L11 9.41V21a1 1 0 0 0 2 0V9.41l2.29 2.3a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095l-4-4ZM19 2H5a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2Z'
    />
  </svg>
);
export default SvgIconTopArrowToTop;
