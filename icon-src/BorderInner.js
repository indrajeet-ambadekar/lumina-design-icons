import * as React from "react";
const SvgBorderInner = ({ title, titleId, ...props }) => (
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
      d='M8 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M4 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 14a1 1 0 1 0 0 2 1 1 0 0 0 0-2M20 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-4-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4 14a1 1 0 1 0 0 2 1 1 0 0 0 0-2M4 15a1 1 0 1 0 0 2.001A1 1 0 0 0 4 15m16 0a1 1 0 1 0 0 2.002A1 1 0 0 0 20 15m-4 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2m5-7a1 1 0 0 0-1-1h-7V4a1 1 0 0 0-2 0v7H4a1 1 0 0 0 0 2h7v7a1 1 0 0 0 2 0v-7h7a1 1 0 0 0 1-1M8 19a1 1 0 1 0 0 2 1 1 0 0 0 0-2'
    />
  </svg>
);
export default SvgBorderInner;
