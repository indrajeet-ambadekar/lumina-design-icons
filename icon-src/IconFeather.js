import * as React from "react";
const SvgIconFeather = ({ title, titleId, ...props }) => (
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
      d='M20.24 12.24a6.004 6.004 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76ZM16 8 2 22M17.5 15H9'
    />
  </svg>
);
export default SvgIconFeather;
