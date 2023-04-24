import * as React from "react";
const SvgIconTruck = ({ title, titleId, ...props }) => (
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
      d='M18.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM16 8h4l3 3v5h-7V8ZM16 3H1v13h15V3Z'
    />
  </svg>
);
export default SvgIconTruck;
