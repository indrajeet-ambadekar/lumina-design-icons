import * as React from "react";
const SvgIconCommentDownload = ({ title, titleId, ...props }) => (
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
      d='M19 14a.997.997 0 0 0-1.22.72A7 7 0 0 1 11 20H5.41l.64-.63a1 1 0 0 0 0-1.41A7 7 0 0 1 11 6c.293-.015.587-.015.88 0a1.007 1.007 0 1 0 .24-2A8.319 8.319 0 0 0 11 4a9 9 0 0 0-7 14.62l-1.71 1.67a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h8a9 9 0 0 0 8.72-6.75A.999.999 0 0 0 19 14Zm2.71-6.74a.999.999 0 0 0-1.42 0L19 8.59V3a1 1 0 1 0-2 0v5.59l-1.29-1.3a1.004 1.004 0 1 0-1.42 1.42l3 3c.095.091.207.162.33.21a.94.94 0 0 0 .76 0 1 1 0 0 0 .33-.21l3-3a.998.998 0 0 0 0-1.42v-.03Z'
    />
  </svg>
);
export default SvgIconCommentDownload;
