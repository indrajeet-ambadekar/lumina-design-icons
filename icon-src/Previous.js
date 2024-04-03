import * as React from "react";
const SvgPrevious = ({ title, titleId, ...props }) => (
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
      d='m13.41 12 3.3-3.29A1.005 1.005 0 0 0 16 6.996a1 1 0 0 0-.71.294l-4 4a1 1 0 0 0 0 1.42l4 4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM8 7a1 1 0 0 0-1 1v8a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1'
    />
  </svg>
);
export default SvgPrevious;
