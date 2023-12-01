import * as React from "react";
const SvgIconThLarge = ({ title, titleId, ...props }) => (
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
      d='M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-9 16H5v-6h6v6Zm0-8H5V5h6v6Zm8 8h-6v-6h6v6Zm0-8h-6V5h6v6Z'
    />
  </svg>
);
export default SvgIconThLarge;
