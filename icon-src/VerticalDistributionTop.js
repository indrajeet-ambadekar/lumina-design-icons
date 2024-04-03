import * as React from "react";
const SvgVerticalDistributionTop = ({ title, titleId, ...props }) => (
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
      d='M3 6h1v5a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6h1a1 1 0 1 0 0-2H3a1 1 0 0 0 0 2m3 0h12v4H6zm15 8H3a1 1 0 0 0 0 2h2v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3h2a1 1 0 0 0 0-2m-4 4H7v-2h10z'
    />
  </svg>
);
export default SvgVerticalDistributionTop;
