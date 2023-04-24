import * as React from "react";
const SvgIconMove = ({ title, titleId, ...props }) => (
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
      d='m15 19-3 3-3-3M19 9l3 3-3 3M5 9l-3 3 3 3M2 12h20M9 5l3-3 3 3M12 2v20'
    />
  </svg>
);
export default SvgIconMove;
