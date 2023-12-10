import * as React from "react";
const SvgScrollH = ({ title, titleId, ...props }) => (
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
      d='M4.71 6.29a1.004 1.004 0 0 0-1.42 1.42L7.59 12l-4.3 4.29a1 1 0 0 0 0 1.42.998.998 0 0 0 1.42 0l5-5a.999.999 0 0 0 0-1.42l-5-5ZM16.41 12l4.3-4.29a1.004 1.004 0 1 0-1.42-1.42l-5 5a1.001 1.001 0 0 0 0 1.42l5 5a.998.998 0 0 0 1.42 0 .997.997 0 0 0 .219-1.095.998.998 0 0 0-.22-.325L16.41 12Z'
    />
  </svg>
);
export default SvgScrollH;
