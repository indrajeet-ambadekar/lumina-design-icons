import * as React from "react";
const SvgCornerDownRightLean = ({ title, titleId, ...props }) => (
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
      fill='#000'
      d='M19.61 16a1.2 1.2 0 0 0-.22-.33L14.76 11a1 1 0 0 0-1.41 1.41l2.92 2.92h-7a3 3 0 0 1-3-3V3a1 1 0 0 0-2 0v9.37a5 5 0 0 0 5 5h7l-2.92 2.92a1.002 1.002 0 0 0 .326 1.636 1 1 0 0 0 1.084-.216l4.63-4.63a1 1 0 0 0 .22-1.08'
    />
  </svg>
);
export default SvgCornerDownRightLean;
