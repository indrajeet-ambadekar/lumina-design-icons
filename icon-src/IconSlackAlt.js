import * as React from "react";
const SvgIconSlackAlt = ({ title, titleId, ...props }) => (
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
      d='M23 9.5A3.504 3.504 0 0 0 19.5 6a3.46 3.46 0 0 0-1.5.351V4.5a3.494 3.494 0 0 0-6-2.442A3.487 3.487 0 0 0 6.351 6H4.5a3.495 3.495 0 0 0-2.442 6A3.487 3.487 0 0 0 6 17.649V19.5a3.495 3.495 0 0 0 6 2.442A3.486 3.486 0 0 0 17.649 18H19.5a3.494 3.494 0 0 0 2.442-6A3.485 3.485 0 0 0 23 9.5Zm-10-5a1.5 1.5 0 1 1 3 0v5a1.5 1.5 0 1 1-3 0v-5Zm-7 10A1.5 1.5 0 1 1 4.5 13H6v1.5Zm5 5a1.5 1.5 0 1 1-3 0v-5a1.5 1.5 0 0 1 3 0v5ZM9.5 11h-5a1.5 1.5 0 1 1 0-3h5a1.5 1.5 0 1 1 0 3ZM11 6H9.5A1.5 1.5 0 1 1 11 4.5V6Zm1 6.058a3.56 3.56 0 0 0-.058-.058l.058-.058.058.058-.058.058ZM14.5 21a1.502 1.502 0 0 1-1.5-1.5V18h1.5a1.5 1.5 0 1 1 0 3Zm5-5h-5a1.5 1.5 0 1 1 0-3h5a1.5 1.5 0 1 1 0 3Zm0-5H18V9.5a1.5 1.5 0 1 1 1.5 1.5Z'
    />
  </svg>
);
export default SvgIconSlackAlt;
