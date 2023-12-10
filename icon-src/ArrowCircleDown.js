import * as React from "react";
const SvgArrowCircleDown = ({ title, titleId, ...props }) => (
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
      d='M11.29 15.71a1 1 0 0 0 .33.21 1 1 0 0 0 .76 0 1 1 0 0 0 .33-.21l3-3a1.004 1.004 0 1 0-1.42-1.42L13 12.59V9a1 1 0 0 0-2 0v3.59l-1.29-1.3a1 1 0 0 0-1.639.325 1 1 0 0 0 .219 1.095l3 3ZM12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm0-18a8 8 0 1 1 0 16 8 8 0 0 1 0-16Z'
    />
  </svg>
);
export default SvgArrowCircleDown;
