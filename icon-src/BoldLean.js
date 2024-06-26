import * as React from "react";
const SvgBoldLean = ({ title, titleId, ...props }) => (
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
      d='M6 12h9a4 4 0 1 1 0 8H6zM6 4h8a4 4 0 1 1 0 8H6z'
    />
  </svg>
);
export default SvgBoldLean;
