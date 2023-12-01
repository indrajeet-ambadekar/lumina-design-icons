import * as React from "react";
const SvgIconBorderLeft = ({ title, titleId, ...props }) => (
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
      d='M11.5 19a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0-4a1 1 0 1 0 0 2.002 1 1 0 0 0 0-2.002Zm0-4a1 1 0 1 0 0 2.002 1 1 0 0 0 0-2.002Zm-8-8a1 1 0 0 0-1 1v16a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1Zm16 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-8 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-4 4a1 1 0 1 0 0 2.001A1 1 0 0 0 7.5 11Zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0-16a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm12 8a1 1 0 1 0 0 2.002 1 1 0 0 0 0-2.002Zm0 4a1 1 0 1 0 0 2.002 1 1 0 0 0 0-2.002Zm-8-12a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm8 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0-12a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-4-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0-8a1 1 0 1 0 0 2.002 1 1 0 0 0 0-2.002Z'
    />
  </svg>
);
export default SvgIconBorderLeft;
