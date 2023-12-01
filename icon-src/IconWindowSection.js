import * as React from "react";
const SvgIconWindowSection = ({ title, titleId, ...props }) => (
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
      d='M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM8 20H4V10h4v10Zm6 0h-4V10h4v10Zm6 0h-4V10h4v10Zm0-12H4V4h16v4Z'
    />
  </svg>
);
export default SvgIconWindowSection;
