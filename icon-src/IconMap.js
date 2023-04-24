import * as React from "react";
const SvgIconMap = ({ title, titleId, ...props }) => (
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
      d='M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4ZM16 6v16M8 2v16'
    />
  </svg>
);
export default SvgIconMap;
