import * as React from "react";
const SvgKid = ({ title, titleId, ...props }) => (
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
      d='M10 10a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4.5 4.06a1 1 0 0 0-1.37.36 1.3 1.3 0 0 1-2.26 0 1 1 0 0 0-1.37-.36 1 1 0 0 0-.37 1.36 3.31 3.31 0 0 0 5.74 0 1 1 0 0 0-.37-1.36M15 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3-7a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18A8 8 0 0 1 9 4.57q-.015.215 0 .43a3 3 0 0 0 3 3 1 1 0 1 0 0-2 1 1 0 1 1 0-2 8 8 0 0 1 0 16'
    />
  </svg>
);
export default SvgKid;
