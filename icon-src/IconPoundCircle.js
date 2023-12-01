import * as React from "react";
const SvgIconPoundCircle = ({ title, titleId, ...props }) => (
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
      d='M16 15h-5.18a3 3 0 0 0 .18-1v-1h2.5a1 1 0 0 0 0-2H11v-1a1.95 1.95 0 0 1 3.63-1 1.004 1.004 0 0 0 1.74-1A4 4 0 0 0 9 10v1H8a1 1 0 0 0 0 2h1v1a1 1 0 0 1-1 1 1 1 0 0 0 0 2h8a1 1 0 0 0 0-2ZM12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22Zm0 20a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z'
    />
  </svg>
);
export default SvgIconPoundCircle;
