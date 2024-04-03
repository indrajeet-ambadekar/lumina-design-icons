import * as React from "react";
const SvgBoombox = ({ title, titleId, ...props }) => (
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
      d='M17 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m1 17a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1zm-3.62-8.2A3 3 0 0 0 15 9a3 3 0 0 0-6 0 3 3 0 0 0 .62 1.8 4 4 0 1 0 4.76 0M12 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4'
    />
  </svg>
);
export default SvgBoombox;
