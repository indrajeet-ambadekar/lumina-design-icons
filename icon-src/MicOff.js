import * as React from "react";
const SvgMicOff = ({ title, titleId, ...props }) => (
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
      clipPath='url(#mic-off_svg__a)'
    >
      <path d='M8 23h8M1 1l22 22M15 9.34V4a3 3 0 0 0-5.94-.6M9 9v3a3 3 0 0 0 5.12 2.12L9 9Z' />
      <path d='M17 16.95A7 7 0 0 1 5 12v-2m14 0v2c0 .412-.037.824-.11 1.23M12 19v4' />
    </g>
    <defs>
      <clipPath id='mic-off_svg__a'>
        <path fill='#fff' d='M0 0h24v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMicOff;
