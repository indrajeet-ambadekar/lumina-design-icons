import * as React from "react";
const SvgCornerUpRightLean = ({ title, titleId, ...props }) => (
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
      d='M19.61 7.25a1 1 0 0 0-.22-.33l-4.63-4.63a1 1 0 1 0-1.41 1.42l2.92 2.92h-8a4 4 0 0 0-4 4V21a1 1 0 0 0 2 0V10.63a2 2 0 0 1 2-2h8l-2.92 2.92a1 1 0 0 0 .71 1.71 1 1 0 0 0 .7-.3l4.63-4.62q.14-.151.22-.34a1 1 0 0 0 0-.75'
    />
  </svg>
);
export default SvgCornerUpRightLean;
