import * as React from "react";
const SvgIconAlignCenterV = ({ title, titleId, ...props }) => (
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
      d='m10.21 6.21.79-.8V8a1 1 0 0 0 2 0V5.41l.79.8a1 1 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095l-2.5-2.5a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21l-2.5 2.5a1.004 1.004 0 0 0 1.42 1.42ZM16 11H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2Zm-2.21 6.79-.79.8V16a1 1 0 0 0-2 0v2.59l-.79-.8a1.005 1.005 0 0 0-1.42 1.42l2.5 2.5a1 1 0 0 0 .33.21.94.94 0 0 0 .76 0 1 1 0 0 0 .33-.21l2.5-2.5a1.004 1.004 0 1 0-1.42-1.42Z'
    />
  </svg>
);
export default SvgIconAlignCenterV;
