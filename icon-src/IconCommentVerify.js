import * as React from "react";
const SvgIconCommentVerify = ({ title, titleId, ...props }) => (
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
      d='m15.29 8.85-4.73 4.74-1.85-1.86a1.004 1.004 0 0 0-1.42 1.42l2.56 2.56a1 1 0 0 0 1.42 0l5.44-5.44a1.003 1.003 0 1 0-1.42-1.42ZM12 2A10 10 0 0 0 2 12a9.89 9.89 0 0 0 2.26 6.33l-2 2a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20Zm0 18H5.41l.93-.93a1 1 0 0 0 0-1.41A8 8 0 1 1 12 20Z'
    />
  </svg>
);
export default SvgIconCommentVerify;
