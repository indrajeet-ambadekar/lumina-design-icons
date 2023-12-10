import * as React from "react";
const SvgPercent = ({ title, titleId, ...props }) => (
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
      d='M19 5 5 19M17.5 20a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM6.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z'
    />
  </svg>
);
export default SvgPercent;
