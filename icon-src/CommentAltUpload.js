import * as React from "react";
const SvgCommentAltUpload = ({ title, titleId, ...props }) => (
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
      d='M5.5 11a1 1 0 1 0 2 0V5.41l1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-3-3a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21l-3 3a1.004 1.004 0 1 0 1.42 1.42l1.29-1.3zm13-5h-5a1 1 0 1 0 0 2h5a1 1 0 0 1 1 1v9.72l-1.57-1.45a1 1 0 0 0-.68-.27H8.5a1 1 0 0 1-1-1v-1a1 1 0 1 0-2 0v1a3 3 0 0 0 3 3h8.36l3 2.73a1 1 0 0 0 1.518-.18 1 1 0 0 0 .162-.55V9a3 3 0 0 0-3.04-3'
    />
  </svg>
);
export default SvgCommentAltUpload;
