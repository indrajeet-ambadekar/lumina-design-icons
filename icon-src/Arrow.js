import * as React from "react";
const SvgArrow = ({ title, titleId, ...props }) => (
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
      d='M9.71 6.29a1 1 0 0 0-1.42 0l-5 5a1 1 0 0 0 0 1.42l5 5a1 1 0 0 0 1.639-.325 1 1 0 0 0-.22-1.095L5.41 12l4.3-4.29a1 1 0 0 0 0-1.42Zm11 5-5-5a1.004 1.004 0 1 0-1.42 1.42l4.3 4.29-4.3 4.29a1.002 1.002 0 0 0 .325 1.639.999.999 0 0 0 1.095-.219l5-5a.999.999 0 0 0 0-1.42Z'
    />
  </svg>
);
export default SvgArrow;
