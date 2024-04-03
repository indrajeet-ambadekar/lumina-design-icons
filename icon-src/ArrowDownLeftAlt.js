import * as React from "react";
const SvgArrowDownLeftAlt = ({ title, titleId, ...props }) => (
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
      d='M17 16H9.41l8.3-8.29a1.004 1.004 0 1 0-1.42-1.42L8 14.59V7a1 1 0 0 0-2 0v10a1 1 0 0 0 .08.38 1 1 0 0 0 .54.54c.12.051.25.078.38.08h10a1 1 0 0 0 0-2'
    />
  </svg>
);
export default SvgArrowDownLeftAlt;
