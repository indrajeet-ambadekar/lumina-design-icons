import * as React from "react";
const SvgStoreAlt = ({ title, titleId, ...props }) => (
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
      d='M22 2H2a1 1 0 0 0-1 1v4a3 3 0 0 0 2 2.82V21a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9.82A3 3 0 0 0 23 7V3a1 1 0 0 0-1-1m-7 2h2v3a1 1 0 0 1-2 0zm-4 0h2v3a1 1 0 0 1-2 0zM7 4h2v3a1 1 0 0 1-2 0zM4 8a1 1 0 0 1-1-1V4h2v3a1 1 0 0 1-1 1m10 12h-4v-4a2 2 0 0 1 4 0zm5 0h-3v-4a4 4 0 1 0-8 0v4H5V9.82a3.2 3.2 0 0 0 1-.6 3 3 0 0 0 4 0 3 3 0 0 0 4 0 3 3 0 0 0 4 0c.293.26.632.464 1 .6zm2-13a1 1 0 0 1-2 0V4h2z'
    />
  </svg>
);
export default SvgStoreAlt;
