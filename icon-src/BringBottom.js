import * as React from "react";
const SvgBringBottom = ({ title, titleId, ...props }) => (
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
      d='M21 14h-2a1 1 0 0 0 0 2h1v4H4v-4h7a1 1 0 0 0 0-2h-1V9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1M4 10h4v4H4zm8.71-3.3L14 5.41V17a1 1 0 0 0 2 0V5.41l1.29 1.29a1 1 0 0 0 1.42.01 1 1 0 0 0 0-1.41l-3-3a1 1 0 0 0-1.42 0l-3 3a1 1 0 0 0 .327 1.627A1 1 0 0 0 12.71 6.7'
    />
  </svg>
);
export default SvgBringBottom;
