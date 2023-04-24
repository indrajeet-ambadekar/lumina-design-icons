import * as React from "react";
const SvgIconTh = ({ title, titleId, ...props }) => (
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
      d='M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM11 20H4v-7h7v7Zm0-9H4V4h7v7Zm9 9h-7v-7h7v7Zm0-9h-7V4h7v7Z'
    />
  </svg>
);
export default SvgIconTh;
