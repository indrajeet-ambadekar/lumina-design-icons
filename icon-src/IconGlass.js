import * as React from "react";
const SvgIconGlass = ({ title, titleId, ...props }) => (
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
      d='M19.75 2.33A1 1 0 0 0 19 2H5a1 1 0 0 0-1 1.11l1.8 16.22a3 3 0 0 0 3 2.67h6.42a3 3 0 0 0 3-2.67L20 3.11a1 1 0 0 0-.25-.78ZM16.2 19.11a1 1 0 0 1-1 .89H8.79a1 1 0 0 1-1-.89L6.78 10h10.44l-1.02 9.11ZM17.44 8H6.56l-.44-4h11.76l-.44 4Z'
    />
  </svg>
);
export default SvgIconGlass;
