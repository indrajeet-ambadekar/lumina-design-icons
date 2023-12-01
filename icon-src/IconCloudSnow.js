import * as React from "react";
const SvgIconCloudSnow = ({ title, titleId, ...props }) => (
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
      clipPath='url(#icon_cloud-snow_svg__a)'
    >
      <path d='M12 22h.01M16 20h.01M8 20h.01M12 18h.01M20 17.58A5 5 0 0 0 18 8h-1.26A7.998 7.998 0 0 0 2.063 6.005 8 8 0 0 0 4 16.25M16 16h.01M8 16h.01' />
    </g>
    <defs>
      <clipPath id='icon_cloud-snow_svg__a'>
        <path fill='#fff' d='M0 0h24v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIconCloudSnow;
