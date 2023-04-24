import * as React from "react";
const SvgIconCommentAltLock = ({ title, titleId, ...props }) => (
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
      d='M12 10V8a3 3 0 0 0-2-2.82V4a3 3 0 1 0-6 0v1.18A3 3 0 0 0 2 8v2a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3ZM6 4a1 1 0 0 1 2 0v1H6V4Zm-2 6V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm15-3h-4a1 1 0 1 0 0 2h4a1 1 0 0 1 1 1v9.72l-1.57-1.45a1 1 0 0 0-.68-.27H9a1 1 0 0 1-1-1v-1a1 1 0 1 0-2 0v1a3 3 0 0 0 3 3h8.36l3 2.73A1 1 0 0 0 21 23a1.1 1.1 0 0 0 .4-.08A1 1 0 0 0 22 22V10a3 3 0 0 0-3-3Z'
    />
  </svg>
);
export default SvgIconCommentAltLock;
