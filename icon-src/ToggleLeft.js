import * as React from "react";
const SvgToggleLeft = ({ title, titleId, ...props }) => (
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
      d='M16 5H8a7 7 0 0 0 0 14h8a7 7 0 1 0 0-14Z'
    />
    <path
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M8 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'
    />
  </svg>
);
export default SvgToggleLeft;
