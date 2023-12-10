import * as React from "react";
const SvgPlayCircleAlt = ({ title, titleId, ...props }) => (
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
      d='m16 10.27-5-2.89a2 2 0 0 0-3 1.73v5.78a2 2 0 0 0 3 1.73l5-2.89a2 2 0 0 0 0-3.46ZM15 12l-5 2.89V9.11L15 12ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20Z'
    />
  </svg>
);
export default SvgPlayCircleAlt;
