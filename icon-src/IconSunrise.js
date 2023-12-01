import * as React from "react";
const SvgIconSunrise = ({ title, titleId, ...props }) => (
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
    <path
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M23 22H1M21 18h2M1 18h2M17 18a5 5 0 1 0-10 0M18.36 11.64l1.42-1.42M4.22 10.22l1.42 1.42M12 2v7M8 6l4-4 4 4'
    />
  </svg>
);
export default SvgIconSunrise;
