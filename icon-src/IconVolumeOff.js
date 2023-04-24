import * as React from "react";
const SvgIconVolumeOff = ({ title, titleId, ...props }) => (
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
      d='M16.93 4.1a1 1 0 0 0-1 .12L11.15 8H7.5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3.65l4.73 3.78a1 1 0 0 0 .62.22.909.909 0 0 0 .43-.1 1 1 0 0 0 .57-.9V5a1 1 0 0 0-.57-.9ZM15.5 16.92l-3.38-2.7a1 1 0 0 0-.62-.22h-3v-4h3a1 1 0 0 0 .62-.22l3.38-2.7v9.84Z'
    />
  </svg>
);
export default SvgIconVolumeOff;
