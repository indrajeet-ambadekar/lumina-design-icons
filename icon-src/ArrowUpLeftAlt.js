import * as React from "react";
const SvgArrowUpLeftAlt = ({ title, titleId, ...props }) => (
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
      d='M9.41 8H17a1 1 0 1 0 0-2H7a1 1 0 0 0-.38.08 1 1 0 0 0-.54.54A1 1 0 0 0 6 7v10a1 1 0 1 0 2 0V9.41l8.29 8.3a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095L9.41 8Z'
    />
  </svg>
);
export default SvgArrowUpLeftAlt;
