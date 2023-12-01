import * as React from "react";
const SvgIconWall = ({ title, titleId, ...props }) => (
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
      d='M21 9a1 1 0 1 0 0-2h-1V5h1a1 1 0 1 0 0-2H3a1 1 0 0 0 0 2h3v2H3a1 1 0 0 0 0 2h1v2H3a1 1 0 0 0 0 2h3v2H3a1 1 0 0 0 0 2h1v2H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2h-3v-2h3a1 1 0 0 0 0-2h-1v-2h1a1 1 0 0 0 0-2h-3V9h3ZM8 5h4v2H8V5Zm8 4v2h-4V9h4ZM6 9h4v2H6V9Zm6 4v2H8v-2h4Zm-2 6H6v-2h4v2Zm6 0h-4v-2h4v2Zm2-4h-4v-2h4v2Zm-4-8V5h4v2h-4Z'
    />
  </svg>
);
export default SvgIconWall;
