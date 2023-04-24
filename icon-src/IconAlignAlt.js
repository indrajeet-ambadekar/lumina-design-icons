import * as React from "react";
const SvgIconAlignAlt = ({ title, titleId, ...props }) => (
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
      d='M10 11H3a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2Zm0 8H3a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2Zm4-14h7a1 1 0 1 0 0-2h-7a1 1 0 1 0 0 2Zm-4 2H3a1 1 0 0 0 0 2h7a1 1 0 1 0 0-2Zm0 8H3a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2Zm0-12H7a1 1 0 0 0 0 2h3a1 1 0 1 0 0-2Zm11 4h-7a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2Zm0 4h-7a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2Zm-4 8h-3a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2Zm4-4h-7a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2Z'
    />
  </svg>
);
export default SvgIconAlignAlt;
