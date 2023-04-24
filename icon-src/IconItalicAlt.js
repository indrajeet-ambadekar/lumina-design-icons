import * as React from "react";
const SvgIconItalicAlt = ({ title, titleId, ...props }) => (
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
      d='M17 6h-6a1 1 0 1 0 0 2h1.52l-3.2 8H7a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-1.52l3.2-8H17a1 1 0 1 0 0-2Z'
    />
  </svg>
);
export default SvgIconItalicAlt;
