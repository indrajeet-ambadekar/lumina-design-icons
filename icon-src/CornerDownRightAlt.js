import * as React from "react";
const SvgCornerDownRightAlt = ({ title, titleId, ...props }) => (
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
      d='M20.92 12.62a1 1 0 0 0-.21-.33l-3-3a1.004 1.004 0 0 0-1.42 1.42l1.3 1.29H8a1 1 0 0 1-1-1V7a1 1 0 0 0-2 0v4a3 3 0 0 0 3 3h9.59l-1.3 1.29a1.002 1.002 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l3-3a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76'
    />
  </svg>
);
export default SvgCornerDownRightAlt;
