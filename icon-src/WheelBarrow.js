import * as React from "react";
const SvgWheelBarrow = ({ title, titleId, ...props }) => (
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
      d='M21 2h-2.3l-.16.07-.17.11a.8.8 0 0 0-.23.29.7.7 0 0 0-.08.18v.09L17.38 6h-1.14l-3.12-3.11a3.06 3.06 0 0 0-4.24 0L5.76 6H3a1 1 0 0 0-.87 1.5l4 7-.77 1.5q-.18-.015-.36 0a3 3 0 1 0 3 3 3 3 0 0 0-.85-2.08l1-2 1.38-.14 3.94 5.91A2.93 2.93 0 0 0 16 22c.386 0 .77-.072 1.13-.21a3 3 0 0 0 1.87-3.3L18 13l1.79-9H21a1 1 0 0 0 0-2M5 20a1 1 0 1 1 0-2 1 1 0 0 1 0 2m5.3-15.71a1 1 0 0 1 1.4 0L13.41 6H8.59zm-2.75 8.65L4.72 8H17l-.82 4.08zm8.81 7a1 1 0 0 1-1.2-.38l-3.34-5 4.37-.43.81 4.69a1 1 0 0 1-.64 1.11z'
    />
  </svg>
);
export default SvgWheelBarrow;
