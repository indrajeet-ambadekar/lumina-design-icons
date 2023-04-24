import * as React from "react";
const SvgIconBorderVertical = ({ title, titleId, ...props }) => (
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
      d='M3 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm16-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM7 11a1 1 0 1 0 0 2.001A1 1 0 0 0 7 11Zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM7 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM3 15a1 1 0 1 0 0 2.001A1 1 0 0 0 3 15Zm0-4a1 1 0 1 0 0 2.001A1 1 0 0 0 3 11Zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm16-4a1 1 0 1 0 0 2.002A1 1 0 0 0 19 15Zm0-4a1 1 0 1 0 0 2.002A1 1 0 0 0 19 11Zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0-12a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-4-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-4 0a1 1 0 0 0-1 1v16a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1Zm4 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0-8a1 1 0 1 0 0 2.002A1 1 0 0 0 15 11Z'
    />
  </svg>
);
export default SvgIconBorderVertical;
