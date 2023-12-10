import * as React from "react";
const SvgBorderHorizontal = ({ title, titleId, ...props }) => (
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
      d='M8 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM4 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM4 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm12 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM4 19a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm16 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0-4a1 1 0 1 0 0 2.002A1 1 0 0 0 20 15Zm0-4H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2Zm-4 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM4 15a1 1 0 1 0 0 2.001A1 1 0 0 0 4 15Zm16-8a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM8 19a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0-4a1 1 0 1 0 0 2.002A1 1 0 0 0 12 15Z'
    />
  </svg>
);
export default SvgBorderHorizontal;
