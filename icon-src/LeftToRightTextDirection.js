import * as React from "react";
const SvgLeftToRightTextDirection = ({ title, titleId, ...props }) => (
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
      d='M21.42 17.62a1 1 0 0 0-.21-.33l-3-3a1.004 1.004 0 1 0-1.42 1.42l1.3 1.29H3.5a1 1 0 0 0 0 2h14.59l-1.3 1.29a1.002 1.002 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l3-3a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76M8.5 10v4a1 1 0 1 0 2 0V4h2v10a1 1 0 0 0 2 0V4h1a1 1 0 1 0 0-2h-7a4 4 0 0 0 0 8m0-6v4a2 2 0 1 1 0-4'
    />
  </svg>
);
export default SvgLeftToRightTextDirection;
