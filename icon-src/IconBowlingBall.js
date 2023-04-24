import * as React from "react";
const SvgIconBowlingBall = ({ title, titleId, ...props }) => (
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
      d='M7.992 8.002a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm4-6a10 10 0 1 0 10 10 10.012 10.012 0 0 0-10-10Zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8Zm-1-10a1 1 0 1 0 0 2.001 1 1 0 0 0 0-2.001Zm0-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z'
    />
  </svg>
);
export default SvgIconBowlingBall;
