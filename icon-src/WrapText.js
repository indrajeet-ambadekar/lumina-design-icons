import * as React from "react";
const SvgWrapText = ({ title, titleId, ...props }) => (
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
      d='M3 7h18a1 1 0 1 0 0-2H3a1 1 0 0 0 0 2m6 8H3a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m9.5-5H3a1 1 0 0 0 0 2h15.5a1.5 1.5 0 1 1 0 3h-3.09l.3-.29a1.004 1.004 0 1 0-1.42-1.42l-2 2a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l2 2a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095l-.3-.29h3.09a3.5 3.5 0 1 0 0-7'
    />
  </svg>
);
export default SvgWrapText;
