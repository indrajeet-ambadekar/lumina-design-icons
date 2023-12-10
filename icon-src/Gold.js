import * as React from "react";
const SvgGold = ({ title, titleId, ...props }) => (
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
      d='M8 11h8a1.001 1.001 0 0 0 .77-.37A1 1 0 0 0 17 9.8l-1-5a1 1 0 0 0-1-.8H9a1 1 0 0 0-1 .8l-1 5a1 1 0 0 0 .21.83A1 1 0 0 0 8 11Zm1.82-5h4.36l.6 3H9.22l.6-3ZM22 13.8a1 1 0 0 0-1-.8h-6a1 1 0 0 0-1 .8l-1 5a1 1 0 0 0 .21.83A1.001 1.001 0 0 0 14 20h8a1.001 1.001 0 0 0 .77-.37 1 1 0 0 0 .23-.83l-1-5ZM15.22 18l.6-3h4.36l.6 3h-5.56ZM9 13H3a1 1 0 0 0-1 .8l-1 5a1 1 0 0 0 .21.83A1 1 0 0 0 2 20h8a1.001 1.001 0 0 0 .77-.37 1 1 0 0 0 .23-.83l-1-5a1 1 0 0 0-1-.8Zm-5.78 5 .6-3h4.36l.6 3H3.22Z'
    />
  </svg>
);
export default SvgGold;
