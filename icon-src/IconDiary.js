import * as React from "react";
const SvgIconDiary = ({ title, titleId, ...props }) => (
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
      d='M17 2H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h1v1a1 1 0 1 0 2 0v-1h9a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Zm-3 16H6V4h8v14Zm4-1a1 1 0 0 1-1 1h-1V4h1a1 1 0 0 1 1 1v12Z'
    />
  </svg>
);
export default SvgIconDiary;
