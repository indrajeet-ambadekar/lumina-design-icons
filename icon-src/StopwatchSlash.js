import * as React from "react";
const SvgStopwatchSlash = ({ title, titleId, ...props }) => (
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
      d='M10.6 5.63a1.016 1.016 0 0 0 .36 2 6 6 0 0 1 1-.09 6 6 0 0 1 6 6q-.005.504-.09 1a1 1 0 0 0 .8 1.16h.18a1 1 0 0 0 1-.82q.14-.683.15-1.38a8 8 0 0 0-1.7-4.91l.91-.9a1.004 1.004 0 1 0-1.42-1.42l-.9.91A8 8 0 0 0 12 5.5q-.706 0-1.4.13M10 4.5h4a1 1 0 1 0 0-2h-4a1 1 0 1 0 0 2m3.49 9.08v-.16l1.34-1.33a1.003 1.003 0 0 0-.326-1.638 1.005 1.005 0 0 0-1.094.218L12.08 12h-.16L5.71 5.79a1.004 1.004 0 0 0-1.42 1.42l.48.48.91.91A8 8 0 0 0 16.9 19.82l1.39 1.39a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM12 19.5A6 6 0 0 1 7.11 10l3.4 3.39v.08A1.5 1.5 0 0 0 12 15h.08l3.39 3.4A6 6 0 0 1 12 19.5'
    />
  </svg>
);
export default SvgStopwatchSlash;
