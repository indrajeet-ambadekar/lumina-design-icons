import * as React from "react";
const SvgStepForward = ({ title, titleId, ...props }) => (
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
      d='M8.71 7.29a1.004 1.004 0 1 0-1.42 1.42l3.3 3.29-3.3 3.29a1 1 0 0 0 0 1.42.998.998 0 0 0 1.42 0l4-4a.997.997 0 0 0 .219-1.095.998.998 0 0 0-.22-.325l-4-4ZM16 7a1 1 0 0 0-1 1v8a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1Z'
    />
  </svg>
);
export default SvgStepForward;
