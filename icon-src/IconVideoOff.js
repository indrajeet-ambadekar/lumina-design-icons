import * as React from "react";
const SvgIconVideoOff = ({ title, titleId, ...props }) => (
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
      clipPath='url(#icon_video-off_svg__a)'
    >
      <path d='M10.66 5H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10m-7-1v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2l11 11ZM1 1l22 22' />
    </g>
    <defs>
      <clipPath id='icon_video-off_svg__a'>
        <path fill='#fff' d='M0 0h24v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIconVideoOff;
