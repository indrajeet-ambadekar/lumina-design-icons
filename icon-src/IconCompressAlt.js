import * as React from "react";
const SvgIconCompressAlt = ({ title, titleId, ...props }) => (
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
      d='M21.71 2.29a.999.999 0 0 0-1.42 0l-5.79 5.8V6.5a1 1 0 1 0-2 0v4c.002.13.029.26.08.38a1 1 0 0 0 .54.54c.12.051.25.078.38.08h4a1 1 0 1 0 0-2h-1.59l5.8-5.79a.998.998 0 0 0 0-1.42ZM10.88 12.58a1.001 1.001 0 0 0-.38-.08h-4a1 1 0 0 0 0 2h1.59l-5.8 5.79a1 1 0 0 0 0 1.42.998.998 0 0 0 1.42 0l5.79-5.8v1.59a1 1 0 1 0 2 0v-4a.998.998 0 0 0-.08-.38 1 1 0 0 0-.54-.54Z'
    />
  </svg>
);
export default SvgIconCompressAlt;
