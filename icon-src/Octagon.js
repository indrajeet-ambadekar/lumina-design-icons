import * as React from "react";
const SvgOctagon = ({ title, titleId, ...props }) => (
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
      d='M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2Z'
    />
  </svg>
);
export default SvgOctagon;
