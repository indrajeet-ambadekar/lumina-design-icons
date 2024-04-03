import * as React from "react";
const SvgCodeBranch = ({ title, titleId, ...props }) => (
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
      d='M17 6.06a3 3 0 0 0-1.15 5.77A2 2 0 0 1 14 13.06h-4a3.9 3.9 0 0 0-2 .56V7.88a3 3 0 1 0-2 0v8.36a3 3 0 1 0 2.16.05A2 2 0 0 1 10 15.06h4a4 4 0 0 0 3.91-3.16A3 3 0 0 0 17 6.06m-10-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0 16a1 1 0 1 1 0-2 1 1 0 0 1 0 2m10-10a1 1 0 1 1 0-2 1 1 0 0 1 0 2'
    />
  </svg>
);
export default SvgCodeBranch;
