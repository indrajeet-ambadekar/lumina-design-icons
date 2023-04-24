import * as React from "react";
const SvgIconTopArrowFromTop = ({ title, titleId, ...props }) => (
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
      d='M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2ZM8.71 7.71 11 5.41V17a1 1 0 0 0 2 0V5.41l2.29 2.3a1 1 0 0 0 1.639-.326 1 1 0 0 0-.219-1.094l-4-4a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21l-4 4a1.004 1.004 0 1 0 1.42 1.42Z'
    />
  </svg>
);
export default SvgIconTopArrowFromTop;
