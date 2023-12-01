import * as React from "react";
const SvgIconGridAlt = ({ title, titleId, ...props }) => (
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
      d='M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM11 20H4v-4h7v4Zm0-6H4v-4h7v4Zm9 6h-7v-4h7v4Zm0-6h-7v-4h7v4Zm0-6H4V4h16v4Z'
    />
  </svg>
);
export default SvgIconGridAlt;
