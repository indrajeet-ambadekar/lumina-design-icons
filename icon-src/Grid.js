import * as React from "react";
const SvgGrid = ({ title, titleId, ...props }) => (
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
      d='M21 14h-7v7h7zM10 14H3v7h7zM21 3h-7v7h7zM10 3H3v7h7z'
    />
  </svg>
);
export default SvgGrid;
