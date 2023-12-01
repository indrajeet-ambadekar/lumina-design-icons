import * as React from "react";
const SvgIconMapPinV = ({ title, titleId, ...props }) => (
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
      d='M16.37 12.79a1 1 0 0 0-1.068 1.648c.095.091.206.163.328.212C17.09 15.23 18 16.13 18 17c0 1.42-2.46 3-6 3s-6-1.58-6-3c0-.87.91-1.77 2.37-2.35a1 1 0 1 0-.74-1.86C5.36 13.69 4 15.26 4 17c0 2.8 3.51 5 8 5s8-2.2 8-5c0-1.74-1.36-3.31-3.63-4.21ZM11 9.86V17a1 1 0 0 0 2 0V9.86a4 4 0 1 0-2 0ZM12 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z'
    />
  </svg>
);
export default SvgIconMapPinV;
