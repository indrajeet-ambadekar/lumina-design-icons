import * as React from "react";
const SvgBorderVertical = ({ title, titleId, ...props }) => (
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
      d='M3 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2m16-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2M7 11a1 1 0 1 0 0 2.001A1 1 0 0 0 7 11m0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2M7 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2M3 15a1 1 0 1 0 0 2.001A1 1 0 0 0 3 15m0-4a1 1 0 1 0 0 2.001A1 1 0 0 0 3 11m0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2m16-4a1 1 0 1 0 0 2.002A1 1 0 0 0 19 15m0-4a1 1 0 1 0 0 2.002A1 1 0 0 0 19 11m0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0-12a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-4-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-4 0a1 1 0 0 0-1 1v16a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1m4 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0-8a1 1 0 1 0 0 2.002A1 1 0 0 0 15 11'
    />
  </svg>
);
export default SvgBorderVertical;
