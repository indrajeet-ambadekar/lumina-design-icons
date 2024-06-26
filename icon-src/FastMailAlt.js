import * as React from "react";
const SvgFastMailAlt = ({ title, titleId, ...props }) => (
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
      d='M15.69 9a2.93 2.93 0 0 0-1-1.71 3 3 0 0 0-2-.74H4.8a3 3 0 0 0-2.3 1.02v.06A3 3 0 0 0 1.84 10l.88 5a3 3 0 0 0 3 2.48h7.94a3 3 0 0 0 2.29-1.07 3 3 0 0 0 .62-2.41zm-3.41-.5-2.34 2.64a1 1 0 0 1-1.38.11L5.17 8.5zm2.1 6.64a1 1 0 0 1-.76.36H5.68a1 1 0 0 1-1-.83L3.87 10l3.43 2.8a3 3 0 0 0 4.14-.34L13.8 9.8l.8 4.53a1 1 0 0 1-.22.81m6.83-4.64h-2a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2m0-2a1 1 0 1 0 0-2h-3a1 1 0 0 0 0 2z'
    />
  </svg>
);
export default SvgFastMailAlt;
