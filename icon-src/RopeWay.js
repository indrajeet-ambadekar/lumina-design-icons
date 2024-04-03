import * as React from "react";
const SvgRopeWay = ({ title, titleId, ...props }) => (
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
      d='M19 6.5h-6V4h4.62a1 1 0 1 0 0-2H6.38a1 1 0 0 0 0 2H11v2.5H5a3 3 0 0 0-3 3V19a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9.5a3 3 0 0 0-3-3M11 20H5a1 1 0 0 1-1-1v-3.75h7a.5.5 0 0 0 0 .13v4.5a.5.5 0 0 0 0 .12m9-1a1 1 0 0 1-1 1h-6a.5.5 0 0 0 0-.12v-4.5a.5.5 0 0 0 0-.13h7zm0-5.75H4V9.5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z'
    />
  </svg>
);
export default SvgRopeWay;
