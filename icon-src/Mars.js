import * as React from "react";
const SvgMars = ({ title, titleId, ...props }) => (
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
      d='M20.42 4.12a1 1 0 0 0-.54-.54 1 1 0 0 0-.38-.08h-4a1 1 0 1 0 0 2h1.59l-2.4 2.4a7 7 0 1 0 1.41 1.41l2.4-2.4V8.5a1 1 0 1 0 2 0v-4a1.001 1.001 0 0 0-.08-.38ZM14 17a5 5 0 1 1-7.142-7A5 5 0 0 1 14 17Z'
    />
  </svg>
);
export default SvgMars;
