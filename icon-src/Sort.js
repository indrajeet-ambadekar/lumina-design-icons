import * as React from "react";
const SvgSort = ({ title, titleId, ...props }) => (
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
      d='M16.29 14.29 12 18.59l-4.29-4.3a1.004 1.004 0 0 0-1.42 1.42l5 5a1 1 0 0 0 1.095.219 1 1 0 0 0 .325-.22l5-5a1.003 1.003 0 1 0-1.42-1.42M7.71 9.71 12 5.41l4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-5-5a1 1 0 0 0-1.42 0l-5 5a1.004 1.004 0 1 0 1.42 1.42'
    />
  </svg>
);
export default SvgSort;
