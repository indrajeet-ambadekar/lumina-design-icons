import * as React from "react";
const SvgLuggageCart = ({ title, titleId, ...props }) => (
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
      d='M2 13.5v2a1 1 0 0 0 1 1h10a3 3 0 0 0 6 0h2a1 1 0 0 0 1-1v-8a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v7H4v-1a1 1 0 1 0-2 0m13 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-7-6h12v4h-1.78a3 3 0 0 0-4.44 0H8zm0-3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1H8z'
    />
  </svg>
);
export default SvgLuggageCart;
