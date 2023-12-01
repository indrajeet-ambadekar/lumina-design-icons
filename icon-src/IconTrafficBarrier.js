import * as React from "react";
const SvgIconTrafficBarrier = ({ title, titleId, ...props }) => (
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
      d='M21 5h-1V4a1 1 0 0 0-2 0v1H6V4a1 1 0 0 0-2 0v1H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1v7a1 1 0 1 0 2 0v-7h12v7a1 1 0 0 0 2 0v-7h1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1ZM4 9.52V7h2.52L4 9.52ZM5.34 11l4-4h3.33l-4 4H5.34Zm6.15 0 4-4h3.18l-4 4h-3.18ZM20 11h-2.51L20 8.49V11Z'
    />
  </svg>
);
export default SvgIconTrafficBarrier;
