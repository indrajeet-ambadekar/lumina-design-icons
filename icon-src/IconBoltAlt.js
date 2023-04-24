import * as React from "react";
const SvgIconBoltAlt = ({ title, titleId, ...props }) => (
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
      d='M19.89 9.55A1 1 0 0 0 19 9h-5V3a1 1 0 0 0-1.309-1.002 1 1 0 0 0-.501.362l-8 11a1 1 0 0 0-.08 1A1 1 0 0 0 5 15h5v6a1 1 0 0 0 1 1 1 1 0 0 0 .81-.41l8-11a1 1 0 0 0 .08-1.04ZM12 17.92V14a1 1 0 0 0-1-1H7l5-6.92V10a1 1 0 0 0 1 1h4l-5 6.92Z'
    />
  </svg>
);
export default SvgIconBoltAlt;
