import * as React from "react";
const SvgIconHorizontalAlignLeft = ({ title, titleId, ...props }) => (
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
      d='M21 10h-5V7a1 1 0 0 0-1-1H4V3a1 1 0 0 0-2 0v18a1 1 0 1 0 2 0v-3h17a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1ZM4 8h10v2H4V8Zm16 8H4v-4h16v4Z'
    />
  </svg>
);
export default SvgIconHorizontalAlignLeft;
