import * as React from "react";
const SvgLinkAdd = ({ title, titleId, ...props }) => (
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
      d='m12.11 15.39-3.88 3.88a2.47 2.47 0 0 1-3.5 0 2.46 2.46 0 0 1 0-3.5l3.88-3.88a1.004 1.004 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1.004 1.004 0 1 0-1.42-1.42m-3.28-.22a1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29l4.92-4.92a1.004 1.004 0 1 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42M21 18h-1v-1a1 1 0 1 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 1 0 0-2m-4.19-4.47 3.88-3.89a4.48 4.48 0 0 0-6.33-6.33l-3.89 3.88a1.004 1.004 0 0 0 1.42 1.42l3.88-3.88a2.47 2.47 0 0 1 3.5 0 2.46 2.46 0 0 1 0 3.5l-3.88 3.88a1.002 1.002 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219'
    />
  </svg>
);
export default SvgLinkAdd;
