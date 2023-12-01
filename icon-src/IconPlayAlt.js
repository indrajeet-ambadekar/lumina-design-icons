import * as React from "react";
const SvgIconPlayAlt = ({ title, titleId, ...props }) => (
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
      d='M18.54 9 8.88 3.46a3.42 3.42 0 0 0-5.13 3v11.12a3.42 3.42 0 0 0 5.13 2.96L18.54 15a3.42 3.42 0 0 0 0-5.92V9Zm-1 4.19-9.66 5.62a1.44 1.44 0 0 1-1.42 0 1.42 1.42 0 0 1-.71-1.23V6.42a1.42 1.42 0 0 1 .71-1.23A1.51 1.51 0 0 1 7.17 5c.249.005.492.07.71.19l9.66 5.58a1.42 1.42 0 0 1 0 2.46v-.04Z'
    />
  </svg>
);
export default SvgIconPlayAlt;
