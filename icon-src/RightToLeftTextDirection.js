import * as React from "react";
const SvgRightToLeftTextDirection = ({ title, titleId, ...props }) => (
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
      d='M20.5 17H5.91l1.3-1.29a1.004 1.004 0 0 0-1.42-1.42l-3 3a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l3 3a1 1 0 0 0 1.639-.325 1 1 0 0 0-.22-1.095L5.91 19H20.5a1 1 0 0 0 0-2Zm-9-7v4a1 1 0 0 0 2 0V4h2v10a1 1 0 0 0 2 0V4h1a1 1 0 1 0 0-2h-7a4 4 0 1 0 0 8Zm0-6v4a2 2 0 0 1 0-4Z'
    />
  </svg>
);
export default SvgRightToLeftTextDirection;
