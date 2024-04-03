import * as React from "react";
const SvgBorderClear = ({ title, titleId, ...props }) => (
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
      d='M8 11a1 1 0 1 0 0 2.001A1 1 0 0 0 8 11m0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2M4 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 8a1 1 0 1 0 0 2.001A1 1 0 0 0 4 11m16-6a1 1 0 1 0 0-2 1 1 0 0 0 0 2M4 19a1 1 0 1 0 0 2 1 1 0 0 0 0-2m8-4a1 1 0 1 0 0 2.002A1 1 0 0 0 12 15m-8 0a1 1 0 1 0 0 2.001A1 1 0 0 0 4 15m0-8a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2m12 12a1 1 0 1 0 0 2.002A1 1 0 0 0 20 15m0 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0-12a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-8 4a1 1 0 1 0 0 2.002A1 1 0 0 0 12 11m8 0a1 1 0 1 0 0 2.002A1 1 0 0 0 20 11m-4-8a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0-8a1 1 0 1 0 0 2.002A1 1 0 0 0 16 11'
    />
  </svg>
);
export default SvgBorderClear;
