import * as React from "react";
const SvgIconPostcard = ({ title, titleId, ...props }) => (
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
      d='M17 11h1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1ZM6 12h5a1 1 0 0 0 0-2H6a1 1 0 0 0 0 2Zm16-8H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm-1 14H3V6h18v12ZM6 16h5a1 1 0 0 0 0-2H6a1 1 0 0 0 0 2Z'
    />
  </svg>
);
export default SvgIconPostcard;
