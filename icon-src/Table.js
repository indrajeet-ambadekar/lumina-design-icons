import * as React from "react";
const SvgTable = ({ title, titleId, ...props }) => (
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
      d='M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM8 20H4v-4h4v4Zm0-6H4v-4h4v4Zm0-6H4V4h4v4Zm6 12h-4v-4h4v4Zm0-6h-4v-4h4v4Zm0-6h-4V4h4v4Zm6 12h-4v-4h4v4Zm0-6h-4v-4h4v4Zm0-6h-4V4h4v4Z'
    />
  </svg>
);
export default SvgTable;
