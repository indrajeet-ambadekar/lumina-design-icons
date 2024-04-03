import * as React from "react";
const SvgVerticalDistributeBottom = ({ title, titleId, ...props }) => (
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
      d='M21 18h-1v-5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v5H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2m-3 0H6v-4h12zM3 10h18a1 1 0 1 0 0-2h-2V5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3H3a1 1 0 0 0 0 2m4-4h10v2H7z'
    />
  </svg>
);
export default SvgVerticalDistributeBottom;
