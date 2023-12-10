import * as React from "react";
const SvgCaretRight = ({ title, titleId, ...props }) => (
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
      d='m19.5 11.13-14-8.08a1 1 0 0 0-1.5.87v16.16a1 1 0 0 0 1.5.87l14-8.08a1 1 0 0 0 0-1.74ZM6 18.35V5.65L17 12 6 18.35Z'
    />
  </svg>
);
export default SvgCaretRight;
