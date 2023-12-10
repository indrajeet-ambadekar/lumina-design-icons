import * as React from "react";
const SvgBorderClear = ({ title, titleId, ...props }) => (
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
      d='M8 11a1 1 0 1 0 0 2.001A1 1 0 0 0 8 11Zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM4 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0 8a1 1 0 1 0 0 2.001A1 1 0 0 0 4 11Zm16-6a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM4 19a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm8-4a1 1 0 1 0 0 2.002A1 1 0 0 0 12 15Zm-8 0a1 1 0 1 0 0 2.001A1 1 0 0 0 4 15Zm0-8a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm4-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm12 12a1 1 0 1 0 0 2.002A1 1 0 0 0 20 15Zm0 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0-12a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-8 4a1 1 0 1 0 0 2.002A1 1 0 0 0 12 11Zm8 0a1 1 0 1 0 0 2.002A1 1 0 0 0 20 11Zm-4-8a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm4 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0-8a1 1 0 1 0 0 2.002A1 1 0 0 0 16 11Z'
    />
  </svg>
);
export default SvgBorderClear;
