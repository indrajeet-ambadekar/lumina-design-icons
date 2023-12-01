import * as React from "react";
const SvgIconUmbrella = ({ title, titleId, ...props }) => (
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
      d='M18 19a3 3 0 0 1-6 0v-7m11 0a11.05 11.05 0 0 0-22 0h22Z'
    />
  </svg>
);
export default SvgIconUmbrella;
