import * as React from "react";
const SvgAlignCenterJustify = ({ title, titleId, ...props }) => (
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
      d='M21 15H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2M3 5h18a1 1 0 1 0 0-2H3a1 1 0 0 0 0 2m14 14H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2m4-12H3a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2m0 4H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2'
    />
  </svg>
);
export default SvgAlignCenterJustify;
