import * as React from "react";
const SvgIconLeftArrowFromLeft = ({ title, titleId, ...props }) => (
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
      d='M17 11H5.41l2.3-2.29a1.004 1.004 0 0 0-1.42-1.42l-4 4a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l4 4a1 1 0 0 0 1.639-.325 1 1 0 0 0-.22-1.095L5.41 13H17a1 1 0 0 0 0-2Zm4-7a1 1 0 0 0-1 1v14a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1Z'
    />
  </svg>
);
export default SvgIconLeftArrowFromLeft;
