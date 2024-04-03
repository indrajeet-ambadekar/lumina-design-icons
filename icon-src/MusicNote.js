import * as React from "react";
const SvgMusicNote = ({ title, titleId, ...props }) => (
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
      d='M19.12 2.21a1 1 0 0 0-.86-.21l-8 2a1 1 0 0 0-.76 1v10.35a3.45 3.45 0 0 0-3.444.24A3.5 3.5 0 1 0 11.5 18.5v-7.72L18.74 9h.07l.19-.15.15-.1a1 1 0 0 0 .13-.15.8.8 0 0 0 .1-.15.582.582 0 0 0 .06-.37.2.2 0 0 0 0-.08V3a1 1 0 0 0-.32-.79M8 20a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m9.5-12.78-6 1.5V5.78l6-1.5z'
    />
  </svg>
);
export default SvgMusicNote;
