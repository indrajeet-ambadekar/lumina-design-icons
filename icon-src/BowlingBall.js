import * as React from "react";
const SvgBowlingBall = ({ title, titleId, ...props }) => (
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
      d='M7.992 8.002a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4-6a10 10 0 1 0 10 10 10.01 10.01 0 0 0-10-10m0 18a8 8 0 1 1 8-8 8.01 8.01 0 0 1-8 8m-1-10a1 1 0 1 0 0 2.001 1 1 0 0 0 0-2.001m0-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2'
    />
  </svg>
);
export default SvgBowlingBall;
