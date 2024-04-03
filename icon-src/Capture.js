import * as React from "react";
const SvgCapture = ({ title, titleId, ...props }) => (
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
      d='M3 9a1 1 0 0 0 1-1V5a1 1 0 0 1 1-1h3a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v3a1 1 0 0 0 1 1m5 11H5a1 1 0 0 1-1-1v-3a1 1 0 1 0-2 0v3a3 3 0 0 0 3 3h3a1 1 0 0 0 0-2m4-12a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4m7-12h-3a1 1 0 1 0 0 2h3a1 1 0 0 1 1 1v3a1 1 0 0 0 2 0V5a3 3 0 0 0-3-3m2 13a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 0 0 2h3a3 3 0 0 0 3-3v-3a1 1 0 0 0-1-1'
    />
  </svg>
);
export default SvgCapture;
