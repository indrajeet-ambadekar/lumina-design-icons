import * as React from "react";
const SvgGlassMartiniAltSlash = ({ title, titleId, ...props }) => (
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
      d='m19.71 16.29-14-14a1.004 1.004 0 1 0-1.42 1.42L6.59 6H5a1 1 0 0 0-.9.57 1 1 0 0 0 .12 1L11 16.1V20H6.75a1 1 0 0 0 0 2h10.5a1 1 0 0 0 0-2H13v-3.9l1.64-2 3.65 3.65a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.46M7.08 8h1.51l1.89 1.89H8.59zM12 14.15l-1.81-2.26h2.29l.74.74zM14.66 8h2.26l-.63.79a1 1 0 0 0 .15 1.4 1 1 0 0 0 .63.22 1 1 0 0 0 .78-.37l1.93-2.42a1 1 0 0 0 .12-1A1 1 0 0 0 19 6h-4.34a1 1 0 1 0 0 2'
    />
  </svg>
);
export default SvgGlassMartiniAltSlash;
