import * as React from "react";
const SvgIconBoombox = ({ title, titleId, ...props }) => (
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
      d='M17 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Zm1 17a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14Zm-3.62-8.2A3 3 0 0 0 15 9a3 3 0 0 0-6 0 3 3 0 0 0 .62 1.8 4 4 0 1 0 4.76 0ZM12 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z'
    />
  </svg>
);
export default SvgIconBoombox;
