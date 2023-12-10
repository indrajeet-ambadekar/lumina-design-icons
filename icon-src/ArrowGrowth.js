import * as React from "react";
const SvgArrowGrowth = ({ title, titleId, ...props }) => (
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
      d='M21.92 6.62a1 1 0 0 0-.54-.54A1 1 0 0 0 21 6h-5a1 1 0 0 0 0 2h2.59L13 13.59l-3.29-3.3a1.001 1.001 0 0 0-1.42 0l-6 6a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219L9 12.41l3.29 3.3a1.001 1.001 0 0 0 1.42 0L20 9.41V12a1 1 0 0 0 2 0V7a.997.997 0 0 0-.08-.38Z'
    />
  </svg>
);
export default SvgArrowGrowth;
