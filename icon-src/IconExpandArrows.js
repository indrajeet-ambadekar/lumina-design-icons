import * as React from "react";
const SvgIconExpandArrows = ({ title, titleId, ...props }) => (
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
      d='M21 8a1 1 0 0 0 1-1V3a1.001 1.001 0 0 0-.08-.38 1 1 0 0 0-.54-.54A1 1 0 0 0 21 2h-4a1 1 0 1 0 0 2h1.59L12 10.59 5.41 4H7a1 1 0 0 0 0-2H3a1 1 0 0 0-.38.08 1 1 0 0 0-.54.54A1 1 0 0 0 2 3v4a1 1 0 0 0 2 0V5.41L10.59 12 4 18.59V17a1 1 0 1 0-2 0v4a1 1 0 0 0 .08.38 1 1 0 0 0 .54.54c.12.051.25.078.38.08h4a1 1 0 0 0 0-2H5.41L12 13.41 18.59 20H17a1 1 0 0 0 0 2h4c.13-.002.26-.029.38-.08a1 1 0 0 0 .54-.54c.051-.12.078-.25.08-.38v-4a1 1 0 0 0-2 0v1.59L13.41 12 20 5.41V7a1 1 0 0 0 1 1Z'
    />
  </svg>
);
export default SvgIconExpandArrows;
