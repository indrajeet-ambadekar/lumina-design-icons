import * as React from "react";
const SvgArrowsUpRight = ({ title, titleId, ...props }) => (
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
      d='M20.92 16.62a1 1 0 0 0-.21-.33l-3-3a1.004 1.004 0 1 0-1.42 1.42l1.3 1.29H9a1 1 0 0 1-1-1V6.41l1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-3-3a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21l-3 3a1.004 1.004 0 1 0 1.42 1.42L6 6.41V15a3 3 0 0 0 3 3h8.59l-1.3 1.29a1.002 1.002 0 0 0 .326 1.639 1 1 0 0 0 1.094-.219l3-3a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76'
    />
  </svg>
);
export default SvgArrowsUpRight;
