import * as React from "react";
const SvgYen = ({ title, titleId, ...props }) => (
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
      d='M18.55 2.17a1 1 0 0 0-1.38.28L12 10.2 6.83 2.45a1 1 0 0 0-1.66 1.1l5 7.45H7a1 1 0 0 0 0 2h4v2H7a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0v-4h4a1 1 0 0 0 0-2h-4v-2h4a1 1 0 0 0 0-2h-3.13l5-7.45a.999.999 0 0 0-.32-1.38Z'
    />
  </svg>
);
export default SvgYen;
