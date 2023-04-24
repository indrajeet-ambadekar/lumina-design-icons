import * as React from "react";
const SvgIconSilence = ({ title, titleId, ...props }) => (
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
      d='M9 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 3a1 1 0 0 0-2 0h-1a1 1 0 0 0-2 0h-1a1 1 0 1 0-2 0 1 1 0 0 0 0 2 1 1 0 1 0 2 0h1a1 1 0 0 0 2 0h1a1 1 0 0 0 2 0 1 1 0 0 0 0-2ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20Z'
    />
  </svg>
);
export default SvgIconSilence;
