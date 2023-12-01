import * as React from "react";
const SvgIconMobileAndroid = ({ title, titleId, ...props }) => (
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
      d='m12.71 16.29-.15-.12a.762.762 0 0 0-.18-.09L12.2 16a1 1 0 0 0-.91.27 1.15 1.15 0 0 0-.21.33 1 1 0 0 0 1.3 1.31c.12-.058.23-.132.33-.22a.999.999 0 0 0 .21-1.09 1.001 1.001 0 0 0-.21-.31ZM16 2H8a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Zm1 17a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v14Z'
    />
  </svg>
);
export default SvgIconMobileAndroid;
