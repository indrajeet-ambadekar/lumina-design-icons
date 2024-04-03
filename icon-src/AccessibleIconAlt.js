import * as React from "react";
const SvgAccessibleIconAlt = ({ title, titleId, ...props }) => (
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
      d='M16 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-3.3 11.4A4 4 0 1 1 9.05 12a1.006 1.006 0 0 0-.22-2 6.01 6.01 0 1 0 .67 12 6 6 0 0 0 4.8-2.4 1 1 0 0 0-1.6-1.2m6.8 1.6h-1v-5a1 1 0 0 0-1-1h-4.57l1.69-4.66v-.31q.008-.09 0-.18a1 1 0 0 0 0-.19 1.4 1.4 0 0 0-.2-.32.6.6 0 0 0-.15-.13s0-.06-.08-.08L9.71 5.55h-.12a1 1 0 0 0-.19-.06H9a.8.8 0 0 0-.2.07h-.11L6 7.13A1 1 0 0 0 6.48 9 1 1 0 0 0 7 8.87l2.23-1.3 3.24 1.88-1.89 5.21a1 1 0 0 0 0 .16q-.015.09 0 .18a3 3 0 0 0 .08.38l.11.15q.041.09.11.16.065.054.14.09.09.069.19.12.166.06.34.06h5v5a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2z'
    />
  </svg>
);
export default SvgAccessibleIconAlt;
