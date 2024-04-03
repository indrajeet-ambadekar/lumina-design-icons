import * as React from "react";
const SvgClockFour = ({ title, titleId, ...props }) => (
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
      d='M11 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16m3.1-7.37L12 11.42V7a1 1 0 0 0-2 0v5.12a.7.7 0 0 0 .05.2q.03.09.08.17.04.085.1.16l.16.13.09.09 2.6 1.5a1 1 0 0 0 .5.13 1 1 0 0 0 .5-1.87z'
    />
  </svg>
);
export default SvgClockFour;
