import * as React from "react";
const SvgCommentAltInfo = ({ title, titleId, ...props }) => (
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
      d='M5 11a1 1 0 0 0 1-1V6a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1Zm-.71-7.29a1 1 0 0 0 1.09.21 1.15 1.15 0 0 0 .33-.21 1.15 1.15 0 0 0 .21-.33 1 1 0 0 0-.21-1.09 1 1 0 0 0-1.09-.21 1 1 0 0 0-.33.21 1 1 0 0 0-.21 1.09c.05.121.122.233.21.33ZM17 6H9a1 1 0 1 0 0 2h8a1 1 0 0 1 1 1v9.72l-1.57-1.45a1 1 0 0 0-.68-.27H7a1 1 0 0 1-1-1v-2a1 1 0 1 0-2 0v2a3 3 0 0 0 3 3h8.36l3 2.73A1 1 0 0 0 19 22a1.1 1.1 0 0 0 .4-.08A1 1 0 0 0 20 21V9a3 3 0 0 0-3-3Z'
    />
  </svg>
);
export default SvgCommentAltInfo;
