import * as React from "react";
const SvgEye = ({ title, titleId, ...props }) => (
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
      d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z'
    />
    <path
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'
    />
  </svg>
);
export default SvgEye;
