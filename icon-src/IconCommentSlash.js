import * as React from "react";
const SvgIconCommentSlash = ({ title, titleId, ...props }) => (
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
      d='M10.19 5.23A7.12 7.12 0 0 1 12 5a7 7 0 0 1 7 7c.002.61-.076 1.219-.23 1.81a1 1 0 0 0 .7 1.23c.087.01.174.01.26 0a1 1 0 0 0 1-.74A8.91 8.91 0 0 0 21 12a9 9 0 0 0-9-9 8.91 8.91 0 0 0-2.33.3 1 1 0 0 0 .52 1.93Zm11.52 15.06-18-18a1.004 1.004 0 0 0-1.42 1.42L5 6.38a9 9 0 0 0 0 11.24l-1.71 1.67a1 1 0 0 0-.21 1.09A1 1 0 0 0 4 21h8a9 9 0 0 0 5.62-2l2.67 2.68a.997.997 0 0 0 1.095.219.999.999 0 0 0 .325-.22 1 1 0 0 0 0-1.39ZM12 19H6.41l.64-.63a1 1 0 0 0 0-1.41 7 7 0 0 1-.65-9.15l9.79 9.79A7 7 0 0 1 12 19Z'
    />
  </svg>
);
export default SvgIconCommentSlash;
