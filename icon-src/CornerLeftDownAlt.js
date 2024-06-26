import * as React from "react";
const SvgCornerLeftDownAlt = ({ title, titleId, ...props }) => (
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
      d='M21 4.31h-9.37a5 5 0 0 0-5 5v7l-2.92-2.96a1.001 1.001 0 1 0-1.42 1.41l4.63 4.63a1 1 0 0 0 .33.22.94.94 0 0 0 .76 0q.183-.082.33-.22L13 14.76a1 1 0 0 0-1.41-1.41l-2.96 2.92v-7a3 3 0 0 1 3-3H21a1 1 0 1 0 0-2z'
    />
  </svg>
);
export default SvgCornerLeftDownAlt;
