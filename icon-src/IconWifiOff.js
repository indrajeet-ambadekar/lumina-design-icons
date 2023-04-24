import * as React from "react";
const SvgIconWifiOff = ({ title, titleId, ...props }) => (
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
      clipPath='url(#icon_wifi-off_svg__a)'
    >
      <path d='m1 1 22 22M12 20h.01M8.53 16.11a6 6 0 0 1 6.95 0M16.72 11.06c.82.4 1.585.9 2.28 1.49M5 12.55a10.94 10.94 0 0 1 5.17-2.39M1.42 9a15.91 15.91 0 0 1 4.7-2.88M10.71 5.05A16 16 0 0 1 22.58 9' />
    </g>
    <defs>
      <clipPath id='icon_wifi-off_svg__a'>
        <path fill='#fff' d='M0 0h24v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIconWifiOff;
