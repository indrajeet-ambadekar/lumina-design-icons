import * as React from "react";
const SvgIconArrowsH = ({ title, titleId, ...props }) => (
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
      d='M21.92 11.62a1.001 1.001 0 0 0-.21-.33l-4-4a1.003 1.003 0 1 0-1.42 1.42l2.3 2.29H5.41l2.3-2.29a1.004 1.004 0 0 0-1.42-1.42l-4 4a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l4 4a1 1 0 0 0 1.639-.325 1 1 0 0 0-.22-1.095L5.41 13h13.18l-2.3 2.29a1.002 1.002 0 0 0 .326 1.639 1 1 0 0 0 1.095-.219l4-4a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76Z'
    />
  </svg>
);
export default SvgIconArrowsH;
