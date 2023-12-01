import * as React from "react";
const SvgIconCommentAltVerify = ({ title, titleId, ...props }) => (
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
      d='m15.71 6.29-5.3 5.3-2.12-2.12a1 1 0 1 0-1.41 1.41l2.83 2.83a1 1 0 0 0 1.41 0l6-6a1 1 0 1 0-1.41-1.42ZM19 2H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h11.59l3.7 3.71A1 1 0 0 0 21 22a.84.84 0 0 0 .38-.08A1 1 0 0 0 22 21V5a3 3 0 0 0-3-3Zm1 16.59-2.29-2.3A1 1 0 0 0 17 16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v13.59Z'
    />
  </svg>
);
export default SvgIconCommentAltVerify;
