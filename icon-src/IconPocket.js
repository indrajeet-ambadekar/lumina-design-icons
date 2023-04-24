import * as React from "react";
const SvgIconPocket = ({ title, titleId, ...props }) => (
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
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-20 0V5a2 2 0 0 1 2-2v0Z'
    />
    <path
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='m8 10 4 4 4-4'
    />
  </svg>
);
export default SvgIconPocket;
