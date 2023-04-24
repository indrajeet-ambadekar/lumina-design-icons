import * as React from "react";
const SvgIconTag = ({ title, titleId, ...props }) => (
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
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='m20.59 13.41-7.17 7.17a1.998 1.998 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82v0ZM7 7h.01'
    />
  </svg>
);
export default SvgIconTag;
