import * as React from "react";
const SvgIconChartDown = ({ title, titleId, ...props }) => (
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
      fill='#000'
      d='M21 11a1 1 0 0 0-1 1v2.59l-6.29-6.3a1 1 0 0 0-1.42 0L9 11.59l-5.29-5.3a1.004 1.004 0 0 0-1.42 1.42l6 6a.998.998 0 0 0 1.42 0l3.29-3.3L18.59 16H16a1 1 0 0 0 0 2h5a.997.997 0 0 0 .38-.08 1 1 0 0 0 .54-.54c.051-.12.079-.25.08-.38v-5a1 1 0 0 0-1-1Z'
    />
  </svg>
);
export default SvgIconChartDown;
