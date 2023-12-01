import * as React from "react";
const SvgIconCommentBlock = ({ title, titleId, ...props }) => (
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
      d='M19 14a1.001 1.001 0 0 0-1.22.72A7 7 0 0 1 11 20H5.41l.64-.63a1 1 0 0 0 0-1.41 7 7 0 0 1 3.2-11.74 1.002 1.002 0 0 0-.5-1.94A9 9 0 0 0 4 18.62l-1.71 1.67a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h8a9 9 0 0 0 8.72-6.75A.998.998 0 0 0 19 14Zm1.54-10.54a5 5 0 1 0-7.08 7.062 5 5 0 0 0 7.08-7.062ZM14 7a3 3 0 0 1 3-3 3 3 0 0 1 1.29.3l-4 4A3.002 3.002 0 0 1 14 7Zm5.12 2.12a3.08 3.08 0 0 1-3.4.57l4-4A3 3 0 0 1 20 7a3 3 0 0 1-.88 2.12Z'
    />
  </svg>
);
export default SvgIconCommentBlock;
