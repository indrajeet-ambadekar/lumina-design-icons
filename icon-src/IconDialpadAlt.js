import * as React from "react";
const SvgIconDialpadAlt = ({ title, titleId, ...props }) => (
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
      d='M5 9.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Zm0 4a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm7-4a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Zm0 4a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm7-5.5a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5Zm0-4a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm0 5.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Zm0 4a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm-14-11a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Zm0 4a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm7 10a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Zm0 4a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm0-18a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Zm0 4a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z'
    />
  </svg>
);
export default SvgIconDialpadAlt;
