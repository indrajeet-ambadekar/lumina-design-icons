import * as React from "react";
const SvgArchway = ({ title, titleId, ...props }) => (
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
      d='M22 20h-1V8h1a1 1 0 1 0 0-2h-1V3a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v3H2a1 1 0 0 0 0 2h1v12H2a1 1 0 0 0 0 2h20a1 1 0 0 0 0-2m-7 0H9v-3.53a6.21 6.21 0 0 1 3-5.33 6.21 6.21 0 0 1 3 5.33zm4 0h-2v-3.53a8.17 8.17 0 0 0-4.55-7.36 1 1 0 0 0-.9 0A8.17 8.17 0 0 0 7 16.47V20H5V8h14zm0-14H5V4h14z'
    />
  </svg>
);
export default SvgArchway;
