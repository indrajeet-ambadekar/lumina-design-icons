import * as React from "react";
const SvgIconPrintSlash = ({ title, titleId, ...props }) => (
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
      d='M7 10a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM3.71 2.29a1.004 1.004 0 1 0-1.42 1.42L4.62 6A3 3 0 0 0 2 9v6a3 3 0 0 0 3 3h1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1.59l2.29 2.3a.997.997 0 0 0 1.095.219.999.999 0 0 0 .325-.22 1 1 0 0 0 0-1.42l-18-18ZM6 15v1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1.59l6 6H7a1 1 0 0 0-1 1Zm10 5H8v-4h6.59L16 17.41V20Zm3-14h-1V3a1 1 0 0 0-1-1H8.66a1 1 0 1 0 0 2H16v2h-3.34a1 1 0 1 0 0 2H19a1 1 0 0 1 1 1v6a.369.369 0 0 1 0 .11 1 1 0 0 0 .78 1.18h.2a1 1 0 0 0 1-.8c.021-.162.028-.326.02-.49V9a3 3 0 0 0-3-3Z'
    />
  </svg>
);
export default SvgIconPrintSlash;
