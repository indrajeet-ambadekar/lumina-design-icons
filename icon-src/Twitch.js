import * as React from "react";
const SvgTwitch = ({ title, titleId, ...props }) => (
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
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M16 11V7m5-5H3v16h5v4l4-4h5l4-4zm-10 9V7z'
    />
  </svg>
);
export default SvgTwitch;
