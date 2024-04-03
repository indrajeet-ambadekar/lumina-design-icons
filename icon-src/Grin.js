import * as React from "react";
const SvgGrin = ({ title, titleId, ...props }) => (
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
      d='M9 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3-9a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20m3-7H9a1 1 0 0 0-1 1 4 4 0 1 0 8 0 1 1 0 0 0-1-1m-3 3a2 2 0 0 1-1.73-1h3.46A2 2 0 0 1 12 16m3-7a1 1 0 1 0 0 2 1 1 0 0 0 0-2'
    />
  </svg>
);
export default SvgGrin;
