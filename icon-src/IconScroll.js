import * as React from "react";
const SvgIconScroll = ({ title, titleId, ...props }) => (
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
      d='M11.29 9.71a.999.999 0 0 0 1.42 0l5-5a1.004 1.004 0 1 0-1.42-1.42L12 7.59l-4.29-4.3a1.004 1.004 0 0 0-1.42 1.42l5 5Zm1.42 4.58a1 1 0 0 0-1.42 0l-5 5a1.004 1.004 0 1 0 1.42 1.42l4.29-4.3 4.29 4.3a.997.997 0 0 0 1.095.219.999.999 0 0 0 .325-.22 1 1 0 0 0 0-1.42l-5-5Z'
    />
  </svg>
);
export default SvgIconScroll;
