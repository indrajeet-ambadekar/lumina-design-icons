import * as React from "react";
const SvgBriefcaseLean = ({ title, titleId, ...props }) => (
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
      d='M21 6h-4V5a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v1H3a1 1 0 0 0-1 1v4a3 3 0 0 0 1 2.22V19a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5.78A3 3 0 0 0 22 11V7a1 1 0 0 0-1-1ZM9 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H9V5Zm10 14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-5h2v1a1 1 0 1 0 2 0v-1h6v1a1 1 0 0 0 2 0v-1h2v5Zm1-8a1 1 0 0 1-1 1h-2v-1a1 1 0 0 0-2 0v1H9v-1a1 1 0 1 0-2 0v1H5a1 1 0 0 1-1-1V8h16v3Z'
    />
  </svg>
);
export default SvgBriefcaseLean;
