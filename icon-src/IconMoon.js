import * as React from "react";
const SvgIconMoon = ({ title, titleId, ...props }) => (
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
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79v0Z'
    />
  </svg>
);
export default SvgIconMoon;
