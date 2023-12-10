import * as React from "react";
const SvgLeftArrowToLeft = ({ title, titleId, ...props }) => (
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
      d='M21 11H9.41l2.3-2.29A1.005 1.005 0 0 0 11 6.996a1.004 1.004 0 0 0-.71.294l-4 4a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l4 4a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095L9.41 13H21a1 1 0 0 0 0-2ZM3 3a1 1 0 0 0-1 1v16a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1Z'
    />
  </svg>
);
export default SvgLeftArrowToLeft;
