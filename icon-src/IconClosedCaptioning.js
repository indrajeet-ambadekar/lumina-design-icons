import * as React from "react";
const SvgIconClosedCaptioning = ({ title, titleId, ...props }) => (
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
      d='M11.24 13.14a1 1 0 0 0-1.37.36 1 1 0 0 1-1.58.19A.931.931 0 0 1 8 13v-2a1 1 0 0 1 1.88-.48 1 1 0 1 0 1.71-1.04 3.082 3.082 0 0 0-1.436-1.248A3 3 0 0 0 6 11v2a3 3 0 0 0 5.59 1.5 1 1 0 0 0-.35-1.36Zm6 0a1 1 0 0 0-1.37.36 1 1 0 0 1-1.58.19A.93.93 0 0 1 14 13v-2a1 1 0 0 1 1.88-.48 1 1 0 1 0 1.71-1.04 3.082 3.082 0 0 0-1.436-1.248 3 3 0 0 0-3.275.647A3 3 0 0 0 12 11v2a3 3 0 0 0 5.59 1.5 1 1 0 0 0-.35-1.36ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20Z'
    />
  </svg>
);
export default SvgIconClosedCaptioning;
