import * as React from "react";
const SvgCropAltRotateLeft = ({ title, titleId, ...props }) => (
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
      d='M9.71 16.29a1.005 1.005 0 0 0-1.714.71 1 1 0 0 0 .294.71l.3.29H8a3 3 0 0 1-3-3v-2a1 1 0 1 0-2 0v2a5 5 0 0 0 5 5h.59l-.3.29a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l2-2a1 1 0 0 0 0-1.42zM20 12h-1V5a1 1 0 0 0-1-1h-7V3a1 1 0 0 0-2 0v1H8a1 1 0 0 0 0 2h1v7a1 1 0 0 0 1 1h7v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2m-3 0h-6V6h6z'
    />
  </svg>
);
export default SvgCropAltRotateLeft;
