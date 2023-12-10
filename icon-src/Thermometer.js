import * as React from "react";
const SvgThermometer = ({ title, titleId, ...props }) => (
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
    <g clipPath='url(#thermometer_svg__a)'>
      <path
        stroke='#000'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0Z'
      />
    </g>
    <defs>
      <clipPath id='thermometer_svg__a'>
        <path fill='#fff' d='M0 0h24v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
export default SvgThermometer;
