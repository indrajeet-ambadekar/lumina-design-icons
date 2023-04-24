import * as React from "react";
const SvgIconFlask = ({ title, titleId, ...props }) => (
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
      d='M20.11 17.49 15 8.73V4h1a1 1 0 1 0 0-2H8a1 1 0 0 0 0 2h1v4.73l-5.11 8.76A3 3 0 0 0 6.48 22h11a3 3 0 0 0 2.59-4.51h.04Zm-9.25-8A1 1 0 0 0 11 9V4h2v5c.002.176.05.349.14.5L14 11h-4l.86-1.51Zm7.52 10a1 1 0 0 1-.86.5h-11a1 1 0 0 1-.86-1.5L8.83 13h6.35l3.2 5.5a1 1 0 0 1 0 1v-.01ZM10 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm4 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z'
    />
  </svg>
);
export default SvgIconFlask;
