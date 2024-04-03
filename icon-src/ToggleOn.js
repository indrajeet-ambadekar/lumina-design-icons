import * as React from "react";
const SvgToggleOn = ({ title, titleId, ...props }) => (
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
      d='M16 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7m0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M16 5H8a7 7 0 0 0 0 14h8a7 7 0 1 0 0-14m0 12H8A5 5 0 0 1 8 7h8a5 5 0 1 1 0 10'
    />
  </svg>
);
export default SvgToggleOn;
