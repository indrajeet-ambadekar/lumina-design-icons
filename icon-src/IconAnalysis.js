import * as React from "react";
const SvgIconAnalysis = ({ title, titleId, ...props }) => (
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
      d='M21.71 7.29a.999.999 0 0 0-1.42 0L14 13.59l-4.29-4.3a1 1 0 0 0-1.42 0l-6 6a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219L9 11.41l4.29 4.3a1.001 1.001 0 0 0 1.42 0l7-7a.998.998 0 0 0 0-1.42Z'
    />
  </svg>
);
export default SvgIconAnalysis;
