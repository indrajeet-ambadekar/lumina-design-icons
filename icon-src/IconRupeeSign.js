import * as React from "react";
const SvgIconRupeeSign = ({ title, titleId, ...props }) => (
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
      d='M18 7h-2.21a5.49 5.49 0 0 0-1-2H18a1 1 0 1 0 0-2H7a1 1 0 0 0 0 2h3.5a3.5 3.5 0 0 1 3.15 2H7a1 1 0 0 0 0 2h7a3.5 3.5 0 0 1-3.45 3H7a.697.697 0 0 0-.14 0 .651.651 0 0 0-.2 0 .69.69 0 0 0-.19.1l-.12.07a.751.751 0 0 0-.14.17 1.095 1.095 0 0 0-.09.14.61.61 0 0 0 0 .18A.65.65 0 0 0 6 13a.7.7 0 0 0 0 .14.65.65 0 0 0 0 .2.689.689 0 0 0 .1.19s0 .08.07.12l6 7a1 1 0 1 0 1.52-1.3L9.18 14h1.32A5.5 5.5 0 0 0 16 9h2a1 1 0 1 0 0-2Z'
    />
  </svg>
);
export default SvgIconRupeeSign;
