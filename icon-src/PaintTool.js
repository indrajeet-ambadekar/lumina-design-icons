import * as React from "react";
const SvgPaintTool = ({ title, titleId, ...props }) => (
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
      d='M18 1h-8a3 3 0 0 0-3 3H6a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h6a1 1 0 0 1 1 1v1a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2v-1a3 3 0 0 0-3-3H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3Zm-3 16v4h-2v-4h2Zm4-11a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2Z'
    />
  </svg>
);
export default SvgPaintTool;
