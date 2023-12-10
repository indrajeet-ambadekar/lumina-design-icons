import * as React from "react";
const SvgCopyright = ({ title, titleId, ...props }) => (
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
      d='M11 9h2a1 1 0 0 1 1 1 1 1 0 0 0 2 0 3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3 1 1 0 0 0-2 0 1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Zm1-7a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20Z'
    />
  </svg>
);
export default SvgCopyright;
