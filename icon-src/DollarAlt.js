import * as React from "react";
const SvgDollarAlt = ({ title, titleId, ...props }) => (
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
      d='M14 11h-1V7h2a1 1 0 0 1 1 1 1 1 0 0 0 2 0 3 3 0 0 0-3-3h-2V3a1 1 0 0 0-2 0v2h-1a4 4 0 0 0 0 8h1v4H9a1 1 0 0 1-1-1 1 1 0 1 0-2 0 3 3 0 0 0 3 3h2v2a1 1 0 0 0 2 0v-2h1a4 4 0 1 0 0-8Zm-3 0h-1a2 2 0 1 1 0-4h1v4Zm3 6h-1v-4h1a2 2 0 0 1 0 4Z'
    />
  </svg>
);
export default SvgDollarAlt;
