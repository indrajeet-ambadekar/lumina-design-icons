import * as React from "react";
const SvgSun = ({ title, titleId, ...props }) => (
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
      clipPath='url(#sun_svg__a)'
    >
      <path d='M12 21v2M18.36 18.36l1.42 1.42M4.22 19.78l1.42-1.42M21 12h2M1 12h2M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM18.36 5.64l1.42-1.42M4.22 4.22l1.42 1.42M12 1v2' />
    </g>
    <defs>
      <clipPath id='sun_svg__a'>
        <path fill='#fff' d='M0 0h24v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSun;
