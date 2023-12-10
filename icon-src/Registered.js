import * as React from "react";
const SvgRegistered = ({ title, titleId, ...props }) => (
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
      d='M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20Zm.5-13h-3a1 1 0 0 0-1 1v8a1 1 0 1 0 2 0v-2h2a1 1 0 0 1 1 1v1a1 1 0 0 0 2 0v-1a3 3 0 0 0-.78-2 3 3 0 0 0 .78-2v-1a3 3 0 0 0-3-3Zm1 4a1 1 0 0 1-1 1h-2V9h2a1 1 0 0 1 1 1v1Z'
    />
  </svg>
);
export default SvgRegistered;
