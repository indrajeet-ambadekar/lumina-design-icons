import * as React from "react";
const SvgListUiAlt = ({ title, titleId, ...props }) => (
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
      d='M3.5 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4 2h14a1 1 0 1 0 0-2h-14a1 1 0 0 0 0 2m0 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m10-5h-10a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2m0 5h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2'
    />
  </svg>
);
export default SvgListUiAlt;
