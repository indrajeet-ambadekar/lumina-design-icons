import * as React from "react";
const SvgUsdCircle = ({ title, titleId, ...props }) => (
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
      d='M11 9h4a1 1 0 1 0 0-2h-2V6a1 1 0 0 0-2 0v1a3 3 0 0 0 0 6h2a1 1 0 0 1 0 2H9a1 1 0 0 0 0 2h2v1a1 1 0 0 0 2 0v-1a3 3 0 0 0 0-6h-2a1 1 0 0 1 0-2m1-8a11 11 0 1 0 0 22 11 11 0 0 0 0-22m0 20a9 9 0 1 1 0-18 9 9 0 0 1 0 18'
    />
  </svg>
);
export default SvgUsdCircle;
