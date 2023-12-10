import * as React from "react";
const SvgLink2 = ({ title, titleId, ...props }) => (
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
      d='M15 7h3a5 5 0 1 1 0 10h-3m-6 0H6A5 5 0 1 1 6 7h3M8 12h8'
    />
  </svg>
);
export default SvgLink2;
