import * as React from "react";
const SvgSmileWink = ({ title, titleId, ...props }) => (
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
      d='M14.36 14.23a3.76 3.76 0 0 1-4.72 0 1.001 1.001 0 0 0-1.28 1.54 5.68 5.68 0 0 0 7.28 0 1.001 1.001 0 0 0-1.28-1.54M10.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M15 9h-1a1 1 0 1 0 0 2h1a1 1 0 0 0 0-2m-3-7a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20'
    />
  </svg>
);
export default SvgSmileWink;
