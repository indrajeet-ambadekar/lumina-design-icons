import * as React from "react";
const SvgMouseAlt = ({ title, titleId, ...props }) => (
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
      d='M12 6a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1m0-4a7 7 0 0 0-7 7v6a7 7 0 1 0 14 0V9a7 7 0 0 0-7-7m5 13a5 5 0 1 1-10 0V9a5 5 0 1 1 10 0z'
    />
  </svg>
);
export default SvgMouseAlt;
