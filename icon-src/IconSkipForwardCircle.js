import * as React from "react";
const SvgIconSkipForwardCircle = ({ title, titleId, ...props }) => (
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
      d='M15.5 7a1 1 0 0 0-1 1v1.69l-4-2.31a2 2 0 0 0-3 1.73v5.78a2 2 0 0 0 3 1.73l4-2.31V16a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1Zm-1 5-5 2.89V9.11l5 2.88V12ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20Z'
    />
  </svg>
);
export default SvgIconSkipForwardCircle;
