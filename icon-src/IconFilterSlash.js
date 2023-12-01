import * as React from "react";
const SvgIconFilterSlash = ({ title, titleId, ...props }) => (
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
      d='M19.22 6h-6.56a1 1 0 1 0 0 2h6.56a.78.78 0 0 1 .78.78v.78h-3.78a1 1 0 1 0 0 2h2.37l-.7.69a1.001 1.001 0 0 0 .326 1.639 1 1 0 0 0 1.094-.22l1.88-1.88c.23-.228.414-.5.54-.8v-.1A2.59 2.59 0 0 0 22 9.82v-1A2.791 2.791 0 0 0 19.22 6ZM3.71 2.29a1.004 1.004 0 1 0-1.42 1.42l2.85 2.84A2.73 2.73 0 0 0 4 8.78v1c0 .38.082.755.24 1.1v.06c.128.301.311.576.54.81l5.41 5.4V21a.998.998 0 0 0 1 1 1 1 0 0 0 .45-.11l3.56-1.78a1 1 0 0 0 .55-.89v-2l4.51 4.52a.997.997 0 0 0 1.095.219.999.999 0 0 0 .325-.22 1 1 0 0 0 0-1.42L3.71 2.29ZM6 8.78a.76.76 0 0 1 .5-.72L6.59 8l1.56 1.56H6v-.78Zm8.07 7.29a1.001 1.001 0 0 0-.29.71v1.82l-1.56.78v-2.6a1.003 1.003 0 0 0-.29-.71l-4.52-4.51h2.74l4.22 4.22-.3.29Z'
    />
  </svg>
);
export default SvgIconFilterSlash;
