import * as React from "react";
const SvgIconPauseAlt = ({ title, titleId, ...props }) => (
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
      d='M16 2a3 3 0 0 0-3 3v14a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Zm1 17a1 1 0 0 1-2 0V5a1 1 0 0 1 2 0v14ZM8 2a3 3 0 0 0-3 3v14a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Zm1 17a1 1 0 1 1-2 0V5a1 1 0 0 1 2 0v14Z'
    />
  </svg>
);
export default SvgIconPauseAlt;
