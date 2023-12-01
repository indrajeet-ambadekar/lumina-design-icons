import * as React from "react";
const SvgIconZapOff = ({ title, titleId, ...props }) => (
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
      clipPath='url(#icon_zap-off_svg__a)'
    >
      <path d='M18.57 12.91 21 10h-5.34M8 8l-5 6h9l-1 8 5-6M12.41 6.75 13 2l-2.43 2.92M1 1l22 22' />
    </g>
    <defs>
      <clipPath id='icon_zap-off_svg__a'>
        <path fill='#fff' d='M0 0h24v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIconZapOff;
