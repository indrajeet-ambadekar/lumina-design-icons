import * as React from "react";
const SvgIconBrightnessLow = ({ title, titleId, ...props }) => (
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
      d='M3 11a1 1 0 1 0 0 2.001A1 1 0 0 0 3 11Zm1.93 6.66a1 1 0 1 0 1.41 1.418 1 1 0 0 0-1.41-1.418ZM6.34 6.34a1 1 0 1 0-1.41-1.418A1 1 0 0 0 6.34 6.34ZM12 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5.66 13.66a1 1 0 1 0 1.41 1.418 1 1 0 0 0-1.41-1.418ZM21 11a1 1 0 1 0 0 2.002A1 1 0 0 0 21 11Zm-3.34-6.07a1 1 0 1 0 1.41 1.418 1 1 0 0 0-1.41-1.418ZM12 20a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0-14a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm0 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z'
    />
  </svg>
);
export default SvgIconBrightnessLow;
