import * as React from "react";
const SvgIconWindow = ({ title, titleId, ...props }) => (
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
      d='M10 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM6 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm8 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm6-4H4a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3Zm1 19a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9h18v9Zm0-11H3V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v5Z'
    />
  </svg>
);
export default SvgIconWindow;
