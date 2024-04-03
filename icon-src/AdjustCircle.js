import * as React from "react";
const SvgAdjustCircle = ({ title, titleId, ...props }) => (
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
      d='M17 7A7.74 7.74 0 1 0 7 17 7.74 7.74 0 1 0 17 7m-1.6 1.6q.108.565.11 1.14-.004.678-.16 1.34l-2.44-2.42a6 6 0 0 1 1.34-.16q.575.001 1.14.11zm-.94 4.4A6 6 0 0 1 13 14.46L9.54 11A6 6 0 0 1 11 9.54zm-8 1.46a5.749 5.749 0 1 1 8-8h-.25a7.76 7.76 0 0 0-7.71 7.79c0 .08.01.17.01.25zm2.1.89a6 6 0 0 1-.11-1.14q.003-.678.16-1.34l2.43 2.43q-.662.157-1.34.16-.549.015-1.09-.07zM14.25 20a5.77 5.77 0 0 1-4.75-2.51h.25a7.76 7.76 0 0 0 7.75-7.74V9.5A5.75 5.75 0 0 1 14.25 20'
    />
  </svg>
);
export default SvgAdjustCircle;
