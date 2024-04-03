import * as React from "react";
const SvgBorderRight = ({ title, titleId, ...props }) => (
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
      d='M4.5 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4-8a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0-8a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-4 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2m12-12a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-4 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0-16a1 1 0 1 0 0 2 1 1 0 0 0 0-2m8 0a1 1 0 0 0-1 1v16a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1m-4 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-4-12a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2'
    />
  </svg>
);
export default SvgBorderRight;
