import * as React from "react";
const SvgChatInfo = ({ title, titleId, ...props }) => (
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
      d='M19.29 3.71a1 1 0 0 0 1.42 0c.088-.097.16-.209.21-.33a.997.997 0 0 0 .006-.764 1 1 0 0 0-.216-.326l-.15-.12a.758.758 0 0 0-.18-.09 1 1 0 0 0-1.09.21 1 1 0 0 0-.21 1.09c.05.121.122.233.21.33ZM20 5a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V6a1 1 0 0 0-1-1Zm.06 8a1 1 0 0 0-1.11.87A7 7 0 0 1 12 20H6.41l.64-.63a1 1 0 0 0 0-1.41A7 7 0 0 1 12 6a6.91 6.91 0 0 1 3.49.94 1 1 0 0 0 1-1.72A8.84 8.84 0 0 0 12 4a9 9 0 0 0-7 14.62l-1.71 1.67a1 1 0 0 0-.21 1.09A1 1 0 0 0 4 22h8a9 9 0 0 0 8.93-7.88 1 1 0 0 0-.87-1.12Z'
    />
  </svg>
);
export default SvgChatInfo;
