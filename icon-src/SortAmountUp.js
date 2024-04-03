import * as React from "react";
const SvgSortAmountUp = ({ title, titleId, ...props }) => (
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
      d='M5.71 6.29a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21l-2 2a1.004 1.004 0 1 0 1.42 1.42l.29-.3V17a1 1 0 1 0 2 0V9.41l.29.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM11 8h10a1 1 0 1 0 0-2H11a1 1 0 1 0 0 2m10 8H11a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2m0-5H11a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2'
    />
  </svg>
);
export default SvgSortAmountUp;
