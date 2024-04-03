import * as React from "react";
const SvgTruck = ({ title, titleId, ...props }) => (
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
      d='M18.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M16 8h4l3 3v5h-7zM16 3H1v13h15z'
    />
  </svg>
);
export default SvgTruck;
