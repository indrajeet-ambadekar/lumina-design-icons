import * as React from "react";
const SvgIconArrowDownRightAlt = ({ title, titleId, ...props }) => (
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
      d='M17 6a1 1 0 0 0-1 1v7.59l-8.29-8.3a1.004 1.004 0 0 0-1.42 1.42l8.3 8.29H7a1 1 0 0 0 0 2h10c.13-.002.26-.029.38-.08a1 1 0 0 0 .54-.54c.051-.12.079-.25.08-.38V7a1 1 0 0 0-1-1Z'
    />
  </svg>
);
export default SvgIconArrowDownRightAlt;
