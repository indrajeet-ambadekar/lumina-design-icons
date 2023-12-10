import * as React from "react";
const SvgAlignCenterAlt = ({ title, titleId, ...props }) => (
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
      d='M5 8h14a1 1 0 1 0 0-2H5a1 1 0 0 0 0 2Zm16 3H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Zm-2 5H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2Z'
    />
  </svg>
);
export default SvgAlignCenterAlt;
