import * as React from "react";
const SvgKeySkeleton = ({ title, titleId, ...props }) => (
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
      d='m21 4.41.71-.7a1.004 1.004 0 1 0-1.42-1.42l-1.4 1.41-2.83 2.83-6.31 6.3a5 5 0 1 0 1.42 1.42l5.59-5.6 2.12 2.13a1 1 0 0 0 1.63-.33 1 1 0 0 0-.22-1.09l-2.12-2.12 1.42-1.41.7.7a1 1 0 1 0 1.42-1.41zM7 20a3 3 0 1 1 0-6 3 3 0 0 1 0 6'
    />
  </svg>
);
export default SvgKeySkeleton;
