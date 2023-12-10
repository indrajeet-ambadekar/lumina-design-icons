import * as React from "react";
const SvgPenTool = ({ title, titleId, ...props }) => (
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
      d='m12 19 7-7 3 3-7 7-3-3Z'
    />
    <path
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5ZM2 2l7.586 7.586'
    />
    <path
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M11 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z'
    />
  </svg>
);
export default SvgPenTool;
