import * as React from "react";
const SvgIconKeyholeSquareFull = ({ title, titleId, ...props }) => (
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
      d='M11 11.72V15a1 1 0 0 0 2 0v-3.28A2 2 0 0 0 14 10a2 2 0 1 0-4 0 2 2 0 0 0 1 1.72ZM21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm-1 18H4V4h16v16Z'
    />
  </svg>
);
export default SvgIconKeyholeSquareFull;
