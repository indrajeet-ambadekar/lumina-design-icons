import * as React from "react";
const SvgIconUtensils = ({ title, titleId, ...props }) => (
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
      d='M19 2a1 1 0 0 0-1 1v5.46l-1 .67V3a1 1 0 0 0-2 0v6.13l-1-.67V3a1 1 0 0 0-2 0v6a1 1 0 0 0 .45.83L15 11.54V21a1 1 0 0 0 2 0v-9.46l2.55-1.71A1 1 0 0 0 20 9V3a1 1 0 0 0-1-1ZM9 2a5 5 0 0 0-5 5v6a1 1 0 0 0 1 1h3v7a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1ZM8 12H6V7a3 3 0 0 1 2-2.83V12Z'
    />
  </svg>
);
export default SvgIconUtensils;
