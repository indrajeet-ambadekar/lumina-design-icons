import * as React from "react";
const SvgBrightnessLow = ({ title, titleId, ...props }) => (
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
      d='M3 11a1 1 0 1 0 0 2.001A1 1 0 0 0 3 11m1.93 6.66a1 1 0 1 0 1.41 1.418 1 1 0 0 0-1.41-1.418M6.34 6.34a1 1 0 1 0-1.41-1.418A1 1 0 0 0 6.34 6.34M12 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m5.66 13.66a1 1 0 1 0 1.41 1.418 1 1 0 0 0-1.41-1.418M21 11a1 1 0 1 0 0 2.002A1 1 0 0 0 21 11m-3.34-6.07a1 1 0 1 0 1.41 1.418 1 1 0 0 0-1.41-1.418M12 20a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0-14a6 6 0 1 0 0 12 6 6 0 0 0 0-12m0 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8'
    />
  </svg>
);
export default SvgBrightnessLow;
