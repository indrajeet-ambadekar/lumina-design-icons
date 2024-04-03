import * as React from "react";
const SvgArrowUpAlt = ({ title, titleId, ...props }) => (
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
      d='m17.71 11.29-5-5a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21l-5 5a1.004 1.004 0 0 0 1.42 1.42L11 9.41V17a1 1 0 1 0 2 0V9.41l3.29 3.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42'
    />
  </svg>
);
export default SvgArrowUpAlt;
