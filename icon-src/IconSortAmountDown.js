import * as React from "react";
const SvgIconSortAmountDown = ({ title, titleId, ...props }) => (
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
      d='m6.29 14.29-.29.3V7a1 1 0 0 0-2 0v7.59l-.29-.3a1.004 1.004 0 0 0-1.42 1.42l2 2a1 1 0 0 0 .33.21.94.94 0 0 0 .76 0 1 1 0 0 0 .33-.21l2-2a1.003 1.003 0 1 0-1.42-1.42ZM11 8h10a1 1 0 1 0 0-2H11a1 1 0 1 0 0 2Zm10 3H11a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Zm0 5H11a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Z'
    />
  </svg>
);
export default SvgIconSortAmountDown;
