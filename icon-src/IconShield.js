import * as React from "react";
const SvgIconShield = ({ title, titleId, ...props }) => (
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
      d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z'
    />
  </svg>
);
export default SvgIconShield;
