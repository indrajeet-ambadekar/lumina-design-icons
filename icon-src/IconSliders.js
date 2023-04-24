import * as React from "react";
const SvgIconSliders = ({ title, titleId, ...props }) => (
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
      d='M20 21v-5M17 16h6M4 21v-7M1 14h6M12 21v-9M9 8h6M20 12V3M12 8V3M4 10V3'
    />
  </svg>
);
export default SvgIconSliders;
