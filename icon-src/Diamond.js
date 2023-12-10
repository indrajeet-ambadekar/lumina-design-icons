import * as React from "react";
const SvgDiamond = ({ title, titleId, ...props }) => (
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
      d='m20 10.35-5.78-7.41A3.06 3.06 0 0 0 9.75 3L4 10.35A3.05 3.05 0 0 0 3.51 12 3.09 3.09 0 0 0 4 13.58l.06.07 5.74 7.41A3.001 3.001 0 0 0 12 22a3.06 3.06 0 0 0 2.26-1L20 13.65a3.001 3.001 0 0 0-.06-3.3H20Zm-1.57 2.14-5.67 7.22a1.11 1.11 0 0 1-1.42.07l-5.69-7.31a1 1 0 0 1-.14-.47 1.11 1.11 0 0 1 .1-.45l5.67-7.22a1.11 1.11 0 0 1 1.42-.07l5.63 7.28a1 1 0 0 1 .16.54 1.11 1.11 0 0 1-.1.41h.04Z'
    />
  </svg>
);
export default SvgDiamond;
