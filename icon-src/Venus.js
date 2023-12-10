import * as React from "react";
const SvgVenus = ({ title, titleId, ...props }) => (
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
      d='M19 9a7 7 0 1 0-8 6.92V18h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-2.08A7 7 0 0 0 19 9Zm-7 5a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z'
    />
  </svg>
);
export default SvgVenus;
