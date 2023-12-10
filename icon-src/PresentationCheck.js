import * as React from "react";
const SvgPresentationCheck = ({ title, titleId, ...props }) => (
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
      d='M10.29 11.71a1.002 1.002 0 0 0 1.42 0l4-4A1.005 1.005 0 0 0 15 5.996a1.004 1.004 0 0 0-.71.294L11 9.59l-1.29-1.3a1.004 1.004 0 0 0-1.42 1.42l2 2ZM21 14h-1V4h1a1 1 0 1 0 0-2H3a1 1 0 0 0 0 2h1v10H3a1 1 0 0 0 0 2h8v1.15l-4.55 3A1 1 0 0 0 7 22a.94.94 0 0 0 .55-.17L11 19.55V21a1 1 0 0 0 2 0v-1.45l3.45 2.28A.94.94 0 0 0 17 22a1 1 0 0 0 .55-1.83l-4.55-3V16h8a1 1 0 0 0 0-2Zm-3 0H6V4h12v10Z'
    />
  </svg>
);
export default SvgPresentationCheck;
