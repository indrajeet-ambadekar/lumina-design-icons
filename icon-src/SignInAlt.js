import * as React from "react";
const SvgSignInAlt = ({ title, titleId, ...props }) => (
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
      d='M20.5 15.1a1 1 0 0 0-1.34.45A8 8 0 1 1 12 4a7.93 7.93 0 0 1 7.16 4.45 1.006 1.006 0 1 0 1.8-.9 10 10 0 1 0 0 8.9 1 1 0 0 0-.46-1.35M21 11h-9.59l2.3-2.29a1.004 1.004 0 0 0-1.42-1.42l-4 4a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l4 4a1.002 1.002 0 0 0 1.64-.325 1 1 0 0 0-.22-1.095L11.41 13H21a1 1 0 1 0 0-2'
    />
  </svg>
);
export default SvgSignInAlt;
