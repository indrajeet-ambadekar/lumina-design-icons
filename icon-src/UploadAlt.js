import * as React from "react";
const SvgUploadAlt = ({ title, titleId, ...props }) => (
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
      d='M9.71 6.71 11 5.41V17a1 1 0 1 0 2 0V5.41l1.29 1.3a1 1 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095l-3-3a1 1 0 0 0-1.42 0l-3 3a1.004 1.004 0 0 0 1.42 1.42M18 9h-2a1 1 0 1 0 0 2h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h2a1 1 0 1 0 0-2H6a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3'
    />
  </svg>
);
export default SvgUploadAlt;
