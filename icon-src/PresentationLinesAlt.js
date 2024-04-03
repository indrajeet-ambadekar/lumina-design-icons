import * as React from "react";
const SvgPresentationLinesAlt = ({ title, titleId, ...props }) => (
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
      d='M10.17 10.55a1 1 0 0 0 .73.45 1 1 0 0 0 .81-.29l1.13-1.14 1.33 2A1 1 0 0 0 15 12a.94.94 0 0 0 .55-.17 1 1 0 0 0 .28-1.38l-2-3A1 1 0 0 0 13.1 7a1 1 0 0 0-.81.29l-1.13 1.14-1.33-2a1 1 0 1 0-1.66 1.1zM21 14h-1V4h1a1 1 0 1 0 0-2H3a1 1 0 0 0 0 2h1v10H3a1 1 0 0 0 0 2h8v1.15l-4.55 3A1 1 0 0 0 7 22a.94.94 0 0 0 .55-.17L11 19.55V21a1 1 0 0 0 2 0v-1.45l3.45 2.28A.94.94 0 0 0 17 22a1 1 0 0 0 .55-1.83l-4.55-3V16h8a1 1 0 0 0 0-2m-3 0H6V4h12z'
    />
  </svg>
);
export default SvgPresentationLinesAlt;
