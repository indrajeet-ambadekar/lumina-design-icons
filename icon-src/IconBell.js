import * as React from "react";
const SvgIconBell = ({ title, titleId, ...props }) => (
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
      d='M18 8A6 6 0 1 0 6 8c0 7-3 9-3 9h18s-3-2-3-9ZM13.73 21a1.999 1.999 0 0 1-3.46 0'
    />
  </svg>
);
export default SvgIconBell;
