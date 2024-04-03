import * as React from "react";
const SvgShuffleAlt = ({ title, titleId, ...props }) => (
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
      d='M3 10a1 1 0 0 0 1-1V5.41L8.56 10A1 1 0 0 0 10 10a1 1 0 0 0 0-1.41L5.41 4H9a1 1 0 0 0 0-2H3a1 1 0 0 0-.38.08 1 1 0 0 0-.54.54A1 1 0 0 0 2 3v6a1 1 0 0 0 1 1m12.3 4a1 1 0 0 0-1.41 1.41l6.27 6.28a1 1 0 0 0 .71.29.998.998 0 0 0 .71-1.71zM9 20H5.41l16.3-16.29a1.004 1.004 0 1 0-1.42-1.42L4 18.59V15a1 1 0 0 0-2 0v6a1 1 0 0 0 .08.38 1 1 0 0 0 .54.54c.12.051.25.078.38.08h6a1 1 0 1 0 0-2'
    />
  </svg>
);
export default SvgShuffleAlt;
