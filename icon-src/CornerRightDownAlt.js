import * as React from "react";
const SvgCornerRightDownAlt = ({ title, titleId, ...props }) => (
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
      d='M21.71 13.35a1 1 0 0 0-1.42 0l-2.92 2.92v-8a4 4 0 0 0-4-4H3a1 1 0 0 0 0 2h10.37a2 2 0 0 1 2 2v8l-2.92-2.92A1.011 1.011 0 1 0 11 14.76l4.62 4.63q.147.138.33.22a.94.94 0 0 0 .76 0 1 1 0 0 0 .33-.22l4.63-4.63a1 1 0 0 0 .04-1.41'
    />
  </svg>
);
export default SvgCornerRightDownAlt;
