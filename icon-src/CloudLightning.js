import * as React from "react";
const SvgCloudLightning = ({ title, titleId, ...props }) => (
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
    <g
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      clipPath='url(#cloud-lightning_svg__a)'
    >
      <path d='M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9' />
      <path d='m13 11-4 6h6l-4 6' />
    </g>
    <defs>
      <clipPath id='cloud-lightning_svg__a'>
        <path fill='#fff' d='M0 0h24v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCloudLightning;
