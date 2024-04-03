import * as React from "react";
const SvgExpandAlt = ({ title, titleId, ...props }) => (
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
      d='M9.79 12.79 4 18.59V17a1 1 0 1 0-2 0v4a1 1 0 0 0 .08.38 1 1 0 0 0 .54.54c.12.051.25.078.38.08h4a1 1 0 0 0 0-2H5.41l5.8-5.79a1.004 1.004 0 1 0-1.42-1.42M21.92 2.62a1 1 0 0 0-.54-.54A1 1 0 0 0 21 2h-4a1 1 0 1 0 0 2h1.59l-5.8 5.79a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219L20 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.08-.38'
    />
  </svg>
);
export default SvgExpandAlt;
