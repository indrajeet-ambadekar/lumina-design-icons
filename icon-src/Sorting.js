import * as React from "react";
const SvgSorting = ({ title, titleId, ...props }) => (
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
      d='M11.29 10.21a.997.997 0 0 0 1.095.219.999.999 0 0 0 .325-.22l3-3a1.004 1.004 0 1 0-1.42-1.42L12 8.09l-2.29-2.3a1.004 1.004 0 0 0-1.42 1.42l3 3Zm1.42 4.58a1 1 0 0 0-1.42 0l-3 3a1.004 1.004 0 1 0 1.42 1.42l2.29-2.3 2.29 2.3a.997.997 0 0 0 1.095.219.999.999 0 0 0 .325-.22 1 1 0 0 0 0-1.42l-3-3Z'
    />
  </svg>
);
export default SvgSorting;
