import * as React from "react";
const SvgSmileSquintWinkAlt = ({ title, titleId, ...props }) => (
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
      d='M9 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2m5.16 1.21a1 1 0 0 0 .71.29 1 1 0 0 0 .71-1.71l-.79-.79.79-.79a1.005 1.005 0 0 0-.71-1.714 1 1 0 0 0-.71.294l-1.5 1.5a1 1 0 0 0 0 1.42zM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20m2.36-5.77a3.76 3.76 0 0 1-4.72 0 1.001 1.001 0 0 0-1.28 1.54 5.68 5.68 0 0 0 7.28 0 1.001 1.001 0 0 0-1.28-1.54'
    />
  </svg>
);
export default SvgSmileSquintWinkAlt;
