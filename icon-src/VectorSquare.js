import * as React from "react";
const SvgVectorSquare = ({ title, titleId, ...props }) => (
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
      d='M20 16.18V7.82A3 3 0 1 0 16.18 4H7.82A3 3 0 1 0 4 7.82v8.36A3 3 0 1 0 7.82 20h8.36A3 3 0 1 0 20 16.18M19 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2M5 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0 16a1 1 0 1 1 0-2 1 1 0 0 1 0 2m11.18-2H7.82A3 3 0 0 0 6 16.18V7.82A3 3 0 0 0 7.82 6h8.36A3 3 0 0 0 18 7.82v8.36A3 3 0 0 0 16.18 18M19 20a1 1 0 1 1 0-2 1 1 0 0 1 0 2'
    />
  </svg>
);
export default SvgVectorSquare;
