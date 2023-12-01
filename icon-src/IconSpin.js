import * as React from "react";
const SvgIconSpin = ({ title, titleId, ...props }) => (
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
      d='M13 3a7 7 0 0 0 0 14 5 5 0 1 0 0-10 3 3 0 0 0 0 6 1 1 0 0 0 0-2 1 1 0 0 1 0-2 3 3 0 0 1 0 6 5 5 0 1 1 0-10 7 7 0 1 1 0 14 9 9 0 0 1-9-9 1 1 0 0 0-2 0 11 11 0 0 0 11 11 9 9 0 0 0 0-18Z'
    />
  </svg>
);
export default SvgIconSpin;
