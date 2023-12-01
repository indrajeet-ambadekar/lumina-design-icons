import * as React from "react";
const SvgIconBringFront = ({ title, titleId, ...props }) => (
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
      d='M11.29 17.3 10 18.59V7a1 1 0 0 0-2 0v11.6l-1.29-1.3a1 1 0 1 0-1.42 1.41l3 3a1 1 0 0 0 1.42 0l3-3a1 1 0 1 0-1.42-1.41ZM22 3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2H4V4h16v4h-7a1 1 0 1 0 0 2h1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3Zm-2 11h-4v-4h4v4Z'
    />
  </svg>
);
export default SvgIconBringFront;
