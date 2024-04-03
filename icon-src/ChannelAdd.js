import * as React from "react";
const SvgChannelAdd = ({ title, titleId, ...props }) => (
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
      d='M18 7h1v1a1 1 0 0 0 2 0V7h1a1 1 0 1 0 0-2h-1V4a1 1 0 0 0-2 0v1h-1a1 1 0 1 0 0 2m2 9a3 3 0 0 0-1.73.56l-2.45-1.45A3.7 3.7 0 0 0 16 14a4 4 0 0 0-3-3.86V7.82a3 3 0 1 0-2 0v2.32A4 4 0 0 0 8 14c.004.377.064.751.18 1.11l-2.45 1.45A3 3 0 0 0 4 16a3 3 0 1 0 3 3 3 3 0 0 0-.12-.8l2.3-1.37a4 4 0 0 0 5.64 0l2.3 1.37A3 3 0 1 0 20 16M4 20a1 1 0 1 1 0-2 1 1 0 0 1 0 2m8-16a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4m8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2'
    />
  </svg>
);
export default SvgChannelAdd;
