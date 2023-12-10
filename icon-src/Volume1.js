import * as React from "react";
const SvgVolume1 = ({ title, titleId, ...props }) => (
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
      d='M15.54 8.46a5 5 0 0 1 0 7.07M11 5 6 9H2v6h4l5 4V5Z'
    />
  </svg>
);
export default SvgVolume1;
