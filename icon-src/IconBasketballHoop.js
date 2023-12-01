import * as React from "react";
const SvgIconBasketballHoop = ({ title, titleId, ...props }) => (
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
      d='M18 10H6a1 1 0 0 0 0 2h1v9a1 1 0 1 0 2 0v-1h2v1a1 1 0 0 0 2 0v-1h2v1a1 1 0 0 0 2 0v-9h1a1 1 0 0 0 0-2Zm-7 8H9v-2h2v2Zm0-4H9v-2h2v2Zm4 4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm5-12H4a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3 1 1 0 0 0 0-2 1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1 1 1 0 0 0 0 2 3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Zm-6 6a1 1 0 1 0 0-2h-4a1 1 0 0 0 0 2h4Z'
    />
  </svg>
);
export default SvgIconBasketballHoop;
