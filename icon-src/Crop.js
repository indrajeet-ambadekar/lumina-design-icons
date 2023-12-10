import * as React from "react";
const SvgCrop = ({ title, titleId, ...props }) => (
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
      clipPath='url(#crop_svg__a)'
    >
      <path d='M6.13 1 6 16a2 2 0 0 0 2 2h15' />
      <path d='M1 6.13 16 6a2 2 0 0 1 2 2v15' />
    </g>
    <defs>
      <clipPath id='crop_svg__a'>
        <path fill='#fff' d='M0 0h24v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCrop;
