import * as React from "react";
const SvgRssAlt = ({ title, titleId, ...props }) => (
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
      d='M2.88 16.88a3 3 0 1 0 4.24 4.24 3 3 0 0 0 0-4.24 3.08 3.08 0 0 0-4.24 0Zm2.83 2.83a1.001 1.001 0 0 1-1.639-.325 1 1 0 0 1 .22-1.095 1 1 0 0 1 1.638.325 1 1 0 0 1-.219 1.095ZM5 12a1 1 0 0 0 0 2 5 5 0 0 1 5 5 1 1 0 0 0 2 0 7 7 0 0 0-7-7Zm0-4a1 1 0 0 0 0 2 9 9 0 0 1 9 9 1 1 0 0 0 2 0A11 11 0 0 0 5 8Z'
    />
  </svg>
);
export default SvgRssAlt;
