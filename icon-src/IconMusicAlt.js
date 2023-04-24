import * as React from "react";
const SvgIconMusicAlt = ({ title, titleId, ...props }) => (
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
      d='M21.65 2.24a1 1 0 0 0-.8-.23l-13 2A1 1 0 0 0 7 5v10.35a3.451 3.451 0 0 0-3.444.24A3.5 3.5 0 1 0 9 18.5v-7.64l11-1.69v4.18a3.451 3.451 0 0 0-3.445.24A3.5 3.5 0 1 0 22 16.5V3a1 1 0 0 0-.35-.76ZM5.5 20a1.5 1.5 0 1 1 0-2.999A1.5 1.5 0 0 1 5.5 20Zm13-2a1.5 1.5 0 1 1 0-2.999 1.5 1.5 0 0 1 0 2.999ZM20 7.14 9 8.83v-3l11-1.66v2.97Z'
    />
  </svg>
);
export default SvgIconMusicAlt;
