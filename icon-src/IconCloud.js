import * as React from "react";
const SvgIconCloud = ({ title, titleId, ...props }) => (
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
    <g clipPath='url(#icon_cloud_svg__a)'>
      <path
        stroke='#000'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 1 0 0-10Z'
      />
    </g>
    <defs>
      <clipPath id='icon_cloud_svg__a'>
        <path fill='#fff' d='M0 0h24v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIconCloud;
