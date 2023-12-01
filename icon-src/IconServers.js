import * as React from "react";
const SvgIconServers = ({ title, titleId, ...props }) => (
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
      d='M15 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-4 0H9a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm0-6H9a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm8-3a3 3 0 0 0-3-3h-1a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3H4a3 3 0 0 0-3 3v2a3 3 0 0 0 .78 2A3 3 0 0 0 1 14v2a3 3 0 0 0 3 3h1a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3h1a3 3 0 0 0 3-3v-2a3 3 0 0 0-.78-2 3 3 0 0 0 .78-2V8ZM5 17H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1a3 3 0 0 0 .78 2A3 3 0 0 0 5 17Zm0-6H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1a3 3 0 0 0 .78 2A3 3 0 0 0 5 11Zm12 8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2Zm0-6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2Zm0-6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2Zm4 9a1 1 0 0 1-1 1h-1a3 3 0 0 0-.78-2 3 3 0 0 0 .78-2h1a1 1 0 0 1 1 1v2Zm0-6a1 1 0 0 1-1 1h-1a3 3 0 0 0-.78-2A3 3 0 0 0 19 7h1a1 1 0 0 1 1 1v2Zm-6-5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-4 0H9a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2Z'
    />
  </svg>
);
export default SvgIconServers;
