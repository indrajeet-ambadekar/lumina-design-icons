import * as React from "react";
const SvgIconClockFive = ({ title, titleId, ...props }) => (
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
      d='M11 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm1-8.07V7a1 1 0 0 0-2 0v5.11a1 1 0 0 0 .11.59l1.5 2.6a1.004 1.004 0 0 0 1.74-1L12 11.93Z'
    />
  </svg>
);
export default SvgIconClockFive;
