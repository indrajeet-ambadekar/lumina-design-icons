import * as React from "react";
const SvgIconAngleLeft = ({ title, titleId, ...props }) => (
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
      d='m11.29 12 3.54-3.54a1 1 0 1 0-1.42-1.41l-4.24 4.24a1 1 0 0 0 0 1.42L13.41 17a1.001 1.001 0 0 0 .71.29 1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.41L11.29 12Z'
    />
  </svg>
);
export default SvgIconAngleLeft;
