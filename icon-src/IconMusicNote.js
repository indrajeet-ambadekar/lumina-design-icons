import * as React from "react";
const SvgIconMusicNote = ({ title, titleId, ...props }) => (
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
      d='M19.12 2.21a1 1 0 0 0-.86-.21l-8 2a1 1 0 0 0-.76 1v10.35a3.448 3.448 0 0 0-3.444.24A3.5 3.5 0 1 0 11.5 18.5v-7.72L18.74 9h.07l.19-.15.15-.1a.93.93 0 0 0 .13-.15.78.78 0 0 0 .1-.15.582.582 0 0 0 .06-.37.239.239 0 0 0 0-.08V3a1 1 0 0 0-.32-.79ZM8 20a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm9.5-12.78-6 1.5V5.78l6-1.5v2.94Z'
    />
  </svg>
);
export default SvgIconMusicNote;
