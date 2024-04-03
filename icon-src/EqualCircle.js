import * as React from "react";
const SvgEqualCircle = ({ title, titleId, ...props }) => (
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
      d='M15 13H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m0-4H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m-3-7a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20'
    />
  </svg>
);
export default SvgEqualCircle;
