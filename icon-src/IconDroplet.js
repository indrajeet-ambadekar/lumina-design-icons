import * as React from "react";
const SvgIconDroplet = ({ title, titleId, ...props }) => (
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
      d='m12 2.69 5.66 5.66a8 8 0 1 1-11.31 0L12 2.69Z'
    />
  </svg>
);
export default SvgIconDroplet;
