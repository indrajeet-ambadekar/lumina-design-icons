import * as React from "react";
const SvgCropAlt = ({ title, titleId, ...props }) => (
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
      d='M19 16h-1V7a1 1 0 0 0-1-1H8V5a1 1 0 0 0-2 0v1H5a1 1 0 0 0 0 2h1v9a1 1 0 0 0 1 1h9v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2Zm-3 0H8V8h8v8Z'
    />
  </svg>
);
export default SvgCropAlt;
