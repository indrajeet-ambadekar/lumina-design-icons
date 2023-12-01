import * as React from "react";
const SvgIconSpaceKey = ({ title, titleId, ...props }) => (
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
      d='M21 9a1 1 0 0 0-1 1v3H4v-3a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Z'
    />
  </svg>
);
export default SvgIconSpaceKey;
