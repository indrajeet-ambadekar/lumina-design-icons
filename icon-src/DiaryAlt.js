import * as React from "react";
const SvgDiaryAlt = ({ title, titleId, ...props }) => (
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
      d='M17 2H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h12a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3ZM8 20H6V4h2v16Zm10-1a1 1 0 0 1-1 1h-7V4h7a1 1 0 0 1 1 1v14Z'
    />
  </svg>
);
export default SvgDiaryAlt;
