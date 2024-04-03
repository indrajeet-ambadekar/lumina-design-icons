import * as React from "react";
const SvgExchange = ({ title, titleId, ...props }) => (
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
      d='M18 10a1 1 0 0 0-1-1H5.41l2.3-2.29a1.004 1.004 0 0 0-1.42-1.42l-4 4a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 11h14a1 1 0 0 0 1-1m3.92 3.62A1 1 0 0 0 21 13H7a1 1 0 0 0 0 2h11.59l-2.3 2.29a1 1 0 0 0 .326 1.639 1 1 0 0 0 1.094-.22l4-4a1 1 0 0 0 .21-1.09'
    />
  </svg>
);
export default SvgExchange;
