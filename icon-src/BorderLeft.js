import * as React from "react";
const SvgBorderLeft = ({ title, titleId, ...props }) => (
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
      d='M11.5 19a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0-4a1 1 0 1 0 0 2.002 1 1 0 0 0 0-2.002m0-4a1 1 0 1 0 0 2.002 1 1 0 0 0 0-2.002m-8-8a1 1 0 0 0-1 1v16a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1m16 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-8 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-4 4a1 1 0 1 0 0 2.001A1 1 0 0 0 7.5 11m0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0-16a1 1 0 1 0 0 2 1 1 0 0 0 0-2m12 8a1 1 0 1 0 0 2.002 1 1 0 0 0 0-2.002m0 4a1 1 0 1 0 0 2.002 1 1 0 0 0 0-2.002m-8-12a1 1 0 1 0 0 2 1 1 0 0 0 0-2m8 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0-12a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-4-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0-8a1 1 0 1 0 0 2.002 1 1 0 0 0 0-2.002'
    />
  </svg>
);
export default SvgBorderLeft;
