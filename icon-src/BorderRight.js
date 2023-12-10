import * as React from "react";
const SvgBorderRight = ({ title, titleId, ...props }) => (
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
      d='M4.5 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm4 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm4-8a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0-8a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-4 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm12-12a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-4 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0-16a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm8 0a1 1 0 0 0-1 1v16a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1Zm-4 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-4-12a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z'
    />
  </svg>
);
export default SvgBorderRight;
