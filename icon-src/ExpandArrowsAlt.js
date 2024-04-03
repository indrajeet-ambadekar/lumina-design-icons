import * as React from "react";
const SvgExpandArrowsAlt = ({ title, titleId, ...props }) => (
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
      d='M9.29 13.29 4 18.59V17a1 1 0 1 0-2 0v4a1 1 0 0 0 .08.38 1 1 0 0 0 .54.54c.12.051.25.078.38.08h4a1 1 0 0 0 0-2H5.41l5.3-5.29a1.004 1.004 0 1 0-1.42-1.42M5.41 4H7a1 1 0 0 0 0-2H3a1 1 0 0 0-.38.08 1 1 0 0 0-.54.54A1 1 0 0 0 2 3v4a1 1 0 0 0 2 0V5.41l5.29 5.3a1 1 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095zM21 16a1 1 0 0 0-1 1v1.59l-5.29-5.3a1.004 1.004 0 1 0-1.42 1.42l5.3 5.29H17a1 1 0 0 0 0 2h4c.13-.002.26-.029.38-.08a1 1 0 0 0 .54-.54c.051-.12.078-.25.08-.38v-4a1 1 0 0 0-1-1m.92-13.38a1 1 0 0 0-.54-.54A1 1 0 0 0 21 2h-4a1 1 0 1 0 0 2h1.59l-5.3 5.29a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219L20 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.08-.38'
    />
  </svg>
);
export default SvgExpandArrowsAlt;
