import * as React from "react";
const SvgIconAlignCenterLean = ({ title, titleId, ...props }) => (
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
      d='M3 7h18a1 1 0 1 0 0-2H3a1 1 0 0 0 0 2Zm4 2a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2H7Zm14 4H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Zm-4 4H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Z'
    />
  </svg>
);
export default SvgIconAlignCenterLean;
