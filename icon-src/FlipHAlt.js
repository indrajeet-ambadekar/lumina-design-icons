import * as React from "react";
const SvgFlipHAlt = ({ title, titleId, ...props }) => (
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
      d='M13.21 5.7a1 1 0 0 0 .24 0l1.94-.49a1 1 0 0 0-.48-1.94L13 3.73a1.007 1.007 0 1 0 .24 2zM9.51 9h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2m4 0a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2zM7.39 7.15h.24l1.94-.48a1.014 1.014 0 0 0-.48-1.97l-1.94.48a1.007 1.007 0 1 0 .24 2zM4 10.51a1 1 0 0 0 1-1v-2a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1m16.62-8.3a1 1 0 0 0-.86-.21l-1 .24a1 1 0 0 0 .27 1.97A1 1 0 0 0 21 4V3a1 1 0 0 0-.38-.79M20 7a1 1 0 0 0-1 1v1.14a1 1 0 0 0 .51 1.86H20a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1m0 6H4a1 1 0 0 0-1 1v3a1 1 0 0 0 .76 1l16 4q.12.015.24 0a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1m-1 6.72-14-3.5V15h14z'
    />
  </svg>
);
export default SvgFlipHAlt;
