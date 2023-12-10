import * as React from "react";
const SvgCompressAltLeft = ({ title, titleId, ...props }) => (
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
      d='M10.5 5.5a1 1 0 0 0-1 1v1.59l-5.79-5.8a1.004 1.004 0 1 0-1.42 1.42l5.8 5.79H6.5a1 1 0 0 0 0 2h4a.997.997 0 0 0 .38-.08 1 1 0 0 0 .54-.54c.051-.12.079-.25.08-.38v-4a1 1 0 0 0-1-1Zm11.21 14.79-5.8-5.79h1.59a1 1 0 1 0 0-2h-4c-.13.002-.26.029-.38.08a1 1 0 0 0-.54.54 1 1 0 0 0-.08.38v4a1 1 0 1 0 2 0v-1.59l5.79 5.8a.997.997 0 0 0 1.095.219.999.999 0 0 0 .325-.22 1 1 0 0 0 0-1.42Z'
    />
  </svg>
);
export default SvgCompressAltLeft;
