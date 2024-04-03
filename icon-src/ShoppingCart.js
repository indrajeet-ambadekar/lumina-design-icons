import * as React from "react";
const SvgShoppingCart = ({ title, titleId, ...props }) => (
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
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M20 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2M9 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6'
    />
  </svg>
);
export default SvgShoppingCart;
