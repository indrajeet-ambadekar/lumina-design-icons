import * as React from "react";
const SvgClockEight = ({ title, titleId, ...props }) => (
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
      d='M11 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm0-14a1 1 0 0 0-1 1v4.42l-2.1 1.21a1 1 0 0 0 .5 1.87 1 1 0 0 0 .5-.13l2.6-1.5.09-.09.16-.13a.863.863 0 0 0 .1-.16.891.891 0 0 0 .08-.17.65.65 0 0 0 .05-.2L12 12V7a1 1 0 0 0-1-1Z'
    />
  </svg>
);
export default SvgClockEight;
