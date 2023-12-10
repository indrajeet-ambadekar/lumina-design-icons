import * as React from "react";
const SvgFileLanscapeSlash = ({ title, titleId, ...props }) => (
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
      d='M22 10.94a1.309 1.309 0 0 0-.06-.27v-.09a1.071 1.071 0 0 0-.19-.28l-6-6a1.071 1.071 0 0 0-.28-.19h-.09a.88.88 0 0 0-.33-.11h-4.39a1 1 0 0 0 0 2H14v3a3 3 0 0 0 3 3h3v3.34a1 1 0 1 0 2 0V10.94ZM17 10a1 1 0 0 1-1-1V7.41L18.59 10H17ZM3.71 2.29a1.004 1.004 0 1 0-1.42 1.42l.91.9A3 3 0 0 0 2 7v10a3 3 0 0 0 3 3h13.59l1.7 1.71a.997.997 0 0 0 1.095.219.999.999 0 0 0 .325-.22 1 1 0 0 0 0-1.42l-18-18ZM5 18a1 1 0 0 1-1-1V7a1 1 0 0 1 .66-.93L16.59 18H5Z'
    />
  </svg>
);
export default SvgFileLanscapeSlash;
