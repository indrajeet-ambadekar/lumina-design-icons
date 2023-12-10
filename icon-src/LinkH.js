import * as React from "react";
const SvgLinkH = ({ title, titleId, ...props }) => (
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
      d='M8 12a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2H9a1 1 0 0 0-1 1Zm2 3H7a3 3 0 0 1 0-6h3a1 1 0 1 0 0-2H7a5 5 0 1 0 0 10h3a1 1 0 0 0 0-2Zm7-8h-3a1 1 0 1 0 0 2h3a3 3 0 0 1 0 6h-3a1 1 0 0 0 0 2h3a5 5 0 1 0 0-10Z'
    />
  </svg>
);
export default SvgLinkH;
