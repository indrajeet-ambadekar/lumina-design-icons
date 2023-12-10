import * as React from "react";
const SvgFileCheckAlt = ({ title, titleId, ...props }) => (
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
      d='M11.5 20h-6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3v5a1 1 0 0 0 2 0V8.94a1.307 1.307 0 0 0-.06-.27v-.09a1.07 1.07 0 0 0-.19-.28l-6-6a1.071 1.071 0 0 0-.28-.19.29.29 0 0 0-.1 0 1.099 1.099 0 0 0-.31-.11H5.5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h6a1 1 0 0 0 0-2Zm1-14.59L15.09 8H13.5a1 1 0 0 1-1-1V5.41ZM7.5 14h6a1 1 0 0 0 0-2h-6a1 1 0 0 0 0 2Zm4 2h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Zm-4-6h1a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2Zm13.71 6.29a1.002 1.002 0 0 0-1.42 0l-3.29 3.3-1.29-1.3a1.004 1.004 0 0 0-1.42 1.42l2 2a1.002 1.002 0 0 0 1.42 0l4-4a1.002 1.002 0 0 0 0-1.42Z'
    />
  </svg>
);
export default SvgFileCheckAlt;
