import * as React from "react";
const SvgIconWifi = ({ title, titleId, ...props }) => (
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
      d='M12 20h.01M8.53 16.11a6 6 0 0 1 6.95 0M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0'
    />
  </svg>
);
export default SvgIconWifi;
