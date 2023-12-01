import * as React from "react";
const SvgIconTriangleAlt = ({ title, titleId, ...props }) => (
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
      d='m21.87 19.29-9-15.58a1 1 0 0 0-1.74 0l-9 15.58a1 1 0 0 0 .87 1.5h18a1 1 0 0 0 .87-1.5Zm-17.14-.5L12 6.21l7.27 12.58H4.73Z'
    />
  </svg>
);
export default SvgIconTriangleAlt;
