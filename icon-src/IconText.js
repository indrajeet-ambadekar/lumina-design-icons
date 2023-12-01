import * as React from "react";
const SvgIconText = ({ title, titleId, ...props }) => (
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
      d='M17 6H7a1 1 0 0 0 0 2h4v9a1 1 0 0 0 2 0V8h4a1 1 0 1 0 0-2Z'
    />
  </svg>
);
export default SvgIconText;
