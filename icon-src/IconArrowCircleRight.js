import * as React from "react";
const SvgIconArrowCircleRight = ({ title, titleId, ...props }) => (
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
      d='M15.71 12.71a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76 1.001 1.001 0 0 0-.21-.33l-3-3a1.004 1.004 0 0 0-1.42 1.42l1.3 1.29H9a1 1 0 0 0 0 2h3.59l-1.3 1.29a1.002 1.002 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l3-3ZM22 12a10 10 0 1 0-20 0 10 10 0 0 0 20 0ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z'
    />
  </svg>
);
export default SvgIconArrowCircleRight;
