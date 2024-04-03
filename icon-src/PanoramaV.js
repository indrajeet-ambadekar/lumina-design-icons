import * as React from "react";
const SvgPanoramaV = ({ title, titleId, ...props }) => (
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
      d='M17.27 12a21.1 21.1 0 0 1 1.64-8.58 1 1 0 0 0-.07-1A1 1 0 0 0 18 2H6a1 1 0 0 0-.84.46 1 1 0 0 0-.07 1A21.1 21.1 0 0 1 6.73 12a21.1 21.1 0 0 1-1.64 8.58 1 1 0 0 0 .07 1A1 1 0 0 0 6 22h12a1 1 0 0 0 .84-.46 1 1 0 0 0 .07-1A21.1 21.1 0 0 1 17.27 12m-.75 8h-9a24.8 24.8 0 0 0 1.25-8 24.8 24.8 0 0 0-1.29-8h9a24.8 24.8 0 0 0-1.25 8 24.8 24.8 0 0 0 1.29 8'
    />
  </svg>
);
export default SvgPanoramaV;
