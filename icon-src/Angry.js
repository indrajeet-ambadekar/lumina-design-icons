import * as React from "react";
const SvgAngry = ({ title, titleId, ...props }) => (
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
      d='M10 11a1 1 0 0 0 .45-1.89l-2-1a1 1 0 1 0-.9 1.78l2 1A.93.93 0 0 0 10 11Zm2-9a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20Zm-3.64-4.67a1 1 0 0 0 .173 1.646.998.998 0 0 0 1.107-.116 3.76 3.76 0 0 1 4.72 0 1 1 0 0 0 .64.23 1 1 0 0 0 .64-1.76 5.81 5.81 0 0 0-7.28 0Zm7.19-7.22-2 1A1 1 0 0 0 14 11a.93.93 0 0 0 .45-.11l2-1a1 1 0 0 0-.9-1.78Z'
    />
  </svg>
);
export default SvgAngry;
