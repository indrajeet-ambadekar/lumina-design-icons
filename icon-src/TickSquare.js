import * as React from "react";
const SvgTickSquare = ({ title, titleId, ...props }) => (
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
      d='M10.21 14.75a1 1 0 0 0 1.42 0l4.08-4.08a1.004 1.004 0 1 0-1.42-1.42l-3.37 3.38-1.21-1.22a1.004 1.004 0 1 0-1.42 1.42zM21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-1 18H4V4h16z'
    />
  </svg>
);
export default SvgTickSquare;
