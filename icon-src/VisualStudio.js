import * as React from "react";
const SvgVisualStudio = ({ title, titleId, ...props }) => (
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
      d='M16.85 2 9.09 9.77l-4.9-3.86L2.05 7v10l2.15 1.09 4.93-3.85L16.87 22 22 19.93V4zM4.37 14.3V9.65l2.44 2.43zm12.33 1.29L12.05 12l4.65-3.59z'
    />
  </svg>
);
export default SvgVisualStudio;
