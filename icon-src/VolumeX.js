import * as React from "react";
const SvgVolumeX = ({ title, titleId, ...props }) => (
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
      d='m23 9-6 6M17 9l6 6M11 5 6 9H2v6h4l5 4V5Z'
    />
  </svg>
);
export default SvgVolumeX;
